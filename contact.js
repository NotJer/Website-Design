function name(){
    let validName=false;
    let name = document.getElementById("Name").value;
    let errorMessages = "";
    if (name==="null" || name==="") {
        errorMessages += "<p>Name is required.</p>";
        } else if (name.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Name has invalid characters</p>";
        } else {
                validName = true;
        };
    document.getElementById("errorMessage").innerHTML = errorMessages;
    return (validName);
}
function email(){
    let validUsername=false;
    let userEmail = document.getElementById("Email").value;
    let errorMessages = "";
    let atpos = userEmail.indexOf("@");
    let dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
       errorMessages += "<p>Invalid email.</p>";
    }
    else
       return true;
    document.getElementById("errorMessage").innerHTML = errorMessages;
}
function comments(){
    let validComments=false;
    let comments = document.getElementById("Comments").value;
    let errorMessages = "";
    if (comments==="null" || comments==="") {
        errorMessages += "<p>Comments are required.</p>";
    }
    else {
        return true
    }
    document.getElementById("errorMessage").innerHTML = errorMessages;
}
function validateForm() {
if (!name() || !email() || !comments() || !test()){
    return errorMessages.length === 0;
}
else
    return false;
}
