document.addEventListener('DOMContentLoaded', function () {

document.getElementById("submit").addEventListener("click",()=>{
let refLink=document.getElementById("reflink").value;
if(refLink){
    let userName=refLink.split('.')[0].split('//')[1];
    alert(userName);
    if(CheckLoginState()){
        alert("Authenticated");

    }



}




})
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1176250273211663',
      cookie     : true,
      xfbml      : true,
      version    : '14.0'
    });
      
    // FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

 function CheckLoginState() {
    FB.getLoginStatus(function(response) {
       return statusChangeCallback(response);
      });
 }
 function statusChangeCallback(response) {
    if(response.status==='connected'){
        return "Authenticated with Facebook";

    }
    else{
        return "";
    }
    
 }  
})