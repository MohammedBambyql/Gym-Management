fetch("https://localhost:7209/api/Member").then((data) => {
  return data.json();
}).then((ObjectData) => {
  // console.log(ObjectData,'m')
  // console.log(ObjectData[0].titles);
  let tableData = "";
  ObjectData.map((values)=> {
    tableData += `<tr>
    <td>`+values.person.memberWeight+`</td>
    <td>`+values.IDCard+`</td>
    <td>`+values.Name+`</td>
    <td>`+values.BirthDate+`</td>
    <td>`+values.Email+`</td>
    </tr>`
  })
  document.getElementById("table_body").innerHTML = tableData;
})