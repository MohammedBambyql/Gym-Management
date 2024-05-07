// fetch("https://localhost:7209/api/User").then((data) => {
//   return data.json();
// }).then((ObjectData) => {
//   let tableData = "";
//   ObjectData.map((values) => {
//     tableData += `<tr>
//     <td>`+ values.person.personId + `</td>
//     <td>`+ values.person.name + `</td>
//     <td>`+ values.person.phoneNumber + `</td>
//     <td>`+ values.person.email + `</td>
//     <td><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
//     id="Edit">تعديل</button></td>
//     <td><button onclick="deleteRow(${values.person.personId})" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="Delete"
//     style="background-color: red;">حذف</button></td>
//     </tr>`
//   })
//   document.getElementById("tbody").innerHTML = tableData;
// })

// const token=localStorage.getItem('authToken');
var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxMjM0Iiwicm9sZSI6WyJ1c2VyMTIzNCIsIkFkbWluIiwiVXNlciIsIk1lbWJlciJdLCJuYmYiOjE3MTUwODIwNDIsImV4cCI6MTcxNTA4NTY0MiwiaWF0IjoxNzE1MDgyMDQyLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0In0.E4qHBugSds6N90GPjnegjXvQuu-UVqg9JFmg2xReSwI'

const getUrl='https://localhost:7209/api/JobHistory/Get';

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
      <td>`+ values.empoyeeId + `</td>
      <td>`+ values.jobId + `</td>
      <td>`+ values.startDate + `</td>
      <td>`+ values.endDate + `</td>
     
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

  
 showDate(getUrl,token);
 
 

// function sendDataToAPI() {
//   const form = document.getElementById('form');
//   const payload = new FormData(form);

//   const formData = {};
//   for (let [key, value] of payload.entries()) {
//     formData[key] = value;
//   }

//   console.log(formData);

//   fetch('https://localhost:7209/api/User', {
//     method: 'POST',
//     body: JSON.stringify(formData),
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Response from API:', data);
//       reloadTableData();
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// const submitButton = document.getElementById('submitButton');
// submitButton.addEventListener('click', sendDataToAPI());

// function deleteRow(personId) {
  
//   fetch(`https://localhost:7209/api/User/${personId}`, {
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
//     <td>`+ values.person.personId + `</td>
//     <td>`+ values.person.name + `</td>
//     <td>`+ values.person.phoneNumber + `</td>
//     <td>`+ values.person.email + `</td>
//     <td><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
//     id="Edit">تعديل</button></td>
//     <td><button onclick="deleteRow(${values.person.personId})" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="Delete"
//     style="background-color: red;">حذف</button></td>
//     </tr>`
//       });
//       document.getElementById("tbody").innerHTML = tableData;
//     });
// }

// function updateRow(personId) {
//   const nameInput = document.getElementById('userName');
//   const phoneInput = document.getElementById('userNumber');
//   const emailInput = document.getElementById('email');

//   const updatedData = {
//     name: nameInput.value,
//     phoneNumber: phoneInput.value,
//     email: emailInput.value
//   };

//   fetch(`https://localhost:7209/api/User/${personId}`, {
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
// var personId=2;
// const form = document.getElementById('form');
// form.addEventListener('submit',updateRow(personId));