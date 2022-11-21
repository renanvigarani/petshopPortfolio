
var captcha, chars;

function genNewCaptcha (){
  
  chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    captcha = chars[Math.floor(Math.random() * chars.length )];
    for(var i=0; i<6; i++){
      captcha = captcha + chars[Math.floor(Math.random() * chars.length )];
    }
    form1.text.value = captcha;
  }
  genNewCaptcha()

function checkCaptcha(){
  var check = document.getElementById("CaptchaEnter").value;
  if(captcha == check){
    
    return true
  }
  Swal.fire({
    icon: 'error',
    title: 'Captcha Incorreto.',
    text: 'Tente novamente, preste atenção nas letras maiusculas e minusculas',
  })
    document.getElementById("CaptchaEnter").value = "";
    return false
  

  
}
function logar(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    

    if(usuario =="admin" && senha =="admin"){
        if (checkCaptcha()){
          location.href = "Petshop.html";
        }
        
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Credenciais Incorretas',
        text: 'A senha ou usuário está incorreto',
      })
    }
}






  


  