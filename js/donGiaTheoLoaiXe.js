function DonGiaTheoLoaiXe(loaiXe){
    switch(loaiXe) {
        case "uberX":
            this.tienKmDauTien = 8000;
            this.tienKm1Den20  = 12000;
            this.tienKm20TroLen = 10000;
            this.tienCho = 2000;  
          break;
        case "uberSUV":
            this.tienKmDauTien = 9000;
            this.tienKm1Den20 = 14000;
            this.tienKm20TroLen = 12000;
            this.tienCho = 3000;
          break;
        case "uberBlack":
            this.tienKmDauTien = 10000;
            this.tienKm1Den20 = 16000;
            this.tienKm20TroLen = 14000;
            this.tienCho = 4000;
          // code block
    }
}