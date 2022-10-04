function validateMessage(){
    var form = document.forms['last'];

    if(form['name'].value == ""){
        alert("name is not written");
        return false;
    }
    else if(form['phone'].value == ""){
        alert("phone is not written");
        return false;
    }
    else if(form['Email'].value == ""){
        alert("email address is not written");
        return false;
    }
}