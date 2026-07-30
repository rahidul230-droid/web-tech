function register(){

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const studentId = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;


    let hasFirstNameError = true;
    let hasLastNameError = true;
    let hasStudentIdError = true;
    let hasEmailError = true;
    let hasCreditError = true;
    let hasDepartmentError = true;


    if(!firstName){
        document.getElementById("firstNameError").innerHTML ="First name can not be empty";
        hasFirstNameError = true;

    } else{
        document.getElementById("firstNameError").innerHTML = "";
        hasFirstNameError = false;

    }


    if(!lastName){
        document.getElementById("lastNameError").innerHTML ="Last name can not be empty";
        hasLastNameError = true;

    } else{
        document.getElementById("lastNameError").innerHTML = "";
        hasLastNameError = false;

    }


    if(!studentId){
        document.getElementById("studentIdError").innerHTML ="Student ID is required";
        hasStudentIdError = true;

    }else if(!studentId.includes("-")){
        document.getElementById("studentIdError").innerHTML ="Student ID must contain -";
        hasStudentIdError = true;

    } else{
        document.getElementById("studentIdError").innerHTML = "";
        hasStudentIdError = false;

    }


    if(!email){
        document.getElementById("emailError").innerHTML ="Email is required";
        hasEmailError = true;

    }else if(!email.includes("@student.aiub.edu")){
        document.getElementById("emailError").innerHTML ="Email must contain @student.aiub.edu";
        hasEmailError = true;

    }else{
        document.getElementById("emailError").innerHTML = "";
        hasEmailError = false;

    }


    if(credit == ""){
        document.getElementById("creditError").innerHTML ="Credit completed is required";
        hasCreditError = true;

    }else if(credit < 0 || credit >= 148){
        document.getElementById("creditError").innerHTML ="Credit must be 0 or more but less than 148";
        hasCreditError = true;

    }else{
        document.getElementById("creditError").innerHTML = "";
        hasCreditError = false;

    }


    if(!department){
        document.getElementById("departmentError").innerHTML ="Department is required";
        hasDepartmentError = true;

    }else{
        document.getElementById("departmentError").innerHTML = "";
        hasDepartmentError = false;

    }


    if(!hasFirstNameError && !hasLastNameError && !hasStudentIdError && !hasEmailError && !hasCreditError && !hasDepartmentError){
        document.getElementById("studentList").innerHTML +=

        "<tr>" +

        "<td>" + firstName + "</td>" +

        "<td>" + lastName + "</td>" +

        "<td>" + studentId + "</td>" +

        "<td>" + email + "</td>" +

        "<td>" + credit + "</td>" +

        "<td>" + department + "</td>" +

        "</tr>";



        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("studentId").value = "";
        document.getElementById("email").value = "";
        document.getElementById("credit").value = "";
        document.getElementById("department").value = "";

    }

    return false;

}