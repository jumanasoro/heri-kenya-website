<?php
// Receives the website's forms and emails each submission to HERI.
// Runs on Hostinger's PHP; the rest of the site is static HTML.
declare(strict_types=1);

const TO_ADDRESS = 'info@heri-kenya.org';
// Hostinger only sends mail "from" a mailbox that exists on the domain.
const FROM_ADDRESS = 'info@heri-kenya.org';
const MAX_PER_HOUR = 5;

// Each form and the fields it may send. Anything else is ignored.
const FORMS = [
    'contact' => ['subject' => 'Website message', 'fields' => ['name', 'email', 'phone', 'message']],
    'get-involved' => ['subject' => 'Get involved', 'fields' => ['name', 'email', 'phone', 'interest', 'organisation', 'message']],
    'partnership' => ['subject' => 'Partnership enquiry', 'fields' => ['name', 'email', 'phone', 'organisation', 'interest', 'message']],
    'learn-interest' => ['subject' => 'Learning platform sign-up', 'fields' => ['name', 'email', 'topics', 'language']],
    'newsletter' => ['subject' => 'Newsletter sign-up', 'fields' => ['name', 'email']],
];

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function respond(bool $ok, string $message, int $status, bool $json): never
{
    http_response_code($status);
    if ($json) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'message' => $message]);
    } else {
        header('Location: ' . ($ok ? '/thank-you/' : '/contact-us/?error=1'), true, 303);
    }
    exit;
}

function clean(string $value, int $max): string
{
    $value = trim(str_replace("\0", '', $value));
    return mb_substr($value, 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'Method not allowed.', 405, $wantsJson);
}

$formId = (string) ($_POST['form'] ?? '');
if (!isset(FORMS[$formId])) {
    respond(false, 'Unknown form.', 400, $wantsJson);
}

// Spam checks: a hidden field people never see, and submissions faster than a human could type.
if (!empty($_POST['website'])) {
    respond(true, 'Thank you!', 200, $wantsJson);
}
$startedAt = (int) ($_POST['t'] ?? 0);
if ($startedAt > 0 && (time() * 1000 - $startedAt) < 3000) {
    respond(false, 'That was very quick — please try again.', 429, $wantsJson);
}

// Simple per-visitor rate limit, stored in the server's temp folder.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/heri-form-' . hash('sha256', $ip) . '.json';
$recent = [];
if (is_file($rateFile)) {
    $recent = array_filter(
        json_decode((string) file_get_contents($rateFile), true) ?: [],
        fn($ts) => is_int($ts) && $ts > time() - 3600
    );
}
if (count($recent) >= MAX_PER_HOUR) {
    respond(false, 'Too many messages from this connection. Please email us directly.', 429, $wantsJson);
}

$values = [];
foreach (FORMS[$formId]['fields'] as $field) {
    $raw = $_POST[$field] ?? '';
    if (is_array($raw)) {
        $raw = implode(', ', array_map(fn($v) => clean((string) $v, 100), $raw));
    }
    $values[$field] = clean((string) $raw, $field === 'message' ? 5000 : 200);
}

$email = filter_var($values['email'] ?? '', FILTER_VALIDATE_EMAIL);
if (($values['name'] ?? '') === '' || $email === false) {
    respond(false, 'Please give your name and a valid email address.', 422, $wantsJson);
}
if ($formId === 'contact' && ($values['message'] ?? '') === '') {
    respond(false, 'Please write a message.', 422, $wantsJson);
}

$lines = [];
foreach ($values as $field => $value) {
    if ($value !== '') {
        $lines[] = ucfirst($field) . ': ' . $value;
    }
}
$lines[] = '';
$lines[] = 'Sent from the heri-kenya.org ' . $formId . ' form on ' . gmdate('Y-m-d H:i') . ' UTC.';

// Only fixed text and a validated email address go into the headers.
$headers = implode("\r\n", [
    'From: HERI-Kenya website <' . FROM_ADDRESS . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: heri-kenya.org',
]);
$subject = mb_encode_mimeheader('[HERI website] ' . FORMS[$formId]['subject'], 'UTF-8');

if (!mail(TO_ADDRESS, $subject, implode("\n", $lines), $headers)) {
    respond(false, 'Sorry, your message could not be sent. Please email ' . TO_ADDRESS . '.', 500, $wantsJson);
}

$recent[] = time();
@file_put_contents($rateFile, json_encode(array_values($recent)), LOCK_EX);

respond(true, 'Thank you! We have received your message and will reply soon.', 200, $wantsJson);
