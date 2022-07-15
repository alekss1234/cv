
  <?php 
  include 'config.php';
 
  if(isset($_POST['submit'])){

   $name =mysqli_real_escape_string($conn, $_POST['name']);
   $email  =mysqli_real_escape_string($conn, $_POST['email']);
   $pass = md5($_POST['password']);
   $cpass = md5($_POST['cpassword']);
   $user_type = ($_POST['user_type']);

   $select = "Select * FROM user_form WHERE email = '$email' && password = '$pass' ";

   $result = mysqli_query($conn, $select);

   if(mysqli_num_rows($result)>0){
     $error[] = 'user already exist';
    
    }

   else{
     if($pass!=$cpass){
       $error[] = 'password not matched';

     }

     else{
       $insert = "INSERT INTO user_form(name,email,password,user_type) VALUES('$name','$email','$pass','$user_type')";
       mysqli_query($conn, $insert);
       header('location:login.php');
     }
   }
 
 
 }; ?>





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,100;1,300;1,400;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="styleRegister.css" />

    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,300&display=swap"
      rel="stylesheet"
    />

    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <title>Edukim per femije</title>
  </head>
  <body>
  

    <div class="form-container">
      <form action="" method="post">
      

        <h3>regjistrohu tani</h3>

        <?php 
        if(isset($error)){

          foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span> ' ;
            }; }; ?>

        <input type="text" name="name" required placeholder="jepni emrin" />
        <input type="email" name="email" required placeholder="jepni emailin" />
        <input
          type="password"
          name="password"
          required
          placeholder="jepni passwordin"
        />
        <input
          type="password"
          name="cpassword"
          required
          placeholder="konfirmoni passwordin"
        />
        <select name="user_type" id="">
          <option value="user">user</option>
          
        </select>

        <input
          type="submit"
          name="submit"
          value="register now"
          class="form-btn"
        />
        <p>Ju sapo krijuat nje account <a href="login.php"> login now </a></p>
      </form>
    </div>
  </body>
</html>
