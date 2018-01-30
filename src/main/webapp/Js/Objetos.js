var person = {
    firstName:"",
    lastName:"",
    age:00,
    eyeColor:"",
    fullname: function() {
        return person.firstName+" "+person.lastName;
    }
};

function savePerson() {
    person.firstName = document.getElementById("firtsname").value;
    person.lastName = document.getElementById("lastname").value;
    person.age = document.getElementById("age").value;
    person.eyeColor = document.getElementById("eyeColor").value;
    alert("Nombre: "+person.fullname());
}



