var total = 0;

function register() {
    var name = document.getElementById("name").value;
    document.getElementById("nameError").innerHTML = "";

    var id = document.getElementById("studentId").value;
    document.getElementById("idError").innerHTML = "";
    
    var age = document.getElementById("age").value;
    document.getElementById("ageError").innerHTML = "";

    if (name == ""){
        document.getElementById("nameError").innerHTML = "Name is required";
        return false;
    }

    if (id == ""){
        document.getElementById("idError").innerHTML = "ID is required";
        return false;
    }
    if (age == ""){
        document.getElementById("ageError").innerHTML = "Age is required";
        return false;
    }
    if (age <= 0){
        document.getElementById("ageError").innerHTML = "Age must be greater than 0";
        return false;
    }

    total = total + 1;
    document.getElementById("count").value = total;

    document.getElementById("name").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("age").value = "";

    return false;
}