console.log("Hello CyberSoft")

//                                      Biến 

//String 
var username = "Tran Khac Huan";
var address = "112 Cao Thang , Q3 , TP.HCM"

//Number
var age = 18;

//Boolean True or False
var status = true;

//NULL
var numberStudents = null;

//Undefined
var people;
// console.log(people);

// var firstName = "Tran";
// var last_Name = "Huan"
// console.log("Username: " + username);
// console.log("Address :" + address);
// console.log(username, address);

// Hoisting
console.log("Full name : " + fullName);
var fullName = "Nguyen Van A";

isLogin = true;
console.log("isLogin : " + isLogin);
// Quy tắc đặt tên hằng số đặt tên tất cả các ký tự là chữ in hoa
const PI = 3.14;

//                              Câu lệnh điều kiện
// "==" chỉ so sánh giá trị  
//"===" so sánh giá trị lẫn kiểu giá trị
if (1 === "1") {
    console.log("Điều kiện đúng ");
} else {
    console.log("Điều kiện sai");
}

// DK ? "Dung" : "Sai" --Cách viết của toán tử 3 ngôi

1 === "1" ? console.log("Điều kiện đúng ") : console.log("Điều kiện sai");

var btA = true;
var btB = false;
console.log("Ket qua &&: ", btA && btB); // có 1 false thì false hết
console.log("Ket qua ||: ", btA || btB); // có 1 true thì true hết
console.log("Phu dinh cua btA ", !btA); // Phủ định giá trị của biến

switch (5) {
    case 0:
        console.log("Day la so 0");
        break;
    case 1:
        console.log("Day la so 1");
        break;
    case 2:
        console.log("Day la so 2");
        break;
    default:
        console.log("Khong xac dinh");
        break;
}

var list = ["Huan", "Teo", "A"];

// Vòng Lặp

for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}

var number_1 = 10;
var number_2 = 5;
var number_3 = 7;
var number_4 = 9;
var number_5 = 7;
var number_6 = 9;

var tong;
var total;

tong = number_1 + number_2;
console.log("Tong 2 số : " + tong);

total = number_3 + number_4;
console.log("Total 2 số : " + total);

//Hàm ko tham số truyền vào 
// function tinhTong() {
//     var sum = number_1 + number_2;
//     console.log("Tổng là : " + sum);
// }

// function tinhTong_34() {
//     var sum = number_3 + number_4;
//     console.log("Tổng là : " + sum);
// }

// tinhTong();
// tinhTong_34();


// Hàm có tham số truyền vào
// function tinhTong(a, b) {
//     var sum = a + b;
//     console.log("Tong là : " + sum);
// }
// tinhTong(number_4, number_5);
// tinhTong(number_1, number_5);
// tinhTong(number_2, number_5);
// tinhTong(number_3, number_5);

// Hàm có giá trị trả về
// function tinhTong(a, b) {
//     var sum = a + b;
//     return sum;
// }
// tinhTong(50, 50);
// // var total = tinhTong(50, 50);
// console.log("Tong la :", tinhTong(20, 20));


//                      Bài tập tính điểm trung bình

var Toan, Ly, Hoa;

function tinhTBC(Toan, Ly, Hoa) {
    var TBC = (Toan + Ly + Hoa) / 3;
    return TBC;
}

function xepLoai(tinhTBC) {
    var loai = "";
    if (tinhTBC >= 9) {
        loai = "Xuất Sắc";

    } else if (tinhTBC < 9 && tinhTBC >= 8) {
        loai = "Giỏi";

    } else if (tinhTBC >= 7 && tinhTBC < 8) {
        loai = "Khá";

    } else if (tinhTBC >= 5 && tinhTBC < 7) {
        loai = "Trung Bình";

    } else {
        loai = "Yếu";
    }
    console.log(loai);
}
var TBC = tinhTBC(9, 9, 10);
xepLoai(TBC);


//************** DOM**************** *//
var txtInput = document.getElementById("txtInput");
console.log(txtInput.value);

var Name = document.getElementById("pText");
console.log(Name.textContent);


//Cách 1 :
// function eventClick() {
//     console.log("eventCLick");

//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

//Cách 2 :

// document.getElementById("btnClick").onclick = function() {
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// };

//Cách 3 : -callback function
// document.getElementById("btnClick").addEventListener("click", function() {
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// });
function demoClick() {
    var txtValue = document.getElementById("txtInput").value;
    console.log(txtValue);
};
document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnChange").addEventListener("click", function() {
    var divText = document.getElementById("txtContent").innerHTML = "Nội Dung Sau Khi Thay Đổi";
    document.getElementById("txtContent").style.backgroundColor = "aqua";
    document.getElementById("txtContent").style.fontSize = "40px";
});

document.getElementById("btnHide").addEventListener("click", function() {
    var divText = document.getElementById("txtContent").style.display = "none";
});
document.getElementById("btnShow").addEventListener("click", function() {
    var divText = document.getElementById("txtContent").style.display = "block";
});

document.getElementById("btnDisable").addEventListener("click", function() {
    var btnDis = document.getElementById("btnChange").disabled = true;
});
document.getElementById("btnEnable").addEventListener("click", function() {
    var btnDis = document.getElementById("btnChange").disabled = false;
    // var btnDis = document.getElementById("btnChange").removeAttribute("disabled");
});

document.getElementById("btnOn").addEventListener("click", function() {
    var btnOn = document.getElementById("imgBulb").src = "./img/pic_bulbon.gif";
});
document.getElementById("btnOff").addEventListener("click", function() {
    var btnOn = document.getElementById("imgBulb").src = "./img/pic_bulboff.gif";
});

document.getElementById("btnLogin").addEventListener("click", function() {
    var txtUser = document.getElementById("txtUser").value;
    var txtPass = document.getElementById("txtPass").value;

    console.log(txtUser);
    console.log(txtPass);



    if (txtUser == "Cybersoft" && txtPass == "Cybersoft123") {
        // fontColorChange("Login Thành Công", "green");
        fontColorChange2("Login Thành Công", "alert alert-success");
    } else {
        // fontColorChange("Login Thất Bại", "red");
        fontColorChange2("Login Thành Công", "alert alert-danger");
    }

});

function fontColorChange(mess, bg) {
    console.log("Đăng Nhập thành công");
    document.getElementById("txtThongBao").innerHTML = mess;
    document.getElementById("txtThongBao").style.display = "block";
    document.getElementById("txtThongBao").style.backgroundColor = bg;
    document.getElementById("txtThongBao").style.color = "white";
    document.getElementById("txtThongBao").style.fontSize = "30px";
};

function fontColorChange2(mess, classes) {
    document.getElementById("txtThongBao").innerHTML = mess;
    document.getElementById("txtThongBao").className = classes;
    document.getElementById("txtThongBao").style.display = "block";

};


// DOM tagName

var tagName = document.getElementsByTagName("button")[0];
console.log(tagName);

// DOM className
var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

// DOM querySelector

var _querySelector = document.querySelector(".container #txtThongBao");
console.log(_querySelector);

// DOM querySelectorAll

var _querySelectorAll = document.querySelectorAll(".container .form-control");
console.log(_querySelectorAll);



document.getElementById("btnTinhTienTip").addEventListener("click", function() {
    var txtTongTien = document.getElementById("txtTongTien").value;
    var txtPhanTramTip = document.getElementById("slPhanTramTip").value;
    var txtSoNGuoi = document.getElementById("txtSoNguoi").value;

    var tongTien = (txtTongTien * txtPhanTramTip) / 100 / txtSoNGuoi;

    document.getElementById("txtThongBaoTienTip").innerHTML = tongTien + "$ mỗi người";
    document.getElementById("txtThongBaoTienTip").className = "alert alert-danger d-block";

});