
// function login(e) {
//     e.preventDefault();
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
   
//     var data = {
//         userName: username,
//         password: password
//     };

//     fetch('https://localhost:7209/api/Authentication/Login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'

//         },
//         body: JSON.stringify({
//             username:username,
//             password:password
//         })
//     })
//     .then(response => response.json())
//     .then(result => {
//         if (result.success) {
//             // window.location.href = '/Gym/Home/slide.html';
//         } else {
//             alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
//         }
//     })
//     .catch(error => {
//         console.error('حدث خطأ في الاتصال بالخادم:', error);
//     });
// };



var loginF=document.getElementById("form");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var errorMes = document.getElementById("text");
loginF.addEventListener("submit", async(e)=>{
    e.preventDefault();
 const userName=usernameInput.value;
 const password= passwordInput.value;
if(userName=="" ||password==""){
    errorMes.innerHTML='userName or password is empty';
}
 const url='https://localhost:7209/api/Authentication/Login';
    const response=await fetch(url,{
        'method':'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({userName,password})
    });
    if(!response.ok){
        const errorMes=await response.json();
      
      errorMes.innerHTML=errorMes.message || 'Login faield.';
      return;
      
    }
   const data =await  response.json();
   if(data.token){
    const token =data.token;
    localStorage.setItem('authToken',token);
    console.log('the token is ',token);
      window.location.href = "../Home/template.html";

   

   const productApi=fetch('/api/protected-data',{
    headers:{
        'Authorization':`Bearer ${token}`
    }
   });

   if(productApi.ok){
    const product=await productApi.json();
    console.log('productData:',product);

   }
   else {
    console.error('Faild to fetch product data');

   }

   }
   else{
    console.error('Token not found in login ');
    errorMes.innerHTML="Password or userName was wrong";
   }
    
})