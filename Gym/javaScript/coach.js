var token =localStorage.getItem('authToken');
if(!token){
  console.log('authtoken not found ');
 
}
console.log(token);
// const productApi=   fetch('https://localhost:7209/api/Employee',{headers:{'Authorization':`Bearer${token}`}})


fetch('https://localhost:7209/api/Employee',{headers:{'Authorization':`Bearer${token}`}}).then((data) => {
  return data.json();
}).then((ObjectData) => {
  let tableData = "";
  ObjectData.map((values) => {
    tableData += `<tr>
    <td>`+ values.employeeId + `</td>
    <td>`+ values.person.name + `</td>
    <td>`+ values.person.phoneNumber + `</td>
    <td>`+ values.person.email + `</td>
    <td>`+ values.salary + `</td>
    <td><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
    id="Edit">تعديل</button></td>
    <td><button onclick="deleteRow(${values.employeeId})" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="Delete"
    style="background-color: red;">حذف</button></td>
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
  
    fetch('https://localhost:7209/api/Employee', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
  submitButton.addEventListener('click', sendDataToAPI());

  function deleteRow(employeeId) {
  
    fetch(`https://localhost:7209/api/Employee${employeeId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        console.log('تم حذف الصف بنجاح');
        reloadTableData();
      } else {
        console.error('حدث خطأ أثناء حذف الصف');
      }
    })
    .catch((error) => {
      console.error('حدث خطأ في الاتصال بالـ API', error);
    });
  }

  
function reloadTableData() {
    fetch("https://localhost:7209/api/Employee")
      .then((response) => response.json())
      .then((data) => {
        let tableData = "";
        data.map((values) => {
          tableData += `<tr>
          <td>`+ values.employeeId + `</td>
          <td>`+ values.person.name + `</td>
          <td>`+ values.person.phoneNumber + `</td>
          <td>`+ values.person.email + `</td>
          <td>`+ values.salary + `</td>
          <td><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          id="Edit">تعديل</button></td>
          <td><button onclick="deleteRow(${values.employeeId})" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="Delete"
          style="background-color: red;">حذف</button></td>
          </tr>`;
        });
        document.getElementById("tbody").innerHTML = tableData;
      });
  }

  
function updateRow(employeeId) {
    const nameInput = document.getElementById('userName');
    const phoneInput = document.getElementById('userNumber');
    const emailInput = document.getElementById('email');
    const priceInput = document.getElementById('price');
  
    const updatedData = {
      name: nameInput.value,
      phoneNumber: phoneInput.value,
      email: emailInput.value,
      salary: priceInput.value
    };
  
    fetch(`https://localhost:7209/api/Employee${employeeId}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => {
        if (response.ok) {
          console.log('تم تحديث الصف بنجاح');
          reloadTableData();
        } else {
          console.error('حدث خطأ أثناء تحديث الصف');
        }
      })
      .catch(error => {
        console.error('حدث خطأ في الاتصال بالـ API', error);
      });
  }
  
  const form = document.getElementById('formUpdate');
  form.addEventListener('submit',updateRow(employeeId));
  