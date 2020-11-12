/*
*Function: Hiển thị hóa đơn khi nhấn nút hóa đơn
*Event: Nhấn button hóa đơn
*input: ChuyenDi, tongTien
*outPut: Hiển thị hoa đơn trên màn hình
*/
function hienThiHoaDon(khachHang){
    var khachHang = LayThongTinChuyenDi();
    // console.log(khachHang);
    // Bước 2: var tongTien = khachHang.tinhTien();
    var chiTietTien = khachHang.tinhTien();
        console.log(chiTietTien)
        // Bước 3: Hiển thị tổng tiền trên màn hình
        var donGia = new DonGiaTheoLoaiXe(khachHang.loaiXe);
        console.log(donGia);
        var content = `
        <table class="table">
			<thead>
				<tr>
					<th scope="col">Detail</th>
					<th scope="col">Use (Km)</th>
					<th scope="col">Unit Price (VND/Km)</th>
					<th scope="col">Payment (VND)</th>
				</tr>
			</thead>
			<tbody>
                <tr>
                    <td>${khachHang.loaiXe}</td>
                    <td>1</td>
                    <td>${donGia.tienKmDauTien}</td>
                    <td>${chiTietTien.tienKmDauTien}</td>
                </tr>
                <tr>
                    <td>${khachHang.loaiXe}</td>
                    <td>19</td>
                    <td>${donGia.tienKm1Den20}</td>
                    <td>${chiTietTien.tienKm1Den20}</td>
                </tr>
                <tr>
                    <td>${khachHang.loaiXe}</td>
                    <td>${chiTietTien.tienKm20TroLen / donGia.tienKm20TroLen }</td>
                    <td>${donGia.tienKm20TroLen}</td>
                    <td>${chiTietTien.tienKm20TroLen}</td>
                </tr>
        </tbody>
        <thead>
				<tr>
					<th scope="col">Detail</th>
					<th scope="col">Use (Minute)</th>
					<th scope="col">Unit Price (VND/Minute)</th>
					<th scope="col">Payment(VND)</th>
				</tr>
        </thead>
        <tbody>
            <tr>
                <td>${khachHang.loaiXe}</td>
                <td>${khachHang.thoiGianCho}</td>
                <td>${donGia.tienCho}</td>
                <td>${chiTietTien.tienCho}</td>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th colspan="4">Tổng Tiền: ${chiTietTien.tongTien} VND</th>
            </tr>
        </thead>
      </table>										  
        `;
        document.querySelector("#inHoaDonModal .modal-body").innerHTML = content;
    
}