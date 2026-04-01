// users ko localStorage se lo (agar hai)
var users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
    var nam = document.getElementById("nam").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    users.push({
        name: nam,
        email: email,
        password: pass
    });

    // save in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("signup success");
}

function login() {
    var lEmail = document.getElementById("lEmail").value;
    var lPass = document.getElementById("lPass").value;

    var user = users.find(s =>
        s.email === lEmail && s.password === lPass
    );

    if (user) {
        alert("login success");
        localStorage.setItem("isLogin", "true");
        window.location.href = "quiz/index.html";
    } else {
        alert("invalid email or password");
    }
    
    var exists = users.find(u => u.email === email);
    if (exists) {
        alert("Email already exists");
        return;
    }
}