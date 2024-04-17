var btn=document.getElementById("ui");
var User=document.getElementById("User");
var pass=document.getElementById("pass");
var FormLogin=document.getElementById("form");
var errorMes=document.getElementById("error");





// btn.onclick=function(){
//     if(User.value==123 && pass.value==123){
//         alert("登录成功！")
//        location.href="../Home/slide.html";
//     }

//     else{
//         errorMes.innerHTML="Sorry userName or password was wrong";
//         errorMes.style.color="red";
//     }
// }
  
FormLogin.addEventListener("submit",async(e)=>{
e.preventDefault();

//basic input validation (option)

if(!User.value || !pass.value ) {
   
    errorMes.innerHTML= "All fields are required.";
    errorMes.style.color="red";
    errorMes.style.an
     return
}


const userName=User.value;
const password=pass.value;

try{
const respose=await fetch("url",{method:"post",headers:{
    "Content-Type":"application/json"},body:JSON.stringify({userName,password})

});
if(!respose.ok){
    throw new Error("Api request failed with status"+respose.status);

}
const data=await respose.json();
if(data.success){
    //login  success redirect to home page
    location.href="../Home/slide.html"; 
}

else{
    errorMes.innerHTML="user name or password is Wrong";
    errorMes.style.color="red";

}
}
catch (error){
console.log("Error :" ,error);
errorMes.innerHTML="some  thing went wrong ";
errorMes.style.color="red";
}
finally{
    pass.value ="";
}
});






//ebtn.addEventListener("click",()=>{
//     if(User=="admin" && pass=="admin"){
//         alert("done");
//         window.location.assign("../Home/index.html");
//     }
//     else{
//         alert("wrong");
//     } 
// })