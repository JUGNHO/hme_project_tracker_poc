//Validator - 17.11.2016
$(document).ready(function () {
	/*$(".input-group.date > input[type='text']").on("blur", function(e){
    	if($(this).val() === ""){
    		swal({   title: "Warning",   text: jsonData.Message["DATE004"],   type: "warning"});
    		$(this).focus();
    		return false;
    	}else{
    		if(common.getYYYYMMDD($(this).val()).length !== 8){
    			swal({   title: "Warning",   text: jsonData.Message["DATE005"],   type: "warning"});
    			$(this).val("").focus();
        		return false;
    		}
    	}
    });*/
	
	$("input[type='text'], textarea").on("keyup", function(e){
		var id = this.id;
		setWarningClass(id);
	});
});

function setWarningClass(id){
	var obj = $("#" + id + "");
	
	if(obj.val() !== ""){
		if(obj.parent().parent().addClass("has-warning")){
			obj.parent().parent().removeClass("has-warning").parent().find("label").removeClass("has-warning");	//Label
		}
	}
}

function isGetParameter(){
	if($("input[name='utype']").val() === "" ){
        swal({   title: "Error!!",   
        	     text: jsonData.Message["ERROR006"],   
        	     type: "error",   
        	     confirmButtonColor: "#DD6B55",   
        	     confirmButtonText: "Ok",   
        	     closeOnConfirm: false }, 
        		 function(){   
        	    	 goList();
        	     });
        return false;
	}
	
	if($("input[name='trngb']").val() !== null && typeof $("input[name='trngb']").val() === 'undefined'){
		if($("input[name='trngb']").val() === "" && $("input[name='utype']").val() !== "11"){
			swal({   title: "Error!!",   
			   	     text: jsonData.Message["ERROR007"],   
			   	     type: "error",   
			   	     confirmButtonColor: "#DD6B55",   
			   	     confirmButtonText: "Ok",   
			   	     closeOnConfirm: false }, 
			   		 function(){   
			   	    	 goList();
			   	     });
	        return false;
		}
	}
	
	return true;
}

function isDetailParameter(){
	if($("input[name='gjahr']").val() === "" ){
		$("input[name='message']").val(jsonData.Message["ERROR004"]);
		$("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusServerError").submit();
		return false;
        
	}else if($("input[name='bnumb']").val() === "" ){
		$("input[name='message']").val(jsonData.Message["ERROR005"]);
		$("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusServerError").submit();
		return false;
	}
	
	return true;
}

function goMainCheck(){
	var url = document.location.href.split("/");

    if(url.indexOf("com.hme.ge.fm.budget.reports.BudgetMonthlyList") === -1){
    	$("input[name='message']").val("");
		$("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusServerError").submit();
    	
    }
}

//=======================================================
//沅뚰븳 泥댄겕 Function - �꾩옱 �ъ슜�덊븿 27.03.2017
//=======================================================
function isAuthority(){
	var userinfo = jsonData.UserInfo;
	var menuList = jsonData.MenuListTableData;
	var url = document.location.href.split("/");

	var idx = url.length - 1;
	var flag = false, flag1 = false;
	/*
	for(var i=0, len=menuList.length; i<len; i++){
		if(url[idx] === menuList[i]["LINK"]){
			flag = true;
			break;
		}
	}
	
	if(flag === false){
		$("input[name='message']").val(jsonData.Message["ERROR002"]);
		$("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusUnauthorizedError").submit();
		return false;
	}

	if(url.indexOf("commoncode") > -1 || url.indexOf("configuration") > -1){
		if( common.removeLeadZero(userinfo.AUCLS) !== constants.c_aucls_1 || common.removeLeadZero(userinfo.AUCLS) !== constants.c_aucls_4 ){
			$("input[name='message']").val(jsonData.Message["ERROR002"]);
			$("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusUnauthorizedError").submit();
			return false;
		}
	}*/
	return true;
}

function isCheckData(data){
	var userInfo = data;

	return true;
	
	if(typeof userInfo.BUKRS !== 'undefined' && userInfo.BUKRS !== constants.c_bukrs_hb03){
		$("input[name='message']").val(userInfo.BUKRS + " " + jsonData.Message["ERROR005"]);
		$("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusUnauthorizedError").submit();
        return false;
	}else if(typeof userInfo.BUKRS === 'undefined' && userInfo.BUKRS === null){
		$("input[name='message']").val(userInfo.BUKRS + " " + jsonData.Message["ERROR002"]);
		$("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusUnauthorizedError").submit();
		return false;
	}
	
	return true;
}

function isValid(){
	var flag = false, msg = "";

	//Check date
	if($("input[name='valid']").val() === "DATE"){
		if(typeof $("#frdat").val() !== "undefined" && $("#frdat").val() === ""){
			msg = "Please input the from-date";
			swal({   title: "Warning",   text: jsonData.Message["DATE003"],   type: "warning"});
			return false;
		}
		
		if(typeof $("#frdat").val() !== "undefined" && parseInt($("#frdat").val().length) !== 10){
			msg = "The from-date has wrong";
			swal({   title: "Warning",   text: jsonData.Message["DATE003"],   type: "warning"});
			return false;
		}
		
		if(typeof $("#todat").val() !== "undefined" && $("#todat").val() === ""){
			msg = "Please input the to-date";
			swal({   title: "Warning",   text: jsonData.Message["DATE003"],   type: "warning"});
			return false;
		}
		
		if(typeof $("#todat").val() !== "undefined" && parseInt($("#todat").val().length) !== 10){
			msg = "The to-date has wrong";
			swal({   title: "Warning",   text: jsonData.Message["DATE003"],   type: "warning"});
			return false;
		}
		
		if(typeof $("#frdat").val() !== "undefined" && typeof $("#todat").val() !== "undefined"){
			if(common.getYYYYMMDD($("#frdat").val()) !== "" && common.getYYYYMMDD($("#todat").val()) !== ""){
				if(common.getYYYYMMDD($("#frdat").val()) > common.getYYYYMMDD($("#todat").val())){
					swal({   title: "Warning",   text: jsonData.Message["DATE003"],   type: "warning"});
					return false;
				}
			}
		}
	}
	
	return true;
}