var btn=document.getElementById("ui");
var User=document.getElementById("User");
var pass=document.getElementById("pass");





btn.onclick=function(){
    if(User.value==123 && pass.value==123){
        alert("登录成功！")
       location.href="../Home/index.html";
    }

    else{
        alert("wrong");
    }
}
  






// btn.addEventListener("click",()=>{
//     if(User=="admin" && pass=="admin"){
//         alert("done");
//         window.location.assign("../Home/index.html");
//     }
//     else{
//         alert("wrong");
//     } 
// })