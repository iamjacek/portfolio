<?php

// target email
$target_email = "iamjacek@icloud.com";

//submit feedback will always redirect to one of this pages
$feedback_page = "../../pages/index.js";
$error_page = "error_message.html";
$thankyou_page = "thank_you.html";

//prepare a message
$email_address = $_REQUEST['email'] ;
$comments = $_REQUEST['message'] ;
$first_name = $_REQUEST['name'] ;
$msg = 
"First Name: " . $first_name . "\r\n" . 
"Email: " . $email_address . "\r\n" . 
"Message: " . $comments ;

/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// If the user tries to access this script directly, redirect them to the feedback form,
if (!isset($_REQUEST['email'])) {
    header( "Location: $feedback_page" );
}

// If the form fields are empty, redirect to the error page.
elseif (empty($first_name) || empty($email_address)) {
    header( "Location: $error_page" );
}

    /* 
If email injection is detected, redirect to the error page.
If you add a form field, you should add it here.
*/
elseif ( isInjected($email_address) || isInjected($first_name)  || isInjected($comments) ) {
    header( "Location: $error_page" );
}

// If we passed all previous tests, send the email then redirect to the thank you page.
else {

	mail( "$target_email", "Customer Message", $msg );

	header( "Location: $thankyou_page" );
}
?>