function checkFields(inputId,errorid) {

    var fieldId = document.getElementById(inputId).value;
    if(fieldId == "") {
        document.getElementById(errorid).innerHTML="Field is Empty !!";
    }
    else {
        document.getElementById(errorid).innerHTML="";
    }
}

function checkName(event,err) {

    if(!((event.which>=65 && event.which<=90) || (event.which>=97 && event.which<=122) || event.which==0 || event.which==8)) {
        document.getElementById(err).innerHTML="Invalid Name Format !!";
        return false;
    }
}

function checkEmail() {

    var email = document.getElementById("e").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
   
    if(atpos<4 || dotpos<atpos+3) {
        document.getElementById("error2").innerHTML="Invalid Email !!";
    }
    else {
        document.getElementById("error2").innerHTML="";
    }
}