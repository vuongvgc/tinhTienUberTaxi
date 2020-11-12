/*
*Đối Tượng: Chuyến đi: mô tả chuyến đi của khách hàng
*input: Loại xe: loaiXe ; số KM đi: soKM ; thời gian chờ: thogianCho
*Output: Đối tượng ChuyenDi và method tính tiền
*
*Method: tinhTien : tính tiền cho chuyến đi
*input: loaiXe, soKM, thoiGianCho
*output: tongTien
*/
function ChuyenDi(loaiXe, soKM, thoiGianCho) {
    this.loaiXe = loaiXe,
    this.soKM = soKM,
    this.thoiGianCho = thoiGianCho,

    this.tinhTien = function(){
        var x,y,z,t;
        var soTien = 0;
        switch(this.loaiXe) {
            case "uberX":
                x = 8000;
                y = 12000;
                z = 10000;
                t= 2000;
              break;
            case "uberSUV":
                x = 9000;
                y = 14000;
                z = 12000;
                t = 3000;
              break;
            case "uberBlack":
                x = 10000;
                y = 16000;
                z = 14000;
                t = 4000;
              // code block
        }

        if(this.soKM <=1 && this.soKM >=0){
            soTien =x + thoiGianCho*t;
        }else if(this.soKM <= 20){
            soTien = x + (this.soKM - 1)*y + this.thoiGianCho*t;
            
        }else if(this.soKM > 20){
            soTien = x + 19*y + (this.soKM - 20)*z + this.thoiGianCho*t;
            
        }
        
        return soTien;   

    }  
    
}