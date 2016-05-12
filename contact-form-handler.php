 <?php
                    $myemail = 'kmlkalicki@gmail.com';

                    $name = $_POST['name']; 
                    $email = $_POST['email']; 
                    $phone = $_POST['phone']; 
                    $topic = $_POST['topic']; 
                    $message = $_POST['textarea']; 


                    $to = $myemail;

                    $email_subject = "Contact form submission: $name";

                    $email_body =   "Otrzymałeś nową wiadomość:\n Name: $name \n ".
                    
                    " Topic: $topic \n".
                        
                    " Phone: $phone \n".

                    " Message: \n $message";

                    $headers = "From: $myemail\n";

                    $headers .= "Reply-To: $email";

                    mail($to,$email_subject,$email_body,$headers);

                    //redirect to the 'thank you' page

                    header('Location: contact-form-thank-you.html');

                    ?>
                    