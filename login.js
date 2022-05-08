function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "ceo" && password == "ceo"){
        
        window.location.href="ceo_files/ceohome.html";
    }else if(username == "sm" && password == "sm"){
        window.location.href="sm_files/sm_home.html";
    } else {
        alert("Login Failed");
    }
}