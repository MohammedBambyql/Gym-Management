const token=localStorage.getItem('authToken');
// var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InVzZXIxMjM0Iiwicm9sZSI6WyJ1c2VyMTIzNCIsIkFkbWluIiwiVXNlciIsIk1lbWJlciJdLCJuYmYiOjE3MTUwOTIwMDgsImV4cCI6MTcxNTA5NTYwOCwiaWF0IjoxNzE1MDkyMDA4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0In0.YmvTCeSyU7sucKb4a-W1TkTrUy_L6icaKHF6gRbgZps'
const getUrl='https://localhost:7209/api/Subscription/GetSubscriptions';

function showDate(url,token){
  const response=new XMLHttpRequest();
  response.open('GET',url)
  response.setRequestHeader('Authorization',`Bearer ${token}`);
  console.log('1')
  response.onload=function(){
 
   if(response.status===200 && response.readyState===4){
    console.log(4)
     data=JSON.parse(response.response)
     console.table(data)

     let tableData = "";
     console.log(data)
     data.map((values) => {
      tableData += `<tr>
        <td>`+values.coach.empoyeeId+ `</td>
        <td>`+values.coach.job.jobTitle+ `</td>
        <td>`+values.createdByReceptionist.id+ `</td>
        <td>`+values.excerciseType.name+`</td>
        <td>`+values.member.person.name+ `</td>
        <td>`+values.member.isActive+ `</td>
        <td>`+values.period.periodName+ `</td>
        <td>`+values.subscriptionPeriod.name+ `</td>
        <td>`+values.subscriptionPeriod.price+ `</td>
        

      
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
 