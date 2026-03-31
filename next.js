var users = [];

function signUp(){
    var nam = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    
    users.push({
        name: nam,
        email: email,
        password: pass
    })
    alert("signup success")
}