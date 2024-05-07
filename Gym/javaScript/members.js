

var token=localStorage.getItem('authToken');

// var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxMjM0Iiwicm9sZSI6WyJ1c2VyMTIzNCIsIkFkbWluIiwiVXNlciIsIk1lbWJlciJdLCJuYmYiOjE3MTUxMDE0ODQsImV4cCI6MTcxNTEwNTA4NCwiaWF0IjoxNzE1MTAxNDg0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0In0.y_epzDxvDOqr7xn96nVrrb9J0y95XOXwnZDkYvC6pDc'
var url ='https://localhost:7209/api/Member/GetMembers';

// --------------------------------Show data---------------------------------------
function showDate(url,token){
  const response=new XMLHttpRequest();
  response.open('GET',url)
  response.setRequestHeader('Authorization',`Bearer ${token}`);
  console.log('1')
  response.onload=function(){
 
   if(response.status===200 && response.readyState===4){
     data=JSON.parse(response.response)
     let tableData = "";
     data.map((values) => {
     tableData += `<tr>
      <td>`+ values.person.idcard + `</td>
      <td>`+ values.person.name + `</td>
      <td>`+ values.person.phoneNumber + `</td>
      <td>`+ values.person.birthDate + `</td>
      <td>`+ values.person.email + `</td>
      <td>`+ values.memberWeight + `</td>
      <td>`+ values.isActive + `</td>
       <td> <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="updateRow()">
      تعديل 
     </button>
 </td>
      <td><button onclick="deleteRow(${values.employeeId})" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="Delete"
      style="background-color: red;">حذف</button></td>
      </tr>`
    })
     document.getElementById("tbody").innerHTML = tableData;
   
   }
   else{
     console.log('wrong');
   }
 
 }
 response.onerror=function(){
   console.log('error for network')
 }
 response.send();
 }
 showDate(url,token);
 
// -------------------------------------------end -----------------------------------------


// var icare=document.getElementById('idcard');

// var namee= document.getElementById('name');
//   var     phoneNumber=document.getElementById('phoneNumber');
//  var email=document.getElementById('email');
//  console.log(namee)
// function sendDataToAPI() {
//   // const form = document.getElementById('form');
// const i=idcard.value;
//   // var data ={
    
//   //     "idcard":i ,
//   //     "name":namee.value,
//   //     "phoneNumber":phoneNumber.value,
//   //     "birthDate":"2024-05-07T17:51:48.073Z",
//   //     "email":email,
//   //     "memberWeight": 90,
//   //     "isActive": true
    
//   // }

//   //alert(data)

//   console.log(data);

//   fetch('https://localhost:7209/api/Member/CreateMember', {
//     method: 'POST',
   
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Authorization':`Bearer ${token}`
//     }, 
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Response from API:', data);
//       showDate(url,token);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// const submitButton = document.getElementById('submitButton');
// submitButton.addEventListener('submit', sendDataToAPI());


//const submitButton = document.getElementById('form');submitButton.onclick=sendDataToAPI();

// function deleteRow(personId) {
  
//   fetch(`https://localhost:7209/api/Person/${personId}`, {
//     method: 'DELETE',
//   })
//   .then((response) => {
//     if (response.ok) {
//       console.log('تم حذف الصف بنجاح');
//       reloadTableData();
//     } else {
//       console.error('حدث خطأ أثناء حذف الصف');
//     }
//   })
//   .catch((error) => {
//     console.error('حدث خطأ في الاتصال بالـ API', error);
//   });
// }

// function reloadTableData() {
//   fetch("https://localhost:7209/api/Person")
//     .then((response) => response.json())
//     .then((data) => {
//       let tableData = "";
//       data.map((values) => {
//         tableData += `<tr>
//           <td>${values.personId}</td>
//           <td>${values.name}</td>
//           <td>${values.phoneNumber}</td>
//           <td>${values.birthDate}</td>
//           <td>${values.email}</td>
//           <td><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
//           id="Edit">تعديل</button></td>
//           <td><button onclick="deleteRow(${values.personId})" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="Delete"
//           style="background-color: red;">حذف</button></td>
//         </tr>`;
//       });
//       document.getElementById("tbody").innerHTML = tableData;
//     });
// }

// function updateRow(personId) {
//   const nameInput = document.getElementById('name-member');
//   const phoneInput = document.getElementById('phone');
//   const birthDateInput = document.getElementById('birth-date');
//   const emailInput = document.getElementById('email');

//   const updatedData = {
//     name: nameInput.value,
//     phoneNumber: phoneInput.value,
//     birthDate: birthDateInput.value,
//     email: emailInput.value
//   };

//   fetch(`https://localhost:7209/api/Person/${personId}`, {
//     method: 'PUT', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updatedData)
//   })
//     .then(response => {
//       if (response.ok) {
//         console.log('تم تحديث الصف بنجاح');
//         reloadTableData();
//       } else {
//         console.error('حدث خطأ أثناء تحديث الصف');
//       }
//     })
//     .catch(error => {
//       console.error('حدث خطأ في الاتصال بالـ API', error);
//     });
// }

// const form = document.getElementById('formUpdate');
// form.addEventListener('submit',updateRow(personId));


