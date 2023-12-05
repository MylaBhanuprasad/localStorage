
document.getElementById('signup').addEventListener('click',addToLocalStorage);

function addToLocalStorage(){
    var uname=document.getElementById('name').value;
    var Email=document.getElementById('email').value;
    let myobj={
       username:uname,
       email:Email
    }
    var myobj_serialised=JSON.stringify(myobj)
    localStorage.setItem('myobj',myobj_serialised);
}