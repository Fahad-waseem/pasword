function login(){
var unanme =document.getElementById('username').value;
var pass =document.getElementById('password').value;

if (unanme=="Fahad" && pass=="123")
{
    location.assign("file:///C:/Users/major%20saab/Desktop/contacts/page.html")
}else{
window.alert("login failed");
}

}