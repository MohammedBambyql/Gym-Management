window.addEventListener("load", function() {
    // إظهار اللودر عند تحميل الصفحة
    document.getElementById("loader").style.display = "block";

    // إخفاء اللودر بعد 2 ثانية
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});
