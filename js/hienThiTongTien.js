/*
*Function: Tính tiền khi nhấn nút tính tiền
*Event: Nhấn button tính tiền
*input: ChuyenDi
*outPut: Hiển thị tổng tiền
*/
function hienThiTongTien(){
    // bước 1:khachHang =  layThongTinChuyenDi()
    var khachHang = LayThongTinChuyenDi();
    console.log(khachHang);
    // Bước 2: var tongTien = khachHang.tinhTien();
    var tongTien = khachHang.tinhTien();
    // Bước 3: Hiển thị tổng tiền trên màn hình
    document.getElementById("xuatTien").innerHTML = tongTien;
    document.getElementById("divThanhTien").style.display = "block";
}
