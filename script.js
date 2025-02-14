const password = document.getElementById("password");

function pass(){

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const number = document.getElementById("number").value;
    const symbol = "@#$&!";
    let pass="";

    pass += name[Math.floor(Math.random()*name.length)];
    pass += name[Math.floor(Math.random()*name.length)];
    pass += name[Math.floor(Math.random()*name.length)];
    pass += name[Math.floor(Math.random()*name.length)];

    pass += lastname[Math.floor(Math.random()*lastname.length)];
    pass += lastname[Math.floor(Math.random()*lastname.length)];

    pass += symbol[Math.floor(Math.random()*symbol.length)];

    pass += number[Math.floor(Math.random()*number.length)];
    pass += number[Math.floor(Math.random()*number.length)];
    pass += number[Math.floor(Math.random()*number.length)];
    pass += number[Math.floor(Math.random()*number.length)];

    password.value = pass;
}