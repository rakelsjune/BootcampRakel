function clickById(){
    var name = document.getElementById("idName").value;
    var role = document.getElementById("idRole").value;
    var availability = document.getElementById("idAvailability").value;
    var age = document.getElementById("idAge").value;
    var location = document.getElementById("idLocation").value;
    var experience = document.getElementById("idExperience").value;
    var email = document.getElementById("idEmail").value;
    
    document.getElementById("pName").innerHTML = name;
    document.getElementById("pRole").innerHTML = role;
    document.getElementById("pAvailability").innerHTML = availability;
    document.getElementById("pAge").innerHTML = age;
    document.getElementById("pLocation").innerHTML = location;
    document.getElementById("pExperience").innerHTML = experience;
    document.getElementById("pEmail").innerHTML = email;

    document.getElementById("idName").value="";
    document.getElementById("idRole").value="";
    document.getElementById("idAvailability").value="";
    document.getElementById("idAge").value="";
    document.getElementById("idLocation").value="";
    document.getElementById("idExperience").value="";
    document.getElementById("idEmail").value="";
}