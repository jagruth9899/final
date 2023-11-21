
function validation() {
   
    document.getElementById("register").innerHTML = "";


    if (document.Formfill.Username.value === "") {
        document.getElementById("register").innerHTML = "Enter Username*";
        return false;
    } else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("register").innerHTML = "At least six letters for the username";
        return false;
    }


    else if (document.Formfill.Email.value === "") {
        document.getElementById("register").innerHTML = "Enter your Email";
        return false;
    }


    else if (document.Formfill.Password.value === "") {
        document.getElementById("register").innerHTML = "Enter your Password";
        return false;
    }

 
    else if (!/[A-Z]/.test(document.Formfill.Password.value)) {
        document.getElementById("register").innerHTML = "Password must contain at least one capital letter";
        return false;
    }


    else if (document.Formfill.CPassword.value === "") {
        document.getElementById("register").innerHTML = "Enter Confirm Password";
        return false;
    }


    else if (document.Formfill.Password.value !== document.Formfill.CPassword.value) {
        document.getElementById("register").innerHTML = "Passwords do not match";
        return false;
    }

 
    else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("register").innerHTML = "Password must be at least 6 characters";
        return false;
    }

    
    popup.classList.add("open-slide");
    return false;
}

var popup = document.getElementById('popup');

function CloseSlide() {
    popup.classList.remove("open-slide");
}
function loginValidation() {
    var username = document.Formfill.Email.value; // Assuming the email is used as a username
    var password = document.Formfill.Password.value;

    if (username === "") {
        document.getElementById("register").innerHTML = "Enter Username*";
        return false;
    } else if (password === "") {
        document.getElementById("register").innerHTML = "Enter your Password*";
        return false;
    }

    // Redirect to successlogin.html
    window.location.href = "successlogin.html";
    return false; 
}
