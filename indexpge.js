
document.getElementById('signup').addEventListener('click',addToLocalStorage);
function addToLocalStorage(){
    var uname=document.getElementById('name').value;
    var Email=document.getElementById('email').value;
    localStorage.setItem('name',uname);
    localStorage.setItem('email',Email);
}