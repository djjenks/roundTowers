$('#send-feedback').live("click", function() {
	var url = 'http://localhost/aras_v1/api/send.php';
	var error = 0;
	var $contactpage = $(this).closest('.ui-page');
	var $contactform = $(this).closest('.contact-form');
	
	$.mobile.showPageLoadingMsg("a", "Sending Message...");
	//$('.required', $contactform).each(function (i) {
    //    if ($(this).val() === '') {
	//		error++;
      //  } 
	//}); // each
	//if (error > 0) {
	//		alert('Please fill in all the mandatory fields. Mandatory fields are marked with an asterisk *.');	
	//} else {
		var firstname = $contactform.find('input[name="firstname"]').val();
		
		
		var mobilephone = $contactform.find('input[name="mobilephone"]').val();
		var email = $contactform.find('input[name="email"]').val();	
		var message = $contactform.find('input[name="message"]').val();	

		//submit the form
		$.ajax({
			type: "GET",
			url: url,
			data: {firstname:firstname, mobilephone: mobilephone, email: email, message: message},
            success: function (data) {
				 console.log(data);           
            
				if (data == 'success') {
					// show thank you 
					$.mobile.hidePageLoadingMsg("a", "Sending Message...");
					//$contactpage.find('.contact-thankyou').show();
					$('#myPopupDiv').popup("open");
					//$contactpage.find('.contact-form').hide();
				}  else {
					alert('Unable to send your message. Please try again.');
				}
			}
		}); //$.ajax

	//}
	return false;
});
