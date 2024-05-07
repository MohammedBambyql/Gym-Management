// const token=localStorage.getItem('authToken');
var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxMjM0Iiwicm9sZSI6WyJ1c2VyMTIzNCIsIkFkbWluIiwiVXNlciIsIk1lbWJlciJdLCJuYmYiOjE3MTUwOTIwMDgsImV4cCI6MTcxNTA5NTYwOCwiaWF0IjoxNzE1MDkyMDA4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0In0.YmvTCeSyU7sucKb4a-W1TkTrUy_L6icaKHF6gRbgZps'
const getUrl='https://localhost:7209/api/Role/GetAll';

function showDate(url,token){
  const response=new XMLHttpRequest();
  response.open('GET',url)
  response.setRequestHeader('Authorization',`Bearer ${token}`);
  console.log('1')
  response.onload=function(){
 
   if(response.status===200 && response.readyState===4){
    console.log(4)
     data=JSON.parse(response.response)
     console.log(data)
     let tableData = "";
     console.log(data)
     data.map((values) => {
      tableData += `<tr>
        <td>`+values.roleId+ `</td>
        <td>`+values.roleName+ `</td>

       <td> <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="updateRow()">
      تعديل 
     </button>
 </td>
      <td><button onclick="deleteRow(${values.employeeId})" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="Delete"
      style="background-color: red;">حذف</button></td>
      </tr>`
    })
     document.getElementById("table_body").innerHTML = tableData;
   
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
 