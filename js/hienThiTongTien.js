/*
*Function: Tính tiền khi nhấn nút tính tiền
*Event: Nhấn button tính tiền
*input: ChuyenDi
*outPut: Hiển thị tổng tiền
*/
function hienThiTongTien(){
    // bước 1:khachHang =  layThongTinChuyenDi()
    var khachHang = LayThongTinChuyenDi();
    // console.log(khachHang);
    // Bước 2: var tongTien = khachHang.tinhTien();
    if(khachHang !== undefined){
        var chiTietTien = khachHang.tinhTien();
        console.log(chiTietTien)
        // Bước 3: Hiển thị tổng tiền trên màn hình
        document.getElementById("xuatTien").innerHTML = chiTietTien.tongTien;
        document.getElementById("divThanhTien").style.display = "block";
    }
}
