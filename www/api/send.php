<?php 
header('content-type: application/json; charset=utf-8');

if (isset($_GET["firstname"])) {
	$firstname = strip_tags($_GET['firstname']);
	$email = strip_tags($_GET['email']);
	$mobilephone = strip_tags($_GET['mobilephone']);
	
	$message1 = strip_tags($_GET['message']);
	//$header = "From: ". $firstname . " <" . $email . ">rn"; 

	$ip = $_SERVER['REMOTE_ADDR']; 
	$httpref = $_SERVER['HTTP_REFERER']; 
	$httpagent = $_SERVER['HTTP_USER_AGENT']; 
	$today = date("F j, Y, g:i a");    
	
	$recipient = 'david.jenkins@webelevate.ie';
	$subject = 'Contact Form';
	$mailbody = "
First Name: $firstname 

Email: $email 
Mobile Phone: $mobilephone 

Message: $message

IP: $ip
Browser info: $httpagent
Referral: $httpref
Sent: $today
";
	$result = 'success';

	$from_add = $firstname; 
	$to_add = "david.jenkins@webelevate.ie"; //<-- put your yahoo/gmail email address here
	$subject = "Venue Query";
	$message = "Email: ".$email."\r\n";
	$message .= "Mobile: ".$mobilephone."\r\n";
	$message .= "Query: ".$message1;
	$header = "From: ". $firstname . " <" . $email . ">\r\n"; 		
	$headers = "From: $from_add \r\n";
	$headers .= "Reply-To: $from_add \r\n";
	$headers .= "Return-Path: $from_add\r\n";
	$headers .= "X-Mailer: PHP \r\n";
	
	if (mail($recipient, $subject, $mailbody, $header)) {
		echo json_encode($result);
		$result = 'success';
		}
	
	if(mail($to_add,$subject,$message,$header)) 
	{
		echo json_encode($result);
	} 
}
?>


