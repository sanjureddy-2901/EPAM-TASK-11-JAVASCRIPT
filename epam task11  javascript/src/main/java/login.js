var attemptLeft = 5;

function checkUserIdPassword(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ( username == "Admin" && password == "Admin123") {
        alert ("Login successfully");
        return false;
    }
    else {
        attemptLeft --;
        alert("You have left "+attemptLeft+" attempts;");
    
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}