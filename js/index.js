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
    hienThiTongTien();
   
})




/*
* Bước 3: in hóa  khi nhấn nút in hóa đơn
*/ 
getEle("btn-inhoadon").addEventListener("click", function(){
    var chuyenXe = LayThongTinChuyenDi();
    console.log(chuyenXe);
    if(chuyenXe !== undefined){
         hienThiHoaDon(chuyenXe);
    }
})

