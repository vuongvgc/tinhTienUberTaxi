/*
* Quản lý chuyến đi
*/
/*

/*funtion GetelementbyID
*input : id của thẻ
*output: thẻ tag
*/
function getEle(id){
    return document.getElementById(id)
}





/*
* Bước 1 : Tạo biến Khách hàng và gán giá trị rổng
*/
var chuyenXe = {};

/*
* Bước 2: Tình Tiến khi nhấn nút tính tiền
*/ 
getEle("btn-tinhtien").addEventListener("click", function(){
<<<<<<< HEAD
    console.log("tinh tien");
=======
    hienThiTongTien();
})







>>>>>>> 984f5736bfbe0da4c2c3b514dc0acd05b28ca7ab

    chuyenXe = LayThongTinChuyenDi();

    console.log(chuyenXe);
    
    console.log(chuyenXe.loaiXe);
    if(chuyenXe != ""){
        var tongTien = chuyenXe.tinhTien();
        console.log(tongTien);
        
        getEle("divThanhTien").style.display ="block";
        getEle("xuatTien").style.display = "block";
        getEle("xuatTien").innerHTML = tongTien;

    }
   
})




/*
* Bước 3: in hóa  khi nhấn nút in hóa đơn
*/ 
getEle("btn-inhoadon").addEventListener("click", function(){
    console.log("in hoa don");
})

console.log("Test branch Vuong")

