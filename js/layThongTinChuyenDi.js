/*
*Function: Lấy Thông Tin Chuyến Đi và gán vào đối tượng chuyến đi ChuyenDi.js
*Input: Lấy Dữ Liệu từ Form có kiểm tra validation
*Output: gán vào biến khachHang 
* tên biến : loaiXe, soKM, thoiGianCho
*/

function LayThongTinChuyenDi(){
    // Bước 1: lấy thông tin và validation thông tin 
    // Bước 2:  return object Khách hàng 
    var radios = document.getElementsByName('typeCar');
    var loaiXe;
    for(var i=0; i< radios.length; i++){
        if(radios[i].checked){
            loaiXe = radios[i].value;
            break;
        }
    }

    var soKMString = getEle("nhapSoKm").value;
    var thoiGianChoString = getEle("nhapThoiGian").value;
    
    // parse dữ liệu thành dạng float
    var soKM = parseFloat(soKMString);  
    var thoiGianCho = parseFloat(thoiGianChoString);   


    
    // ===== Xét validation ======
    var isValid = false;
    var checkValid = new ValidationCheckForm();

    // Kiem tra so KM nhap vao
    isValid = checkValid.kiemTraRong(soKMString,"tb-soKM","* Không được để trống số KM!") && checkValid.kiemTraSo(soKMString,"tb-soKM","* Dữ liệu nhập vào phải có định dạng số!");
    console.log(isValid,soKM);

    // Kiem tra thoi gian nhap vao
    isValid &= checkValid.kiemTraRong(thoiGianChoString,"tb-ThoiGianCho","* Không được để trống thời gian!") && checkValid.kiemTraSo(thoiGianChoString,"tb-ThoiGianCho","* Dữ liệu nhập vào phải có định dạng số!");
    console.log(isValid,soKM);

    // Kiểm tra chọn loại xe
    isValid &= checkValid.kiemTraLoaiXe("typeCar","tbLoaiXe","* Bạn chưa chọn loại xe!");
    console.log(isValid);

    if(isValid){
        var chuyenXe = new ChuyenDi(loaiXe,soKM,thoiGianCho);
        return chuyenXe;
    }    

}