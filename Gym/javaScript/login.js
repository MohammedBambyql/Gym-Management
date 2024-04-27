function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        userName: username,
        password: password
    };

    fetch('https://localhost:7209/api/Authentication/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            window.location.href = '/Gym/Home/slide.html';
        } else {
            alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
        }
    })
    .catch(error => {
        console.error('حدث خطأ في الاتصال بالخادم:', error);
    });
};