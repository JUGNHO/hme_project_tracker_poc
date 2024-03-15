
var jsonData = {};

$(function(){
	document.body.className = "mini-navbar";
	if($(window).width() > "1280"){
		$("body").toggleClass("mini-navbar");
	}
	isIndexedDB();
	setModalArea();
	setFooterContents();
    loadPageTop();
    loadPageDom();
    loadPageBottom();
    modalsDialogs();
    setHeaderContents();
	common_data.getUserInfoData();													//Get userinfo data
	//doCheckAutoLogout();
	//getModalLabel();
});

$(function(){
	
});

var g_webrs = setContents();
var g_langu = setContents();
var g_label = setLabelName();
var g_message = setLabelName();
var g_button = setLabelName();
var g_array = setArrayData();
var arrList = [];



function setUserData(data){
	
	jsonData.UserInfo["ADACC"] = data["ADACC"];
    jsonData.UserInfo["USRID"] = data["USRID"];
    jsonData.UserInfo["UNAME"] = data["UNAME"];
    jsonData.UserInfo["BUKRS"] = data["BUKRS"];
    jsonData.UserInfo["BUTXT"] = data["BUTXT"];
    jsonData.UserInfo["ORGCD"] = data["ORGCD"];
    jsonData.UserInfo["ORGNM"] = data["ORGNM"];
    jsonData.UserInfo["POSCD"] = data["POSCD"];
    jsonData.UserInfo["POSNM"] = data["POSNM"];
    jsonData.UserInfo["WERKS"] = data["WERKS"];
    jsonData.UserInfo["KOSTL"] = data["KOSTL"];
    jsonData.UserInfo["KTEXT"] = data["KTEXT"];
    jsonData.UserInfo["FISTL"] = data["FISTL"];
    jsonData.UserInfo["FTEXT"] = data["FTEXT"];
    jsonData.UserInfo["GSBER"] = data["GSBER"];
    jsonData.UserInfo["PRCTR"] = data["PRCTR"];
    jsonData.UserInfo["MCTXT"] = data["MCTXT"];
    jsonData.UserInfo["EMAIL"] = data["EMAIL"];
    jsonData.UserInfo["PERSK"] = data["PERSK"];
    jsonData.UserInfo["SUBGP"] = data["SUBGP"];
    jsonData.UserInfo["EXECU"] = data["EXECU"];
    jsonData.UserInfo["AUCLS"] = data["AUCLS"];
    jsonData.UserInfo["ANTXT"] = data["ANTXT"];
    jsonData.UserInfo["BIZCD"] = data["BIZCD"];
    jsonData.UserInfo["EPCHK"] = data["EPCHK"];
    jsonData.UserInfo["WIDTH"] = data["WIDTH"];
    jsonData.UserInfo["SPRAS"] = data["SPRAS"];

    setInitial();
}

function setInitial(){

	if(!isAuthority()){
    	return false;
    }
    setInitCostCenter();
    setInitUserId();
    getSubgpUser(); 		//Check Bookkeeper

    showDashboardCount();
    doLoginTime();						//User Login time
    //showNotice();						//Local indexedDB 
}

function setNoData(cols){
	var h = [];
	var message = g_message.getData();
	
	if(typeof cols === "undefined" || cols === null){
		cols = "2";
	}

	h.push('<tr>');
    h.push('<td class="td_basic_center" colspan="' + cols + '">' + message["NO_DATA"] + '</td>');
    h.push('</tr>');

    return h;
}

function setInquiryMessage(cols){
	var h = [];
	
	if(typeof cols === "undefined" || cols === null){
		cols = "2";
	}

	h.push('<tr>');
    h.push('<td class="td_basic_center" colspan="' + cols + '">Click the Inquiry/Search button</td>');
    h.push('</tr>');

    return h;
}

//==================================================    
//�꾩옱 �붾㈃�� �댁슜�� �곕씪 硫붾돱 �곸뿭�� ���댄� 湲��⑥깋 蹂�寃�
//==================================================
function setChangeMenuColor(id){
	setTimeout(function(){
		// Added New : Add Class
		$(".nav>li>a.active").removeClass('active');
		$("#" + id + " > a").addClass("active");
		
		$("#" + id + " > a").css("color","#ffffff");
		$("#" + id + "").parent().show().parent().addClass("in");
		
		if(typeof $("input[name='menuid']") !== "undefined" && $("input[name='menuid']") !== null){
			$("input[name='menuid']").val(id);
		}
    },1000);
}

//==================================================    
//Profile �앹뾽 �몄텧
//==================================================
function getProfile(){
	getModalProfile(jsonData.UserInfo);
	
	$("#modal_profile").modal("show");  
	$("#modal_profile").draggable({ cancel: "div.modal-body, div.modal-footer" });
	
}

//==================================================    
//�リ린 �⑥닔
//==================================================
function doClose(){
	self.close();
}

/*
function doCheckAutoLogout(){
	setTimeout(function(){
		doAutoLogout();
	}, constants.c_logout_time);
}

function doAutoLogout(){
	var timer = "2000";
	swal({
        title: "Auto Logout!",   
        text: jsonMsgData.Message["CHECK062"],   
        type: "warning",
        timer: timer,
        showCancelButton: false,
        showConfirmButton: false
    });
	
	setTimeout(function(){
		logout();
	}, (timer = parseInt(timer) + parseInt(timer)) );
}
*/

var timeoutTimer;
function doCheckAutoLogout(){

	if(!(typeof timeoutTimer === "undefined" || timeoutTimer === null)){
		clearTimeout(timeoutTimer);
	}
	timeoutTimer = 	setTimeout(function(){
						doAutoLogout();
					}, constants.c_logout_time);
}

function doAutoLogout(){
	swal({
        title: "Auto Logout!",   
        text: jsonMsgData.Message["CHECK062"],   
        type: "warning",
        showCancelButton: false,
        showConfirmButton: true,
        allowEscapeKey: false,
    },function () {
    	clearTimeout(timeoutTimer);
    	logout();
    });
}


function doLogout(){
	swal({
        title: "Logout!",   
        text: jsonMsgData.Message["CONFIRM015"],   
        type: "warning",
        showCancelButton: true,
        showConfirmButton: true
    },function(isConfirm){
    	if(isConfirm){
    		logout();
    	}else{
    		//doAutoLogout();
    	}
    });
}

//==================================================
//Log out 
//==================================================
function logout(){
	// doLogoutTime();				//Check Log out Time
/*	
	try{
		if(opener){
			//opener.EPCM.raiseEvent("urn:com.sapportals.portal:user","logoff","");k=new Date().getTime();window.setTimeout(LSAPI.sessionPlugin._private.logoffDelay,50)
		    //window.close();
			$("form:first").append("<input type='hidden' name='logout_submit' value='true'>");
		    $("#form").attr("action","/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent").submit();
		}else{
			$("form:first").append("<input type='hidden' name='logout_submit' value='true'>");
		    $("#form").attr("action","/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent").submit();
		}
	}catch(e){
		$("form:first").append("<input type='hidden' name='logout_submit' value='true'>");
	    $("#form").attr("action","/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent").submit();
	}
*/	
	
	// try{
	// 	if(opener){
	// 		var hostname = window.location.hostname;
	// 		if(hostname === "qa-hr-eu.hyundai.eucorp.local" || hostname === "hr-eu.hyundai.eucorp.local"){
	// 			opener.top.location.href="/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent?logout_submit=true";
	// 			setTimeout(function(){ window.close(); }, 500);
	// 		}else{
	// 			$("form:first").append("<input type='hidden' name='logout_submit' value='true'>");
	// 		    $("#form").attr("action","/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent").submit();				
	// 		}
			
	// 		//opener.EPCM.raiseEvent("urn:com.sapportals.portal:user","logoff","");k=new Date().getTime();window.setTimeout(LSAPI.sessionPlugin._private.logoffDelay,50)
	// 	    //window.close();
	// 		//$("form:first").append("<input type='hidden' name='logout_submit' value='true'>");
	// 	    //$("#form").attr("action","/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent").submit();
	// 	}else{
	// 		$("form:first").append("<input type='hidden' name='logout_submit' value='true'>");
	// 	    $("#form").attr("action","/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent").submit();
	// 	}
	// }catch(e){
	// 	$("form:first").append("<input type='hidden' name='logout_submit' value='true'>");
	//     $("#form").attr("action","/irj/servlet/prt/portal/prtroot/com.sap.portal.navigation.masthead.LogOutComponent").submit();
	// }	
    
}

//Set init data
function setInitCostCenter() {
	var data = jsonData.UserInfo;
	
	if(typeof $("input[name='utype']").val() !== "undefined" && $("input[name='utype']").val() !== null){
		if($("input[name='utype']").val() === constants.c_utype_61 || $("input[name='utype']").val() === constants.c_utype_62){
			if(typeof $("input[name='viewName']").val() !== "undefined" && $("input[name='viewName']").val() !== null && $("input[name='viewName']").val() === "C"){
				setTimeout(function(){
					$('#kostl').val(data.KOSTL);
				    $('#kostlt').val(data.KTEXT).tooltip({title: data.KTEXT, placement: constants.c_tooltip_placement});
				}, 100);
			}
		}
	}
}

function setInitUserId() {
	var data = jsonData.UserInfo;

	if(typeof $("input[name='viewName']").val() !== "undefined" && $("input[name='viewName']").val() === "C"){
		if(typeof $('#reqid').val() !== "undefined" && $('#reqid').val() === ""){
			$('#reqid').val(data.USRID);
			$('#reqnm').val(data.UNAME).tooltip({title: data.UNAME, placement: constants.c_tooltip_placement});
			$('#reqdp').val(data.ORGCD);
			$('#reqdp_nm').val(data.ORGNM);
		}
	}
}

function goDirectMove(gubun){

	//Request  - 1~20源뚯� �뺤쓽
	//Approval - 21~40源뚯� �뺤쓽
	//Reports  - 41~60源뚯� �뺤쓽

	gubun = String(gubun);

	if(gubun === "15"){
		$("input[name='utype']").val("52");
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.purchaseorder.PurchaseOrderCreate").submit();
	}else if(gubun === "16"){
		$("input[name='utype']").val("11");
		$("input[name='trngb']").val("20");
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.invoiceparking.InvoiceParkingCreate").submit();
	}else if(gubun === "17"){
		$("input[name='utype']").val("61");
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.budget.increase.BudgetIncreaseCreate").submit();
	}else if(gubun === "18"){
		$("input[name='utype']").val("62");
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.budget.transfer.BudgetTransferCreate").submit();
	}else if(gubun === "1"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.purchaseorder.PurchaseOrderList").submit();
	}else if(gubun === "2"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.invoiceparking.InvoiceParkingList").submit();
	}else if(gubun === "3"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.budget.increase.BudgetIncreaseList").submit();
	}else if(gubun === "4"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.budget.transfer.BudgetTransferList").submit();
	}else if(gubun === "21"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.document.approval.FundsApprovalList").submit();
	}else if(gubun === "22"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.document.approval.DocumentApprovalList").submit();
	}else if(gubun === "23"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.document.approval.BudgetApprovalList").submit();
	}else if(gubun === "41"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.budget.reports.BudgetMonthlyList").submit();
	}else if(gubun === "42"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.budget.reports.BudgetYearlyList").submit();
	}else if(gubun === "44"){
		$("#form").attr("method","post").attr("action", "com.hme.ge.fm.filemanagement.FileManagementList").submit();		
	}else if(gubun === "99"){
		swal({   title: "Error",   text: "Under construction",   type: "error"});
        return false;
	}

}

function goMoveMenu(url){

	//Request  - 1~20源뚯� �뺤쓽
	//Approval - 21~40源뚯� �뺤쓽
	//Reports  - 41~60源뚯� �뺤쓽

	url = String(url);
	showLoading();

	if(url !== ""){
		document.location.href = url;
	}else{
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK070"],   type: "error"});
		return false;
	}

}

function goTcodeMoveMenu(val){
	var param = {};
	
	val = common.addZero(val, "4");
	val = String(val);
	
	param.cmd = "TCODE";
	param.menid = encodeURIComponent(val);
	
	showLoading();
	
	$.ajax({
	    url: "com.hme.ge.fm.user.common.SystemCommonFuncList",
	    async: true,
	    header: {},
	    data: param,
	    type: "POST",
	    success: function(data) {
	    	if(typeof data.Result.TYPE !== "undefined" && data.Result.TYPE === "E"){
	    		hideLoading();
	    		swal({   title: "Error",   text: data.Result.MESSAGE,   type: "error"});
	    		return false;
	    	}else{
	    		setData(data);
	    	}
	    },
	    error:function(){
	    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX026"],   type: "error"});
	    	return false;
	    }
	    
	});
	
	function setData(data){
		if(data.MenuData.length > 1){
			hideLoading();
			swal({   title: "Error",   text: jsonMsgData.Message["CHECK070"],   type: "error"});
	    	return false;
		}else{
			var obj = data.MenuData[0];
			
			if(obj.LINK === ""){
				hideLoading();
				swal({   title: "Error",   text: jsonMsgData.Message["CHECK070"],   type: "error"});
		    	return false;
			}
			
			$("#form").attr("method","post").attr("action", obj.LINK).submit();
			//document.location.href = url;
		}
	}

}

function goShortCut(gubun){
	var count = jsonData.BudgetParamTableData.length;
	var iText = "";

	if(count > 0){

		for(var i=0; i<count; i++){
			jsonData.BudgetParamTableData[i]["NO"] = i+1;
		}
		
		
		jsonData.BudgetParamTableData.sort(function(a1, a2){
			return (a2["NO"] - a1["NO"]);
		})
		var oData = jsonData.BudgetParamTableData;

		oData = JSON.stringify(oData);


		iText = "Total: <span style='color:#FF0000'>" + count + "</span>";
		iText = "Do you want to move? " + iText;
		$("input[name='param']").val(oData);

		swal({
	        title: "Go to the creation screen!",   
	        text: iText,   
	        type: "info",
	        html: true,
	        showCancelButton: true,
	        showConfirmButton: true
	    },function(isConfirm){
	        if(isConfirm){
	        	goDirectMove(gubun);
	        }	       
	    });
	}else{
		goDirectMove(gubun);
	}
}

function modalsDialogs(){
	$("#btn_vendor_search").on("click",function() {
        $("#modal_vendor").modal("show");
    });

    $('#modal_vendor_btn_search').on("click",function() {
        doSearchVendor();
    });

    $("#btn_costcenter_search").on("click",function() {
        $("#modal_costcenter").modal("show");
    });

    $('#modal_costcenter_btn_search').on("click",function() {
        doSearchCostCenter();
    });

    $("#btn_event_search").on("click",function() {
        $("#modal_event").modal("show");
    });

    $('#modal_event_btn_search').on("click",function() {
        doSearchEvent();
    });

    $("#btn_account_search").on("click",function() {
        $("#modal_account").modal("show");
    });

    $('#modal_account_btn_search').on("click",function() {
        doSearchAccount();
    });

    $('#btn_asset_search').on("click",function(){
        $('#modal_asset').modal('show');
    });

    $('#modal_asset_btn_search').on("click",function(){
        doSearchAsset();
    });
    
    // $('#btn_add').on("click",function(){
    //     doAddLine();
    // });

    // $('#btn_change').on("click",function(){
    //     doChangeLine();
    // });
    
    // $('#btn_delete').on("click",function(){
    //     doDeleteLine();
    // });
    
}

function setDateFormat(){
	$.fn.datepicker.defaults.format = constants.c_date_Lformat;
	
	$('#holding_date_from_icon1').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
    });
	
	$('#holding_date_from_icon2').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
    });
	
}

//from dashboard to approval
function goApproveView(gubun){
	var url = "com.hme.ge.fm.document.approval.";

	if(gubun === "P"){				//Budget
		url += "FundsApprovalList";
	}else if(gubun === "I"){		//Funds
		url += "DocumentApprovalList";
	}else if(gubun === "BT"){		//Invoice Parking
		url += "BudgetTransferApprovalList";
	}else if(gubun === "BI"){		//Text-RFA
		url += "BudgetIncreaseApprovalList";
	}

	//url = url + "?cmd=SEARCH"
	//		  + "&frdat="
	//		  + "&todat="
	//		  //+ "UTYPE=A" 
	//		  + "&timestamp=" + (new Date()).getTime();
	
	//From date = �댁쟾�ъ쓽 泥レ㎏��
	//To date = �꾩옱�붿쓽 留덉�留� �좎쭨
	//added 27.03.2017
	$("input[name='cmd']").val('SEARCH');
	$("input[name='cstat']").val('');
	$("input[name='frdat']").val(common.getPreviosFirstDate());
	$("input[name='todat']").val(common.getSystemLastDate());
	
	showLoading();
	$("#form_dash").attr("method","post").attr("action",url).submit();  
}

//from dashboard to reports
function goEPUrl(gubun, status){
	var url = "com.hme.ge.fm.document.reports.";

	if(gubun === "P"){				//Budget
		url += "PurchaseOrderRequestedList";
	}else if(gubun === "I"){		//Funds
		url += "InvoiceParkingRequestedList";
	}else if(gubun === "BT"){		//Invoice Parking
		url += "BudgetTransferRequestedList";
	}else if(gubun === "BI"){		//Text-RFA
		url += "BudgetIncreaseRequestedList";
	}

	//url = url + "?cmd=SEARCH"
	//          + "&cstat=" + status
	//		  + "&frdat="
	//		  + "&todat="
	//		  + "&timestamp=" + (new Date()).getTime();
	
	$("input[name='cmd']").val('SEARCH');
	$("input[name='cstat']").val(status);
	$("input[name='frdat']").val();
	$("input[name='todat']").val();

	showLoading();
	$("#form_dash").attr("method","post").attr("action",url).submit();     
}

function goRequestView(gubun, status){
 
}

function doSearchVendor() {
    var code = $('#modal_vendor_code').val();
    var desc = $('#modal_vendor_desc').val();
    var param = "code=" + encodeURIComponent(code) + "&desc=" + encodeURIComponent(desc);
    
    $.ajax({
	    url: "com.hme.ge.fm.user.common.Vendor",
	    async: true,
	    header: {},
	    data: param,
	    type: "POST",
	    success: function(data) {
	    	var objData = data.Vendor;
            var h = [];
            
            if(typeof objData !== "undefined" && objData.length > 0){
	            for (let i=0, len=objData.length; i<len; i++) {
	            	
	            	h.push("<tr class='cur_pit'>");
	                h.push("<td>" + objData[i]["LIFNR"] + "</td>");
	                h.push("<td class='text_ellipsis'>" + objData[i]["NAME1"] + "</td>");
	                h.push("<td>" + objData[i]["ADRNR"] + "</td>");
	                h.push("</tr>");
	                
	            }
	
	            $('#modal_vendor_table > tbody').html(h.join(''));
	            
	            $('#modal_vendor_table tbody td').on("click", function(){
	            	var row = $(this).parent().get(0); 
	            	var td1 = row.cells[0];                                 
	            	var td2 = row.cells[1]; 
	            	
	            	if(typeof td1 !== "undefined" && td1 !== null && typeof td2 !== "undefined" && td2 !== null){
	            		setVendor($(td1).html(), $(td2).html());
	            	}
	            });

            }
	    },
	    error:function(){
	        swal("Request failed");
	    }
	});
    
}

function setVendor(code, desc) {
    $('#lifnr').val(code);
    $('#lifnr_nm').html(desc);
    $('#modal_vendor').modal('hide');

    $('#modal_costcenter').modal('show');
    doSearchCostCenter();
    setDeleteVendor();
}

function setDeleteVendor(){
	$('#modal_vendor_code').val("");
    $('#modal_vendor_desc').val("");
}

function doSearchCostCenter() {
    var code = $('#modal_costcenter_code').val();
    var desc = $('#modal_costcenter_desc').val();
    var param = "cmd=UC&code=" + encodeURIComponent(code) + "&desc=" + encodeURIComponent(desc) +
    			"&UTYPE=" + encodeURIComponent($("input[name='utype']").val());
    
    $.ajax({
	    url: "com.hme.ge.fm.user.common.CostCenter",
	    async: true,
	    header: {},
	    data: param,
	    type: "POST",
	    success: function(data) {
	    	var objData = data.CostCenter;
            var h = [];
            
            if(typeof objData !== "undefined" && objData.length > 0){
	            for (var i=0, len=objData.length; i<len; i++) {
	            	h.push('<tr onclick="javascript:setCostCenter(\'' + objData[i]["KOSTL"] + '\',\'' + objData[i]["KTEXT"] + '\');" style="cursor:pointer;">');
	                h.push('<td>' + objData[i]["KOSTL"] + '</td>');
	                h.push('<td>' + objData[i]["KTEXT"] + '</td>');
	                h.push('</tr>');
	            }
	
	            $('#modal_codecenter_table > tbody').html(h.join(''));
            }
	    },
	    error:function(){
	        swal("Request failed");
	    }
	});

}

function setCostCenter(code, desc) {
    $('#kostl').val(code);
    $('#kostlt').html(desc);
    $('#modal_costcenter').modal('hide');

    $('#modal_event').modal('show');
    doSearchEvent();
    setDeleteCostCenter();
}

function setDeleteCostCenter() {
   $('#modal_costcenter_code').val("");
   $('#modal_costcenter_desc').val("");
}

function doSearchEvent() {
    var code = $('#modal_event_code').val();
    var desc = $('#modal_event_desc').val();
    
    
    var param = "cmd=FD&GEBER=" + encodeURIComponent(code) + "&GEBERT=" + encodeURIComponent(desc) + "&UTYPE=" + encodeURIComponent($('#utype').val())
              + "&GJAHR=" + encodeURIComponent($("#year").val()) + "&KOSTL=" + encodeURIComponent($('#kostl').val());
    
    if($('#reqid').val() !== null && typeof $('#reqid').val() !== "undefined"){
    	param += "&REQID=" + encodeURIComponent($('#reqid').val());
    }
    
    $.ajax({
	    url: "com.hme.ge.fm.user.common.CommonCostObject",
	    async: true,
	    header: {},
	    data: param,
	    type: "POST",
	    success: function(data) {
	    	var objData = data.Fund;
            var h = [];
            
            if(typeof objData !== "undefined" && objData.length > 0){
	            for(var i=0, len=objData.length; i<len; i++){
	            	h.push('<tr onclick="javascript:setEvent(\'' + objData[i]["GEBER"] + '\',\'' + objData[i]["GEBERT"] + '\');" style="cursor:pointer;">');
	                h.push('<td>' + objData[i]["GEBER"] + '</td>');
	                h.push('<td>' + objData[i]["GEBERT"] + '</td>');
	                h.push('</tr>');
	            }
	
	            $('#modal_event_table > tbody').html(h.join(''));
            }
	    },
	    error:function(){
	        swal("Request failed");
	    }
	});
    
}

function setEvent(code, desc) {
    $('#geber').val(code);
    $('#gebert').html(desc);
    $('#modal_event').modal('hide');

    if($('#accty').val() === 'E'){
        $('#modal_account').modal('show');
        doSearchAccount();
    }else if($('#accty').val() === 'A'){
        $('#modal_asset').modal('show');
        doSearchAsset();
    }
    setDeleteEvent();
}

function setDeleteEvent() {
    $('#modal_event_code').val("");
    $('#modal_event_desc').val("");
}

function doSearchAccount() {
	var param = "cmd=GL&utype=" + encodeURIComponent($('input[name="utype"]').val()) +
		        "&gjahr=" + encodeURIComponent($("#year").val()) +
		        "&gname=" + encodeURIComponent($('#modal_account_code').val()) +
		        "&aname=" + encodeURIComponent($('#modal_account_desc').val()) + 
				"&geber=" + encodeURIComponent($("#geber").val()) +
		        "&kostl=" + encodeURIComponent($("#kostl").val());
    
    $.ajax({
	    url: "com.hme.ge.fm.user.common.AccountList",
	    async: true,
	    header: {},
	    data: param,
	    type: "POST",
	    success: function(data) {
	    	var objData = data.Account;
            var h = [];

            if(typeof objData !== "undefined" && objData.length > 0){
	            for (var i=0, len=objData.length; i<len; i++) {
	            	h.push('<tr onclick="javascript:setAccount(\'' + objData[i]["GFIPEX"] + '\',\'' + objData[i]["GFIPEXT"] + '\');" style="cursor:pointer;">');
	                h.push('<td>' + objData[i]["MFIPEX"] + '</td>');
	                h.push('<td>' + objData[i]["MFIPEXT"] + '</td>');
	                h.push('<td>' + objData[i]["GFIPEX"] + '</td>');
	                h.push('<td>' + objData[i]["GFIPEXT"] + '</td>');
	                h.push('</tr>');
	            }
	
	            $('#modal_account_table > tbody').html(h.join(''));
            }
	    },
	    error:function(){
	        swal("Request failed");
	    }
	});

}

function setAccount(code, desc) {
    $('#saknr').val(code);
    $('#saknrt').html(desc);
    $('#modal_account').modal('hide');
}

function doSearchAsset() {
    var code = $('#modal_asset_code').val();
    var desc = $('#modal_asset_desc').val();
    var param = "anln1=" + encodeURIComponent(code) + "&anln1t=" + encodeURIComponent(desc);

    $.ajax({
	    url: "com.hme.ge.fm.user.common.Asset",
	    async: true,
	    header: {},
	    data: param,
	    type: "POST",
	    success: function(data) {
	    	var objData = data.Asset;
            var h = [];
            if(typeof objData !== "undefined" && objData.length > 0){
	            for (var i=0, len=objData.length; i<len; i++) {
	            	h.push('<tr onclick="javascript:setAsset(\'' + objData[i]["ANLN1"] + '\',\'' + objData[i]["ANLN1T"] + '\');" style="cursor:pointer;">');
	                h.push('<td>' + objData[i]["ANLN1"] + '</td>');
	                h.push('<td>' + objData[i]["ANLN1T"] + '</td>');
	                h.push('</tr>');
	            }
	
	            $('#modal_asset_table > tbody').html(h.join(''));
            }
	    },
	    error:function(){
	        swal("Request failed");
	    }
	});
    
}

function setAsset(code, desc) {
    $('#anln1').val(code);
    $('#anln_nm').html(desc);
    $('#modal_asset').modal('hide');
}

function doSearchAsset() {
    $('#modal_asset_code').val("");
    $('#modal_asset_desc').val("");
}

//Change approval line
function showAllEmployee(){
	$('#modal_change_approval_table > tbody').html(setNoData().join(''));
    $("#modal_change_approval").modal("show");
    $('#modal_change_user_name').focus();
    setModalApprovalData();
}

//Click search button
function doSearchEmployee() {
    var usrid = "";
    var uname = $('#modal_change_user_name').val();
    var param = "cmd=AE&utype=" + encodeURIComponent($("input[name='utype']").val()) + "&usrid=" + encodeURIComponent(usrid) + "&uname=" + encodeURIComponent(uname);
    gl_index.setData("");
    
    $.ajax({
        url: "com.hme.ge.fm.user.common.CommonBasicList",
        async: true,
        header: {},
        data: param,
        type: "POST",
        success: function(data) {
            var objData = data.Employee;
            var h = [];
            $('#modal_change_approval_table > tbody').html('');
            
            if(typeof objData !== "undefined" && objData.length > 0){
                for (let i=0, len=objData.length; i<len; i++) {
                	arrList.push(objData[i]);
                	h.push('<tr onclick="javascript:setColorLeftTable(' + i + ', \'O\')" ondblclick="javascript:setColorLeftTable(' + i + ', \'D\')" class="cur_pit">'); 
                    h.push('<td class="td_basic_left width_20">' + objData[i]["UNAME"] + '</td>');
                    h.push('<td class="td_basic_left width_30">' + objData[i]["ORGNM"] + '</td>');
                    //h.push('<td class="td_basic_left width_20">' + objData[i]["CRUNM"] + '</td>');
                    //h.push('<td class="td_basic_left width_30">' + objData[i]["ORGNM_T"] + '</td>');
                    h.push('</tr>');
                    
                }
    
            }else{
                h = setNoData("2");
            }

            $('#modal_change_approval_table > tbody').html(h.join(''));
        },
        error:function(){
            swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
            return false;
        }
    });
    
}

function setEmployee(code, desc, orgcd, ogrnm) {
    $('#reqid').val(code);
    $('#reqnm').val(desc);
    $('#reqnm').attr("title",desc);
    $('#reqdp').val(orgcd);
    $('#reqdp_nm').val(ogrnm);
    setDeleteModalEmployee();
    $('#modal_user_table > tbody').html(setNoData().join(''));
    $('#modal_user').modal('hide');

}

function setDeleteModalEmployee(){
    //$('#modal_user_id').val("");
    $('#modal_user_name').val("");
}

function setDeleteEmployee(){
    $('#reqid').val("");
    $('#reqnm').val("");
    $('#reqnm').attr("title","");
    $('#reqdp').val("");
    $('#reqdp_nm').val("");
}

function doAjaxSearchEmployee() {
	if($("#reqnm").val() !== ""){
    	$('#modal_user_name').val($("#reqnm").val());
    }else{
    	showAllEmployee();
    	return false;
    }
    var usrid = "";
    var uname = $('#modal_user_name').val();
    var param = "cmd=AE&utype=" + encodeURIComponent($("input[name='utype']").val()) + "&usrid=" + encodeURIComponent(usrid) + "&uname=" + encodeURIComponent(uname);
    gl_index.setData("");
    
    $.ajax({
        url: "com.hme.ge.fm.user.common.CommonBasicList",
        async: true,
        header: {},
        data: param,
        type: "POST",
        success: function(data) {
            var objData = data.Employee;

            if(typeof objData !== "undefined" && objData !== null){
                if(objData.length == 1){
                	setUser(objData[0]["USRID"], objData[0]["UNAME"], objData[0]["UNAME"], objData[0]["ORGNM"]);
                }else{
                	showUser();
                }
            }else{
            	showUser();
            }
        },
        error:function(){
            swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
        }
    });
    
}

function setDeleteApprovalline(){
	swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
	return false;
}

//遺�紐⑥갹�� 寃곗옱�쇱씤 modal李쎌쑝濡� 媛��몄삤湲�
var gl_index = setContents();
var gr_index = setContents();
var reqLine = setLabelName();
function setModalApprovalData() {
    var appData = jsonData.RequestLineTableData;
    var h = [], objData = [];
    var disabled = "";

    //�붿껌�먯� 寃곗옱�� 援щ텇
    if(typeof jsonData.ApproverLineTableData !== "undefined" && jsonData.ApproverLineTableData !== null){
    	if(jsonData.ApproverLineTableData.length === 0){
		    if(typeof appData !== "undefined" && appData !== null){
		    	for(var i=0, len=appData.length; i<len; i++){
		    		if(appData[i]["RELTYP"] === "R" && appData[i]["APPDG"] === "R"){
		    			reqLine.setData(appData[i]);
		    		}else{
		    			jsonData.ApproverLineTableData.push(appData[i]);
		    		}
		    	}
		    }
    	}
    }else{
    	console.log("jsonData.ApproverLineTableData is undefined or null.")
    }
    
    var objData = jsonData.ApproverLineTableData;
    $('#modal_parent_approval_table > tbody').html('');
    
    if(typeof objData !== "undefined" && objData !== null){
    	if(objData.length > 0){
	        for (let i=0, len=objData.length; i<len; i++) {
	        	if(objData[i]["OBLIG"] === "X"){ disabled = "disabled"; }else{ disabled = ""; }
	            h.push('<tr onclick="javascript:setColorRightTable(' + i + ', \'O\')" ondblclick="javascript:setColorRightTable(' + i + ', \'D\')" class="cur_pit">');
	            h.push('<td class="td_basic_left width_40"><select name="reltyp" ' + disabled + ' class="input-sm form-control" onChange="javascript:setChangeReltypeValue(\'' + i + '\',\'' + this + '\');">'+ getAppStep(i) +'</select></td>');
	            h.push('<td class="td_basic_left width_30">' + objData[i]["UNAME"] + '</td>');
	            if(typeof objData[i]["UNAME_T"] !== "undefined" && objData[i]["UNAME_T"] !== null){
	            	h.push('<td class="td_basic_left width_30">' + objData[i]["UNAME_T"] + '</td>');
	            }else{
	            	h.push('<td class="td_basic_left width_30">&nbsp;</td>');
	            }
	            h.push('</tr>');
	            
	        }
    	}else{
    		h = setNoData("3");
    	}

    }else{
        h = setNoData("3");
    }

    $('#modal_parent_approval_table > tbody').html(h.join(''));
    //setIndexDataReset();
    if(String(gr_index.getData()) !== ""){
    	setColorRightTable(gr_index.getData(), 'O');
    }
    
    //setInitialColor("right");
    
}

//Make selectbox option
function getAppStep(idx){
	var objData = jsonData.ApproverLineTableData;
	var len = approval_step.length;
	var iHtml = "", selected = "";
	
	if(len > 0){
		for(var j=0; j<len; j++){
			var tmp_value = approval_step[j]["key"];
			var tmp_text = approval_step[j]["name"];
			
			if(tmp_value === jsonData.ApproverLineTableData[idx]["RELTYP"]){
				selected = "selected";
			}else{
				selected = "";
			}
			
			iHtml += "<option value=\"" + tmp_value + "\" " + selected + ">";
			iHtml += tmp_text + "</option>";
		}
			
	}
	
	return iHtml;
}

function setColorLeftTable(oRow, gubun){
	var rowLen = $("#modal_change_approval_table tbody tr").length;
    var oCell = $("#modal_change_approval_table tbody").parent().children().index($("#modal_change_approval_table tbody"));                     //�좏깮�� Cell
    var obj = $('#modal_change_approval_table tbody tr:first td');                //td count
    
    if(oCell !== 0){
    	//When you select row, Change row color
    	for(var i=0; i<rowLen; i++){
    		for(var j=0, len=obj.length; j<len; j++){
    			$('#modal_change_approval_table tbody tr').eq(i).find('td').eq(j).removeClass("selected_3");
    		}
    	}
    	
    	for(var i=0, len=obj.length; i<len; i++){
    		$('#modal_change_approval_table tbody tr').eq(oRow).find('td').eq(i).addClass("selected_3");
    	}
    	//When you select row, Change row color
    	
    	if(oRow !== ""){
    		gl_index.setData(oRow);
    		if(typeof arrList !== "undefined" && arrList !== null){
    			g_array.setArray(arrList[oRow]);
    		}
    	}
    	
    }
    
    //double click 誘몄궗�⑹떆 二쇱꽍泥섎━
    if(gubun === "D"){
    	doAddUser();
    }
    
}

function setColorRightTable(oRow, gubun){
	var rowLen = $("#modal_parent_approval_table tbody tr").length;
    //var oRow = $(this).parent().parent().children().index($(this).parent());    //�좏깮�� Row
    var oCell = $("#modal_parent_approval_table tbody").parent().children().index($("#modal_parent_approval_table tbody"));                     //�좏깮�� Cell
    var obj = $('#modal_parent_approval_table tbody tr:first td');                //td count

    if(oCell !== 0){
    	//When you select row, Change row color
    	for(var i=0; i<rowLen; i++){
    		for(var j=0, len=obj.length; j<len; j++){
    			$('#modal_parent_approval_table tbody tr').eq(i).find('td').eq(j).removeClass("selected_3");
    		}
    	}
    	
    	for(var i=0, len=obj.length; i<len; i++){
    		$('#modal_parent_approval_table tbody tr').eq(oRow).find('td').eq(i).addClass("selected_3");
    	}
    	//When you select row, Change row color
    	
    	if(oRow !== ""){
    		gr_index.setData(oRow);
    		g_array.setArray(jsonData.ApproverLineTableData[oRow]);
    	}
    	
    }
    
    //double click 誘몄궗�⑹떆 二쇱꽍泥섎━
    if(gubun === "D"){
    	doDelUser();
    }
    //double click 誘몄궗�⑹떆 二쇱꽍泥섎━
    
}

//Click add button
function doAddUser(){
	var array = g_array.getArray();
	var len = jsonData.ApproverLineTableData.length;
	var label = g_label.getData();
	var row = {};
	
	if(gl_index.getData() === ""){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK046"],   type: "error"});
		return false;
	}
	
	if(len > 0){
		for(var i=0; i<len; i++){
			if(jsonData.ApproverLineTableData[i]["APPID"] === array["USRID"]){
				swal({   title: "Error",   text: jsonMsgData.Message["CHECK048"],   type: "error"});
				setInitialColor("left");
				gl_index.setData("");
				return false;
			}
		}
	}
	
	if(typeof array !== "undefined" && array !== null){
		
		row["RELTYP_T"] = "REQ";
		row["ORGNM"]    = array["ORGNM"];
		row["PKTXT"]    = "";
		row["DGTXT"]    = label["REQ_DEPT"];
		row["ADATEM"]   = "";
		row["ASTAT"]    = "";
		row["ADATE"]    = "";
		if(typeof array["ORGNM_T"] !== "undefined" && array["ORGNM_T"] !== null){
    		row["ORGNM_T"]    = array["ORGNM_T"];
    	}else{
    		row["ORGNM_T"]    = "";
    	}
		row["RELSEQ"] = len + 1;
		row["ORGCD"]  = array["ORGCD"];
		row["PERSK"] = "";
		if(typeof array["UNAME_T"] !== "undefined" && array["UNAME_T"] !== null &&
		   typeof array["ORGNM_T"] !== "undefined" && array["ORGNM_T"] !== null){
			row["TFNAME"] = array["UNAME_T"] + "/" + array["ORGNM_T"];
		}else{
			row["TFNAME"] = "";
		}
		row["APPID"] =  array["USRID"];
		row["PERTY"] = "";
		if(typeof array["UNAME_T"] !== "undefined" && array["UNAME_T"] !== null){
    		row["UNAME_T"]    = array["UNAME_T"];
    	}else{
    		row["UNAME_T"]    = "";
    	}
		row["ATIME"] = "";
		if(typeof array["TAKER"] !== "" && array["TAKER"] !== null){
    		row["TAKER"]    = array["TAKER"];
    	}else{
    		row["TAKER"]    = ""
    	}
		row["UNAME"] = array["UNAME"];
		if(typeof array["ORGCD_T"] !== "undefined" && array["ORGCD_T"] !== null){
    		row["ORGCD_T"]    = array["ORGCD_T"];
    	}else{
    		row["ORGCD_T"]    = ""
    	}
		row["UFNAME"] = array["UNAME"] + "/" + array["ORGNM"];
		if(typeof array["POSNM_T"] !== "undefined" && array["POSNM_T"] !== null){
    		row["POSNM_T"]    = array["POSNM_T"];
    	}else{
    		row["POSNM_T"]    = "";
    	}
		row["OPINION"]  = "";
		row["ASTAT_T"]  = "";
		row["AELSEQ"]   = len + 1;
		row["APPTYP_T"] = approval_step[0]["name"];	//Default is 'Approval'
		row["RELTYP"]   = constants.c_reltyp_a;
		row["APPDG"]    = "R";						//R: Requesting Dept, C: Controlling Dept.
		row["APPTYP"] = constants.c_reltyp_a;
		row["STRLEN"]   = "0";
		row["OBLIG"]    = "";
		row["POSNM"]    = array["POSNM"];
		
		jsonData.ApproverLineTableData.push(row);
		g_array.resetArray();
		setInitialColor("left");
		gl_index.setData("");
		setModalApprovalData();
		setInitialColor("right");
	}
	
}

//Click del button
function doDelUser(){
	var array = g_array.getArray();
	var obj = jsonData.ApproverLineTableData; 
	var newData = [];
	
	if(gr_index.getData() === ""){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK046"],   type: "error"});
		return false;
	}
	
	//湲곕낯 寃곗옱�먮뒗 ��젣 湲덉� - 02.02.2017
	if(array["OBLIG"] === "X"){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK047"],   type: "error"});
		return false;
	}
	//湲곕낯 寃곗옱�먮뒗 ��젣 湲덉� - 02.02.2017
	
	if(typeof array !== "undefined" && array !== null){
		for(var i=0, max=obj.length; i<max; i++){
			if(obj[i]["APPID"] !== array["APPID"]){
				newData.push(obj[i]);
			}
		}
		jsonData.ApproverLineTableData = [];
    	jsonData.ApproverLineTableData = newData;
		g_array.resetArray();
		setInitialColor("right");
		gr_index.setData("");
		setModalApprovalData();
	}
}

//Click up button
function doUpUser(){
    var selectIndex = gr_index.getData();
    var objData = jsonData.ApproverLineTableData;
    var newData = [];
    var selRow = {}, oldRow = {};
    
    if(String(selectIndex) === ""){
        swal({   title: "Error",   text: "No selected user",   type: "error"});
        return false;
    }
    
    selectIndex = Number(selectIndex);
    if(selectIndex === 0){
    	return false;
    }
    
    if(selectIndex !== "" && selectIndex <= objData.length){
    	selRow = objData[selectIndex];
    	oldRow = objData[selectIndex - 1];
    	
    	if(oldRow["ASTAT"] === "1" || oldRow["ASTAT"] === "2" || oldRow["ASTAT"] === "3" || 
    	   selRow["ASTAT"] === "1" || selRow["ASTAT"] === "2" || selRow["ASTAT"] === "3"){
    		swal({   title: "Error",   text: "Don't move approved user",   type: "error"});
        	return false;
    	}
    	
    	for(var i=0, len=objData.length; i<len; i++){
            if(i === (selectIndex - 1)){
            	selRow["AELSEQ"] = selectIndex;
            	newData.push(selRow);
        	}else if(i === selectIndex){
        		oldRow["AELSEQ"] = selectIndex + 1;
        	    newData.push(oldRow);
        	}else{
        		newData.push(objData[i]);
        	}
		}
    	
    	jsonData.ApproverLineTableData = [];
    	jsonData.ApproverLineTableData = newData;
    	gr_index.setData(selectIndex-1);
    	setModalApprovalData();
    	
    }
}

//Click down button
function doDownUser(){
    var selectIndex = gr_index.getData();
    var objData = jsonData.ApproverLineTableData;
    var newData = [];
    var selRow = {}, oldRow = {};
    
    if(String(selectIndex) === ""){
        swal({   title: "Error",   text: "No selected user",   type: "error"});
        return false;
    }
    
    selectIndex = Number(selectIndex);
    if(selectIndex+1 === objData.length){
    	return false;
    }
    
    if(selectIndex !== "" && selectIndex <= objData.length){
    	selRow = objData[selectIndex];
    	oldRow = objData[selectIndex + 1];
    	
    	if(oldRow["ASTAT"] === "1" || oldRow["ASTAT"] === "2" || oldRow["ASTAT"] === "3" || 
    	   selRow["ASTAT"] === "1" || selRow["ASTAT"] === "2" || selRow["ASTAT"] === "3"){
    		swal({   title: "Error",   text: "Don't move approved user",   type: "error"});
        	return false;
    	}
    	
    	for(var i=0, len=objData.length; i<len; i++){
        	if(i === selectIndex){
        		oldRow["AELSEQ"] = selectIndex + 1;
        		newData.push(oldRow);
        	}else if(i === (selectIndex+1)){
        		selRow["AELSEQ"] = selectIndex + 2;
        	    newData.push(selRow);
        	}else{
        		newData.push(objData[i]);
        	}
		} 
    	
    	jsonData.ApproverLineTableData = [];
    	jsonData.ApproverLineTableData = newData;
    	gr_index.setData(selectIndex+1);
    	setModalApprovalData();
    	
    }
	
}

function setIndexDataReset(){
	if(gr_index.getData() !== ""){
		gr_index.setData("");
	}
}

function setChangeReltypeValue(index, data){
	var obj = $('#modal_parent_approval_table tbody tr:first td');                               //td count
	
	if(jsonData.ApproverLineTableData.length > 0){
		jsonData.ApproverLineTableData[index]["RELTYP"] = $("select[name='reltyp']:eq("+ index +")").val();
		jsonData.ApproverLineTableData[index]["RELTYP_T"] = $("select[name='reltyp']:eq("+ index +") option:selected").text();
		jsonData.ApproverLineTableData[index]["APPTYP"] = $("select[name='reltyp']:eq("+ index +")").val();
		jsonData.ApproverLineTableData[index]["APPTYP_T"] = $("select[name='reltyp']:eq("+ index +") option:selected").text();
	}
	
	setModalApprovalData();
}

//Click apply button
function setTotalApproverData(){
	var reqAppData = reqLine.getData();
	var cnt = 0;
	
	jsonData.RequestLineTableData = [];
	jsonData.RequestLineTableData.push(reqAppData);
	
	if(jsonData.ApproverLineTableData.length > 0){
		for(var i=0, len=jsonData.ApproverLineTableData.length; i<len; i++){
			if(i===0){ cnt = i+2; }else{ cnt = cnt+1 }
			jsonData.ApproverLineTableData[i]["RELSEQ"] = cnt;
			jsonData.ApproverLineTableData[i]["AELSEQ"] = cnt;
			jsonData.RequestLineTableData.push(jsonData.ApproverLineTableData[i]);
		}
	}
	
	setInitialColor("right");
	setWorkFlowTableData(jsonData);
	gr_index.setData("");
	$("input[name='cline']").val("X");
	
}

//Click close button
function setChangeApprovalCloase(){
	var appData = jsonData.RequestLineTableData;
	
    //Execute cancel
    if(typeof jsonData.ApproverLineTableData !== "undefined" && jsonData.ApproverLineTableData !== null){
	    if(typeof appData !== "undefined" && appData !== null){
	    	jsonData.ApproverLineTableData = [];
	    	for(var i=0, len=appData.length; i<len; i++){
	    		if(appData[i]["RELTYP"] !== "R" && appData[i]["APPDG"] !== "R"){
	    			jsonData.ApproverLineTableData.push(appData[i]);
	    		}
	    	}
	    }
    }
    
    setInitialColor("right");
	gr_index.setData("");
}

function setInitialColor(course){
	var obj = "", rowLen = "", objTD = "";
	
	if(course.toLowerCase() === "left"){
		obj    = $("#modal_change_approval_table tbody tr"); 
		rowLen = obj.length;
		objTD  = $('#modal_change_approval_table tbody tr:first td');                //td count
	}else{
		obj    = $("#modal_parent_approval_table tbody tr");
		rowLen = obj.length;
		objTD  = $('#modal_parent_approval_table tbody tr:first td');                //td count
	}
	
	for(var i=0; i<rowLen; i++){
		for(var j=0, len=obj.length; j<len; j++){
			obj.eq(i).find('td').eq(j).removeClass("selected_3");
		}
	}
}

function getTotalApprovalLine(){
	var arrayList = []; 
	
	if(jsonData.RequestLineTableData.length > 0){
	    for(var i=0, len=jsonData.RequestLineTableData.length; i<len; i++){
	    	arrayList.push(jsonData.RequestLineTableData[i]);
		}
    }

	if(jsonData.AccountLineTableData.length > 0){
    	for(var i=0, len=jsonData.AccountLineTableData.length; i<len; i++){
    		arrayList.push(jsonData.AccountLineTableData[i]);
    	}
    }
	
	return arrayList;
}

function deleteTotalApprovalLine(){
	jsonData.RequestLineTableData = [];
	jsonData.AccountLineTableData = [];
}

//Check AP User
function getSubgpUser(){
	setTimeout(function(){
		var data = jsonData.UserInfo;

		if(typeof $("input[name='utype']").val() !== "undefined" && $("input[name='utype']").val() !== null){
			if($("input[name='utype']").val() === constants.c_utype_11){
				if(data.SUBGP !== null && typeof data.SUBGP !== "undefined"){
					if(data.SUBGP === constants.c_supgp_a0){
						$("#btn_create").removeClass("display_n");
					}else{
						$("#btn_create").addClass("display_n");
					}
				}
			}
		}
		
	}, 500);
}

//Attach file list
var objFile = "";
function showFileList(){
    $('#modal_file_table > tbody').html(setNoData('8').join(''));
    $("#modal_file_list").modal("show");
    $("#modal_file_list").draggable({ cancel: "div.modal-body, div.modal-footer" });
    setDeleteModalFileList();

    doSearchFileList();
}

function doSearchFileList() {
	var count = 0;
    var param = "cmd=FILE&xblnr=" + encodeURIComponent($('#modal_file_invoice_no_code').val()) + 
			    //"&lifnr=" + encodeURIComponent($('#lifnr').val());
    			"&kostl=" + encodeURIComponent($('#modal_file_costcenter_code').val());
	            //"&frdat=" + encodeURIComponent(common.getYYYYMMDD($("input[name='frdat']").val()));
    		    //"&todat=" + encodeURIComponent(common.getYYYYMMDD($("input[name='todat']").val()));
    
    var bnumb = $("#bnumb").val();      
    var iptyp = $("input:radio[name='iptyp']:checked").val();
    
    $.ajax({
    	url: "com.hme.ge.fm.user.common.CommonPopupList",
        async: true,
        header: {},
        data: param,
        type: "POST",
        success: function(data) {
            var objData = data.FileList;
            var h = [], arr = []; 
            var l_check = "", l_value = "", l_flag = false, l_disable = "";
            $('#modal_file_table > tbody').empty();
            
            if(typeof objData !== "undefined" && objData.length > 0){
            	objFile = objData;
                for (var i=0, len=objData.length; i<len; i++) {
                	l_disable = "";
                	if( typeof bnumb !== "undefined" && ( ( iptyp === "W" && objData[i]["KBLNR"] === "" ) || ( iptyp === "O" && objData[i]["KBLNR"] !== "" ) ) ){
                    	l_disable = "disabled";
                    }
                	if(jsonData.AttachFileListData.length > 0){
	                	for (var j=0, max=jsonData.AttachFileListData.length; j<max; j++) {
	                		//alert(objData[i]["FGUID"] + " / " + jsonData.AttachFileListData[j]["FGUID"]);
	                		if(objData[i]["FGUID"] === jsonData.AttachFileListData[j]["FGUID"]){
	                			l_check = "checked"; //l_value = jsonData.AttachFileListData[j]["FGUID"];
	                			count = count + 1;
	                		}
	                	}
	                	
	                	//�꾩껜泥댄겕諛뺤뒪 泥댄겕
	                	if(parseInt(count) === parseInt(objData.length)){
	                		$("input:checkbox[name='checkAll']").prop("checked", true);
	                	}
                	}
                	
                	h.push('<tr class="cur_pit">');
                    h.push('<td class="td_basic_left"><input type="checkbox" name="checkfile" '+ l_check + l_disable +' value="'+ objData[i]["FGUID"] +'"></td>');
                    h.push('<td class="td_basic_left">' + objData[i]["IVEXT"] + '</td>');
                    h.push('<td class="td_basic_left">' + objData[i]["LIFNR_T"] + '</td>');
                    h.push('<td class="td_basic_left" data-toggle="popover" data-content="'+ "[" + objData[i]["FICTR"] + "] " + objData[i]["FICTR_T"] +'">' + objData[i]["FICTR_T"] + '</td>');
                    h.push('<td class="td_basic_left" data-toggle="popover" data-content="'+ "[" + objData[i]["FIPEX"] + "] " + objData[i]["FIPEX_T"] +'">' + objData[i]["FIPEX_T"] + '</td>');
                    h.push('<td class="td_basic_left" data-toggle="popover" data-content="'+ "[" + objData[i]["GEBER"] + "] " + objData[i]["GEBER_T"] +'">' + objData[i]["GEBER_T"] + '</td>');
                    h.push('<td class="td_basic_center">' + objData[i]["KBLNR"] + '</td>');
                    h.push('<td class="td_basic_center">' + objData[i]["BLPOS"] + '</td>');
//                    h.push('<td class="td_basic_left">' + objData[i]["FNAME"] + '</td>');
                    h.push('</tr>');
                    
                    l_check = "", l_value = "", flag = false;
                }
            }else{
            	h = setNoData('8');
            }
            
            $('#modal_file_table > tbody').html(h.join(''));
            /* tooltip�쇰줈 �명빐 �띾룄 ���섎릺�� 二쇱꽍 泥섎━.
            setTimeout(function(){
            	$('[data-toggle="popover"]').popover({
                    'trigger': 'hover',
                    'placement': 'bottom',
                    'container': 'td'
                });	
            },200);
            */
            
            
        },
        error:function(){
            swal({   title: "Error",   text: jsonMsgData.Message["AJAX012"],   type: "error"});
            return false;
        }
    });

}

//Item file list
function getItemFileData(){
	var saveData = {}, param = {}, row = {};
	var arrlist = [];
	var tempfguid = "";
	var checkDifferentInvoice = true;
    //var param = "cmd=FILE_ITEM&fguid=" + encodeURIComponent($('#fguid').val()) + 
    			//"&nocache=" + encodeURIComponent((new Date()).getTime());
	            //"&frdat=" + encodeURIComponent(common.getYYYYMMDD($("input[name='frdat']").val()));
    		    //"&todat=" + encodeURIComponent(common.getYYYYMMDD($("input[name='todat']").val()));
	
	if(typeof $("input:checkbox[name='checkfile']") !== "undefined" && $("input:checkbox[name='checkfile']") !== null){
		$("input:checkbox[name='checkfile']:checked").each(function(index, value){
			if($(this).val() !== ""){
				if( tempfguid !== $(this).val() && tempfguid !== "" ){
					checkDifferentInvoice = false;
				}
				row["FGUID"] = $(this).val();
				tempfguid = $(this).val();
				arrlist.push(row);
				row = {};
			}
		});
	}
	
	if(!checkDifferentInvoice){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK064"],   type: "error"});
		$("input:checkbox[name='checkfile']").prop("checked", false);
		return false;
	}
	
    saveData["fileList"] = arrlist;
    
    param.cmd = "FILE_ITEM";
    param.data = (JSON.stringify(saveData)).replace (/:(\d+)([,\}])/g, ':"$1"$2');
    
    $.ajax({
    	url: "com.hme.ge.fm.user.common.CommonPopupList",
        async: true,
        header: {},
        data: param,
        type: "POST",
        success: function(data) {
        	if(data.Result.TYPE === 'S'){
        		setFileList(data);
        	}else{
        		hideLoading();
        		swal({   title: "Error",   text: data.Result.MESSAGE,   type: "error"});
        		return false;
        	}
        },
        error:function(){
        	hideLoading();
            swal({   title: "Error",   text: jsonMsgData.Message["AJAX012"],   type: "error"});
            return false;
        }
    });

}

function setCheckBoxValue(obj, val){
	if(obj.checked){
		obj.value = val;
	}else{
		obj.value = "";
	}
}


function setAppendFileList(objData){
	var arr = [];
	
	if(typeof $("input:checkbox[name='checkfile']") !== "undefined" && $("input:checkbox[name='checkfile']").length > 0){
		$("input:checkbox[name='checkfile']").each(function(index, value){
			if($(this).val() === "X"){
				arr.push(index);
			}
		});
	}
}

//遺�紐⑥갹�쇰줈 �곗씠�� �꾩넚
function setFileList(data) {
	var itemList = data.ItemFileList;
	var poList = data.ItemPoList;
	
	//itemList.sort(function(a, b){return a["IVEXT"]-b["IVEXT"]});			//Ascending
	//itemList.sort(function(a, b){return b-a});			//Descending
	
	if(typeof itemList !== "undefined" && itemList !== null){
		if(itemList.length > 0){
			jsonData.AttachFileListData = [];
			
			for (var i=0, len=itemList.length; i<len; i++) {
				jsonData.AttachFileListData.push(itemList[i]);
			}
		}else{
			jsonData.AttachFileListData = [];				//Item file�� �놁쓣 寃쎌슦 珥덇린��
		}
	}
	
	if(typeof poList !== "undefined" && poList !== null){
		if(poList.length > 0){
			jsonData.AttachPoListData = [];
			
			for (var i=0, len=poList.length; i<len; i++) {
				jsonData.AttachPoListData.push(poList[i]);
			}
		}else{
			jsonData.AttachPoListData = [];				//Item file�� �놁쓣 寃쎌슦 珥덇린��
		}
	}
	
	setAppendFileTable();
	setDeleteModalFileList();
    $('#modal_file_table > tbody').empty();
    $('#modal_file_list').modal('hide');
    
    setDefaultPersonInCharge();
}

function setDefaultPersonInCharge(){
	
	if( $('#reqid') && $('#reqnm') ){
	    var polistData = jsonData.AttachPoListData;
	    for (var i=0, len=polistData.length; i<len; i++) {
	    	setUser(polistData[i]["REQID"], polistData[i]["REQNM"], polistData[i]["ORGCD"], polistData[i]["ORGNM"]);	
	    	break;
	    }
	}
}

function setDeleteModalFileList() {
   $('#modal_invoice_no_code').val("");
   $('#modal_costcenter_code').val("");
}

function setDeleteFileList() {
    $('#kostl').val("");
    $('#kostlt').html("");
    $('#kostlt').attr("title","");
}

function setAppendFileTable(){
    var listData = jsonData.AttachFileListData;
    var polistData = jsonData.AttachPoListData;
    jsonData.FileTableData = jsonData.AttachFileListData;
    jsonData.PoTableData = jsonData.AttachPoListData;
        
    setFileArea(false);
    
	$('#file_table').DataTable({
		data : listData,
        autoWidth: true,
        searching: false,
        paging: true,
        destroy: true,
        // scrollY: 300,
        // scrollX: true,
        //order: [[ 1, "asc" ]],
    	columns: [
  		    	
            {    data: "FGUID", visible: false, className: "all td_basic_left"    },
            { 	 data: "FNAME", className: "all td_basic_left",
	           	 render: function ( data, type, row ) {
	                if(row.FNAME === ""){ 
	                    return "";
	                }else{
	                	return '<a href="javascript:void(0);" class="text-underline">' + row["FNAME"] + '</a>'
	                }
	       	 	}            	 
            }
            
        ]
	});
	
	$('#file_table td a').on('click', function (event) {
		var tr = $(this).parents('tr');
		var data = $('#file_table').DataTable().row(tr).data();
		if(data !== null && typeof data !== "undefined"){
        	common.doFileDownload(data['DOCID'], event);
        }
	});
	
	/*
	$('#file_table tbody').on('click', 'td:last-child', function () {
		var rowLen = $("#file_table tbody tr").length - 1;
        var oRow = $(this).parent().parent().children().index($(this).parent());    //�좏깮�� Row
        var oCell = $(this).parent().children().index($(this));                     //�좏깮�� Cell
        var obj = $('#file_table tbody tr:first td');                              //td count
        var tr = $(this).parents('tr');
        var data = $('#file_table').DataTable().row(tr).data();							                //�좏깮�� Row Data

        if(data !== null && typeof data !== "undefined"){
        	common.doFileDownload(data['DOCID']);
        } 
    });
    */
	
	$('#po_table').DataTable({
		data : polistData,
        autoWidth: true,
        searching: false,
        paging: false,
        destroy: true,
        // scrollY: 300,
        // scrollX: true,
        //order: [[ 1, "asc" ]],
    	columns: [
  		    	
            {    data: "FGUID", visible: false, className: "all td_basic_left"    },
            { 	 data: "IVEXT", className: "all td_basic_center"   	},
            {    data: "FICTR_T", className: "all td_basic_left"    }, 
            { 	 data: "FIPEX_T", className: "all td_basic_left"   	},
            { 	 data: "GEBER_T", className: "all td_basic_left"   	},
            { 	 data: "KBLNR", className: "all td_basic_center"   	},
            { 	 data: "BLPOS", className: "all td_basic_center",
            	 render: function ( data, type, row ) {
	                 if(row.BLPOS === "" || row.BLPOS === "000"){ 
	                     return "";
	                 }else{
	                     return row.BLPOS;
	                 }
            	 }
            }
            
        ]
	});

	hideLoading();
}
function setPoData(data, oRow){
    var rowLen = $("#po_table tbody tr").length - 1;
    var obj = $('#po_table tbody tr:first td');     
    
    var iptypPo = "";
	if( data["KBLNR"] === ""){        
		iptypPo = "O";
	}else{
		iptypPo = "W";
	}
	
	for(var i=0; i<rowLen+1; i++){
		var rowData = $('#po_table').DataTable().row(i).data();
		for(var j=0, len=obj.length; j<len; j++){
			$('#po_table tbody tr').eq(i).find("td").eq(j).removeClass('selected_3');
		}
	}
	   
	for(var j=0, len=obj.length; j<len; j++){
		$('#po_table tbody tr').eq(oRow).find("td").eq(j).addClass('selected_3');
	}
	
	$("input[name='iptyp']:radio[value=" + iptypPo + "]").iCheck('check');	 
	$("#xblnr").val((data["IVEXT"].toUpperCase()).substring(0,16));
	if( data["KBLNR"] === ""){           
        $('#lifnr').val(data["LIFNR"]);
        $('#lifnr_nm').val(data["LIFNR_T"]); 		
		$("#kostl").val(data["FICTR"]);
		$("#kostlt").val(data["FICTR_T"]);
		$("#mfipex").val(data["FIPEX"]);
		$("#mfipext").val(data["FIPEX_T"]);
		$("#geber").val(data["GEBER"]);
		$("#gebert").val(data["GEBER_T"]);
		
	
       	if($("#geber").val() !== "" && typeof $("#geber").val() !== "undefined"){
       		doAjaxSearchActivity();
       	}
		if($("#lifnr").val() !== "" && typeof $("#lifnr").val() !== "undefined"){
       		doDetailVendor($("#lifnr").val());
       	}
	}else{
		$("#ponit").val(data["KBLNR"] + "-" + data["BLPOS"]);
    	$("#ponum").val(data["KBLNR"]);
        $("#poitm").val(data["BLPOS"]);	
        doAjaxSearchPonoFile();
	} 	
}

/*
function setPoData(data, oRow){
    var rowLen = $("#po_table tbody tr").length - 1;
    var obj = $('#po_table tbody tr:first td');     
    
    var iptypPo = "";
	if( data["KBLNR"] === ""){        
		iptypPo = "O";
	}else{
		iptypPo = "W";
	}
	
	for(var i=0; i<rowLen+1; i++){
		var rowData = $('#po_table').DataTable().row(i).data();
		for(var j=0, len=obj.length; j<len; j++){
			$('#po_table tbody tr').eq(i).find("td").eq(j).removeClass('selected_3');
		}
	}
	   
	for(var j=0, len=obj.length; j<len; j++){
		$('#po_table tbody tr').eq(oRow).find("td").eq(j).addClass('selected_3');
	}
	
	$("input[name='iptyp']:radio[value=" + iptypPo + "]").iCheck('check');	 
	$("#xblnr").val((data["IVEXT"].toUpperCase()).substring(0,16));
	if( data["KBLNR"] === ""){                		
		$("#kostl").val(data["FICTR"]);
		$("#kostlt").val(data["FICTR_T"]);
		$("#mfipex").val(data["FIPEX"]);
		$("#mfipext").val(data["FIPEX_T"]);
		$("#geber").val(data["GEBER"]);
		$("#gebert").val(data["GEBER_T"]);
	}else{
		$("#ponit").val(data["KBLNR"] + "-" + data["BLPOS"]);
    	$("#ponum").val(data["KBLNR"]);
        $("#poitm").val(data["BLPOS"]);	
        doAjaxSearchPonoFile();
	} 	
}
*/
function setFileDetailData(data){
	var fileTableData = data.FileTableData;
	var poTableData = data.PoTableData;

    if(typeof fileTableData !== "undefined" && fileTableData.length > 0){
    	jsonData.FileTableData = data.FileTableData;
    	
    	if(jsonData.FileTableData.length > 0){
			$("#file_data_line").show();
	        var h = [];
	        for(var i=0, maxLen=jsonData.FileTableData.length; i<maxLen; i++){
	            var extension = common.getFileIcon(jsonData.FileTableData[i]["TEXT"]);
	            h.push('<div class="form-group">');
	            h.push('  <div class="col-sm-12"><i class="m-r-xs fa ' + extension + '" style="margin-left:5px"></i><a href="javascript:void(0);" onclick="javascript:common.doFileDownload(\'' + jsonData.FileTableData[i]["ID"] + '\', event)" data-toggle="tooltip" data-placement="right" title=\'' + fileTableData[i]["TEXT"] + '\'>' + fileTableData[i]["TEXT"] + '</a></div>');
	            h.push('</div>');
	        }
	
	        $("#file_attachments").html(h.join(''));
	        
	        $('[data-toggle="tooltip"]').tooltip(); 
		}else{
			$("#file_attachments").html('');
	        $("#file_data_line").hide();
		}
    }else{
    	$("#file_attachments").html('');
        $("#file_data_line").hide();
    }
    
    if(typeof poTableData !== "undefined" && poTableData.length > 0){
    	jsonData.PoTableData = data.PoTableData;
    	
    	if(jsonData.PoTableData.length > 0){
			$("#po_data_line").show();
			$('#po_table').DataTable({
				data : poTableData,
		        autoWidth: true,
		        searching: false,
		        paging: false,
		        destroy: true,
		        // scrollY: 300,
		        // scrollX: true,
		        //order: [[ 1, "asc" ]],
		    	columns: [
		  		    	
		            {    data: "FGUID", visible: false, className: "all td_basic_left"    },
		            { 	 data: "IVEXT", className: "all td_basic_center"   	},
		            {    data: "FICTR_T", className: "all td_basic_left"    }, 
		            { 	 data: "FIPEX_T", className: "all td_basic_left"   	},
		            { 	 data: "GEBER_T", className: "all td_basic_left"   	},
		            { 	 data: "KBLNR", className: "all td_basic_center"   	},
		            { 	 data: "BLPOS", className: "all td_basic_center",
		            	 render: function ( data, type, row ) {
			                 if(row.BLPOS === "" || row.BLPOS === "000"){ 
			                     return "";
			                 }else{
			                     return row.BLPOS;
			                 }
		            	 }
		            }
		            
		        ]
			});
			
			
		}else{
			$("#po_attachments").html('');
	        $("#po_data_line").hide();
		}
    }else{
    	$("#po_attachments").html('');
        $("#po_data_line").hide();
    }    
}

function setFileData(){
	
	if(typeof jsonData.FileTableData !== "undefined" && jsonData.FileTableData !== null){
		if(jsonData.FileTableData.length > 0){
			$("#file_data_line").show();
	        var h = [];
	        for(var i=0, maxLen=jsonData.FileTableData.length; i<maxLen; i++){
	            var extension = common.getFileIcon(jsonData.FileTableData[i]["TEXT"]);
	            h.push('<div class="form-group">');
	            h.push('  <div class="col-sm-12"><button class="button-small btn-xs btn-danger" onclick="common.doDeleteFile(\'' + jsonData.FileTableData[i]["ID"] + '\');"><i class="fa fa-trash"></i></button><i class="m-r-xs fa ' + extension + '" style="margin-left:5px"></i><a href="javascript:void(0);" onclick="javascript:common.doFileDownload(\'' + jsonData.FileTableData[i]["ID"] + '\', event)">' + jsonData.FileTableData[i]["TEXT"] + '</a></div>');
	            h.push('</div>');
	        }
	
	        $("#file_attachments").html(h.join(''));
		}else{
			$("#file_attachments").html('');
	        $("#file_data_line").hide();
		}
    }else{
    	$("#file_attachments").html('');
        $("#file_data_line").hide();
    }
}

function setFileUpdateData(data){
	var fileTableData = data.FileTableData;
	var poTableData = data.PoTableData;

	if(typeof fileTableData !== "undefined" && fileTableData !== null){
		jsonData.FileTableData = data.FileTableData;
		if(jsonData.FileTableData.length > 0){
			setFileArea(true);
			setFileData();
		}else{
			setFileArea(false);
		}
		
	}else{
		setFileArea(false);
	}
	
    if(typeof poTableData !== "undefined" && poTableData.length > 0){
    	jsonData.PoTableData = data.PoTableData;
    	
    	if(jsonData.PoTableData.length > 0){
			$("#po_data_line").show();
			$('#po_table').DataTable({
				data : poTableData,
		        autoWidth: true,
		        searching: false,
		        paging: false,
		        destroy: true,
		        // scrollY: 300,
		        // scrollX: true,
		        //order: [[ 1, "asc" ]],
		    	columns: [
		  		    	
		            {    data: "FGUID", visible: false, className: "all td_basic_left"    },
		            { 	 data: "IVEXT", className: "all td_basic_center"   	},
		            {    data: "FICTR_T", className: "all td_basic_left"    }, 
		            { 	 data: "FIPEX_T", className: "all td_basic_left"   	},
		            { 	 data: "GEBER_T", className: "all td_basic_left"   	},
		            { 	 data: "KBLNR", className: "all td_basic_center"   	},
		            { 	 data: "BLPOS", className: "all td_basic_center",
		            	 render: function ( data, type, row ) {
			                 if(row.BLPOS === "" || row.BLPOS === "000"){ 
			                     return "";
			                 }else{
			                     return row.BLPOS;
			                 }
		            	 }
		            }
		            
		        ]
			});
			
			
		}else{
//			$("#po_attachments").html('');
//	        $("#po_data_line").hide();
		}
    }else{
//    	$("#po_attachments").html('');
//      $("#po_data_line").hide();
    }   	
	
}

function setJsonDeleteFile(id){
	var len = jsonData.FileTableData.length;
	var arr = [];
	
	if(len > 0){
		for(var i=0; i<len; i++){
			if(jsonData.FileTableData[i]["ID"] !== id){
				arr.push(jsonData.FileTableData[i]);
			}
		}
	}
	
	jsonData.FileTableData = arr;
	
	if(jsonData.FileTableData.length > 0){
		setFileArea(true);
		setFileData();
	}else{
		setFileArea(false);
	}
}

function setFileArea(flag){
	if(flag){
		$("#file_list_area").removeClass("display_n");
	}else{
		$("#file_list_area").addClass("display_n");
	}
}

function setMessageData(key){
	if(typeof jsonMsgData.Message !== "undefined" && jsonMsgData.Message !== null){
		jsonMsgData.Message = resource_bundle.getMsgs(key);
	}
}

function getMessageData(key){
	return resource_bundle.getMsgs(key);
}

function setLoadi18nData(webrs, langu){
	var url = webrs + '/i18n/';

	g_webrs.setData(url);				//Set Common url
	g_langu.setData(langu);				//Set Language
	
	resource_bundle.loadLabel(url, langu);
	resource_bundle.loadButton(url, langu);
	resource_bundle.loadMessage(url, langu);
	
	getModalLabel();
}

function getModalLabel(){
	
	//Button
	if(typeof jsonBtnData.ButtonKeyData !== "undefined" && jsonBtnData.ButtonKeyData !== null){
		jsonBtnData.ButtonList  = resource_bundle.getButtons(jsonBtnData.ButtonKeyData);
		g_button.setData(jsonBtnData.ButtonList);
	}
	
	//Message
	if(typeof jsonMsgData.Message !== "undefined" && jsonMsgData.Message !== null){
		jsonMsgData.Message    = resource_bundle.getMsgs(jsonMsgData.MessageKeyData);
		g_message.setData(jsonMsgData.Message);
	}
	
	//Label
	if(typeof jsonLabelData.LabelKeyData !== "undefined" && jsonLabelData.LabelKeyData !== null){
		jsonLabelData.LabelList    = resource_bundle.getLabels(jsonLabelData.LabelKeyData);
		g_label.setData(jsonLabelData.LabelList);
	}
	
	goLoadCommonModal();
}

function goLoadCommonModal(){
	getModalPono();					//Purchase Order
	getModalVendor();				//Vendor
	getModalCostCenter();			//Cost Center
	getModalEvent();				//Event
	getModalAccount();				//Account
	getModalAsset();				//Asset
	getModalMiddleUser();			//User
	getModalActivity();				//Activity
	getModalBudget();				//Fund Center
	getModalDepartment();			//Department
    getModalBudgetCheck();  		//BudgetCheck
    //getModalFileList();         	//Attach File
    getModalSiteMap();				//Site map
    getChangeApprovalLine();    	//Change approval line
    getTransactionCode();			//Transaction code
    getModalMenuIcon(); 			//Menu Icon
    getModalGeneralDashboard();		//Dashboard - General
    getModalExecutiveDashboard();	//Dashboard - Executive
    getModalBbsNotice();			//Notice
    
}

function showShortKeyModal(){
	var xWidth = "10"; 				//event.pageX - 858;
    var yHeight = "50" 				//event.pageY - 35;
    
    if( common.removeLeadZero(jsonData.UserInfo.AUCLS) === constants.c_aucls_4 ){   
	    $("#modal_transaction_code").modal('show');//.css({top: yHeight + "px", left: xWidth + "px"});
	    
	    setTimeout(function(){
	    	$("input[name='command_name']").focus();
	    }, 1000);
    }
    
}

function underConstruction(){
	swal({   title: "Warning",   text: "Under Construction!!",   type: "warning"});
	return false;
}

function goSystemSetup(gubun, url){
	//setLocalStorage(gubun);
	showLoading();
	
	//if(gubun === "A"){
	//    url = "com.hme.ge.fm.system.management.UserList";
	//}else{
	//	url = "com.hme.ge.fm.budget.reports.BudgetMonthlyList";
	//}
	
	$("#form").attr("method", "post").attr("action", url).submit();
}

//Local Storage
function setLocalStorage(gubun){
	var val = "";

	if(typeof gubun !== 'undefined' && gubun !== null){
		val = gubun;
	}else{
		val = "G";
	}
	
	if(typeof localStorage === 'undefined'|| localStorage === null){
		console.log(' 1. HTML5 localStorage. ');
	}else{
		try{
			if(typeof localStorage.getItem("menu") !== 'undefined' && localStorage.getItem("menu") !== null){
				localStorage.setItem("menu", val);
			}else{
				localStorage.setItem("menu", val);
			}
			
		}catch(e){
			if (e == QUOTA_EXCEEDED_ERR) {
				console.log('�좊떦�� 珥덇낵!')
			}
		}
		
		console.log("localStorage= " + localStorage.getItem("menu"));
		//localStorage.removeItem("menu"); 
	}
	
}

//Session Storage
function setToastSessionStorage(name, val){
	var l_name = "", l_value = "";

	if(typeof name !== 'undefined' && name !== null){
		l_name = name;
	}
	
	if(typeof val !== 'undefined' && val !== null){
		l_value = val;
	}
	
	if(typeof sessionStorage === 'undefined'|| sessionStorage === null){
		console.log(' 1. HTML5 sessionStorage. ');
	}else{
		
		try{
			if(typeof sessionStorage.getItem(l_name) !== 'undefined' && sessionStorage.getItem(l_name) !== null){
				sessionStorage.setItem(l_name, l_value);
			}else{
				sessionStorage.setItem(l_name, l_value);
			}
			
		}catch(e){
			if (e == QUOTA_EXCEEDED_ERR) {
				console.log('Exceeded storage!')
			}
		}
		
		//console.log("sessionStorage= " + sessionStorage.getItem(l_name));
		//sessionStorage.removeItem("menu"); 
	}
	
}

function setInputBoxCheck(id, gubun){
	var obj = $("#" + id + "");
	var parentObj = obj.parent().parent().parent();

	if(typeof gubun !== "undefined" && gubun !== null){
		if(!parentObj.hasClass("has-warning")){
			if(gubun === "F"){
				parentObj.addClass("has-warning").parent().find("label.control-label").first().addClass("has-warning");	//First Label
			}else if(gubun === "L"){
				parentObj.addClass("has-warning").parent().find("label.control-label").last().addClass("has-warning");	//Last Label
			}else{
				parentObj.addClass("has-warning");
			}
		}
	}else{
		obj.parent().parent().addClass("has-warning");
	}
	
	//obj.focus();
}

function setInputBoxClear(id){
	var obj = $("#" + id + "");
	var parObj = obj.parent().parent();
	var parentObj = obj.parent().parent().parent();

	
	if((obj.val() !== "" && parentObj.hasClass("has-warning")) || (obj.val() !== "" && parObj.hasClass("has-warning"))){
		parentObj.removeClass("has-warning").parent().find("label.control-label").first().removeClass("has-warning");	//First Label
		parentObj.removeClass("has-warning").parent().find("label.control-label").last().removeClass("has-warning");	//First Label
		parObj.removeClass("has-warning");
	}
}

function deleteUtypeOption(){
	setTimeout(function(){
        $("#utype option:eq(2)").remove();  //Purchase Order
        $("#utype option:eq(1)").remove();	//Invoice parking
        
    },1000);
}

//Sweet alert bug
function autoCloseSweetAlert(){
	$("div.sweet-alert.showSweetAlert.visible").remove();
    $("div.sweet-overlay").remove();
}

//Datatables - Change text
function setNoDataFound(id, obj, count){

	if(parseInt(count) > 0){
		setTimeout(function(){
	    	if(obj.length === 0){
	    		//$("#"+ id +" > tbody > tr > td").text(jsonMsgData.Message["NO_DATA"]);
	    		$("#" + id + "").DataTable().destroy();
	    		$("#" + id + "").DataTable({
	    			language: {
	    	          		sEmptyTable: jsonMsgData.Message["NO_DATA"]
	    	        },
	    	        searching: false,
	    	        destroy: true,
	    	    });
	    	}
	    }, 300);
	}
}

//==================================================    
//�뚯씠釉� �덉씠�꾩썐 �먮룞議곗젅
//==================================================
function setAutoTableLayout(id){
	/*
	var time = 0;
	
	if(typeof id !== "undefined" && id !== null){
		setTimeout(function(){
			if($("#" + id + "").hasClass("dataTable")){
				$("#" + id + "").DataTable().columns.adjust().draw();
			}
			$('body').css('overflowY', 'auto');
	    }, 700);
	}else{
		setTimeout(function(){
			if($('#list_table').hasClass("dataTable")){
				$('#list_table').DataTable().columns.adjust().draw();
			}
			if($('#item_table').hasClass("dataTable")){			
				$('#item_table').DataTable().columns.adjust().draw();
			}
			
			if($("#budget_report_monthly").parent().parent().hasClass("in")){
				if($("input[name='month']").is(":checked")){
					if($('#list_table1').hasClass("dataTable")){
						$('#list_table1').DataTable().columns.adjust().draw();
					}
				}
			}
			
			$('body').css('overflowY', 'auto');
	    }, 500);
	}
	$('body').removeClass('modal-open');
	*/
	setTimeout(function(){
	    $.fn.dataTable.tables({visible:true,api:true}).columns.adjust();
	}, 500);
}

//=======================================================
//Execute dashboard data
//=======================================================
function doDashboardCount(skipDialogMsg){
	var param = "cmd=DASH&nocache=" + encodeURIComponent((new Date()).getTime());
	
	$.ajax({
        url: "com.hme.ge.fm.user.common.CommonPopupList",
        async: true,
        header: {},
        data: param,
        type: "POST",
        success: function(data) {
            var count = data.CountList;
            $("#po_save").html(count.FUNDS_SAVED);						//PO Saved
            $("#po_request").html(count.FUNDS_REQUEST);					//PO Requested
            $("#po_process").html(count.FUNDS_PROCESSING);				//PO Processing
            $("#po_reject").html(count.FUNDS_REJECT);					//PO Rejected
               
            $("#ip_save").html(count.IP_SAVED);							//IP Saved
            $("#ip_request").html(count.IP_REQUEST);					//IP Requested
            $("#ip_process").html(count.IP_PROCESSING);					//IP Processing
            $("#ip_reject").html(count.IP_REJECT);						//IP Rejected
               
            $("#bt_save").html(count.BUD_TRN_SAVED);					//BT Saved
            $("#bt_request").html(count.BUD_TRN_REQUEST);				//BT Requested
            $("#bt_process").html(count.BUD_TRN_PROCESSING);			//BT Processing
            $("#bt_reject").html(count.BUD_TRN_REJECT);					//BT Rejected
               
            $("#bi_save").html(count.BUD_INC_SAVED);					//BI Saved
            $("#bi_request").html(count.BUD_INC_REQUEST);				//BI Requested
            $("#bi_process").html(count.BUD_INC_PROCESSING);			//BI Processing
            $("#bi_reject").html(count.BUD_INC_REJECT);					//BI Rejected
              
            $("#po_approval_cnt").html(count.FUNDS_APPROVE);			//PO Approval
            $("#ip_approval_cnt").html(count.IP_APPROVE);				//IP Approval
            $("#bt_approval_cnt").html(count.BUD_TRN_APPROVE);			//BT Approval
            $("#bi_approval_cnt").html(count.BUD_INC_APPROVE);			//BI Approval
               
            var total = parseInt(count.FUNDS_APPROVE) + parseInt(count.IP_APPROVE) + parseInt(count.BUD_TRN_APPROVE) + parseInt(count.BUD_INC_APPROVE);
               
            $("#user_approval_count").text(total);						//Total approval count
            
        },
        error:function(){
        	if (skipDialogMsg != true) swal({   title: "Error",   text: jsonMsgData.Message["AJAX035"],   type: "error"});
            return false;        
        }
   });
}

//=======================================================
//Auto Dashboard
//=======================================================
function showDashboardCount(){
	//clearTimeout(refreshTime);
	doDashboardCount(true);
	//refreshTime = setTimeout("showDashboardCount()",300000);		//5*60*1000 = 5 min
}

//==================================================
//�붾㈃�� �꾩슦�� modal李� �쒖떆 �섎뒗 �곸뿭
//==================================================
function setModalArea(){
  var h = [];
  
  h.push('<div id="modal_data_pono_area" class="display_n"></div>');
	h.push('<div id="modal_data_user_area" class="display_n"></div>');
	h.push('<div id="modal_data_vendor_area" class="display_n"></div>');
	h.push('<div id="modal_data_costcenter_area" class="display_n"></div>');
	h.push('<div id="modal_data_event_area" class="display_n"></div>');
	h.push('<div id="modal_data_account_area" class="display_n"></div>');
	h.push('<div id="modal_data_activity_area" class="display_n"></div>');
	h.push('<div id="modal_data_asset_area" class="display_n"></div>');
	h.push('<div id="modal_data_budget_area" class="display_n"></div>');
	h.push('<div id="modal_data_available_budget_area" class="display_n"></div>');    
	h.push('<div id="modal_data_department_area" class="display_n"></div>');
	h.push('<div id="modal_site_map_area" class="display_n"></div>');
	h.push('<div id="modal_change_approval_line" class="display_n"></div>');
	h.push('<div id="modal_attach_file_area" class="display_n"></div>');
	h.push('<div id="modal_tcode_area" class="display_n"></div>');
	h.push('<div id="modal_data_dashboard_area" class="display_n"></div>');
	h.push('<div id="modal_input_notice_area" class="display_n"></div>');
	//h.push('<div id="modal_data_menu_icon_area" class="display_n"></div>');
	h.push('<div id="content" class="display_n"></div>');
	h.push('<div id="btn_navigation_area" class="display_n"></div>');
  
  $("#modal_contents_area").html(h.join(''));
}

//==================================================    
//�붾㈃ 諛묒쑝濡� �대━湲� 踰꾪듉
//==================================================
function loadPageTop() {
  var h = [];
  
  h.push('<div class="bn_tpp" id="btn_edds_top" style="display:none;">');
  h.push('    <a href="#" class="bn_pagetop" data-toggle="tooltip" data-placement="bottom" title="Up Button">');
  h.push('        <i class="fa fa-chevron-up"></i>');
  h.push('    </a>');
  h.push('</div>');

  if ($("#btn_edds_top").length === 0) $(".footer > div").append(h.join(""));
  
  pageTop();
}

//==================================================    
//�붾㈃ �꾨옒�먯꽌 �꾨줈 踰꾪듉 蹂�寃� 濡쒖쭅
//==================================================
function pageTop() {
  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#btn_edds_top').fadeIn();
      } else {
          $('#btn_edds_top').fadeOut();
      }
  });

  //Click event to scroll to top
  $('#btn_edds_top').click(function() {
      // $('html, body').animate({ scrollTop: 0 }, 800);
      $('html, body').scrollTop(0);
      return false;
  });
}

//==================================================    
//�붾㈃ �꾨줈 �щ━湲� 踰꾪듉
//==================================================
function loadPageBottom() {
  var h = [];
  
  h.push('<div class="bn_tpp display_y" id="btn_edds_bottom">');
  h.push('    <a href="#" class="bn_pagetop" data-toggle="tooltip" data-placement="bottom" title="Down Button">');
  h.push('        <i class="fa fa-chevron-down"></i>');
  h.push('    </a>');
  h.push('</div>');
  
  if ($("#btn_edds_bottom").length === 0) $(".footer > div").append(h.join(""));
  
  pageBottom();
}

//==================================================    
//�붾㈃ �꾩뿉�� �꾨옒濡� 踰꾪듉 蹂�寃� 濡쒖쭅
//==================================================
function pageBottom() {
  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
      if ($(this).scrollTop() < 100) {
          $('#btn_edds_bottom').fadeIn();
      } else {
          $('#btn_edds_bottom').fadeOut();
      }
  });

  //Click event to scroll to top
  $('#btn_edds_bottom').click(function() {
      // $('html, body').animate({ scrollTop: 0 }, 800);
      bodyBottom();
      return false;
  });
}

//==================================================    
//臾몄꽌 理쒖긽�⑥쑝濡� �щ━湲�
//==================================================
function bodyTop(){
  $('html, body').scrollTop(0); 
}

//==================================================
//臾몄꽌 理쒗븯�⑥쑝濡� �대━湲�
//==================================================
function bodyBottom(){
  $('html, body').scrollTop($(document).height()); 
}

//==================================================
//臾몄꽌 �곷떒�� System name and log out �쒖떆
//==================================================
function setHeaderContents(){
	var userinfo = jsonData.UserInfo;
	var h = [];
	  
	h.push("<div>");
	h.push("  <nav class='navbar navbar-static-top' role='navigation' style='margin-bottom: 0'>");
	
	// Added New
	h.push(" 	<div class='logo_area'>");
	h.push("    	<div class='hyundai_logo'></div>");
	h.push("    	<div class='country_flag'></div>");
	h.push(" 	</div>");
	
	h.push("    <div class='navbar-header'>");
	h.push("      <a class='navbar-minimalize minimalize-styl-2 btn btn-primary' href='#' data-toggle='tooltip' data-placement='bottom' title='Menu show/hide Button'><i class='fa fa-bars'></i> </a>");
	h.push("    </div>");
	h.push("    <ul class='navbar-header system-title'>");
	h.push("      <span>" + constants.c_system_name + "</span>");
	h.push("    </ul>");
	h.push("    <ul class='nav navbar-top-links navbar-right'>");
	  
	if(typeof userinfo !== "undefined" && userinfo !== null && userinfo.UNAME !== ""){
	    h.push("      <div class='navbar-header userinfo-name'>");
	    h.push("        <span>Welcome " + userinfo.UNAME + "</span>");
	    h.push("      </div>");    
	}
	  
	//h.push("      <div class='navbar-header'>");
	//h.push("        <a class='minimalize-styl-1 btn' id='site_map' href='#'><i class='fa fa-bell'></i><span class='label label-primary' id='user_approval_count'>0</span></a>");
	//h.push("      </div>");
	//h.push("      <li>");
	//h.push("      	<span class='m-r-sm text-muted welcome-message'>Welcome to " + constants.c_system_name + "</span>");
	//h.push("      </li>");
	h.push("      <li id='btn_notice' style='display:none'>");
	h.push("          <a class='right-sidebar-toggle'>");
	h.push("              <i class='fa fa-tasks'></i>");
	h.push("          </a>");
	h.push("      </li>");
	h.push("      <li class='dropdown'>");
	h.push("        <a class='dropdown-toggle count-info' id='site_map' data-toggle='dropdown' href='#'>");
	h.push("          <i class='fa fa-bell'></i><span class='label label-danger'><div id='user_approval_count'>0</div></span>");
	h.push("        </a>");
	h.push("      </li>");
	h.push("      <li>");
	h.push("        <a href='javascript:doLogout();' data-toggle='tooltip' data-placement='bottom' title='Log out Button'><i class='fa fa-sign-out'></i>Log out</a>");
	h.push("      </li>");    
	h.push("    </ul>");
	h.push("  </nav>");
	h.push("</div>");
	// h.push("<div id='modal_site_map_area' class='display_n'></div>");
	
	$("#top_area").html(h.join(''));
}

//==================================================
//臾몄꽌 �섎떒�� Copyright �쒖떆 
//==================================================
function setFooterContents(){
    var h = [], d = new Date();
    var text = constants.c_foundation_day + "-" + d.getFullYear();
  
    h.push("<div>");
    h.push("    <strong>Copyright</strong> " + constants.c_company_name + " <i class='fa fa-copyright'></i> "+ text);
    h.push("</div>");
  
    $(".footer > div").html(h.join(''));
}


//==================================================
//Navigation area�� �쒖떆  - �꾩옱 �ъ슜 �덊븿. 
//==================================================
function setNavigationData(gubun, title){
	var h = [];
	
	// if(gubun === "1"){
	//  sub_title = "Requesting";
	// }else if(gubun === "3"){
	//  sub_title = "Reports";
	// }else if(gubun === "2"){
	//  sub_title = "Approval";
	// }
	
	// h.push("<div class='col-lg-10'>");
	// h.push("  <h2>"+ title +"</h2>");
	// h.push("  <ol class='breadcrumb'>");
	// h.push("    <li>");
	// h.push("      <a href='#'>Home</a>");
	// h.push("    </li>");
	// h.push("    <li>");
	// h.push("      <a>" + sub_title + "</a>");
	// h.push("    </li>");
	// h.push("    <li class='active'>");
	// h.push("      <strong>"+ title +"</strong>");
	// h.push("    </li>");
	// h.push("  </ol>");
	// h.push("</div>");
	// h.push("<div class='col-lg-2'>");
	// h.push("</div>");
	
	// $("#navigation_area").html(h.join(''));
	$("#navigation_area").parent().addClass("display_n");
}

//==================================================
//Budget report�� �ъ슜�섎뒗 short cut  - �꾩옱 �ъ슜 �덊븿. 
//==================================================
function setShortCut(){
	var h = [];
	
	h.push('<div class="btn-group" role="group">');
	h.push('  <button type="button" class="btn btn-sm btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Short cut<i class="fa fa-caret-down" style="margin-left: 5px;"></i>');
	h.push('  </button>');
	h.push('  <ul class="dropdown-menu dropdown-menu-right" style="right:0;left:auto;background-color: #1c84c6;color:white;">');
	h.push('    <li><a href="javascript:goShortCut(\'15\')">Purchase Order</a></li>');
	// h.push('    <li role="separator" class="divider"></li>');
	// h.push('    <li><a href="javascript:goShortCut(\'16\')">Invoice Parking</a></li>');
	// h.push('    <li role="separator" class="divider"></li>');
	// h.push('    <li><a href="javascript:goShortCut(\'17\')">Budget Increase</a></li>');
	// h.push('    <li role="separator" class="divider"></li>');
	// h.push('    <li><a href="javascript:goShortCut(\'18\')">Budget Transfer</a></li>');
	h.push('  </ul>');
	h.push('</div>');  
	
	$("#short_cut_area").html(h.join(''));
}

//==================================================
//Log in time
//==================================================
function doLoginTime(){
	if(typeof localStorage === 'undefined'|| localStorage === null){
		console.log(' 1. HTML5 localStorage. ');
	}else{
		try{
			localStorage.setItem("user_name", common.getStrSumValue(jsonData.UserInfo["USRID"], jsonData.UserInfo["UNAME"]));
			localStorage.setItem("login_time", common.getSystemTimeFormat());
			localStorage.setItem("logout_time", "");
		}catch(e){
			if (e == QUOTA_EXCEEDED_ERR) {
				console.log('Exceeded quota!');
			}
		}
		
		console.log("User Name = " + localStorage.getItem("user_name"));
		console.log("Login Time = " + localStorage.getItem("login_time"));
	}
}

//==================================================
//Log out time
//==================================================
function doLogoutTime(){
	// if(typeof localStorage === 'undefined'|| localStorage === null){
	// 	console.log(' 1. HTML5 localStorage. ');
	// }else{
	// 	try{
	// 		localStorage.setItem("logout_time", common.getSystemTimeFormat());
	// 	}catch(e){
	// 		if (e == QUOTA_EXCEEDED_ERR) {
	// 			console.log('Exceeded quota!')
	// 		}
	// 	}
		
	// 	console.log("Logout Time = " + localStorage.getItem("logout_time"));
	// }
}
//New Add approval line - 03.03.2017 ==========================================================
//Create
function setCreateApprovalTableData(data){
	var approvalLine = [];
    var arrReq = [], arrAcc = [];
    var label = g_label.getData();
    var totalCnt = 3;
    deleteTotalApprovalLine();
    
    if(typeof data.ApprovalLine !== "undefined" && data.ApprovalLine !== null){
    	approvalLine = data.ApprovalLine;
    }else{
    	approvalLine = data;
    }

    if(approvalLine.length > 0){
    	for (let i=0, max=approvalLine.length; i<max; i++) {
        	if(approvalLine[i]["RELTYP"] === "R" || approvalLine[i]["RELTYP"] === "A"){
        		arrReq.push(approvalLine[i]);
        	}else if(approvalLine[i]["RELTYP"] === "C"){
        		arrAcc.push(approvalLine[i]);
        	}
    	}
    }
   
    //Approval Line
    /*
    if(arrReq.length > 0){
    	$("#request_line").removeClass("approval_close");
    	$("#add_approval_area").removeClass("display_n");
    	jsonData.RequestLineTableData = arrReq;
        var maxLen = constants.c_approval_maxLen - arrReq.length;

        var h = [];
        h.push('<tr>');
        for(let i=0, max=arrReq.length; i<max; i++) {
            if(arrReq[i]["RELTYP"] === "R" && arrReq[i]["PKTXT"] === ""){
               	ltext = label["PERSON_IN_CHARGE"];
            }else{
               	if(arrReq[i]["PKTXT"] === ""){
               		ltext = "&nbsp;";
                }else{
               		ltext = arrReq[i]["PKTXT"];
               	}
            }
       		h.push('<th class="td_basic_center font-wei width_16">' + ltext + '</th>');
        }
        if(maxLen > 0){
        	for (let i=0, max=maxLen; i<max; i++) {
        		h.push('<th class="td_basic_center width_16">&nbsp;</th>');
        	}
        }
        h.push('</tr>');
        $('#request_approval_table > thead').html(h.join(''));
        //Header title - end

        //Contents - start
        h = [];
        for (let i=0, len=totalCnt; i<len; i++) {
        	h.push('<tr>');
            for (let j=0, max=arrReq.length; j<max; j++) {
                if(i===0){
	                if(arrReq[j]["APPID"] === ""){
	                	ltext = "&nbsp;";
	                }else{
	                	ltext = arrReq[j]["UNAME"];
	                }
            		h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
                }else if(i===1){
                	if(arrReq[j]["TAKER"] === ""){
	                	ltext = "&nbsp;";
	                }else{
	                	ltext = "("+ arrReq[j]["UNAME_T"] +")";
	                }
                	h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
                }else if(i===2){
                	var className = "td_basic_left";
                	if(arrReq[j]["ASTAT"] === "" && (arrReq[j]["RELTYP"] === "R" && arrReq[j]["APPDG"] === "R")){
                		if(arrReq[j]["ADATEM"] !== ""){
                			ltext = common.getDate(arrReq[j]["ADATEM"]) + " / " + arrReq[j]["ATIME"] + " / " + label["REQUESTED"];
                		}else{
                			ltext = "&nbsp;";
                		}
	                }else{
	                	if(arrReq[j]["ASTAT"] === "" ){
	                		ltext = "&nbsp;";
	                	}else if(arrReq[j]["ASTAT"] === "0" || arrReq[j]["ASTAT"] === "1"){
	                		ltext = arrReq[j]["ASTAT_T"];
	                		className = "td_basic_center";
	                	}else{
	                		ltext = common.getDate(arrReq[j]["ADATEM"]) + " / " + arrReq[j]["ATIME"] + " / " + arrReq[j]["ASTAT_T"];
	                	}
	                }
                	h.push('<td class="'+ className + '" width_16">' + ltext + '</td>');
                //}else if(i===3){
                //	if(arrReq[j]["ASTAT"] === ""){
	            //    	ltext = "&nbsp;";
	            //    }else{
	            //    	ltext = arrReq[j]["ASTAT_T"];
	            //    }
                //	h.push('<td class="td_basic_center width_16">' + ltext + '</td>');
                }
            }
            if(maxLen > 0){
            	for (let i=0, max=maxLen; i<max; i++) {
            		h.push('<td class="td_basic_center width_16">&nbsp;</td>');
            	}
            }
            h.push('</tr>');
        }
        //Contents - end

        $('#request_approval_table > tbody').html(h.join(''));
    }else{
    	$("#request_line").addClass("approval_close");
    }*/
    
    if (arrReq && arrReq.length > 0){
    	$("#request_line").removeClass("approval_close");
    	$("#add_approval_area").removeClass("display_n");
    	jsonData.RequestLineTableData = arrReq;
    }
    approvalLineBuilder.drawLine(arrReq, approvalLineBuilder.showType.create);

    //Reference Line
    /*
    if(arrAcc.length > 0){
    	$("#accounting_line").removeClass("approval_close");
    	$("#add_reference_area").removeClass("display_n");
        jsonData.AccountLineTableData = arrAcc;
        var maxLen = constants.c_approval_maxLen - arrAcc.length;

      //Header title - start
        var h = [];
        h.push('<tr>');
        for (let i=0, max=arrAcc.length; i<max; i++) {
               if(arrAcc[i]["PKTXT"] === ""){
               	ltext = label["RELATING_TEAM"];
               }else{
               	ltext = arrAcc[i]["PKTXT"];
               }
       		h.push('<th class="td_basic_center font-wei width_16">' + ltext + '</th>');
        }
        if(maxLen > 0){
        	for (let i=0, max=maxLen; i<max; i++) {
        		h.push('<th class="td_basic_center width_16">&nbsp;</th>');
        	}
        }
        h.push('</tr>');
        $('#accounting_approval_table > thead').html(h.join(''));
        //Header title - end
        
        //Contents - start
        h = [];
        for (let i=0, len=totalCnt; i<len; i++) {
        	h.push('<tr>');
            for (let j=0, max=arrAcc.length; j<max; j++) {
                if(i===0){
	                if(arrAcc[j]["APPID"] === ""){
	                	ltext = "&nbsp;";
	                }else{
	                	ltext = arrAcc[j]["UNAME"];
	                }
            		h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
                }else if(i===1){
                	if(arrAcc[j]["TAKER"] === ""){
	                	ltext = "&nbsp;";
	                }else{
	                	ltext = "("+ arrAcc[j]["UNAME_T"] +")";
	                }
                	h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
                }else if(i===2){
                	var className = "td_basic_left";
                	if(arrAcc[j]["ASTAT"] === "" && (arrAcc[j]["RELTYP"] === "R" && arrAcc[j]["APPDG"] === "R")){
                		if(arrAcc[j]["ADATEM"] !== ""){
                			ltext = common.getDate(arrAcc[j]["ADATEM"]) + " / " + arrAcc[j]["ATIME"] + " / " + label["REQUESTED"];
                		}else{
                			ltext = "&nbsp;";
                		}
	                }else{
	                	if(arrAcc[j]["ASTAT"] === "" ){
	                		ltext = "&nbsp;";
	                	}else if(arrAcc[j]["ASTAT"] === "0" || arrAcc[j]["ASTAT"] === "1"){
	                		ltext = arrAcc[j]["ASTAT_T"];
	                		className = "td_basic_center";
	                	}else{
	                		ltext = common.getDate(arrAcc[j]["ADATEM"]) + " / " + arrAcc[j]["ATIME"] + " / " + arrAcc[j]["ASTAT_T"];
	                	}
	                }
                	h.push('<td class="'+ className + '" width_16">' + ltext + '</td>');
                //}else if(i===3){
                //	if(arrAcc[j]["ASTAT"] === ""){
	            //    	ltext = "&nbsp;";
	            //    }else{
	            //    	ltext = arrAcc[j]["ASTAT_T"];
	            //    }
                //	h.push('<td class="td_basic_center width_16">' + ltext + '</td>');
                }
            }
            if(maxLen > 0){
            	for (let i=0, max=maxLen; i<max; i++) {
            		h.push('<td class="td_basic_center font-wei width_16">&nbsp;</td>');
            	}
            }
            h.push('</tr>');
        }
        //Contents - end

        $('#accounting_approval_table > tbody').html(h.join(''));
    }else{
    	maxLen = constants.c_approval_maxLen - arrAcc.length;
    	
    	if(arrReq.length === 0 && arrAcc.length === 0){
    		$("#accounting_line").addClass("approval_close");
    	}else{
	    	if(view.getData() === "C" || view.getData() === "U"){
	    		h = [];
	    		if(maxLen > 0){
	    			$("#accounting_line").removeClass("approval_close");		//Reference area
	    			$("#add_reference_area").removeClass("display_n");			//Add reference button
	    			
	    			//Header title - start
	    			h.push('<tr>');
	            	for (let i=0, max=maxLen; i<max; i++) {
	            		h.push('<td class="td_basic_center font-wei width_16">&nbsp;</td>');
	            	}
	            	h.push('</tr>');
	                $('#accounting_approval_table > thead').html(h.join(''));
	                //Header title - end
	                
	    			
	                //Contents - start
	                h = [];
	                for (let i=0, len=totalCnt; i<len; i++) {
	        			h.push('<tr>');
	                	for (let j=0, max=maxLen; j<max; j++) {
	                		h.push('<td class="td_basic_center font-wei width_16">&nbsp;</td>');
	                	}
	                	h.push('</tr>');
	                }
	                //Contents - end
	            }
	    		$('#accounting_approval_table > tbody').html(h.join(''));
	    	}else{
	    		$("#accounting_line").addClass("approval_close");
	    	}
    	}
    	
    }
    */
    hideReferenceLine();
    if (arrAcc && arrAcc.length > 0){
    	$("#accounting_line").removeClass("approval_close");
    	$("#add_reference_area").removeClass("display_n");
    	jsonData.AccountLineTableData = arrAcc;
    	showReferenceLine();
    }
    referenceLineBuilder.drawLine(arrAcc, referenceLineBuilder.showType.create);

}

//Detail, Approval, Detail2
function setApprovalTableData(data){
	var headerData 			 = data.HeaderData;
	var requestLineTableData = data.RequestLineTableData;
    var accountLineTableData = data.AccountLineTableData;
    var approvalLineTableData = [], h = [];
    var label = g_label.getData();
    var ltext = "";
    var flag = false;
    var totalCnt = 3;
    
    
    if(typeof data.ApprovalLineTableData !== "undefined" && data.ApprovalLineTableData !== null){
    	approvalLineTableData = data.ApprovalLineTableData;
    }else{
    	if(requestLineTableData && requestLineTableData.length > 0){
	    	for(var i=0, len=requestLineTableData.length; i<len; i++){
	    		approvalLineTableData.push(requestLineTableData[i]);
	    	}
    	}
    	
    	if(accountLineTableData && accountLineTableData.length > 0){
	    	for(var i=0, len=accountLineTableData.length; i<len; i++){
	    		approvalLineTableData.push(accountLineTableData[i]);
	    	}
    	}
    }
    
    //Comments show/hide 
    if(approvalLineTableData && approvalLineTableData.length > 0){
    	for(var i=0, len=approvalLineTableData.length; i<len; i++){
    		if(approvalLineTableData[i]["OPINION"] !== ""){
    			flag = true;
    			break;
    		}
    	}
    }
    //Comments show/hide 
    
    //Approval Line Start ==============================================================
    /*
    if(requestLineTableData !== null && typeof requestLineTableData !== 'undefined'){
        if(requestLineTableData.length > 0){
            $("#request_line").removeClass("approval_close");

            jsonData.RequestLineTableData = data.RequestLineTableData;
            var maxLen = constants.c_approval_maxLen - data.RequestLineTableData.length;
            
            //Header title - start
            var h = [];
            h.push('<tr>');
            for (let i=0, max=requestLineTableData.length; i<max; i++) {
	                if(i === 0 && requestLineTableData[i]["PKTXT"] === ""){
	                	ltext = label["PERSON_IN_CHARGE"];
	                }else{
	                	if(requestLineTableData[i]["PKTXT"] === ""){
	                		ltext = "&nbsp;";
	                	}else{
	                		ltext = requestLineTableData[i]["PKTXT"];
	                	}
	                }
            		h.push('<th class="td_basic_center font-wei width_16">' + ltext + '</th>');
            }
            if(maxLen > 0){
            	for (let i=0, max=maxLen; i<max; i++) {
            		h.push('<th class="td_basic_center width_16">&nbsp;</th>');
            	}
            }
            h.push('</tr>');
            $('#request_approval_table > thead').html(h.join(''));
            //Header title - end
            
            //Contents - start
            h = [];
            for (let i=0, len=totalCnt; i<len; i++) {
            	h.push('<tr>');
                for (let j=0, max=requestLineTableData.length; j<max; j++) {
	                if(i===0){
		                if(requestLineTableData[j]["APPID"] === ""){
		                	ltext = "&nbsp;";
		                }else{
		                	ltext = requestLineTableData[j]["UNAME"];
		                }
                		h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
	                }else if(i===1){
	                	if(requestLineTableData[j]["TAKER"] === ""){
		                	ltext = "&nbsp;";
		                }else{
		                	ltext = "("+ requestLineTableData[j]["UNAME_T"] +")";
		                }
	                	h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
	                }else if(i===2){
	                	var className = "td_basic_left";
	                	if(requestLineTableData[j]["ASTAT"] === "" && (requestLineTableData[j]["RELTYP"] === "R" && requestLineTableData[j]["APPDG"] === "R")){
	                		if(requestLineTableData[j]["ADATEM"] !== ""){
	                			ltext = common.getDate(requestLineTableData[j]["ADATEM"]) + " / " + requestLineTableData[j]["ATIME"] + " / " + label["REQUESTED"];
	                		}else{
	                			ltext = "&nbsp;";
	                		}
		                }else{
		                	if(requestLineTableData[j]["ASTAT"] === "" ){
		                		ltext = "&nbsp;";
		                	}else if(requestLineTableData[j]["ASTAT"] === "0" || requestLineTableData[j]["ASTAT"] === "1"){
		                		ltext = requestLineTableData[j]["ASTAT_T"];
		                		className = "td_basic_center";
		                	}else{
		                		ltext = common.getDate(requestLineTableData[j]["ADATEM"]) + " / " + requestLineTableData[j]["ATIME"] + " / " + requestLineTableData[j]["ASTAT_T"];
		                	}
		                }
	                	h.push('<td class="'+ className + '" width_16">' + ltext + '</td>');
	                //}else if(i===3){
	                //	if(requestLineTableData[j]["ASTAT"] === ""){
		            //    	ltext = "&nbsp;";
		           //     }else{
		           //     	ltext = requestLineTableData[j]["ASTAT_T"];
		           //     }
	               // 	h.push('<td class="td_basic_center width_16">' + ltext + '</td>');
	                }
                }
                if(maxLen > 0){
                	for (let i=0, max=maxLen; i<max; i++) {
                		h.push('<td class="td_basic_center width_16">&nbsp;</td>');
                	}
                }
                h.push('</tr>');
            }
            //Contents - end
            
            $('#request_approval_table > tbody').html(h.join(''));
        }else{
            $("#request_line").addClass("approval_close");
        }
    }else{
        $("#request_line").addClass("approval_close");
    }
    */
    if (requestLineTableData && requestLineTableData.length > 0) {
    	$("#request_line").removeClass("approval_close");
    	jsonData.RequestLineTableData = data.RequestLineTableData;
    }
    approvalLineBuilder.drawLine(requestLineTableData, approvalLineBuilder.showType.detail);
    //Approval Line End ==============================================================

	//Reference Line Start ==============================================================
    /*
    if(accountLineTableData !== null && typeof accountLineTableData !== 'undefined'){
    	var h = [];
    	maxLen = constants.c_approval_maxLen - data.AccountLineTableData.length;
    	
        if(accountLineTableData.length > 0){
            $("#accounting_line").removeClass("approval_close");
            jsonData.AccountLineTableData = data.AccountLineTableData;

            //Header title - start
            h.push('<tr>');
            for (let i=0, max=accountLineTableData.length; i<max; i++) {
	                if(accountLineTableData[i]["PKTXT"] === ""){
	                	ltext = label["RELATING_TEAM"];
	                }else{
	                	ltext = accountLineTableData[i]["PKTXT"];
	                }
            		h.push('<th class="td_basic_center font-wei width_16">' + ltext + '</th>');
            }
            if(maxLen > 0){
            	for (let i=0, max=maxLen; i<max; i++) {
            		h.push('<th class="td_basic_center width_16">&nbsp;</th>');
            	}
            }
            h.push('</tr>');
            $('#accounting_approval_table > thead').html(h.join(''));
            //Header title - end
            
            //Contents - start
            h = [];
            for (let i=0, len=totalCnt; i<len; i++) {
            	h.push('<tr>');
                for (let j=0, max=accountLineTableData.length; j<max; j++) {
	                if(i===0){
		                if(accountLineTableData[j]["APPID"] === ""){
		                	ltext = "&nbsp;";
		                }else{
		                	ltext = accountLineTableData[j]["UNAME"];
		                }
                		h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
	                }else if(i===1){
	                	if(accountLineTableData[j]["TAKER"] === ""){
		                	ltext = "&nbsp;";
		                }else{
		                	ltext = "("+ accountLineTableData[j]["UNAME_T"] +")";
		                }
	                	h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
	                }else if(i===2){
	                	var className = "td_basic_left";
	                	if(accountLineTableData[j]["ASTAT"] === "" && (accountLineTableData[j]["RELTYP"] === "R" && accountLineTableData[j]["APPDG"] === "R")){
	                		if(accountLineTableData[j]["ADATEM"] !== ""){
	                			ltext = common.getDate(accountLineTableData[j]["ADATEM"]) + " / " + accountLineTableData[j]["ATIME"] + " / " + label["REQUESTED"];
	                		}else{
	                			ltext = "&nbsp;";
	                		}
		                }else{
		                	if(accountLineTableData[j]["ASTAT"] === "" ){
		                		ltext = "&nbsp;";
		                	}else if(accountLineTableData[j]["ASTAT"] === "0" || accountLineTableData[j]["ASTAT"] === "1"){
		                		ltext = accountLineTableData[j]["ASTAT_T"];
		                		className = "td_basic_center";
		                	}else{
		                		ltext = common.getDate(accountLineTableData[j]["ADATEM"]) + " / " + accountLineTableData[j]["ATIME"] + " / " + accountLineTableData[j]["ASTAT_T"];
		                	}
		                }
	                	h.push('<td class="'+ className + '" width_16">' + ltext + '</td>');
	                //}else if(i===3){
	                //	if(accountLineTableData[j]["ASTAT"] === ""){
		            //    	ltext = "&nbsp;";
		            //    }else{
		            //    	ltext = accountLineTableData[j]["ASTAT_T"];
		            //    }
	                //	h.push('<td class="td_basic_center width_16">' + ltext + '</td>');
	                }
                }
                if(maxLen > 0){
                	for (let i=0, max=maxLen; i<max; i++) {
                		h.push('<td class="td_basic_center font-wei width_16">&nbsp;</td>');
                	}
                }
                h.push('</tr>');
            }
            //Contents - end

            $('#accounting_approval_table > tbody').html(h.join(''));
        }else{
        	if(view.getData() === "D"){
        		$("#accounting_line").addClass("approval_close");
        	}else{
        		h = [];
        		if(maxLen > 0){
        			$("#accounting_line").removeClass("approval_close");
        			
        			//Header title - start
        			h.push('<tr>');
                	for (let i=0, max=maxLen; i<max; i++) {
                		h.push('<td class="td_basic_center font-wei width_16">&nbsp;</td>');
                	}
                	h.push('</tr>');
                    $('#accounting_approval_table > thead').html(h.join(''));
                    //Header title - end
                    
        			
                    //Contents - start
                    h = [];
                    for (let i=0, len=totalCnt; i<len; i++) {
	        			h.push('<tr>');
	                	for (let j=0, max=maxLen; j<max; j++) {
	                		h.push('<td class="td_basic_center font-wei width_16">&nbsp;</td>');
	                	}
	                	h.push('</tr>');
                    }
                    //Contents - end
                }
        		$('#accounting_approval_table > tbody').html(h.join(''));
        	}
        }
    }else{
        $("#accounting_line").addClass("approval_close");
    }
    */
    hideReferenceLine();
    if (accountLineTableData && accountLineTableData.length > 0){
    	$("#accounting_line").removeClass("approval_close");
    	jsonData.AccountLineTableData = data.AccountLineTableData;
    	showReferenceLine();
    }
    referenceLineBuilder.drawLine(accountLineTableData, referenceLineBuilder.showType.detail);
    //Reference Line End ==============================================================

    //Comment Line Start ==============================================================
    if(approvalLineTableData !== null && typeof approvalLineTableData !== 'undefined'){
        if(approvalLineTableData.length > 0 && flag){
            $("#comment_line").removeClass("approval_close");
            jsonData.approvalLineTableData = data.approvalLineTableData;

            //Header title - start
            var h = [];
            for (let i=1, max=approvalLineTableData.length; i<max; i++) {
            	if(approvalLineTableData[i]["OPINION"] !== ""){
	            	h.push('<tr onclick="">');
	            	if(approvalLineTableData[i]["APPID"] === ""){
	                	ltext = "&nbsp;";
	                }else{
	                	ltext = approvalLineTableData[i]["UFNAME"];
	                	if(approvalLineTableData[i]["TAKER"] !== ""){
	                		ltext = approvalLineTableData[i]["TFNAME"];
	                	}
	                }
	            	h.push('<td class="td_basic_left width_16">' + ltext + '</td>');
	            	if(approvalLineTableData[i]["OPINION"] === ""){
	                	ltext = "&nbsp;";
	                }else{
	                	ltext = approvalLineTableData[i]["OPINION"];
	                }
	        		h.push('<td class="td_basic_left width_80"><textarea class="input-sm form-control" rows="1" name="opinion" readonly>' + ltext + '</textarea></td>');
	        		h.push('</tr>');
            	}
            }
            //Contents - end

            $('#comment_approval_table > tbody').html(h.join(''));
        }else{
            $("#comment_line").addClass("approval_close");
        }
    }else{
        $("#comment_line").addClass("approval_close");
    }
    //Comment Line End ==============================================================
    
    if(headerData.CSTAT === constants.c_cstat_$ || headerData.CSTAT === constants.c_cstat_9){
    	if(typeof view.getData() !== "undefined" && view.getData() !== null){
    		if(view.getData() === "C" || view.getData() === "U"){
    			$("#add_approval_area").removeClass("display_n");
	    		$("#add_reference_area").removeClass("display_n");
    		}
    	}
    }
    
    //Text Area - Auto height
    //common.setAutoHeight("opinion","N");
    common.setAutoHeightHasMin("opinion","N");    
    
    if(view.getData() === "D"){
    	if($("#accounting_line").hasClass("approval_close") && $("#request_line").hasClass("approval_close")){
    		//$("#div_full_screen > div").
    	}
    }

    hideLoading();
}

var approvalLineBuilder = {
	showType : {
		create : 'C', 
		detail: 'D'
	},
	drawLine : function(approvalData, showType){
	    var approvalLineArea =  $('#request_approval_table').parent();
	    var label = g_label.getData();
	    
	    // Init
	    $(approvalLineArea).find('.approval_line').remove();
	    
	    // Rendering Approval Line
	    if(approvalData && approvalData.length > 0){
            var approvalContainer = $('<div class="approval_line"></div>');
            
            $(approvalData).each(function(idx, dataObj){
            	var approvalItem = $('<div class="approval_item"></div>');
            	
            	// Title
            	var approvalTitle = $('<div class="approval_title"></div>');
            	var approvalTitleVal = dataObj["PKTXT"];
            	if (idx == 0 && !approvalTitleVal){
            		approvalTitleVal = label["PERSON_IN_CHARGE"];
                } 
            	else if (!approvalTitleVal) {
            		approvalTitleVal = "&nbsp;";
                }
            	$(approvalTitle).html(approvalTitleVal);
            	$(approvalItem).append(approvalTitle);
            	
            	// Name
            	var approvalName = $('<div class="approval_content"><div class="approval_icon"><i class="fa fa-user"></i></div><div class="approval_val"></div></div>');
            	var approvalNameVal = dataObj["UNAME"];
                if (!dataObj["APPID"]){
                	approvalNameVal = "&nbsp;";
                }
                $(approvalName).find('.approval_val').html(approvalNameVal);
                $(approvalItem).append(approvalName);
            	
                // Taker (fa-user-plus)
                var approvalTaker = $('<div class="approval_content"><div class="approval_icon"><i class="fa"></i></div><div class="approval_val"></div></div>');
                var approvalTakerVal = '(' + dataObj["UNAME_T"] + ')';
                if (!dataObj["TAKER"]){
                	$(approvalTaker).find('.approval_icon').empty();
                	approvalTakerVal = "&nbsp;";
                }
                $(approvalTaker).find('.approval_val').html(approvalTakerVal);
                $(approvalItem).append(approvalTaker);
                
                // Time
                var approvalTime = $('<div class="approval_content"><div class="approval_icon"><i class="fa fa-clock-o"></i></div><div class="approval_val"></div></div>');
                var approvalTimeVal = common.getDate(dataObj["ADATEM"]) + " / " + dataObj["ATIME"];
                if (!dataObj["ADATEM"]) {
                	$(approvalTime).find('.approval_icon').empty();
                	approvalTimeVal = "&nbsp;";
                }
                $(approvalTime).find('.approval_val').html(approvalTimeVal);
                $(approvalItem).append(approvalTime);
                
                // Status
                var approvalStatus = $('<div class="approval_content"><div class="approval_icon"><i class="fa"></i></div><div class="approval_val"></div></div>');
                var approvalStatusVal = "&nbsp;";
                
            	// ASTAT(Approval Status = "") : �꾩쭅 Request �덈맂 �곹깭
            	// and RELTYP(Approval type = "R") : �붿껌��, ["A" : 寃곗젣��, "C" : �덊띁�곗뒪]
            	// and APPDG(Approval step = "R") : 臾댁“嫄� R - �섎� �놁쓬(遺���?)
                if (showType == approvalLineBuilder.showType.detail) {
	            	if (!dataObj["ASTAT"] && (dataObj["RELTYP"] == "R" && dataObj["APPDG"] == "R")) {
	            		if (dataObj["ADATEM"]) {	
	            			approvalStatusVal = label["REQUESTED"];
	            			$(approvalStatus).find(".approval_icon i").addClass("fa-file-text-o");
	            			$(approvalStatus).addClass('approval_requested');
	            		}
	                } 
	            	else {
	            		if (dataObj["ASTAT_T"]) {
	            			approvalStatusVal = dataObj["ASTAT_T"];
	            		}
	            		
	            		if (dataObj["ASTAT"] == "1") {
	            			if (approvalStatusVal == "&nbsp;") approvalStatusVal = label["IN_PROGRESS"];
		                	$(approvalStatus).find(".approval_icon i").addClass("fa-hourglass-half");
		                	$(approvalStatus).addClass('approval_progress');
		                	$(approvalItem).addClass("approval_on");
		                } 
	            		else if (dataObj["ASTAT"] == "2") {
	            			if (approvalStatusVal == "&nbsp;") approvalStatusVal = label["APPROVED"];
		                	$(approvalStatus).find(".approval_icon i").addClass("fa-check");
		                	$(approvalStatus).addClass('approval_complete');
		                }
	            		else if (dataObj["ASTAT"] == "3") {
	            			if (approvalStatusVal == "&nbsp;") approvalStatusVal = label["REJECTED"];
		                	$(approvalStatus).find(".approval_icon i").addClass("fa-undo");
		                	$(approvalStatus).addClass('approval_reject');
		                }
	            	}
                }
            	
                $(approvalStatus).find('.approval_val').html(approvalStatusVal);
                $(approvalItem).append(approvalStatus);
                
                // Append Item
            	$(approvalContainer).append(approvalItem);
                
                // Arrow
                if (idx != approvalData.length-1) {
                	var approvalArrow = $('<div class="approval_arrow"><i class="fa fa-chevron-right"></i></div>');
                	$(approvalContainer).append(approvalArrow);
                }
            });
            
            $(approvalLineArea).append(approvalContainer);
            $("#request_line").removeClass("approval_close");
        }
	    else{
            $("#request_line").addClass("approval_close");
        }
	}
}

var referenceLineBuilder = {
	showType : {
		create : 'C', 
		detail: 'D'
	},
	drawLine : function(referenceData, showType){
		var referenceLineArea =  $('#accounting_approval_table').parent();
	    var label = g_label.getData();
	    
	    // Init
	    $(referenceLineArea).find('.approval_line').remove();
	    
	    // Rendering Reference Line
	    if(referenceData && referenceData.length > 0){
	    	var approvalContainer = $('<div class="approval_line"></div>');
            
            $(referenceData).each(function(idx, dataObj){
            	var approvalItem = $('<div class="approval_item"></div>');
            	
            	// Title
            	var approvalTitle = $('<div class="approval_title"></div>');
            	var approvalTitleVal = dataObj["PKTXT"];
            	if (!approvalTitleVal){
            		approvalTitleVal = label["RELATING_TEAM"];
                }
            	$(approvalTitle).html(approvalTitleVal);
            	$(approvalItem).append(approvalTitle);
            	
            	// Name
            	var approvalName = $('<div class="approval_content"><div class="approval_icon"><i class="fa fa-user"></i></div><div class="approval_val"></div></div>');
            	var approvalNameVal = dataObj["UNAME"];
                if (!dataObj["APPID"]){
                	approvalNameVal = "&nbsp;";
                }
                $(approvalName).find('.approval_val').html(approvalNameVal);
                $(approvalItem).append(approvalName);
                
                // Taker (fa-user-plus)
                var approvalTaker = $('<div class="approval_content"><div class="approval_icon"><i class="fa"></i></div><div class="approval_val"></div></div>');
                var approvalTakerVal = '(' + dataObj["UNAME_T"] + ')';
                if (!dataObj["TAKER"]){
                	$(approvalTaker).find('.approval_icon').empty();
                	approvalTakerVal = "&nbsp;";
                }
                $(approvalTaker).find('.approval_val').html(approvalTakerVal);
                $(approvalItem).append(approvalTaker);
            	
                // Time
                var approvalTime = $('<div class="approval_content"><div class="approval_icon"><i class="fa fa-clock-o"></i></div><div class="approval_val"></div></div>');
                var approvalTimeVal = common.getDate(dataObj["ADATEM"]) + " / " + dataObj["ATIME"];
                if (!dataObj["ADATEM"]) {
                	$(approvalTime).find('.approval_icon').empty();
                	approvalTimeVal = "&nbsp;";
                }
                $(approvalTime).find('.approval_val').html(approvalTimeVal);
                $(approvalItem).append(approvalTime);
                
                // Status
                var approvalStatus = $('<div class="approval_content"><div class="approval_icon"><i class="fa"></i></div><div class="approval_val"></div></div>');
                var approvalStatusVal = "&nbsp;";
                
            	// ASTAT(Approval Status = "") : �꾩쭅 Request �덈맂 �곹깭
            	// and RELTYP(Approval type = "R") : �붿껌��, ["A" : 寃곗젣��, "C" : �덊띁�곗뒪]
            	// and APPDG(Approval step = "R") : 臾댁“嫄� R - �섎� �놁쓬(遺���?)
                if (showType == referenceLineBuilder.showType.detail) {
	            	if (!dataObj["ASTAT"] && (dataObj["RELTYP"] == "R" && dataObj["APPDG"] == "R")) {
	            		if (dataObj["ADATEM"]) {	
	            			approvalStatusVal = label["REQUESTED"];
	            			$(approvalStatus).find(".approval_icon i").addClass("fa-file-text-o");
	            			$(approvalStatus).addClass('approval_requested');
	            		}
	                }
	            	else {
	            		if (dataObj["ASTAT_T"]) {
	            			approvalStatusVal = dataObj["ASTAT_T"];
	            		}
	            		
	            		if (dataObj["ASTAT"] == "1") {
	            			if (approvalStatusVal == "&nbsp;") approvalStatusVal = label["IN_PROGRESS"];
	            			$(approvalStatus).find(".approval_icon i").addClass("fa-hourglass-half");
		                	$(approvalStatus).addClass('approval_progress');
		                	$(approvalItem).addClass("approval_on");
		                } 
	            		else if (dataObj["ASTAT"] == "2") {
	            			if (approvalStatusVal == "&nbsp;") approvalStatusVal = label["APPROVED"];
		                	$(approvalStatus).find(".approval_icon i").addClass("fa-check");
		                	$(approvalStatus).addClass('approval_complete');
		                }
	            		else if (dataObj["ASTAT"] == "3") {
	            			if (approvalStatusVal == "&nbsp;") approvalStatusVal = label["REJECTED"];
		                	$(approvalStatus).find(".approval_icon i").addClass("fa-undo");
		                	$(approvalStatus).addClass('approval_reject');
		                }
	            	}
                }
            	
                $(approvalStatus).find('.approval_val').html(approvalStatusVal);
                $(approvalItem).append(approvalStatus);
                
            	// Append Item
            	$(approvalContainer).append(approvalItem);
            	
            	// Empty Arrow
                if (idx != referenceData.length-1) {
                	var approvalArrow = $('<div class="approval_arrow"><i class="fa"></i></div>');
                	$(approvalContainer).append(approvalArrow);
                }
            });
            	
            $(referenceLineArea).append(approvalContainer);
	    	$("#accounting_line").removeClass("approval_close");
	    }
	    else {
	    	$("#accounting_line").addClass("approval_close");
	    }
	}
}

function hideReferenceLine() {
    var collapse = $("#accounting_line").find('a.collapse-link');   
    var ibox = collapse.closest('div.ibox');
    var button = collapse.find('i');
    var content = ibox.find('div.ibox-content');
    if( button.hasClass('fa-chevron-up') ){
	    content.slideToggle(200);
	    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
	    ibox.toggleClass('').toggleClass('border-bottom');
	    setTimeout(function () {
	        ibox.resize();
	        ibox.find('[id^=map-]').resize();
	    }, 50); 
    }
}

function showReferenceLine() {
    var collapse = $("#accounting_line").find('a.collapse-link');   
    var ibox = collapse.closest('div.ibox');
    var button = collapse.find('i');
    var content = ibox.find('div.ibox-content');
    if( button.hasClass('fa-chevron-down') ){
	    content.slideToggle(200);
	    button.toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
	    ibox.toggleClass('').toggleClass('border-bottom');
	    setTimeout(function () {
	        ibox.resize();
	        ibox.find('[id^=map-]').resize();
	    }, 50); 
    }	
}

//Approval line
function setNewModalApprovalData(target) {
    var appData = jsonData.RequestLineTableData;
    var h = [], objData = [];
    var disabled = "";
    
    //�붿껌�먯� 寃곗옱�� 援щ텇
    if(typeof jsonData.ApprovalTempData !== "undefined" && jsonData.ApprovalTempData !== null){
    	if(jsonData.ApprovalTempData.length === 0){
		    if(typeof appData !== "undefined" && appData !== null){
		    	if(appData.length > 1){
			    	for(var i=0, len=appData.length; i<len; i++){
			    		if(appData[i]["RELTYP"] === "R" && appData[i]["APPDG"] === "R"){
			    			reqLine.setData(appData[i]);
			    		}else{
			    			jsonData.ApprovalTempData.push(appData[i]);
			    		}
			    	}
		    	}
		    }
    	}else{
    		appData = jsonData.ApprovalTempData;
    		
    		if(typeof appData !== "undefined" && appData !== null){
		    	if(appData.length > 1){
		    		jsonData.ApprovalTempData = [];
			    	for(var i=0, len=appData.length; i<len; i++){
			    		if(appData[i]["RELTYP"] === "R" && appData[i]["APPDG"] === "R"){
			    			reqLine.setData(appData[i]);
			    		}else{
			    			jsonData.ApprovalTempData.push(appData[i]);
			    		}
			    	}
		    	}
		    }
    	}
    	
		objData = jsonData.ApprovalTempData;
    }else{
    	console.log("jsonData.ApprovalTempData is undefined or null.");
    }
    
    $('#modal_parent_approval_table > tbody').html('');
    
    if(typeof objData !== "undefined" && objData !== null){
    	if(objData.length > 0){
	        for (let i=0, len=objData.length; i<len; i++) {
	        	if(objData[i]["OBLIG"] === "X"){ disabled = "disabled"; }else{ disabled = "disabled"; }
	            h.push('<tr onclick="javascript:setNewColorRightTable(' + i + ', \'O\', \''+ target +'\')" ondblclick="javascript:setNewColorRightTable(' + i + ', \'D\', \''+ target +'\')" class="cur_pit">');
	            h.push('<td class="td_basic_left width_40"><select name="reltyp" ' + disabled + ' class="input-sm form-control" onChange="javascript:setChangeReltypeValue(\'' + i + '\',\'' + this + '\');">'+ getNewAppStep(i, objData, target) +'</select></td>');
	            h.push('<td class="td_basic_left width_30">' + objData[i]["UNAME"] + '</td>');
	            if(typeof objData[i]["UNAME_T"] !== "undefined" && objData[i]["UNAME_T"] !== null){
	            	h.push('<td class="td_basic_left width_30">' + objData[i]["UNAME_T"] + '</td>');
	            }else{
	            	h.push('<td class="td_basic_left width_30">&nbsp;</td>');
	            }
	            h.push('</tr>');
	        }
    	}else{
    		h = setNoData("3");
    	}
    }else{
        h = setNoData("3");
    }

    $('#modal_parent_approval_table > tbody').html(h.join(''));
    //setIndexDataReset();
    if(String(gr_index.getData()) !== ""){
    	setNewColorRightTable(gr_index.getData(), 'O', target);
    }
    
    //setInitialColor("right");
    
}

//Reference line
function setNewModalReferenceData(target, action) {
    var appData = jsonData.AccountLineTableData;
    var h = [], objData = [];
    var disabled = "";
    
    //�붿껌�먯� 寃곗옱�� 援щ텇
    if(typeof jsonData.ReferenceTempData !== "undefined" && jsonData.ReferenceTempData !== null){
    	if(jsonData.ReferenceTempData.length === 0){
		    if(typeof appData !== "undefined" && appData !== null){
		    	if(action !== "D" && appData.length > 0){
			    	for(var i=0, len=appData.length; i<len; i++){
			    		if(appData[i]["RELTYP"] === "R" && appData[i]["APPDG"] === "R"){
			    			//reqLine.setData(appData[i]);
			    		}else{
			    			jsonData.ReferenceTempData.push(appData[i]);
			    		}
			    	}
		    	}
		    }
    	}
    	
    	objData = jsonData.ReferenceTempData;
    }else{
    	console.log("jsonData.ReferenceTempData is undefined or null.")
    }
    
    $('#modal_parent_approval_table > tbody').html('');
    
    if(typeof objData !== "undefined" && objData !== null){
    	if(objData.length > 0){
	        for (let i=0, len=objData.length; i<len; i++) {
	        	if(objData[i]["OBLIG"] === "X"){ disabled = "disabled"; }else{ disabled = "disabled"; }
	            h.push('<tr onclick="javascript:setNewColorRightTable(' + i + ', \'O\', \''+ target +'\')" ondblclick="javascript:setNewColorRightTable(' + i + ', \'D\', \''+ target +'\')" class="cur_pit">');
	            h.push('<td class="td_basic_left width_40"><select name="reltyp" ' + disabled + ' class="input-sm form-control" onChange="javascript:setChangeReltypeValue(\'' + i + '\',\'' + this + '\');">'+ getNewAppStep(i, objData, target) +'</select></td>');
	            h.push('<td class="td_basic_left width_30">' + objData[i]["UNAME"] + '</td>');
	            if(typeof objData[i]["UNAME_T"] !== "undefined" && objData[i]["UNAME_T"] !== null){
	            	h.push('<td class="td_basic_left width_30">' + objData[i]["UNAME_T"] + '</td>');
	            }else{
	            	h.push('<td class="td_basic_left width_30">&nbsp;</td>');
	            }
	            h.push('</tr>');
	            
	        }
    	}else{
    		h = setNoData("3");
    	}

    }else{
        h = setNoData("3");
    }

    $('#modal_parent_approval_table > tbody').html(h.join(''));
    //setIndexDataReset();
    if(String(gr_index.getData()) !== ""){
    	setNewColorRightTable(gr_index.getData(), 'O', target);
    }
    
    //setInitialColor("right");
    
}

//Make selectbox option
function getNewAppStep(idx, obj, target){
	var objData = obj;
	var len = approval_step.length;
	var iHtml = "", selected = "";
	
	if(len > 0){
		for(var j=0; j<len; j++){
			var tmp_value = approval_step[j]["key"];
			var tmp_text = approval_step[j]["name"];
			
			if(tmp_value === obj[idx]["RELTYP"] || tmp_value === target){
				selected = "selected";
			}else{
				selected = "";
			}
			
			iHtml += "<option value=\"" + tmp_value + "\" " + selected + ">";
			iHtml += tmp_text + "</option>";
		}
			
	}
	
	return iHtml;
}

function setNewColorLeftTable(oRow, gubun, target){
	var rowLen = $("#modal_change_approval_table tbody tr").length;
    var oCell  = $("#modal_change_approval_table tbody").parent().children().index($("#modal_change_approval_table tbody"));                     //�좏깮�� Cell
    var obj    = $('#modal_change_approval_table tbody tr:first td');                //td count
    
    if(oCell !== 0){
    	//When you select row, Change row color
    	for(var i=0; i<rowLen; i++){
    		for(var j=0, len=obj.length; j<len; j++){
    			$('#modal_change_approval_table tbody tr').eq(i).find('td').eq(j).removeClass("selected_3");
    		}
    	}
    	
    	for(var i=0, len=obj.length; i<len; i++){
    		$('#modal_change_approval_table tbody tr').eq(oRow).find('td').eq(i).addClass("selected_3");
    	}
    	//When you select row, Change row color
    	
    	if(oRow !== ""){
    		gl_index.setData(oRow);
    		setInitialColor("right");
    		gr_index.setData("");
    		if(typeof arrList !== "undefined" && arrList !== null){
    			g_array.setArray(arrList[oRow]);
    		}
    	}
    	
    }
    
    //double click 誘몄궗�⑹떆 二쇱꽍泥섎━
    if(gubun === "D"){
    	doNewAddUser(target);
    }
    
}

function setNewColorRightTable(oRow, gubun, target){
	var rowLen = $("#modal_parent_approval_table tbody tr").length;
    //var oRow = $(this).parent().parent().children().index($(this).parent());    //�좏깮�� Row
    var oCell = $("#modal_parent_approval_table tbody").parent().children().index($("#modal_parent_approval_table tbody"));                     //�좏깮�� Cell
    var obj = $('#modal_parent_approval_table tbody tr:first td');                //td count

    if(oCell !== 0){
    	//When you select row, Change row color
    	for(var i=0; i<rowLen; i++){
    		for(var j=0, len=obj.length; j<len; j++){
    			$('#modal_parent_approval_table tbody tr').eq(i).find('td').eq(j).removeClass("selected_3");
    		}
    	}
    	
    	for(var i=0, len=obj.length; i<len; i++){
    		$('#modal_parent_approval_table tbody tr').eq(oRow).find('td').eq(i).addClass("selected_3");
    	}
    	//When you select row, Change row color
    	
    	if(oRow !== ""){
    		gr_index.setData(oRow);
    		setInitialColor("left");
    		gl_index.setData("");
    		if(target === "A"){
    			g_array.setArray(jsonData.ApprovalTempData[oRow]);
    		}else if(target === "C"){
    			g_array.setArray(jsonData.ReferenceTempData[oRow]);
    		}
    	}
    	
    }
    
    //double click 誘몄궗�⑹떆 二쇱꽍泥섎━
    if(gubun === "D"){
    	doNewDelUser(target);
    }
    //double click 誘몄궗�⑹떆 二쇱꽍泥섎━
}

//Click add button
function doNewAddUser(target){
	var array = g_array.getArray();
	var label = g_label.getData();
	var len = 0;
	var obj = [];
	var row = {};
	
	if(target === "A"){							//Approval
		obj = jsonData.ApprovalTempData;
		len = jsonData.ApprovalTempData.length;
	}else if(target === "C"){					//Reference
		obj = jsonData.ReferenceTempData;
		len = jsonData.ReferenceTempData.length;
	}
	
	if((target === "A" && len >= 5) || (target === "C" && len >= 6)){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK059"],   type: "error"});
		setInitApprovalData();
		return false;
	}
	
	if(gl_index.getData() === ""){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK046"],   type: "error"});
		setInitApprovalData();
		return false;
	}
	
	if(len > 0){
		for(var i=0; i<len; i++){
			if(obj[i]["APPID"] === array["USRID"]){
				swal({   title: "Error",   text: jsonMsgData.Message["CHECK048"],   type: "error"});
				setInitialColor("left");
				gl_index.setData("");
				return false;
			}
		}
	}
	
	//Duplicate Cross check 22.03.2017
	if(target === "C"){
		if(jsonData.ApprovalTempData.length > 0){
			for(var i=0, len=jsonData.ApprovalTempData.length; i<len; i++){
				if(jsonData.ApprovalTempData[i]["APPID"] === array["USRID"]){
					swal({   title: "Error",   text: jsonMsgData.Message["CHECK048"],   type: "error"});
					setInitApprovalData();
					return false;
				}
			}
		}
	}else if(target === "A"){
		if(jsonData.ReferenceTempData.length > 0){
			for(var i=0, len=jsonData.ReferenceTempData.length; i<len; i++){
				if(jsonData.ReferenceTempData[i]["APPID"] === array["USRID"]){
					swal({   title: "Error",   text: jsonMsgData.Message["CHECK048"],   type: "error"});
					setInitApprovalData();
					return false;
				}
			}
		}
	}
	//Duplicate Cross check 22.03.2017
	
	if(typeof array !== "undefined" && array !== null){
		
		row["ORGNM"]    = array["ORGNM"];
		row["DGTXT"]    = label["REQ_DEPT"];
		row["ADATEM"]   = "";
		row["ASTAT"]    = "";
		row["ADATE"]    = "";
		if(typeof array["ORGNM_T"] !== "undefined" && array["ORGNM_T"] !== null){
    		row["ORGNM_T"]    = array["ORGNM_T"];
    	}else{
    		row["ORGNM_T"]    = "";
    	}
		row["RELSEQ"] = len + 1;
		row["ORGCD"]  = array["ORGCD"];
		row["PERSK"] = "";
		if(typeof array["UNAME_T"] !== "undefined" && array["UNAME_T"] !== null &&
		   typeof array["ORGNM_T"] !== "undefined" && array["ORGNM_T"] !== null){
			row["TFNAME"] = array["UNAME_T"] + "/" + array["ORGNM_T"];
		}else{
			row["TFNAME"] = "";
		}
		row["APPID"] =  array["USRID"];
		row["PERTY"] = "";
		if(typeof array["UNAME_T"] !== "undefined" && array["UNAME_T"] !== null){
    		row["UNAME_T"]    = array["UNAME_T"];
    	}else{
    		row["UNAME_T"]    = "";
    	}
		row["ATIME"] = "";
		if(typeof array["TAKER"] !== "undefined" && array["TAKER"] !== null){
    		row["TAKER"]    = array["TAKER"];
    	}else{
    		row["TAKER"]    = ""
    	}
		row["UNAME"] = array["UNAME"];
		if(typeof array["ORGCD_T"] !== "undefined" && array["ORGCD_T"] !== null){
    		row["ORGCD_T"]    = array["ORGCD_T"];
    	}else{
    		row["ORGCD_T"]    = ""
    	}
		row["UFNAME"] = array["UNAME"] + "/" + array["ORGNM"];
		if(typeof array["POSNM_T"] !== "undefined" && array["POSNM_T"] !== null){
    		row["POSNM_T"]    = array["POSNM_T"];
    	}else{
    		row["POSNM_T"]    = "";
    	}
		
		if(typeof array["PKTEXT"] !== "undefined" && array["PKTEXT"] !== null){
    		row["PKTXT"]    = array["PKTEXT"];
    	}else{
    		row["PKTXT"]    = "";
    	}
		
		row["OPINION"]  = "";
		row["ASTAT_T"]  = "";
		row["AELSEQ"]   = len + 1;
		if(target === "A"){
			row["RELTYP_T"] = "REQ";
			row["RELTYP"]   = constants.c_reltyp_a;
			row["APPDG"]    = "R";						//R: Requesting Dept, C: Controlling Dept.
			row["APPTYP"] = constants.c_reltyp_a;
			row["APPTYP_T"] = approval_step[0]["name"];	//Default is 'Approval'
		}else if(target === "C"){
			row["RELTYP_T"] = "REF";
			row["RELTYP"]   = constants.c_reltyp_c;
			row["APPDG"]    = "R";						//R: Requesting Dept, C: Controlling Dept.
			row["APPTYP"] = constants.c_reltyp_c;
			row["APPTYP_T"] = approval_step[1]["name"];	//Default is 'Reference'
		}
		row["STRLEN"]   = "0";
		row["OBLIG"]    = "";
		row["POSNM"]    = array["POSNM"];
		
		g_array.resetArray();
		setInitialColor("left");
		gl_index.setData("");
		
		if(target === "A"){
			jsonData.ApprovalTempData.push(row);
			setNewModalApprovalData(target);
		}else if(target === "C"){
			jsonData.ReferenceTempData.push(row);
			setNewModalReferenceData(target, "A");
		}
		
		setInitialColor("right");
	}
	
}

//Click del button
function doNewDelUser(target){
	var array = g_array.getArray();
	var obj = [], newData = [];
	var len = 0;
	var row = {};
	
	if(target === "A"){							//Approval
		obj = jsonData.ApprovalTempData;
		len = jsonData.ApprovalTempData.length;
	}else if(target === "C"){					//Reference
		obj = jsonData.ReferenceTempData;
		len = jsonData.ReferenceTempData.length;
	}
	
	if(gr_index.getData() === ""){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK046"],   type: "error"});
		setInitApprovalData();
		return false;
	}
	
	//湲곕낯 寃곗옱�먮뒗 ��젣 湲덉� - 02.02.2017
	if(array["OBLIG"] === "X"){
		swal({   title: "Error",   text: jsonMsgData.Message["CHECK047"],   type: "error"});
		setInitApprovalData();
		return false;
	}
	//湲곕낯 寃곗옱�먮뒗 ��젣 湲덉� - 02.02.2017
	if(typeof array !== "undefined" && array !== null){
		for(var i=0; i<len; i++){
			if(obj[i]["APPID"] !== array["APPID"]){
				newData.push(obj[i]);
			}
		}
		
		g_array.resetArray();
		setInitialColor("right");
		gr_index.setData("");
		
		if(target === "A"){
			jsonData.ApprovalTempData = [];
	    	jsonData.ApprovalTempData = newData;
			setNewModalApprovalData(target);
		}else if(target === "C"){
			jsonData.ReferenceTempData = [];
	    	jsonData.ReferenceTempData = newData;
			setNewModalReferenceData(target, "D");
		}
	}
}

//Click up button
function doNewUpUser(target){
    var selectIndex = gr_index.getData();
    var newData = [], obj = [];
    var selRow = {}, oldRow = {};
    var len = 0;
    
    if(target === "A"){							//Approval
		obj = jsonData.ApprovalTempData;
		len = jsonData.ApprovalTempData.length;
	}else if(target === "C"){					//Reference
		obj = jsonData.ReferenceTempData;
		len = jsonData.ReferenceTempData.length;
	}
    
    if(String(selectIndex) === ""){
        swal({   title: "Error",   text: "No selected user",   type: "error"});
        return false;
    }
    
    selectIndex = Number(selectIndex);
    if(selectIndex === 0){
    	return false;
    }
    
    if(selectIndex !== "" && selectIndex <= obj.length){
    	selRow = obj[selectIndex];
    	oldRow = obj[selectIndex - 1];
    	
    	if(oldRow["ASTAT"] === "1" || oldRow["ASTAT"] === "2" || oldRow["ASTAT"] === "3" || 
    	   selRow["ASTAT"] === "1" || selRow["ASTAT"] === "2" || selRow["ASTAT"] === "3"){
    		swal({   title: "Error",   text: "Don't move approved user",   type: "error"});
        	return false;
    	}
    	
    	for(var i=0, len=obj.length; i<len; i++){
            if(i === (selectIndex - 1)){
            	selRow["AELSEQ"] = selectIndex;
            	newData.push(selRow);
        	}else if(i === selectIndex){
        		oldRow["AELSEQ"] = selectIndex + 1;
        	    newData.push(oldRow);
        	}else{
        		newData.push(obj[i]);
        	}
		}
    	
    	gr_index.setData(selectIndex-1);
    	if(target === "A"){
    		jsonData.ApprovalTempData = [];
        	jsonData.ApprovalTempData = newData;
    		setNewModalApprovalData(target);
    	}else if(target === "C"){
    		jsonData.ReferenceTempData = [];
        	jsonData.ReferenceTempData = newData;
    		setNewModalReferenceData(target, "U");
    	}
    	
    }
}

//Click down button
function doNewDownUser(target){
    var selectIndex = gr_index.getData();
    var newData = [], obj = [];
    var selRow = {}, oldRow = {};
    var len = 0;
    
    if(target === "A"){							//Approval
		obj = jsonData.ApprovalTempData;
		len = jsonData.ApprovalTempData.length;
	}else if(target === "C"){					//Reference
		obj = jsonData.ReferenceTempData;
		len = jsonData.ReferenceTempData.length;
	}
    
    if(String(selectIndex) === ""){
        swal({   title: "Error",   text: "No selected user",   type: "error"});
        return false;
    }
    
    selectIndex = Number(selectIndex);
    if(selectIndex+1 === obj.length){
    	return false;
    }
    
    if(selectIndex !== "" && selectIndex <= obj.length){
    	selRow = obj[selectIndex];
    	oldRow = obj[selectIndex + 1];
    	
    	if(oldRow["ASTAT"] === "1" || oldRow["ASTAT"] === "2" || oldRow["ASTAT"] === "3" || 
    	   selRow["ASTAT"] === "1" || selRow["ASTAT"] === "2" || selRow["ASTAT"] === "3"){
    		swal({   title: "Error",   text: "Don't move approved user",   type: "error"});
        	return false;
    	}
    	
    	for(var i=0, len=obj.length; i<len; i++){
        	if(i === selectIndex){
        		oldRow["AELSEQ"] = selectIndex + 1;
        		newData.push(oldRow);
        	}else if(i === (selectIndex+1)){
        		selRow["AELSEQ"] = selectIndex + 2;
        	    newData.push(selRow);
        	}else{
        		newData.push(obj[i]);
        	}
		} 
    	
    	gr_index.setData(selectIndex+1);
    	
    	if(target === "A"){
    		jsonData.ApprovalTempData = [];
        	jsonData.ApprovalTempData = newData;
    		setNewModalApprovalData(target);
    	}else if(target === "C"){
    		jsonData.ReferenceTempData = [];
        	jsonData.ReferenceTempData = newData;
    		setNewModalReferenceData(target, "B");
    	}
    	
    }
	
}

//Click apply button
function setNewTotalApproverData(target){
	var cnt = 0;
	
	if(target === "A"){
		jsonData.RequestLineTableData = [];
		jsonData.RequestLineTableData.push(reqLine.getData());
		
		if(jsonData.ApprovalTempData.length > 0){
			for(var i=0, len=jsonData.ApprovalTempData.length; i<len; i++){
				if(i===0){ cnt = i+2; }else{ cnt = cnt+1 }
				jsonData.ApprovalTempData[i]["RELSEQ"] = cnt;
				jsonData.ApprovalTempData[i]["AELSEQ"] = cnt;
				jsonData.RequestLineTableData.push(jsonData.ApprovalTempData[i]);
			}
		}
	}else if(target === "C"){
		jsonData.AccountLineTableData = [];
				
		if(jsonData.ReferenceTempData.length > 0){
			for(var i=0, len=jsonData.ReferenceTempData.length; i<len; i++){
				if(i===0){ cnt = i+2; }else{ cnt = cnt+1 }
				jsonData.ReferenceTempData[i]["RELSEQ"] = cnt;
				jsonData.ReferenceTempData[i]["AELSEQ"] = cnt;
				jsonData.AccountLineTableData.push(jsonData.ReferenceTempData[i]);
			}
		}
	}
	
	setInitialColor("right");
	var param = jsonData.RequestLineTableData;
	if(view.getData() === "C"){
		var ApprovalLine = [];
		if(jsonData.RequestLineTableData.length > 0){
			for(let i=0, len=jsonData.RequestLineTableData.length; i<len; i++){
				ApprovalLine.push(jsonData.RequestLineTableData[i]);
			}
		}
		if(jsonData.AccountLineTableData.length > 0){
			for(let i=0, len=jsonData.AccountLineTableData.length; i<len; i++){
				ApprovalLine.push(jsonData.AccountLineTableData[i]);
			}
		}
		setCreateApprovalTableData(ApprovalLine);
	}else{
		setApprovalTableData(jsonData);
	}
	gr_index.setData("");
	$("input[name='cline']").val("X");
	
}

//Click close button
function setNewChangeApprovalClose(target){
	var appData = [];
	
	if(target === "A"){
		appData = jsonData.RequestLineTableData;
		
		if(typeof jsonData.ApprovalTempData !== "undefined" && jsonData.ApprovalTempData !== null){
		    if(typeof appData !== "undefined" && appData !== null){
		    	jsonData.ApprovalTempData = [];
		    	for(var i=0, len=appData.length; i<len; i++){
		    		if(appData[i]["RELTYP"] !== "R" && appData[i]["APPDG"] !== "R"){
		    			jsonData.ApprovalTempData.push(appData[i]);
		    		}
		    	}
		    }
	    }
	}else if(target === "C"){
		appData = jsonData.AccountLineTableData;
		
		if(typeof jsonData.ReferenceTempData !== "undefined" && jsonData.ReferenceTempData !== null){
		    if(typeof appData !== "undefined" && appData !== null){
		    	jsonData.ReferenceTempData = [];
		    	for(var i=0, len=appData.length; i<len; i++){
		    		if(appData[i]["RELTYP"] !== "R" && appData[i]["APPDG"] !== "R"){
		    			jsonData.ReferenceTempData.push(appData[i]);
		    		}
		    	}
		    }
	    }
	}
    //Execute cancel
	
    setInitialColor("right");
	gr_index.setData("");
}

function showNewAllEmployee(target){
	$('#modal_change_approval_table > tbody').html(setNoData().join(''));
    $("#modal_change_approval").modal("show");
    $('#modal_change_user_name').focus();
    var title = "";
    
    if(target === "A"){
    	setNewModalApprovalData(target);
    	title = g_label.getData()["ADD_APPROVAL_LINE"];
    }else if(target === "C"){
    	setNewModalReferenceData(target, "N");
    	title = g_label.getData()["ADD_REFERENCE_LINE"];
    }
    
    $("#add_approval_line_title").text(title);
    
}

//Click search button
function doNewSearchEmployee(target) {
    var usrid = "";
    var uname = $('#modal_change_user_name').val();
    var param = "cmd=AE&utype=" + encodeURIComponent($("input[name='utype']").val()) + "&usrid=" + encodeURIComponent(usrid) + "&uname=" + encodeURIComponent(uname);
    gl_index.setData("");
    arrList = [];
    
    $.ajax({
        url: "com.hme.ge.fm.user.common.CommonBasicList",
        async: true,
        header: {},
        data: param,
        type: "POST",
        success: function(data) {
            var objData = data.Employee;
            var h = [];
            $('#modal_change_approval_table > tbody').html('');
            
            if(typeof objData !== "undefined" && objData.length > 0){
                for (let i=0, len=objData.length; i<len; i++) {
                	arrList.push(objData[i]);
                	h.push('<tr onclick="javascript:setNewColorLeftTable(' + i + ', \'O\', \''+ target +'\')" ondblclick="javascript:setNewColorLeftTable(' + i + ', \'D\', \''+ target +'\')" class="cur_pit">'); 
                    h.push('<td class="td_basic_left width_20">' + objData[i]["UNAME"] + '</td>');
                    h.push('<td class="td_basic_left width_30">' + objData[i]["ORGNM"] + '</td>');
                    //h.push('<td class="td_basic_left width_20">' + objData[i]["CRUNM"] + '</td>');
                    //h.push('<td class="td_basic_left width_30">' + objData[i]["ORGNM_T"] + '</td>');
                    h.push('</tr>');
                    
                }
    
            }else{
                h = setNoData("2");
            }

            $('#modal_change_approval_table > tbody').html(h.join(''));
        },
        error:function(){
            swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
            return false;
        }
    });
    
}

function setNewEmployee(code, desc, orgcd, ogrnm) {
    $('#reqid').val(code);
    $('#reqnm').val(desc);
    $('#reqnm').attr("title",desc);
    $('#reqdp').val(orgcd);
    $('#reqdp_nm').val(ogrnm);
    setNewDeleteModalEmployee();
    $('#modal_user_table > tbody').html(setNoData().join(''));
    $('#modal_user').modal('hide');

}

function setNewDeleteModalEmployee(){
    //$('#modal_user_id').val("");
    $('#modal_user_name').val("");
}

function setNewDeleteEmployee(){
    $('#reqid').val("");
    $('#reqnm').val("");
    $('#reqnm').attr("title","");
    $('#reqdp').val("");
    $('#reqdp_nm').val("");
}

function doNewAjaxSearchEmployee() {
	if($("#reqnm").val() !== ""){
    	$('#modal_user_name').val($("#reqnm").val());
    }else{
    	showNewAllEmployee();
    	return false;
    }
    var usrid = "";
    var uname = $('#modal_user_name').val();
    var param = "cmd=AE&utype=" + encodeURIComponent($("input[name='utype']").val()) + "&usrid=" + encodeURIComponent(usrid) + "&uname=" + encodeURIComponent(uname);
    gl_index.setData("");
    
    $.ajax({
        url: "com.hme.ge.fm.user.common.CommonBasicList",
        async: true,
        header: {},
        data: param,
        type: "POST",
        success: function(data) {
            var objData = data.Employee;

            if(typeof objData !== "undefined" && objData !== null){
                if(objData.length == 1){
                	setNewUser(objData[0]["USRID"], objData[0]["UNAME"], objData[0]["UNAME"], objData[0]["ORGNM"]);
                }else{
                	showUser();
                }
            }else{
            	showUser();
            }
        },
        error:function(){
            swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
        }
    });
    
}

function setInitApprovalData(){
	g_array.resetArray();
	setInitialColor("left");
	setInitialColor("right");
	gl_index.setData("");
	gr_index.setData("");
}
//New Add approval line - 03.03.2017 ==========================================================

//==================== Added New : Session Util ====================
//Override Function to Empty 
function doCheckAutoLogout(){};

//Session Util
var SessionUtil = {
	// Session Info
	sessionInfo : {},
	sessionFailCount : 0,
	sessonCheckInterval : null,
	sessonCheckIntervalTime : 60*1000,
	
	// Watcher
	watcherInterval : null,
	watcherIntervalTime : 1*1000,
	lastModifyTime : new Date().getTime(),
	
	// Pending
	pendingTime : 0,
	maxPendingTime : 50*60*1000,
	//maxPendingTime : 20*1000,
	
	// Agreement
	askingExtendAgreement : false,
	askingExtendTime : 10*60*1000
	//askingExtendTime : 15*1000
};

//Set Event Watcher
SessionUtil.setEventWatcher = function () {
	$('body')
		.on('click'		, function(){ SessionUtil.setUserModifyTime(); })	
		.on('keydown'	, function(){ SessionUtil.setUserModifyTime(); });
	//  .on('mousemove'	, function(){ SessionUtil.setUserModifyTime(); })
};

//Set user Modify Time
SessionUtil.setUserModifyTime = function () {
	if (!SessionUtil.askingExtendAgreement) {
		SessionUtil.lastModifyTime = new Date().getTime();
	}
};

//Set Auto Logout
SessionUtil.setAutoLogout = function () {
	// Session Checker
	SessionUtil.sessonCheckInterval = setInterval(function() {
		// SessionUtil.checkLogonSession();
	}, SessionUtil.sessonCheckIntervalTime);
	
	// Set Watcher
	SessionUtil.setEventWatcher();
	
	// Watcher
	SessionUtil.watcherInterval = setInterval(function() {
		SessionUtil.checkPendingTime();
	}, SessionUtil.watcherIntervalTime);
};

//Check Logon Session
SessionUtil.checkLogonSession = function () {
	var sessionInfo = SessionUtil.getSessionInfo();
	if (sessionInfo.data) SessionUtil.sessionInfo = sessionInfo.data;
	
	if (!sessionInfo || (sessionInfo && sessionInfo.type == 'E')) {
		if (SessionUtil.sessionFailCount >= 2 ) {
			// Clear Interval
			SessionUtil.clearAllInterval();
			
			// Message
			swal({
				title: "Already Logged Out",
		        text: "You have already logged out. Please login again.",
		        type: "error",
		        showCancelButton: false,
		        showConfirmButton: true,
		        allowEscapeKey: false,
		    }, function () {
		    	window.location.href = SessionUtil.getFirstMenuLink();
		    });
		}
		else {
			setTimeout(function(){ 
				SessionUtil.checkLogonSession();
			},5000);
		}
	}
};

//Get First Menu Link
SessionUtil.getFirstMenuLink = function () {
	var firstLink = '';
	
	$(jsonData.MenuListTableData).each(function(idx, obj){
		if (obj && obj.LINK) {
			firstLink = obj.LINK;
			return false;
		}
	});
	
	return firstLink;
};

//Clear All Interval
SessionUtil.clearAllInterval = function () {
	if (SessionUtil.sessonCheckInterval	) clearInterval(SessionUtil.sessonCheckInterval);
	if (SessionUtil.watcherInterval		) clearInterval(SessionUtil.watcherInterval);
};

//Check Pending Time
SessionUtil.checkPendingTime = function () {
	SessionUtil.pendingTime = new Date().getTime() - SessionUtil.lastModifyTime;
	
	// Allowed Pending Time
	if (SessionUtil.pendingTime <= SessionUtil.maxPendingTime) {
		// Asking Extend Login time
		if (SessionUtil.pendingTime > SessionUtil.maxPendingTime - SessionUtil.askingExtendTime) {
			if (!SessionUtil.askingExtendAgreement) {
				SessionUtil.askingExtendAgreement = true;
				swal({
					html: true,
					title: "Automatic Logout!",
					text: "You will be logged out in <span id='ask_extend_remain_time'>" + SessionUtil.getModalRemainTime() + "</span>. Do you want to extend?",   
					type: "warning",
					confirmButtonText: "Extend",
					cancelButtonText: "Logout",
					showCancelButton: true,
					showConfirmButton: true
			    },function (confirm) {
			    	if (confirm) {
			    		SessionUtil.askingExtendAgreement = false;	
				    	SessionUtil.setUserModifyTime();
			    	} else {
			    		logout();
			    	}
			    });
			}
			else {
				$('#ask_extend_remain_time').html(SessionUtil.getModalRemainTime());	
			}
		}
	}
	// Over Max Pending Time
	else {
		logout();
	}
};

//Set Modal Remain Time
SessionUtil.getModalRemainTime = function () {
	var returnStr = '';
	var remainTime = SessionUtil.maxPendingTime - SessionUtil.pendingTime;
	
	if (remainTime < 60*1000) {
		remainTime = remainTime/1000;
		returnStr = remainTime.toFixed(0) + ' seconds';
	}
	else {
		remainTime = remainTime/(60*1000);
		returnStr = remainTime.toFixed(0) + ' minutes';
	}
	
	return returnStr;
};

//Get Session Info
SessionUtil.getSessionInfo = function () {
	var sessionInfo = {};
	
	$.ajax ({
	    url: "com.hme.ge.fm.user.common.SessionInfo",
	    async: false,
	    success: function(data) {
			if (data && data.userId && data.userId.toUpperCase() != 'GUEST') {
				SessionUtil.sessionFailCount = 0;
				sessionInfo.type = 'S';
				sessionInfo.data = data;
			}
			else {
				SessionUtil.sessionFailCount++;
		    	sessionInfo.type = 'E';
			}
	    },
	    error:function(){
	    	SessionUtil.sessionFailCount++;
	    	sessionInfo.type = 'E';
	    }
	});
	
	return sessionInfo;
};

$(function(){
	SessionUtil.setAutoLogout();
});
//==================== Added New : Session Util ====================