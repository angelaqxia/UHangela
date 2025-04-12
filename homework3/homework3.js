/*
    Name: Angela Xia
    Date created: 3/19/2025 
    Date last edited: 4/12/2025
    Description: Homework 3 JS Form
*/

//today's date
const d = new Date(); 
let text = d.toLocaleDateString();
document.getElementById("todaydate").innerHTML = text;

//slider//
let slider = document.getElementById("slider")
    let output = document.getElementById("range_slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//validate firstname
function validateFirstName() {
    firstname = document.getElementById("firstname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if (firstname == "") {
        document.getElementById("firstname-error").innerHTML = 
        "First name field cannot be empty.";
        return false;
    } else if (!firstname.match(namePattern)) {
        document.getElementById("firstname-error").innerHTML = 
        "Letters, apostrophes, and dashes only.";
        return false;
    } else if (firstname.length < 1) {
        document.getElementById("firstname-error").innerHTML = 
        "First name has have at least 1 or character.";
        return false;
    } else if (firstname.length > 30) {
        document.getElementById("firstname-error").innerHTML = 
        "First name cannot be more than 30 characters."
        return false;
    } else {
        document.getElementById("firstname-error").innerHTML = "";
        return true;
    }
}

//validate middleinitial
function validateMiddleInitial() {
    let middleinitial = document.getElementById("middleinitial").value;
    const namePattern = /^[A-Z]+$/;

    middleinitial = middleinitial.toUpperCase();
    document.getElementById("middleinitial").value = middleinitial;

    if (!middleinitial.match(namePattern)) {
        document.getElementById("middleinitial-error").innerHTML = 
        "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("middleinitial-error").innerHTML = "";
        return true;
    }
}

//validate lastname
function validateLastName() {
    lastname = document.getElementById("lastname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if (lastname == "") {
        document.getElementById("lastname-error").innerHTML = 
        "Last name field cannot be empty.";
        return false
    } else if (lastname != "") {
        if (!lastname.match(namePattern)) {
        document.getElementById("lastname-error").innerHTML = 
        "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lastname.length < 2) {
        document.getElementById("lastname-error").innerHTML = 
        "Last name cannot be less than 2 characters.";
        return false;
    } else if (lastname.length > 30) {
        document.getElementById("lastname-error").innerHTML = 
        "Last name cannot be more than 30 characters."
        return false;
    } else {
        document.getElementById("lastname-error").innerHTML = "";
        return true;
    }
}
}

//validate birthday
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120)

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be in the future.";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be more than 120 years ago.";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//validate ssn
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//validate address
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1)
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML =
        "Please enter something on address line.";
        return false
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

//validate city
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = 
        "City cannot be blank.";
        return false
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//validate zip code
function validateZipcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = 
        "Zip code cannot be blank.";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}

//validate email
function validateEmail() {
    email = document.getElementById("emailaddress").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById("email-error").innerHTML =
        "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)){
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address."
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//validate phone number 
function validatePhonenumber() {
    const phoneInput = document.getElementById("phonenumber");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non-numbers

    if (phone.length == 0) {
        document.getElementById("phonenumber-error").innerHTML =
        "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice (6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phonenumber-error").innerHTML = "";
    return true
}

//validate user id
function validateUserid() {
    userid = document.getElementById("userid").value;
    userid = userid.toLowerCase();
    document.getElementById("userid").value = userid;

    if (userid.length == 0) {
        document.getElementById("userid-error").innerHTML = 
        "User ID cannot be blank.";
        return false;
    }

    if (!isNaN(userid.charAt(0))) {
        document.getElementById("userid-error").innerHTML = 
        "User ID cannot start with a number.";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(userid)) {
        document.getElementById("userid-error").innerHTML = 
        "User ID can only have letters, numbers, or underscores.";
        return false;
    } else if (userid.length < 5) {
        document.getElementById("userid-error").innerHTML = 
        "User ID must be at least 5 characters.";
        return false;
    } else if (userid.length > 30) {
        document.getElementById("userid-error").innerHTML = 
        "User ID cannot exceed 30 characters.";
        return false;
    } else {
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
}

//validate password
function validatePassword() {
    let password = document.getElementById("password").value;
    let errorElement = document.getElementById("password-error");
    let uid = "TestUser";
    let errorMessage = [];

    if (!password.match(/[a-z]/)) 
        errorMessage.push("Enter at least one lowercase letter.");
    if (!password.match(/[A-Z]/)) 
        errorMessage.push("Enter at least one uppercase letter.");
    if (!password.match(/[0-9]/)) 
        errorMessage.push("Enter at least one number.");
    if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) 
        errorMessage.push("Enter at least one special character.");
    if (password.includes(uid)) 
        errorMessage.push("Password cannot contain user ID.");
    if (password.length < 8) 
        errorMessage.push("Password must be at least 8 characters long.");

    if (errorMessage.length > 0) {
        errorElement.innerHTML = errorMessage.join("<br>");
        return false;
    } else {
        errorElement.innerHTML = "";
        return true;
    }
}

//validate confirmpassword
function confirmPassword() {
    pword1 = document.getElementById("password").value;
    pword2 = document.getElementById("confirmpassword").value;

    if (pword1 !== pword2) {
        document.getElementById("password2-error").innerHTML = 
        "Passwords do not match.";
        return false;
    } else {
        document.getElementById("password2-error").innerHTML = 
        "Passwords match.";
        return true;
    }
}

//review button - redisplay all user information
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan = '3'> Review Your Information:</th></tr>";

    var fieldLabels = {
        "firstname": "First Name",
        "middleinitial": "Middle Initial",
        "lastname": "Last Name",
        "gender": "Gender",
        "dob": "Date of Birth",
        "ssn": "Social Security Number",
        "address1": "Address",
        "address2": "Address Continued",
        "city": "City",
        "state": "State",
        "zipcode": "Zip Code",
        "emailaddress": "Email Address",
        "phonenumber": "Phone Number",
        "symptom1": "Fever",
        "symptom2": "Shortness of Breath",
        "symptom3": "Cough",
        "symptom4": "Sore Throat",
        "symptom5": "Runny Nose",
        "symptom6": "Itchy Eyes",
        "textbox": "Symptom Details",
        "slider": "Health Rating",
        "userid": "User ID",
        "password": "Password",
        "confirmpassword": "Confirm Password"
    };


    for (let i = 0; i < formcontent.length; i++) {
        var element = formcontent.elements[i];
        var label = fieldLabels[element.name] || element.name;

        switch (element.type) {
            case "checkbox":
                if (element.checked) {
                    formoutput += `<tr><td align='right'>${label}:</td><td>&#x2713;</td></tr>`;
                }
                break;

            case "radio":
                if (element.checked) {
                    formoutput += `<tr><td align='right'>${label}:</td><td>${element.value}</td></tr>`;
                }
                 break;
                
             case "textarea":
                if (element.value.trim() !== "") {
                    formoutput += `<tr><td align='right'>${label}:</td><td>${element.value}</td></tr>`;
                }
                break;
        
             case "range":
                formoutput += `<tr><td align='right'>${label}:</td><td>${element.value}/10</td></tr>`;
                break;
        
            case "button":
            case "submit":
            case "reset":
                break; 
                    
                default:
                if (element.value.trim() !== "") {
                    formoutput += `<tr><td align='right'>${label}:</td><td>${element.value}</td></tr>`;
                }
                break;
            }
        }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//alert box
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//validate button
function validateEverything() {
    let valid = true;

    if (!validateFirstName()) {
        valid = false; 
    }
    if (!validateMiddleInitial()) {
        valid = false;
    }
    if (!validateLastName()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false
    }
    if (!validateSsn()) {
        valid = false
    }
    if (!validateAddress1()) {
        valid = false
    }
    if (!validateCity()) {
        valid = false
    }
    if (!validateZipcode()) {
        valid = false
    }
    if (!validateEmail()) {
        valid = false
    }
    if (!validatePhonenumber()) {
        valid = false
    }
    if (!validateUserid()) {
        valid = false
    }
    if (!validatePassword()) {
        valid = false
    }
    if (!confirmPassword()) {
        valid = false
    }
    if (valid) {
        document.getElementById("submit").disabled = false;
        showGoodAlert();
    } else {
        showAlert();
    }
}
