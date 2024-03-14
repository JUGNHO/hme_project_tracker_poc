//==================================================    
//Global 蹂��� �좎뼵
//==================================================
var userInfo = {
		user : "",
		
		getUserInfo: function() {
            return this.user;
        },
        
        setUserInfo: function(info) {
        	this.user = info; //JSON.parse(JSON.stringify(info));
        }
        
};

var G_FileTable = {
		files: [],
		
		getFiles: function() {
		    return this.files;
		},
		
		setFiles: function(data) {
			this.files = data; 
		}
};

var approval = {
		approvalData : "",
		reqApprovalData : "",
		accApprovalData : "",
		
		setApproval: function(obj){
			this.approvalData = JSON.parse(JSON.stringify( obj ));
		},
		
		getApproval: function(){
			return this.approvalData;
		},
		
		setReqApproval: function(obj){
			this.reqApprovalData = JSON.parse(JSON.stringify( obj ));
		},
		
		getReqApproval: function(){
			return this.reqApprovalData;
		},
		
		setAccApproval: function(obj){
			this.accApprovalData = JSON.parse(JSON.stringify( obj ));
		},
		
		getAccApproval: function(){
			return this.accApprovalData;
		}
};

var modal = {
		PurchaseOrder: {
			bukrs : "",
			bnumb : "",
			gjahr : "",
			buzei : "",
			kblnr : "",
			rfanr : "",
			rfait : "",
			ktext : "",
			accty : "",
			geber : "",
			gebert : "",
			kostl : "",
			kostlt : "",
			saknr : "",
			saknrt : "",
			mfipex : "",
			mfipext : "",
			anln1 : "",
			anln1_nm : "",
			lifnr : "",
			lifnr_nm : "",
			openamt : "",
			amount : "",
			vatamt : "",
			hwges : "",
			quant : "",
			zref : "",
			desti : "",
			bstat : "",
			cstat : "",
			cstex : "",
			astat : "",
			astat_txt : "",
			budat : "",
			reqdt : "",
			budatm : "",
			reqdtm : "",
			waers : "",
			orgcd : "",
			orgnm : "",
			usrid : "",
			uname : "",
			sdlvm : "",
			edlvm : "",
			period : "",
			periodt : "",
			cflag : "",
			rflag : "",
			appid : "",
			appnm : "",
			adate : "",
			adatem : "",
			atime : "",
			force : "",
			taker : "",
			taknm : "",
			reqid : "",
			reqnm : "",
			reqdp : "",
			reqdp_nm : "",
			erlkz : "",
			blpkz : "",
			strlen : "",
			dtext : ""
		},
		
		PurchaseOrderModalList: []
}

var action = {
		mode : "",
		
		setMode : function(mode){
			this.mode = mode;
		},
		getMode : function(){
			return this.mode;
		}
}

var special_key = {
    ctrlKey : false,
    altKey : false,
    shiftKey : false
}

var approval_step = [
    {"key" : "A", "name" : "Approval"},
    {"key" : "C", "name" : "Reference"}
]

var count = 0;
var g_fwste = 0.00, g_hwste = 0.00;
var db_result = "", g_db = "";

function setLabelName(){
    var label = [];

    return {
        setData : function(label){
    		this.label = label;
        },
        getData : function(){
            return this.label;
        },
        reset: function(){
        	this.label = [];
        }
    }
}

function setViewMode(){
	var text = "";

    return {
        setData : function(val){
    		text = val;
        },
        getData : function(){
            return text; 
        },
        reset: function(){
        	text = "";
        }
    }
}

function setIndexNumber(){
    var index = 0;

    return {
        setData : function(idx){
          index = idx;
        },
        getData : function(){
            return index; 
        },
        reset: function(){
        	index = 0;
        }
    }
}

function setContents(){
	var contents = "";
	
	return {
		setData: function(data){
			contents = data;	
		},
		
		getData: function(){
			return contents;
		}
	}
}

function setParameterData(){
    var kostl = "";
    var geber = "";
    var saknr = "";

    return {
        setKostl : function(kostl){
          kostl = kostl;
        },
        getKostl : function(){
            return kostl; 
        },
        setSaknr : function(saknr){
          saknr = saknr;
        },
        getSaknr : function(){
            return saknr; 
        },
        setGeber : function(geber){
          geber = geber;
        },
        getGeber : function(){
            return geber; 
        }
    }
}

function setDataTablesData(){
	var data = "";

	return {
		setData : function(name){
          data = name;
        },
        getData : function(){
            return data; 
        },
        resetData: function(){
        	data = "";
        }
	}
}

function setTableName(){
	var table = "";

	return {
		setTable : function(name){
          table = name;
        },
        getTable : function(){
            return table; 
        }
	}
}

function setFlag(){
	var flag = false;

	return {
		setBoolean : function(flag){
            this.flag = flag;
        },
        getBoolean : function(){
            return this.flag; 
        },
        resetBoolean : function(){
        	this.flag = false;
        }
	}
}

function setArrayData(){
	var array = {};

	return {
		setArray : function(array){
            this.array = array;
        },
        getArray : function(){
            return this.array; 
        },
        resetArray : function(){
        	this.array = {};
        }
	}
}