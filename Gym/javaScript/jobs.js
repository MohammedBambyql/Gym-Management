
// const token=localStorage.getItem('authToken');
var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxMjM0Iiwicm9sZSI6WyJ1c2VyMTIzNCIsIkFkbWluIiwiVXNlciIsIk1lbWJlciJdLCJuYmYiOjE3MTUwODY3ODIsImV4cCI6MTcxNTA5MDM4MiwiaWF0IjoxNzE1MDg2NzgyLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0In0.YurLnH0x3rLV4MW_s4mSrm-8npbJa2uU8RnN2T81FNU'
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
     console.log(data)
     data.map((values) => {
      tableData += `<tr>
      <td>`+ values.empoyeeId+ `</td>
     
      <td>`+values.id+ `</td>
      <td>`+values.job.jobTitle+ `</td>
      <td>`+values.startDate+`</td>
  <td>`+values.endDate+ `</td>
     
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
 