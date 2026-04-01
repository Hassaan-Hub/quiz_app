var users = [];

function signUp(){
    var nam = document.getElementById("nam").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    
    users.push({
        name: nam,
        email: email,
        password: pass
    })
    alert("signup success")
}

function login(){
    var lEmail = document.getElementById("lEmail");
    var lPass = document.getElementById("lPass");
    
    var user = users.find(s => 
        s.email === lEmail.value && s.password === lPass.value
    )
    if(user){
        alert("login success")
        window.location.href = "index.html"
    }else{
        alert("invalid email or password")
    }
}
