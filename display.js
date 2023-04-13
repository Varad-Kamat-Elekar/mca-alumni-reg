
// console.log(window.location.href)

params=new URLSearchParams(window.location.search)
console.log(window.location.search)
document.getElementById("name").innerHTML = params.get('name');
document.getElementById("prno").innerHTML = params.get('prno');
document.getElementById("email").innerHTML = params.get('email');
document.getElementById("phno").innerHTML = params.get('phone');
document.getElementById("address").innerHTML = params.get('address');
document.getElementById("gender").innerHTML = params.get('gender');
document.getElementById("dob").innerHTML = params.get('dob');
document.getElementById("yop").innerHTML = params.get('yop');
document.getElementById("company_name").innerHTML = params.get('company_name');