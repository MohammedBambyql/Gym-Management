fetch("https://localhost:7209/api/Person").then((data) => {
  return data.json();
}).then((ObjectData) => {
  let tableData = "";
  ObjectData.map((values) => {
    tableData += `<tr>
    <td>`+ values.personId + `</td>
    <td>`+ values.name + `</td>
    <td>`+ values.phoneNumber + `</td>
    <td>`+ values.birthDate + `</td>
    <td>`+ values.email + `</td>
    </tr>`
  })
  document.getElementById("tbody").innerHTML = tableData;
})


function sendDataToAPI() {
  const form = document.getElementById('form');
  const payload = new FormData(form);

  const formData = {};
  for (let [key, value] of payload.entries()) {
    formData[key] = value;
  }

  console.log(formData);

  fetch('your-post-api-url', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response from API:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', sendDataToAPI);


