// fetch("").then((data) => {
//   return data.json();
// }).then((ObjectData) => {
//   console.log(ObjectData[0].titles);
//   let tableData = "";
//   ObjectData.map((values)=> {
//     tableData += `<tr>
//     <td>`+values.title+`</td>
//     <td>`+values.start_time+`</td>
//     <td>`+values.end_time+`</td>
//     <td>`+values.location+`</td>
//     <td>`+values.description+`</td>
//     </tr>`
//   })
//   document.getElementById("table_body").innerHTML = tableData;
// })