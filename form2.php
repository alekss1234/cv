
<?php  
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$Message = $_POST['Message'];


$connection = new mysqli('localhost','root','','elearning');   
if($connection -> connect_error){
    die('Unsuccessfully connection: '.$connection -> connect_error);
   

}else{
    $query = $connection  -> prepare("INSERT INTO form2(name,email,subject,Message) VALUES(?,?,?,?) ");
    $query -> bind_param("ssss",$name,$email,$subject,$Message );
    $query -> execute();
    echo "Form completed successfully";
    $query -> close();
    $connection  -> close();
}

?>