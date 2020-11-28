document.getElementById("btn-total").addEventListener("click", function() {
    var uberX_check = document.getElementById("uberX");
    var uberSUV_check = document.getElementById("uberSUV");
    var uberBlack_check = document.getElementById("uberBlack");
    var soKm = document.getElementById("txtKm").value;
    var Time = document.getElementById("txtTime").value;
    var total = document.getElementById("xuatTien");
    var thanhTien = document.getElementById("divThanhTien");



    if (uberX_check.checked == true && soKm == 1) {
        var waitingTime = Time * 2000;
        total.innerHTML = (8000 * soKm) + waitingTime;
        thanhTien.style.display = "block";
    } else if (uberX_check.checked == true && soKm > 1 && soKm <= 20) {
        var waitingTime = Time * 2000;
        total.innerHTML = (12000 * (soKm - 1)) + waitingTime + 8000;
        thanhTien.style.display = "block";
    } else if (uberX_check.checked == true && soKm > 21) {
        var waitingTime = Time * 2000;
        total.innerHTML = (10000 * (soKm - 1)) + waitingTime + 8000;
        thanhTien.style.display = "block";
    } else if (uberSUV_check.checked == true && soKm == 1) {
        var waitingTime = Time * 3000;
        total.innerHTML = (9000 * soKm) + waitingTime;
        thanhTien.style.display = "block";
    } else if (uberSUV_check.checked == true && soKm > 1 && soKm <= 20) {
        var waitingTime = Time * 3000;
        total.innerHTML = (14000 * (soKm - 1)) + waitingTime + 9000;
        thanhTien.style.display = "block";
    } else if (uberSUV_check.checked == true && soKm > 21) {
        var waitingTime = Time * 3000;
        total.innerHTML = (12000 * (soKm - 1)) + waitingTime + 9000;
        thanhTien.style.display = "block";
    } else if (uberBlack_check.checked == true && soKm == 1) {
        var waitingTime = Time * 4000;
        total.innerHTML = (10000 * soKm) + waitingTime;
        thanhTien.style.display = "block";
    } else if (uberBlack_check.checked == true && soKm > 1 && soKm <= 20) {
        var waitingTime = Time * 4000;
        total.innerHTML = (16000 * (soKm - 1)) + waitingTime + 10000;
        thanhTien.style.display = "block";
    } else if (uberBlack_check.checked == true && soKm > 21) {
        var waitingTime = Time * 4000;
        total.innerHTML = (14000 * (soKm - 1)) + waitingTime + 10000;
        thanhTien.style.display = "block";
    } else {
        alert("Không Chọn Xe Rồi Sao Đi ==!");
    }

});