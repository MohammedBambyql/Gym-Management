// var token =localStorage.getItem('authToken');
var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxMjM0Iiwicm9sZSI6WyJ1c2VyMTIzNCIsIkFkbWluIiwiVXNlciIsIk1lbWJlciJdLCJuYmYiOjE3MTUwMzY2ODEsImV4cCI6MTcxNTA0MDI4MSwiaWF0IjoxNzE1MDM2NjgxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0In0.9RNxBk-nq8RDk7KBD9_69l884gYiWTCMi8BN3H2CwHw'
const url='https://localhost:7209/api/Employee/GetEmployees'

// ----------------------inputs --------------------------------
var idcard=document.getElementById('idcard');
var nameCoach=document.getElementById('name');
var phoneNumber=document.getElementById('phoneNumber');
var birthDate=document.getElementById('birthDate');
var email=document.getElementById('email');
var hireDate=document.getElementById('hireDate');
var resignationDate=document.getElementById('resignationDate');
var currentJop=document.getElementById('currentJob');
var salary=document.getElementById('salary');
// --------------------------end inputs-------------------------------

if(!token){
  console.log('authtoken not found ');
 
}

// --------------------------------------------------------------------------------------------------------------------
console.log(token);
// const productApi=   fetch('https://localhost:7209/api/Employee',{headers:{'Authorization':`Bearer${token}`}})



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
     <td>`+ values.employeeId + `</td>
     <td>`+ values.person.name + `</td>
     <td>`+ values.person.phoneNumber + `</td>
     <td>`+ values.person.email + `</td>
     <td>`+ values.salary + `</td>
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


// -------------------------------------------- showdata finshed ---------------------------------------------------------




data={

    
  "idcard":idcard.vale ,
  "name": nameCoach.value,
  "phoneNumber": phoneNumber.value,
  "birthDate": birthDate.value,
  "email": email.value,
  "hireDate": hireDate.vale,
  "resignationDate": resignationDate.value,
  "currentJop": 0,
  "salary": salary.vale

}



//  -------------------------- sendfunction --------------------------------------------------

function sendDataToAPI(url,token,data){
  
   const response=new XMLHttpRequest();
  response.open('POST',url)
  response.setRequestHeader('Authorization',`Bearer ${token}`);
  response.setRequestHeader( 'Content-Type','application/json')
  console.log('1')
  console.log(formData)
  response.send(JSON.stringify(data));
 }

 const submitButton = document.getElementById('submitButton');
 submitButton.addEventListener('click', sendDataToAPI());

// ----------------------------------------- end --------------------------------------------------
  
function deleteRow(employeeId){
  url=`https://localhost:7209/api/Employee/Delete/${employeeId}`
  const response =new XMLHttpRequest();
  Response.open('DELETE',url)
  response.onreadystatechange=function(){
    if(response.status==200 && response.readyState===4){
      console.log('done the delete');

    }
  }

  response.send();
    
  
}

// --------------------------end ------------------------------------------------------------------

  // function deleteRow(employeeId) {
  
  //   fetch(`https://localhost:7209/api/Employee${employeeId}`, {
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

  // -------------------------------------reloade function ---------------------------------
function reloadTableData() {
    showDate(url,token);
  }
// -------------------------------------------end function ------------------------------------
  
function updateRow() {
   
  const url='https://localhost:7209/api/Employee/UpdateEmployee'
    

    const response=new XMLHttpRequest();
    response.open('PUT',url)
    response.setRequestHeader('Authorization',`Bearer ${token}`);
    response.setRequestHeader( 'Content-Type','application/json')
    response.onreadystatechange=function(){
      if(response.status===200 && response.readyState===4){
        reloadTableData();
      }
      else{
        console.log('wrong to connecting');
      }
    }

    response.send(JSON.stringify(Date));

  
    // fetch(`https://localhost:7209/api/Employee${employeeId}`, {
    //   method: 'PUT', 
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(updatedData)
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       console.log('تم تحديث الصف بنجاح');
    //       reloadTableData();
    //     } else {
    //       console.error('حدث خطأ أثناء تحديث الصف');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('حدث خطأ في الاتصال بالـ API', error);
    //   });
  }
  const form = document.getElementById('form');
  form.addEventListener('submit',updateRow(employeeId));
  