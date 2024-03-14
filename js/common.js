var common = {
	//�쒖뒪�� �좎쭨
	getSystemDate: function(){
		var dt = new Date();
		var y = dt.getFullYear(), m= dt.getMonth()+1, d = dt.getDate();
		if(m<10){ m = "0"+m; } if(d<10){ d = "0"+d; }

		return String(y)+String(m)+String(d);
	},
        
	//�쒖뒪�쒖쓽 泥ル쾲吏� �좎쭨
	getSystemFirstDate: function(){
		var tDate = new Date();
		var y = tDate.getFullYear(), m= tDate.getMonth()+1, d = "01";
		if(m<10){ m = "0"+m; }

		return String(y)+String(m)+String(d);
	},
	
	//�쒖뒪�쒖쓽 留덉�留� �좎쭨
	getSystemLastDate: function(val){
		var tDate = "";
		
		if(typeof val !== "undefined" && val !== null){
			tDate = val;
		}else{
			tDate = this.getSystemDate();
		}
		var y = tDate.substring(0,4);
		var m = tDate.substring(4,6);
		var d = (new Date(y,m, 0)).getDate();
		return y + this.addZeroDate(m) + this.addZeroDate(d);
	},
	
	//�쒖뒪�쒕궇吏쒖뿉�� �낅젰�� �쇱닔留뚰겮�� �댁쟾 �좎쭨 由ы꽩
	getPreviosDate: function(val){
		var toDay = new Date();  
		toDay = new Date(toDay-(3600000*24*val));
		
		var y = toDay.getFullYear();
		var m = toDay.getMonth() + 1;
		var d = toDay.getDate();
		
		return y + this.addZeroDate(m) + this.addZeroDate(d);

	},
	
	//�쒖뒪�� �좎쭨�� �낅젰�� �섎쭔�쇱쓽 �댁쟾 �ъ쓽 泥レ㎏�� 由ы꽩
	getPreviosFirstDate: function(val){
		var toDay = new Date();
        
        if(typeof val !== "undefined" && val !== null){
            val = Number(val) * 31;
        }else{
            val = Number(1) * 31;
        }
        
        var toDate = new Date(Date.parse(toDay) - val * 1000 * 60 * 60 * 24);
        var y = toDate.getFullYear();
        var m = toDate.getMonth() + 1
        var d = "01";
        
		return y + this.addZeroDate(m) + this.addZeroDate(d);

	},
	
	getSystemTime: function(){
		var tDate = new Date();
		
		var h = tDate.getHours();
        var m = tDate.getMinutes();
        var s = tDate.getSeconds();
        
        return this.addZeroDate(h) + this.addZeroDate(m) + this.addZeroDate(s);
	},
	
	getSystemTimeFormat: function(){
        return this.getTimeFormat(this.getSystemTime());
	},
	
	getTimeFormat: function(val){
        return this.addZeroDate(val.substring(0,2)) + ":" + this.addZeroDate(val.substring(2,4)) + ":" + this.addZeroDate(val.substring(4,6));
	},
	
	//��/�쇱뿉 0 遺숈씠湲�
	addZeroDate: function(obj){
		var str = String (obj);
		(str.length === 1)? str = "0" + str : str = str;
		return str;
	},	
		
	//ex - result : 31.01.2017
	getDate: function(val){
		var result = "";
		
	    if(val !== null  && typeof val !== "undefined"){
	    	var tmp="", yy = "", mm = "", dd = "";
	    	if(val.length === 10){
	    		tmp = val.split(".");
			  	yy = tmp[2];
			  	mm = tmp[1];
			  	dd = tmp[0];
			  	
			  	result = dd +"."+ mm +"."+ yy;
	    	}else if(val.length === 8){
			  	yy = val.substring(0, 4);
			  	mm = val.substring(4, 6);
			  	dd = val.substring(6, 8);
			  	
			  	result = dd +"."+ mm +"."+ yy;
	    	}
	  	}
	    
	    return result;
	},
	
	//ex - result : 01.2017
	getDateMY: function(val){
		var tmp="", yy = "", mm = "";
		
	    if(val !== null  && typeof val !== "undefined"){
	    	val = this.trim(val);
	    	if(val.length === 8){
	    		if(val.indexOf(".") !== -1){
	    			yy = val.substring(0, 4);
				  	mm = val.substring(4, 6);
	    		}else{
	    			tmp = val.split(".");
				  	yy = tmp[2];
				  	mm = tmp[1];
	    		}
	    	}else if(val.length === 7){
	    		if(val.indexOf(".") !== -1){
	    			yy = val.substring(0, 4);
				  	mm = val.substring(4, 6);
	    		}else{
	    			tmp = val.split(".");
	    			yy = tmp[1];
				  	mm = tmp[0];
	    		}
	    	}else if(val.length === 6){
			  	yy = val.substring(0, 4);
			  	mm = val.substring(4, 6);
	    	}
		  	
		  	return mm +"."+ yy;
	  	}else{
	  		return "";
	  	}
	},
	
	//ex - result : 201701
	getYYYYMM: function(val){
		var tmp = "", yy = "", mm = "";
  	    
	    if(val !== null && typeof val !== "undefined"){
	        val = this.trim(val);
	        if(val.length === 8){
	        	if(val.indexOf(".") !== -1){
	        		yy = val.substring(2, 6);
			  	    mm = val.substring(0, 2);
	        	}else{
	        		tmp = val.split(".");
	        		yy = tmp[2];
				  	mm = tmp[1];
	        	}
	        }else if(val.length === 7){
	          tmp = val.split(".");
		  	  yy = tmp[1];
		  	  mm = tmp[0];
		  	}else if(val.length === 6){
		  		yy = val.substring(0, 2);
		  	    mm = val.substring(2, 6);
		  	}
		  	
		  	return yy + mm;
	  	}
	},
	
	//ex - result : 20170131
	getYYYYMMDD: function(val){
		var tmp = "";
  	    var yy = "", mm = "", dd = "";
  	    
	    if(val !== null && typeof val !== "undefined"){
	        val = this.trim(val);
	        if(val.length == 10){
	          tmp = val.split(".");
		  	  yy = tmp[2];
		  	  mm = tmp[1];
		  	  dd = tmp[0];
		  	}else if(val.length == 8){
		  		yy = val.substring(0, 4);
		  	    mm = val.substring(4, 6);
		  	    dd = val.substring(6, 8);
		  	}
		  	
		  	return yy + mm + dd;
	  	}
	},
	
	//ex - result : 20170131 - System date
	getSystemDate: function(){
		var dt = new Date();
    	var y = dt.getFullYear(), m= dt.getMonth()+1, d = dt.getDate();
    	if(m<10){ m = "0"+m; } if(d<10){ d = "0"+d; }
    	
	    return String(y)+String(m)+String(d);
	},
	
	//ex - result : 100.00
	currency_format: function(val){
	   if(val !== null && typeof val !== 'undefined'){
		   val = String(val);
		   val = val.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	 
		   if(val.indexOf(".") > -1){
		      var text = val.split(".");
		      if(text[1].length === 1){ val = text[0]+"."+text[1]+"0"; }
		   }else{
			   val = val + ".00";
		   }
		   
		   return val;
	   }else{
		   return constants.c_default_amount;
	   }
	},
	
	//ex - result : 100.00 -> 100
	currency_format_remove: function(val){
	    var num = "", dot = "", tag = "";
	    val = String(val);
	    
	    if(val !== null && typeof val !== 'undefined'){
	    	if(val.indexOf("-") > -1){
	    		tag = "-";
	    	}

			if(val.indexOf(".") > -1){
			    var text = val.split("."); 
			    num = text[0];
			    dot = text[1];
			}else{
			    num = val;
			    dot = "00";
			}
		
			var ihtml = this.removeSpecial(num);
			if(tag === ""){
				return  ihtml + "." + dot;
			}else{
				return  tag + ihtml + "." + dot;
			}
			
	    }else{
	    	return "";
	    }
	   
	},
	
	//�뱀닔臾몄옄 �쒓굅
	removeSpecial: function(val){
		var result = "";
		var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
			
		if(regExp.test(val)){
		    result = val.replace(regExp, "");
		}else{
			result = val;
		}
		
		return result;
		
	},
	
	//怨듬갚 �쒓굅
	trim: function(val){
		return val.replace(/(^\s*)|(\s*$)/gi, "");
	},
	
	//�レ옄, 臾몄옄 泥댄겕
	isNumberCheck: function(val){
		if( val.match(/[^0-9]/) ) return false;
		else return true;
	},
    
	//踰꾪듉 Enabled/Disabled
    setEnableButton: function(flag){
    	if(flag){
    		$("button").attr('disabled', true);
    	}else{
    		$("button").attr('disabled', false);
    	}
    },
    
	//check undefined or null
	getValue: function(val){
		if(typeof val !== "undefined" && val !== null){
			return val;
		}else{
			return "";
		}
	},
	
	//ex - result : [2017] Test
	getStrSumValue: function(code, name, format){
		var l_val1 = "", l_val2 = "", result = "";
		
		if(typeof code !== "undefined" && code !== null){
			l_val1 = code;
		}
		if(typeof name !== "undefined" && name !== null){
			l_val2 = name;
		}
		
		if(typeof val1 !== "undefined" && val1 !== null){
			switch(format){
				case "{}":
					if(l_val1 === ""){
						result = l_val2;
					}else{
						result = "{" + l_val1 + "} " + l_val2;
					}
					break;
				case "<>":
					if(l_val1 === ""){
						result = l_val2;
					}else{
						result = "<" + l_val1 + "> " + l_val2;
					}
					break;
				case "()":
					if(l_val1 === ""){
						result = l_val2;
					}else{
						result = "(" + l_val1 + ") " + l_val2;
					}
					break;
				default:
					if(l_val1 === ""){
						result = l_val2;
					}else{
						result = "[" + l_val1 + "] " + l_val2;
					}
					break;
			}
		}else{
			if(l_val1 === ""){
				result = l_val2;
			}else{
				result = "[" + l_val1 + "] " + l_val2;
			}
		}
		
		return result;
		
	},
	
	//Download PDF
	doSendPdf: function(bukrs, gjahr, bnumb, flag){
		if(bukrs === "" || gjahr === "" || bnumb === ""){
			return false; 
		}
		
		var url = "com.hme.ge.fm.user.common.FileDownload";
		
		$("input[name='cmd']").val("PDF");
		if(flag != "") $("#send").val(flag);
		
    	var frame = document.createElement("iframe");  
    	frame.setAttribute("id",  "file_download");
    	frame.setAttribute("name","file_download");
    	frame.setAttribute("href",url);
    	
    	document.getElementById("content").appendChild(frame);
		$("#form").attr("method","post")
				  .attr("target","_blank")
				  .attr("action", url).submit();
		
		$("#form").attr("action","")
				  .attr("target","");
		document.getElementById("content").removeChild(frame);
		
	},
	
	//Print
	doPrint: function(bukrs, gjahr, bnumb){
		this.doSendPdf(bukrs, gjahr, bnumb, "");
	},
	
	//�뚯씪 �ㅼ슫濡쒕뱶
	doFileDownload: function(file_id, event){
		if (typeof FilePreview != 'undefined') {
			var fileInfo = {
				fileId: file_id
            };
            
            var options = {
            	target : FilePreview.constants.target.alink
            }
                
            if (FilePreview.showPreview(fileInfo, options, event)) {
				return false;
			}
		}
		
		common.doDirectFileDownload(file_id);
	},
	
	// �뚯씪 �ㅼ슫濡쒕뱶
	doDirectFileDownload: function(file_id){
    	if(file_id !== "" && typeof file_id !== "undefined"){
        	var url = "com.hme.ge.fm.user.common.FileDownload?cmd=DOWN&FILEID=" + file_id;
        	var frame = "";

        	if($("#file_download").length === 0 && typeof $("#file_download") !== "undefined"){
    	    	frame = $("<iframe id='file_download' name='file_download' style='display:none' href='" + url + "' >").appendTo("#content");
        	}
        	
    		$("#form").attr("method","post")
    				  .attr("target","file_download")
    				  .attr("action", url).submit();
    				  
    		$("#form").attr("action","")
    				  .attr("target","");				  
    		
    	}else{
            return false;
    	}
	},
	
	//Delete file
	doDeleteFile: function(file_id){
		var headerData =  jsonData.HeaderData;
		var param = {};
		
		param.BUKRS = headerData["BUKRS"];
		param.GJAHR = headerData["GJAHR"];
		param.BNUMB = headerData["BNUMB"];
		param.OBJKEY = file_id;
		param.cmd = "FD";
		 
		$.ajax({
	         url: "com.hme.ge.fm.user.common.CommonFunctionUtil",
	         async: true,
	         header: {},
	         data: param,
	         type: "POST",
	         success: function(data) {
	        	 
	            if(data["TYPE"] == "S"){ 
	            	setJsonDeleteFile(file_id);
	            }else{
	            	swal({   title: "Error",   text: "Delete file error",   type: "error"});
	            }
	            
	         },
	         error:function(){
	        	 swal({   title: "Error",   text: "File do not delete.",   type: "error"});
	        	 return false;
	         }
	    });
	},
	
	//Add, Change Delete button show/hide - Purchase order, Invoice parking, Budget increase, Budget Transfer
    showHiddenButton: function(flag){

    	if(flag){
    		$("#btn_add").removeClass('display_n');
    		$("#btn_change").addClass('display_n');
    		$("#btn_cancel").addClass('display_n');
    	}else{
    		$("#btn_add").addClass('display_n');
    		$("#btn_change").removeClass('display_n');
    		$("#btn_cancel").removeClass('display_n');
    	}
    	
    },

    //ex - result : 0000012345 -> 12345
    removeLeadZero: function(str) {
    	var chars = "0";
    	str = String(str);

        chars = chars || "\\s";
        return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
    }, 

    //ex - result : 12345 -> 0000012345
    addZero: function(val, len) {
    	var chars = "0";
    	var zeroText = "";
    	
    	if(typeof val === "undefined" || val === null){
    		return zeroText;
    	}
    	
    	if(typeof len === "undefined" || len === null){
    		if(val === ""){
    			return zeroText;
    		}else{
    			return val;
    		}
		}
    	
    	if(val !== "" && len !== "" && parseInt(val.length) !== parseInt(len)){
			var maxLen = parseInt(len) - parseInt(val.length);
			for(var k=0; k<maxLen; k++){
                zeroText += chars;
            }
			return zeroText + val;
		}else{
			if(val === ""){
    			return zeroText;
    		}else{
    			return val;
    		}
		}
    	
    }, 
    
    //�꾨줈�� �좎� �대쫫怨� 議곗쭅紐� �쒖떆
    setUserData: function(data){
    	var user = data.UserInfo;

    	if(user !== null && typeof user !== 'undefined'){
    		$("#userinfo_uname").html(user.UNAME);
    		$("#userinfo_orgnm").html(user.ORGNM);

    		getModalProfile(user);
    	}else{
    		$("#userinfo_uname").html("Guest");
    		$("#userinfo_orgnm").html("Organization");
    	}

    },
    
    //�뺤옣�� 媛��몄삤湲�
    getFileExtension: function(file){
    	return file.split(".").pop().toLowerCase();
    },
    
    //�뚯씪�뺤옣�먯뿉 �곕Ⅸ �꾩씠肄� �쒖떆
    getFileIcon: function(file){
    	var icon = "fa-file-o";
    	
    	if(typeof file !== "undefined" && file !== null){
	    	var arr = this.getFileExtension(file);
	
	    	if(arr === "xls" || arr === "xlsx"){
	    		icon = "fa-file-excel-o";
	    	}else if(arr === "ppt" || arr === "pptx"){
	    		icon = "fa-file-powerpoint-o";
	    	}else if(arr === "doc" || arr === "docx"){
	    		icon = "fa-file-word-o";
	    	}else if(arr === "hwp"){
	    		icon = "fa-file-code-o";
	    	}else if(arr === "zip" || arr === "zipx" || arr === "7z" || arr === "tar"){
	    		icon = "fa-file-zip-o";
	    	}else if(arr === "txt"){
	    		icon = "fa-file-text-o";
	    	}else if(arr === "pdf"){
	    		icon = "fa-file-pdf-o";
	    	}else if(arr === "jpg" || arr === "jpeg" || arr === "png" || arr === "bmp"
	    		|| arr === "gif" || arr === "tif" || arr === "tiff"){
	    		icon = "fa-file-image-o";
	    	}
    	}
    	
    	return icon;
    },
    
    PopupPostWin: function(frm, target, url, useScroll, status, resizable){
		  $("#" + frm + "").attr("target", target);
		  var features;
		  var t = "0";
		  var l = "0";
		  var option = "toolbar=no, location=no, directories=no, status=" + status + ", menubar=no, resizable=" + resizable +", scrollbars="+useScroll+", copyhistory=no"
		  features = "top=" + t + ",left=" + l + ",width=" + screen.width + ",height=" + screen.height + "," + option;
		  window.open("", target, features);
		  $("#" + frm + "").attr("action", url);
		  $("#" + frm + "").submit();
	},
    
	//Textarea �댁슜�� �곕Ⅸ �먮룞 �믪씠 怨꾩궛
    setAutoHeight: function(id, parts){
    	
		setTimeout(function(){
			if(typeof parts !== "undefined" && parts !== null){
				if(typeof $("textarea[name='" + id + "']") !== "undefined" && $("textarea[name='" + id + "']") !== null){
					var obj = $("textarea[name='" + id + "']");
					
					if(obj.length > 0){
						for(let i=0, len=obj.length; i<len; i++){
							var h = parseInt($("textarea[name='" + id + "']").eq(i).prop('scrollHeight')) - parseInt(12);
							//(h <= 53)? h = 53 : h = h;
							$("textarea[name='" + id + "']").eq(i).height(1).height( h );
						}
					}else{
						$("textarea[name='" + id + "']").height(1).height( $("textarea[name='" + id + "']").prop('scrollHeight')-12 );
					}
				}
			}else{
				var offset = parseInt($("#" + id + "").prop('offsetHeight')) - parseInt($("#" + id + "").prop('clientHeight'));
				var h = parseInt($("#" + id + "").prop('scrollHeight')) + parseInt(offset);
				(h <= 53)? h = 53 : h = h;
				$("#" + id + "").css('height', 'auto').css('height', h);
			}
		},300);
		
    },
    
    
    setAutoHeightHasMin: function(id, parts){
    	
		setTimeout(function(){
			if(typeof parts !== "undefined" && parts !== null){
				if(typeof $("textarea[name='" + id + "']") !== "undefined" && $("textarea[name='" + id + "']") !== null){
					var obj = $("textarea[name='" + id + "']");
					
					if(obj.length > 0){
						for(let i=0, len=obj.length; i<len; i++){
							var h = parseInt($("textarea[name='" + id + "']").eq(i).prop('scrollHeight')) - parseInt(12);
							if(h < 53) h = 53;
							$("textarea[name='" + id + "']").eq(i).height(1).height( h );
						}
					}else{
						$("textarea[name='" + id + "']").height(1).height( $("textarea[name='" + id + "']").prop('scrollHeight')-12 );
					}
				}
			}else{
				var offset = parseInt($("#" + id + "").prop('offsetHeight')) - parseInt($("#" + id + "").prop('clientHeight'));
				var h = parseInt($("#" + id + "").prop('scrollHeight')) + parseInt(offset);
				(h <= 53)? h = 53 : h = h;
				$("#" + id + "").css('height', 'auto').css('height', h);
			}
		},300);
		
    },    
    
    //Select box option吏��곌린 媛믩삉�� index 
    deleteSelectOption: function(id, arr, flag){
    	if(typeof flag === "undefined" || flag === null){
    		flag = false;
    	}
    	
    	if(flag){					//Index				
    		if(typeof arr !== "undefined" && arr !== null){
		    	for(var i=0, len=arr.length; i<len; i++){
		    		$("#" + id + " option:eq("+ arr[i] +")").remove();
		    	}
	    	}else{
	    	}
    	}else{						//Value
    		if(typeof arr !== "undefined" && arr !== null){
		    	for(var i=0, len=arr.length; i<len; i++){
		    		$("#" + id + " option[value='"+ arr[i] +"']").remove();
		    	}
	    	}else{
	    	}
    	}
    },
	
    //�ъ슜泥� User List
    setUserSelectBoxText: function(id){
    	var label = g_label.getData();
    	var h = [];
    	
    	$("#" + id + " option").remove();
    	
    	var html = "<option value='0'>" + label["NAME"] + "</option>"; 
    	    html += "<option value='1'>" + label["AD_ACCOUNT"] + "</option>"
    	
    	$("#" + id + "").append(html);
    	$("#" + id + " option:eq(0)").prop("selected",true);
    }
    	
};

//Array�� 以묐났�� 媛� ��젣
//ex) a = [11,3,2,5,7,3,1,8,9,13,7,9,11,13];
//    a = [1,2,3,5,7,8,9];
Array.prototype.duplicate = function(){
	var a = {};
	for(var i=0, len=this.length; i<len; i++){
		if(typeof a[this[i]] === "undefined"){
			a[this[i]] = 1;
		}
	}
	this.length = 0;
	for(var i in a){
		this[this.length] = i;
	}
	
	return this;
}