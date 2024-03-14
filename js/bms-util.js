//==================================================    
//�붾㈃�� 蹂댁뿬吏��� 濡쒕뵫諛� �쒖떆
//==================================================
function showLoading() {
    /*
    if ($("#loadingbar").length === 0) {
        var l = [];
        l.push('<div class="modal fade loadingbar" id="loadingbar" tabindex="-1" role="dialog" aria-hidden="true">');
        l.push('   <div style="margin-top:20%;">');
        l.push('      <div class="sk-spinner sk-spinner-wave" >');
        l.push('         <div class="sk-rect1"></div>');
        l.push('         <div class="sk-rect2"></div>');
        l.push('         <div class="sk-rect3"></div>');
        l.push('         <div class="sk-rect4"></div>');
        l.push('         <div class="sk-rect5"></div>');
        l.push('      </div>');
        l.push('    </div>');
        l.push(' </div>');

        $(document.body).append(l.join(""));
    }

    //$("#loadingbar").modal("show");
    $("#loadingbar").modal({backdrop: "static", keyboard: false });
    */
    
    if (!$('.hyundai-loadingbar')[0]) {
        var l = [];
        l.push('<div class="hyundai-loadingbar">');
        l.push('    <div class="logo-area">');
        l.push('        <div class="logo-img"></div>');
        l.push('        <div class="loading-msg">');
        l.push('            <i class="fa fa-spinner fa-spin"></i><span>Loading...</span>');
        l.push('        </div>');
        l.push('    </div>');
        l.push('</div>');
        $(document.body).append(l.join(""));
    }

    $('.hyundai-loadingbar').show();
}

//==================================================    
//�붾㈃�� 蹂댁뿬吏��� 濡쒕뵫諛� �④린湲�
//==================================================
function hideLoading() {
    /*
    $("#loadingbar").modal("hide");
    setTimeout(function(){      
        $("#loadingbar").remove();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
    }, 1000);
    */
    
    $('.hyundai-loadingbar').hide();
}

function getFormatValue(value, format){
    if(value === "") return value;
    
    if(format){
        if(format.indexOf("#") > -1){
            var groupingSeparator = ",";
            var maxFractionDigits = 0;
            var decimalSeparator = ".";
            if(format.indexOf(".") === -1){
                groupingSeparator = ",";
            }else{
                if(format.indexOf(",") < format.indexOf(".")){
                    groupingSeparator = ",";
                    decimalSeparator = ".";
                    maxFractionDigits = format.length - format.indexOf(".") - 1;
                }else{
                    groupingSeparator = ".";
                    decimalSeparator = ",";
                    maxFractionDigits = format.length - format.indexOf(",") - 1;
                }
            }

            var prefix = "";
            var d = "";
            v = String(parseFloat(value).toFixed(maxFractionDigits));

            if(v.indexOf("-") > -1) {
                prefix = "-";
                v = v.substring(1);
            }

            if(maxFractionDigits > 0) {
                d = v.substring(v.indexOf(decimalSeparator));
                v = v.substring(0,v.indexOf(decimalSeparator));
            }
            var regExp=/\D/g;
            v = v.replace(regExp,"");
            var r = /(\d+)(\d{3})/;
            while (r.test(v)) {
                v = v.replace(r, '$1' + groupingSeparator + '$2');
            }
            
            return prefix+v+d;
        }else if(format.indexOf("yy") > -1){
            if (value) {
                var regExp=/\D/g;
                value = value.replace(regExp,"");
                if(value == "00000000") return "";
                
                var date_format = format;
                date_format = date_format.replace("yyyy",value.substring(0,4));
                date_format = date_format.replace("MM",value.substring(4,6));
                date_format = date_format.replace("dd",value.substring(6));

                return date_format; 
            } else {
                return value;
            }
        }else if(format.indexOf("%") > -1){
            if(value){
                return String(parseFloat(value).toFixed(2)) + "%";
            }else{
                return value;
            }
        }
    }else{
        return value;
    }
}

function byteToHexString(uint8arr) {
    if (!uint8arr) {
        return '';
    }
  
    var hexStr = '';
    for (var i = 0; i < uint8arr.length; i++) {
        var hex = (uint8arr[i] & 0xff).toString(16);
        hex = (hex.length === 1) ? '0' + hex : hex;
        hexStr += hex;
    } 
    return hexStr.toUpperCase();
}

function hexStringToByte(str) {
    if (!str) {
        return new Uint8Array();
    }
  
    var a = [];
    for (var i = 0, len = str.length; i < len; i+=2) {
        a.push(parseInt(str.substr(i,2),16));
    }  
    return new Uint8Array(a);
}

function GZIPtoJSON(gzip){
    var originalInput = pako.ungzip(hexStringToByte(gzip),{ to: 'string' });
    var json = JSON.parse(originalInput);
    return json[0];
}