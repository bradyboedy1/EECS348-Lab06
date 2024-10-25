function validate() {
    
    //Collects input values from users and assings them
    const password1 = document.getElementById("pass1").value;
    const password2 = document.getElementById("pass2").value;

    //Checks to make sure the passworods are both at least 8 characters long
    if (password1.length < 8 || password2.length < 8) {
        alert("Your password must be at least 8 characters long!");
        return;
    }

    //Makes sure passwords are the same
    if (password1 !== password2) {
        alert("Two passwords don't match!");
        return;
    }

    //Tell the user if the passwords match
    alert("Everything is good!");
}

