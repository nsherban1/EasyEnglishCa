<?php       
    echo "This msg is sent from PHP file"
    $fullname = $_POST['fullname']
    $emailad = $_POST['emailad']
    $subject = $_POST['subject']

    if(!empty($emailad)&&!empty($subject)){

    }else {
        echo "Email and name fields are required!";
    }
?>