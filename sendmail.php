<?php 
//error_reporting(E_ALL);
//print_r($_POST);
	// от роботов, которые заполняют все поля, данное поле не должно быть заполнено
	if(
		!((isset($_POST['name']) && !empty($_POST['name']))
	    && (isset($_POST['email']) && !empty($_POST['email']))
	    && (isset($_POST['phone']) && !empty($_POST['phone']))
	    && (isset($_POST['text']) && !empty($_POST['text']))
	)){
		//return ['status'=>0,'info'=>'no data'];
		echo "Message could not be sent...";
	}
	// кому отправка. Можно указывать несколько получателей через запятую
	$subject = 'Back Call Bictory';//$_POST['subject'];
	$msg =  '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
					<p>User is waitng for answer.</p>
                    <p>Name: '.$_POST['name'].'</p>
                    <p>Surname: '.$_POST['surname'].'</p>
                    <p>Email: '.$_POST['email'].'</p>
                    <p>Text: '.$_POST['text'].'</p>
                </body>
            </html>';
	$msg .= '<p>' .$_POST['msg'] .'</p>';
	
	$header = "From:marketing@bictory.io \r\n";
	$header .= "Cc:marketing@bictory.io \r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html\r\n";

	$retval = mail ($to,$subject,$message,$header);
         
	if( $retval == true ) {
		echo "Message sent successfully...";
		session_start();	
		$_SESSION['send'] = 1;
	}else {
		echo "Message could not be sent...";
		session_start();	
		$_SESSION['send'] = 0;
	}
?>