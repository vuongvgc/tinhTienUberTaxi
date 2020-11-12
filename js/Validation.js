/*
*Đối Tượng: Validation kiểm tra thông tin form
*/
function ValidationCheckForm(){
    /*
    * Check không được để rổng
    * input: {dữ liệu từ input id} value 
    * input: {id thông báo} spanID  
    * input: {tin nhắn thông báo} message  
    * output: Boolean
    */  
    this.kiemTraRong = function(value,spanID,message){
        var isValid = true;
        if(value == ""){
            getEle(spanID).style.display ="block";
            getEle(spanID).innerHTML = message;
            isValid = false;
        }else{
            getEle(spanID).style.display ="none";
        }
        return isValid;
        
    }

    
    /*
    * Check input phải là số
    * input: {dữ liệu từ input id} value 
    * input: {id thông báo} spanID  
    * input: {tin nhắn thông báo} message  
    * output: Boolean
    */
    
    this.kiemTraSo = function(value,spanID,message){
        var isValid = false;       
        var SoFormat = /^[0-9\-=\[\]\\|.\/]*$/;

        if(value.match(SoFormat)){
            getEle(spanID).style.display ="none";
            isValid = true;
            
        }else{
            getEle(spanID).style.display ="block";
            getEle(spanID).innerHTML = message;
            isValid = false;

        }
        return isValid;
    }
  
    
    /*
    * Check ô chọn loại xe: phải chọn loại xe
    * input: {dữ liệu từ input id} value 
    * input: {id thông báo} spanID  
    * input: {tin nhắn thông báo} message  
    * output: Boolean
    */
   this.kiemTraLoaiXe = function(nameInput,spanID,message){
        var checkLoaiXe = false; 
        var radios = document.getElementsByName(nameInput);
        for(var i=0; i< radios.length; i++){
            if(radios[i].checked){               
                checkLoaiXe = true;
                console.log("abc");
            }
        }

        if(checkLoaiXe){
            getEle(spanID).style.display ="none";
            return true;
        }else{
            getEle(spanID).style.display ="block";
            getEle(spanID).innerHTML = message;
            return false;
        }
       
   }    
    
  
}
    
    
    
