/* ajax濡� �곗씠�곕� 諛쏆븘 �⑤떎. */
var common_data = {
		
		getUtype: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=A";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.UtypeList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Utype;
			
			    	$("#" + id + " option").remove();
		
			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "UTYPE"){
				    			tmp_value = value;
				    		}else if(key === "LTEXT"){
				    			tmp_text = value;
				    		}
				    	});
			
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX017"],   type: "error"});
			    }
			    
			});
		
		},
		
		getAstats: function(id, selectVal, trngb){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=A&TRNGB=" + trngb
			$.ajax({
			    url: "com.hme.ge.fm.user.common.Status",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Status;
	    	
			    	$("#" + id + " option").remove();

			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});
	
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}	
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX018"],   type: "error"});
			    }
			    
			});
	
		},
		
		getAstats1: function(id, selectVal, type, flag){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=A1";
			
			if(typeof type !== "undefined" && type !== null){
				param += "&type=" + type;
			}
			
			$.ajax({
			    url: "com.hme.ge.fm.user.common.Status",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Status;
	    	
			    	$("#" + id + " option").remove();

			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});
	
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	if(typeof flag !== "undefined" && flag !== null){
				    		if(flag){
				    			html += "[" + tmp_value + "] ";
				    		}
				    	}
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal !== null && typeof selectVal !== 'undefined'){
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}else{
			    		$("#" + id + " option:eq(0)").attr("selected",true);
			    	}	
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX018"],   type: "error"});
			    }
			    
			});
	
		},
		
		getBstats: function(id, selectVal, trngb){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=B&TRNGB=" + trngb
			$.ajax({
			    url: "com.hme.ge.fm.user.common.Status",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Status;
			    	
			    	$("#" + id + " option").remove();

				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").attr("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}

			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX018"],   type: "error"});
			    }
			});
		},
		
		//Get Status data
		//id: jquery ID 媛�
		//utype : document type
		//selectVal : selected value
		//type : all, ex)<option value="">All</option>
		//flag : value �붾㈃ 蹂댁씠湲� ex) [11] Invoice parking
		getCstats: function(id, utype, selectVal, type, flag){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=C&utype=" + utype;
			
			if(typeof type !== "undefined" && type !== null){
				param += "&type=" + type;
			}
			
			$.ajax({
			    url: "com.hme.ge.fm.user.common.Status",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Status;
			    	
			    	$("#" + id + " option").remove();

				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	if(typeof flag !== "undefined" && flag !== null){
				    		if(flag){
				    			html += "[" + tmp_value + "] ";
				    		}
				    	}
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }

				    if(selectVal !== null && typeof selectVal !== 'undefined'){
				    	$("#" + id + " option[value='" + selectVal + "']").attr("selected",true);
			    	}else{
			    		$("#" + id + " option:eq(0)").attr("selected",true);
			    	}
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX018"],   type: "error"});
			    }
			});
		},
		
		getCurrency: function(id, selectVal, utype){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=A&utype=" + utype;
			$.ajax({
			    url: "com.hme.ge.fm.user.common.Currency",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Currency;

			    	obj.sort(function(a1, a2){
			    		return (String(a1) - String(a2));
			    	});
	    	
			    	$("#" + id + " option").remove();

			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});
	
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX019"],   type: "error"});
			    }
			    
			});
	
		},
		
		getAccType: function(id, selectVal, domainName){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=A&domain=" + domainName;
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonDomainValue",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Domain;
	    	
			    	$("#" + id + " option").remove();

			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});
	
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX020"],   type: "error"});
			    }
			    
			});
	
		},
		
		getTaxCode: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.Tax",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Tax;
	    	
			    	$("#" + id + " option").remove();

			    	var html = "<option value=''>";
			    	html += "Blank</option>";

			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "MWSKZ"){
				    			tmp_value = value;
				    		}else if(key === "TEXT1"){
				    			tmp_text = value;
				    		}
				    	});
	
				    	html += "<option value=\"" + tmp_value + "\">";
				    	html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX021"],   type: "error"});
			    }
			    
			});
	
		},
		
		getModels: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=ML";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonBasicList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = JSON.parse(JSON.stringify(data.ModelList));
			    	
			    	obj.sort(function(a, b){
				      return (String(a["DESCRIPT"]) > String(b["DESCRIPT"]));
				    });
			    	
			    	$("#" + id + " option").remove();
			    	
			    	//var html = "<option value=''>Blank</option>";

				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {				    		
				    		if(key === "ZZTEMDIF"){
				    			if(value === "B") value = "";
				    			tmp_value = value;
				    		}else if(key === "DESCRIPT"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
				    }else{
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
				    }
				    
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX022"],   type: "error"});
			    }
			});
		},

		getChannels: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=CL";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonBasicList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.ChannelList;
			    	
			    	$("#" + id + " option").remove();
			        //var html = "<option value=''>Blank</option>";

				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "ZZYEAR"){
				    			if(value === "B") value = "";
				    			tmp_value = value;
				    		}else if(key === "DESCRIPT"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
				    }else{
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
				    }
				    
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX023"],   type: "error"});
			    }
			});
		},
		
		//Position
		getSubgrop1: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=SUB1";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.SystemCommonFuncList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Subgroup1;
			    	
			    	$("#" + id + " option").remove();
			        //var html = "<option value=''>Blank</option>";

				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "PERSK"){
				    			if(value === "B") value = "";
				    			tmp_value = value;
				    		}else if(key === "PTEXT"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
				    }else{
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
				    }
				    
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX023"],   type: "error"});
			    }
			});
		},
		
		//Workflow Role
		getSubgrop2: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=SUB2";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.SystemCommonFuncList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Subgroup2;
			    	
			    	$("#" + id + " option").remove();
			    	
				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "PERSK"){
				    			if(value === "B") value = "";
				    			tmp_value = value;
				    		}else if(key === "PTEXT"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
				    }else{
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
				    }
				    
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX023"],   type: "error"});
			    }
			});
		},
		
		getAuth: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=AUTH";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.SystemCommonFuncList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Auth;
			    	
			    	//Descending
			    	obj.sort(function(a1, a2){
		                return (a1["AUCLS"] - a2["AUCLS"]);
		            });
			    	
			    	$("#" + id + " option").remove();
			    	
				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "AUCLS"){
				    			if(value === "B") value = "";
				    			tmp_value = value;
				    		}else if(key === "ANTXT"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
				    }else{
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
				    }
				    
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX023"],   type: "error"});
			    }
			});
		},
		
		getPeriod: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=PD";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonBasicList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Period;
			    	
			    	$("#" + id + " option").remove();

				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
				    }else{
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
				    }
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX024"],   type: "error"});
			    }
			});
		},
		
		getPeriod1: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=TM";
			alert(param);
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonBasicList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.MonthList;
			    	
			    	$("#" + id + " option").remove();

				    for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "VALUE"){
				    			tmp_value = value;
				    		}else if(key === "NAME"){
				    			tmp_text = value;
				    		}
				    	});

				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
				    
				    if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
				    }else{
				    	$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
				    }
				    
			    },
			    error:function(){
			        swal({   title: "Error",   text: jsonMsgData.Message["AJAX024"],   type: "error"});
			    }
			});
		},
		
		getPlusMinus: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=A&domain=ZHFM_D_BSIGN";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonDomainValue",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Domain;
	    	
			    	//obj.sort();
			    	obj.reverse();
			    	$("#" + id + " option").remove();

			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});
	
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
			    		$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX025"],   type: "error"});
			    }
			    
			});
		},
		
		getDomainValue: function(id, selectVal, domain, type){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=A&domain=" + domain + "&type=" + type;
			
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonDomainValue",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Domain;
	    	
			    	obj.reverse();
			    	$("#" + id + " option").remove();

			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "SVALUE"){
				    			tmp_value = value;
				    		}else if(key === "SNAME"){
				    			tmp_text = value;
				    		}
				    	});
	
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
			    		$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX025"],   type: "error"});
			    }
			    
			});
		},
		
		doBudgetCheck: function(){
			var param = "";
	  	    
	  // 	    if( $("#accty").val() === "E" ){
		 //  	    if($("#reqdt").val() === "" || $("#kostl").val() === "" || $("#mfipex").val() === "" || parseFloat($("#amount").val()) === "0"){
		 //  	    	return false;
		 //  	    }
		 //  	    param = "FIPEX=" + $("#mfipex").val();
			// }else{
		 //  	    if($("#reqdt").val() === "" || $("#kostl").val() === "" || $("#anln1").val()  === "" || parseFloat($("#amount").val()) === "0"){
		 //  	    	return false;
		 //  	    }
		 //  	    param = "ANLN1=" + $("#anln1").val();			
			// }

			if($("#reqdt").val() === "" || $("#kostl").val() === "" || $("#saknr").val() === "" || parseFloat($("#amount").val()) === "0"){
	  	    	return false;
	  	    }

	  	    param = "FIPEX=" + $("#saknr").val();

	  	    param += "&cmd=AB&REQDT=" + common.getYYYYMMDD($("#reqdt").val()) +
		             "&GEBER=" + $("#geber").val() +	  	    
			  	     "&KOSTL=" + $("#kostl").val() +
			  	     "&WAERS=" + $("#waers").val() +
			  	     "&AMOUNT=" + parseFloat($("#amount").val());	
	  	    
			$.ajax({
                url: "com.hm.fr.fm.ui5.common.BudgetAmount",
                async: true,
                header: {},
                data: param,
                type: "POST",
                success: function(data) {
                	
                   if(data.Budget.TYPE === 'S'){
	                   var cabud = data.Budget.CABUD;
	                   var eabud = data.Budget.EABUD;
	                   var lamount = data.Budget.LAMOUNT;
	                   
	                   $("#cabud").val(parseFloat(cabud));
					   $("#eabud").val(parseFloat(eabud));
					   $("#hwges").val(parseFloat(lamount));
                   }else{
                	   swal({
                           title: "Error!",   
                           text: data.Budget.MSG,   
                           type: "error",   
                           showCancelButton: false,
                           confirmButtonText: "Ok"
                       },function(){
                           //goList();
                       });
                   }
                   
                },
                error:function(){
                	swal({   title: "Error",   text: jsonMsgData.Message["AJAX008"],   type: "error"});
                }
           });
		},
		
		setReqApprovalData: function(data){
	    	var approvalLine = data.ApprovalLine;
	    	var count = 0;
	    	var approvalData = []; 
	    	
	    	if(typeof approvalLine !== 'undefined' && approvalLine !== null){
		    	for(var i=0, len=approvalLine.length; i<len; i++){
			    	if(approvalLine[i]["APPDG"] === "R"){
			    		approvalData.push(approvalLine[i]);
			    		count = count + 1;
			    	}
		    	}
	    	}
	    	
	    	if(count > 0){
	    		jsonData.RequestLineTableData = approvalData;
	    		approval.setReqApproval(approvalData);
		    	
	    		$("#request_line").removeClass('approval_close')
	    		                  .addClass('approval_open');
	    	
		    	$('#request_approval_table').DataTable({
		    		data : approvalData,
		            searching: false,
		            paging: false,
		            destroy: true,
		            ordering: false,
		            info: false,
			    	columns: [
		   	            { 	
			   	            data: "AELSEQ",
			   	            className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "R"){ 
		   	   	            		return row.AELSEQ; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "APPTYP_T",
				   	     	className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "R"){ 
		   	   	            		return row.APPTYP_T; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "UFNAME",
				   	     	className: "all td_basic_left",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "R"){ 
		   	   	            		return row.UFNAME; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "TFNAME",
				   	     	className: "all td_basic_left",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "R"){ 
		   	   	            		return row.TFNAME; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "ASTAT_T",
				   	     	className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "R"){ 
		   	   	            		return row.ASTAT_T; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "ADATEM",
				   	     	className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "R" && row.ADATEM !== ""){ 
		   	   	            		return common.getDate(row.ADATEM); 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "OPINION",
				   	     	className: "all td_basic_left",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "R"){ 
		   	   	            		return row.OPINION; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        }
		   	        ]
		    	});
		
	    	}else{
	    		$("#request_line").removeClass('approval_open')
                				  .addClass('approval_close');
	    	}
	    },

		setAccApprovalData: function(data){
	    	var approvalLine = data.ApprovalLine;
	    	var count = 0;
	    	var approvalData = []; 

	    	if(typeof approvalLine !== 'undefined' && approvalLine !== null){
		    	for(var i=0, len=approvalLine.length; i<len; i++){
			    	if(approvalLine[i]["APPDG"] === "C"){
			    		approvalData.push(approvalLine[i]);
			    		count = count + 1;
			    	}
		    	}
	    	}

	    	if(count > 0){
	    		jsonData.AccountLineTableData = approvalData;
		    	approval.setAccApproval(approvalData);
		    	
	    		$("#accounting_line").removeClass('approval_close')
				  				     .addClass('approval_open');
	    	
		    	$('#accounting_approval_table').DataTable({
		    		data : approvalData,
		            searching: false,
		            paging: false,
		            destroy: true,
		            ordering: false,
		            info: false,
			    	columns: [
		   	            { 	
			   	            data: "AELSEQ",
			   	            className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "C"){ 
		   	   	            		return row.AELSEQ; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "APPTYP_T",
				   	     	className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "C"){ 
		   	   	            		return row.APPTYP_T; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "UFNAME",
				   	     	className: "all td_basic_left",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "C"){ 
		   	   	            		return row.UFNAME; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "TFNAME",
				   	     	className: "all td_basic_left",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "C"){ 
		   	   	            		return row.TFNAME; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "ASTAT_T",
				   	     	className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "C"){ 
		   	   	            		return row.ASTAT_T; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "ADATEM",
				   	     	className: "all td_basic_center",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "C" && row.ADATEM !== ""){ 
		   	   	            		return common.getDate(row.ADATEM); 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        },
			   	     	{ 	
				   	     	data: "OPINION",
				   	     	className: "all td_basic_left",
		   	            	render: function ( data, type, row ) {
		   	            		if(row.APPDG === "C"){ 
		   	   	            		return row.OPINION; 
		   	   	            	}else{
		   	   	   	            	return "";
		   	   	            	}
			   	         	} 
			   	        }
		   	        ]
		    	});
		
	    	}else{
	    		$("#accounting_line").removeClass('approval_open')
				                     .addClass('approval_close');
	    	}
	    },

	    deleteApprovalLine: function(){
	    	var approvalData = []; 
	    	approval.setApproval(approvalData);

	    	$("#request_line").removeClass('approval_open')
                			  .addClass('approval_close');

	    	$("#accounting_line").removeClass('approval_open')
				                 .addClass('approval_close');
	    },
	    
	    getPaymentList: function(id, selectVal){
	    	var tmp_value = "", tmp_text = "";
			var param = "cmd=A";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.PaymentTermsData",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.Payment.Vendor;
			    	var obj1 = data.Payment.Customer;
			
			    	$("#" + id + " option").remove();
		
			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "ZTERM"){
				    			tmp_value = value;
				    		}else if(key === "TEXT1"){
				    			tmp_text = value;
				    		}
				    	});
			
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX028"],   type: "error"});
			    }
			    
			});
		
		},
		
		getPaymentBlockList: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			var param = "cmd=PB";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonBasicList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var obj = data.PaymentBlock;
			
			    	$("#" + id + " option").remove();
		
			    	for(var i=0, len=obj.length; i<len; i++){
				    	$.each(obj[i], function(key, value) {
				    		if(key === "ECODE"){
				    			tmp_value = value;
				    		}else if(key === "FLD01"){
				    			tmp_text = value;
				    		}
				    	});
			
				    	var html = "<option value=\"" + tmp_value + "\">";
				    	//html += "[" + tmp_value + "] ";
				    	html += tmp_text + "</option>";
				    	
				    	$("#" + id + "").append(html);
				    	tmp_value = "", tmp_text = "", html = "";
				    }
			    	
			    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
				    	$("#" + id + " option:eq(0)").prop("selected",true);
			    	}else{
			    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
			    	}
		    
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX027"],   type: "error"});
			    }
			    
			});
		
		},
		
		getDepLevel: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			$("#" + id + " option").remove();
			
	    	for(var i=0, len=10; i<len; i++){
	    		tmp_value = (i+1);
	    		tmp_text = tmp_value + " Level";
	
		    	var html = "<option value=\"" + tmp_value + "\">";
		    	//html += "[" + tmp_value + "] ";
		    	html += tmp_text + "</option>";
		    	
		    	$("#" + id + "").append(html);
		    	tmp_value = "", tmp_text = "", html = "";
		    }
	    	
	    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
		    	$("#" + id + " option:eq(0)").prop("selected",true);
	    	}else{
	    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
	    	}
		
		},
		
		getTwelveMonths: function(id, selectVal){
			var tmp_value = "", tmp_text = "";
			$("#" + id + " option").remove();
			
			
			var html = "<option value=\"" + tmp_value + "\">";
	    	//html += "[" + tmp_value + "] ";
	    	html += "All</option>";
	    	
	    	$("#" + id + "").append(html);
	    	
	    	for(var i=0, len=12; i<len; i++){
	    		tmp_value = (i+1);
	    		tmp_text = tmp_value;// + " Month";
	
		    	html = "<option value=\"" + tmp_value + "\">";
		    	//html += "[" + tmp_value + "] ";
		    	html += tmp_text + "</option>";
		    	
		    	$("#" + id + "").append(html);
		    	tmp_value = "", tmp_text = "", html = "";
		    }
	    	
	    	if(selectVal === "" || ( selectVal === null && typeof selectVal === 'undefined' )){
		    	$("#" + id + " option:eq(0)").prop("selected",true);
	    	}else{
	    		$("#" + id + " option[value='" + selectVal + "']").prop("selected",true);
	    	}
		
		},
		
		getUserInfo: function(){
			var param = "cmd=USER";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonFunctionUtil",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	if(typeof data.UserInfo !== "undefined" && data.UserInfo !== null){
			    		setUserData(data.UserInfo);
			    		if(isCheckData(data.UserInfo)){
			    			common_data.getMenuList(data.UserInfo);
			    		}
			    	}
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
			    }
			});
		},
		
		getUserInfoData: function(){
			var param = "cmd=USERINFO";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonFunctionUtil",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	if(typeof data.UserInfo !== "undefined" && data.UserInfo !== null){
			    		var result = data.UserInfo.Result;
			    		
			    		if(result.TYPE === "S"){
			    			var user = data.UserInfo.UserData;
				    		var menu = data.UserInfo.MenuData;
				    		
			    			if(isCheckData(user)){
				    			if(typeof menu !== "undefined" && menu !== null){
				    				jsonData.MenuListTableData = menu;
				    				setUserData(user);
				    				loadMenu(user, menu);
				    			}else{
				    				swal({   title: "Error",   text: result.MESSAGE,   type: "error"});
					    			return false;
				    			}
			    			}
			    		}else{
			    			// $("input[name='message']").val(result.MESSAGE);
			    			// $("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusUnauthorizedError").submit();
			    			// //swal({   title: "Error",   text: result.MESSAGE,   type: "error"});
			    			// return false;
			    		}
			    		
			    	}
			    },
			    error:function(){
			    	// $("input[name='message']").val(jsonMsgData.Message["AJAX010"]);
			    	// //swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
			    	// $("#form").attr("method", "post").attr("action", "com.hme.ge.fm.system.status.StatusUnauthorizedError").submit();
			    	// return false;
			    }
			});
		},
		
		getMenuList: function(userInfo){
			var param = "cmd=MENU";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonFunctionUtil",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	if(typeof data.Result.TYPE !== "undefined" && data.Result.TYPE === "E"){
			    		swal({   title: "Error",   text: data.MSG,   type: "error"});
			    	}else{
			    		if(typeof jsonData.MenuListTableData !== "undefined" && data.MenuData.length > 0){
				    		jsonData.MenuListTableData = data.MenuData;
				    		loadMenu(userInfo, data.MenuData);
				    	}else{
				    		swal({   title: "Error",   text: jsonMsgData.Message["AJAX026"],   type: "error"});
				    	}
			    	}
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX026"],   type: "error"});
			    }
			    
			});
	
		},
		
		getUserData: function(){
			var param = "cmd=USER";
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonFunctionUtil",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	return data.UserInfo;
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
			    }
			});
		},
		
		getAllEmployee: function(uname){
			var param = "cmd=AE&uname=" + uname;
			$.ajax({
			    url: "com.hme.ge.fm.user.common.CommonBasicList",
			    async: true,
			    header: {},
			    data: param,
			    type: "POST",
			    success: function(data) {
			    	var objData = data.Employee;
		            var h = [];
		            
		            if(typeof objData !== "undefined" && objData.length > 0){
			            for (var i=0, len=objData.length; i<len; i++) {
			            	h.push('<tr onclick="javascript:setEmployee(\'' + objData[i]["USRID"] + '\');" style="cursor:pointer;">');
			                h.push('<td>' + objData[i]["UNAME"] + '</td>');
			                h.push('<td>' + objData[i]["ORGNM"] + '</td>');
			                h.push('</tr>');
			            }
		            }else{
                        h = setNoData();
                    }
		            
		            $('#modal_change_approval_table > tbody').html(h.join(''));
		            
			    },
			    error:function(){
			    	swal({   title: "Error",   text: jsonMsgData.Message["AJAX010"],   type: "error"});
			    }
			});
		},

}