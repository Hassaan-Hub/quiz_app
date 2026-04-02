// users ko localStorage se lo (agar hai)
var users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
    var nam = document.getElementById("nam").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passPattern.test(pass)) {
        alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        return;
    }else{
        alert("signup success");
    }
    users.push({
        name: nam,
        email: email,
        password: pass
    });

    // save in localStorage
    localStorage.setItem("users", JSON.stringify(users));

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
        window.location.href = "quiz/quiz.html";
    } else {
        alert("invalid email or password");
    }

    var exists = users.find(u => u.email === email);
    if (exists) {
        alert("Email already exists");
        return;
    }
}