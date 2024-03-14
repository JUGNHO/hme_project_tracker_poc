//<![CDATA[
function setFileUploadDropZone(){

    // Dropzone.prototype.defaultOptions.dictDefaultMessage = "Drop files to upload for attachments";
    // $('form.dropzone').find('div.default.message').css('background-image','none');
    Dropzone.options.myAwesomeDropzone = {
    	url: "com.hme.ge.fm.user.common.FileUploader", // Set the url     		
//		paramName: 'file',
//		autoProcessQueue: true,
        uploadMultiple: false,
        parallelUploads: 5,
        maxFiles: 20,
        maxFilesize: 7, //MB
        dictResponseError: 'Server not Configured',
        acceptedFiles: ".svg, .jpeg, .jpg, .gif, .png, .bmp, .pdf, .xls, .xlsx, .pptx, .ppt, .doc, .docx, .zip, .msg",
        dictDefaultMessage: 'Drag and Drop files(Click) to upload for attachments. <br>It is possible to attach the file up to 7MB per file.',
		headers: {
			'x-csrf-token': $("input[name='token']").val()		
		},	

        // Dropzone settings
        init: function() {
			
            var cd;
            this.options.addRemoveLinks = true;
        	this.options.dictRemoveFile = "Delete";     	
        	
            this.on("success", function(file, response) {
                $('.dz-progress').hide();
                $('.dz-size').hide();
                $('.dz-error-mark').hide();
                
        		var result = eval(response);	

        		if(result.length == 1){
        			var fileTable = G_FileTable.getFiles();
        			var len = fileTable.length;
                    var row = {};
                    var arrayIndex = 0;
                    var arrList = [];                
                    row["FILE_SIZE"]  = result[0].FILE_SIZE;
                    row["VIEW_ID"]    = file.previewElement.uniqueID;
                    row["FILE_NAME"]  = result[0].FILE_NAME;
                    row["FILE_TYPE"]  = result[0].FILE_TYPE;
                    row["FILE_ID"]    = result[0].FILE_ID;
                    row["FILE_INDEX"] = len;

                    if(len>0){
                    	//Check duplicate file name - 22.02.2017
                    	if(typeof $("input[name='utype']").val() !== "undefined" && $("input[name='utype']").val() === 'file'){
	                    	for(var i=0;i<len;i++){
	                			if(fileTable[i]["FILE_NAME"] === result[0].FILE_NAME){
	                				swal({
	                					title: "Duplicate",
	                					text: result[0].FILE_NAME + " " + jsonMsgData.Message["ERROR008"],   
	                					type: "warning",   
	                					showCancelButton: false,   
	                					confirmButtonColor: "#DD6B55",   
	                					confirmButtonText: "Ok",   
	                					closeOnConfirm: true 
	                				}, function(){   
	                				    var obj = $("div.dz-preview > div > div > span");
	                    				for(var i=obj.length; i>=0; i--){
	                    					if(obj.eq(i).text() === result[0].FILE_NAME){
	                    						obj.eq(i).parent().parent().parent().remove();
	                    						break;
	                    					}
	                    				}
	                				});
	                				
	                				return false;
	                			}
	        				}
                    	}
                    	//Check duplicate file name - 22.02.2017
                    	
        				for(var i=0;i<len;i++){
                        	if(fileTable[i].FILE_ID !== row["FILE_ID"]){
        						arrList.push(fileTable[i]);                 
                                arrayIndex++;
        					}
        				}
                    }
                    arrList.push(row);
                    G_FileTable.setFiles(arrList);
        		}
            });
            
            this.on("addedfile", function (file) {
            	// Preview - Mouse Over
            	file.previewElement.addEventListener("mouseover", function() {
            		$(this).addClass('preview-on');
            	});
            	
            	// Preview - Mouse Out
            	file.previewElement.addEventListener("mouseout", function() {
            		$(this).removeClass('preview-on');
            	});
            });
           
            // On removing file
            this.on("removedfile", function (file) {
    			var fileTable = G_FileTable.getFiles();
    			var len = fileTable.length;
                var row = {};
                var arrayIndex = 0;
                var arrList = [];
                
                // Added New : Get Target File Name
                var fileName;
                if (file.xhr.response && JSON.parse(file.xhr.response)[0] && JSON.parse(file.xhr.response)[0].FILE_ID) {
                	fileName = JSON.parse(file.xhr.response)[0].FILE_ID;
                }
                
                if(len>0){
    				for(var i=0;i<len;i++){
    					// Added New : Bug Fix - Remove By File Name
                    	//if(fileTable[i].VIEW_ID !== file.previewElement.uniqueID){
                        if(fileTable[i].FILE_ID !== fileName){                    		
    						arrList.push(fileTable[i]);                 
                            arrayIndex++;
    					}
    				}
                }
                console.log("Delete file success");
                G_FileTable.setFiles(arrList);                
            });
            
            this.on("success", function (file, data) {
            	// Set File Info
            	var fileData = {};
                if (data) fileData = JSON.parse(data)[0];
                
                var fileInfo = {
                	fileName : fileData.FILE_ID?fileData.FILE_ID:'',
                	originalFileName : fileData.FILE_NAME?fileData.FILE_NAME:''
                };
                
                // Set Options
                var options = {
                	target : FilePreview.constants.target.dropdownZone
                };
            	
            	// Set Delete Button Style
            	var delBtn = $(file.previewElement).find('.dz-remove:eq(0)');
            	$(delBtn).attr('style','margin-top:5px;');
            	
            	// Add Download Button
            	var downloadBtn = $('<a class="dz-remove" style="margin-top:10px;">Download</a>');
            	$(downloadBtn).click(function(event){
            		options.disablePreview = true;
            		FilePreview.showPreview(fileInfo, options, event);
            	});
            	
            	$(downloadBtn).insertBefore(delBtn);

            	// Add Preview Button
            	if (FilePreview.util.isPdfFile(fileInfo.originalFileName)) {
	            	var previewBtn = $('<a class="dz-remove" style="margin-top:5px;">Preview</a>');
	            	$(previewBtn).click(function(event){
	            		options.disablePreview = false;
	            		FilePreview.showPreview(fileInfo, options, event);
	            	});
	            	
	            	$(previewBtn).insertBefore(delBtn);
            	}
            });
            
            this.on("sendingmultiple", function(data, xhr, formData) {
            	console.log(formData);
            });
            this.on("successmultiple", function(files, response) {
            	console.log(files);

            });
            this.on("errormultiple", function(files, response) {
            	console.log(files);
            });
        },
        addFile: function(file) {
         	var response = [file];
         	var file = {
				name: file.FILE_NAME,
				size: 0,
				xhr: {response: JSON.stringify(response)}
			};

        	var myDropZone = Dropzone.forElement(".dropzone");
        	myDropZone.emit("addedfile", file);
        	myDropZone.emit("success", file, response);
        	myDropZone.files.push(file);
        }
    };
}

/**
 * File Preview
 * 
 *  @Author: shkim
 *  @Desc: Added New
 * */
FilePreview = {};

// Constants
FilePreview.constants = {
	target : {
		dropdownZone : 'DR',	// Dropdown Zone
		alink : 'AL'			// A Link
	}
};

// Options
FilePreview.options = {
	disablePreview : false,		// Disable Preview Flag
	target : ''					// Target
};

// Util
FilePreview.util = {};

// PDF File Extension Check
FilePreview.util.isPdfFile = function (fileName) {
	if (fileName && fileName.indexOf('.')>0 && fileName.substring(fileName.lastIndexOf('.')+1).toUpperCase() == 'PDF') {
		return true;
	}
	return false;
};

// Set Options
FilePreview.setOptions = function (options) {
	if (options) {
		if (options.disablePreview 	!= undefined) FilePreview.options.disablePreview = options.disablePreview;
		if (options.target 			!= undefined) FilePreview.options.target = options.target;
	}
}

// Set View
FilePreview.setView = function (event) {
	// Draw PDF View Area
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var pdfView;
	
	// Has Inner View Area (Fixed one preview area)
	if ($('#pdfView_inner')[0]) {
		if ($('#pdfView_inner').html() == "") {
			iHtml.push("<div class='pdfview-header'>");
			iHtml.push("	<i class='fa fa fa-eye'></i><span>Preview</span>");
			iHtml.push("	<a href='javascript:void(0);' id='pdfViewCloseBtn_inner'><i class='fa fa-times'></i></a>");
			iHtml.push("</div>");
			iHtml.push("<div class='pdfview-content'>");
		    iHtml.push("	<iframe id='pdfViewFrame_inner' name='pdfViewFrame_inner' src='about:blank' frameborder='0' width='100%' height='600'></iframe>");
		    iHtml.push("</div>");
		    pdfView = $(iHtml.join(''));
		    
		    // Set Close Button
		    $(pdfView).find('#pdfViewCloseBtn_inner').on('click', function() {
		    	FilePreview.initView();
		    });
		    
		    // Append
		    $('#pdfView_inner').append(pdfView);
		}
	}
	// Else
	else {
		// Dropdown Zone
		if (FilePreview.options.target == FilePreview.constants.target.dropdownZone) {
			if (!$('#pdfView_dzone')[0]) {
				iHtml.push("<div id='pdfView_dzone' class='pdfview-area display_n'>");
				iHtml.push("	<div class='pdfview-header'>");
				iHtml.push("		<i class='fa fa fa-eye'></i><span>Preview</span>");
				iHtml.push("		<a href='javascript:void(0);' id='pdfViewCloseBtn_dzone'><i class='fa fa-times'></i></a>");
				iHtml.push("	</div>");
				iHtml.push("	<div class='pdfview-content'>");
			    iHtml.push("		<iframe id='pdfViewFrame_dzone' name='pdfViewFrame_dzone' src='about:blank' frameborder='0' width='100%' height='600'></iframe>");
			    iHtml.push("	</div>");
			    iHtml.push("</div>");
			    pdfView = $(iHtml.join(''));
			    
			    // Set Close Button
			    $(pdfView).find('#pdfViewCloseBtn_dzone').on('click', function() {
			    	FilePreview.initView();
			    });
			    
			    // Append
		    	if ($('.dropzone')[0] && $('.dropzone').parent('div')) {
		    		$('.dropzone').parent('div').append(pdfView);
		    	}
			}
		}
		// A Link
		else if (FilePreview.options.target == FilePreview.constants.target.alink) {
			if (!$('#pdfView_alink')[0]) {
				iHtml.push("<div id='pdfView_alink' class='pdfview-area display_n'>");
				iHtml.push("	<div class='pdfview-header'>");
				iHtml.push("		<i class='fa fa fa-eye'></i><span>Preview</span>");
				iHtml.push("		<a href='javascript:void(0);' id='pdfViewCloseBtn_alink'><i class='fa fa-times'></i></a>");
				iHtml.push("	</div>");
				iHtml.push("	<div class='pdfview-content'>");
			    iHtml.push("		<iframe id='pdfViewFrame_alink' name='pdfViewFrame_alink' src='about:blank' frameborder='0' width='100%' height='600'></iframe>");
			    iHtml.push("	</div>");
			    iHtml.push("</div>");
			    pdfView = $(iHtml.join(''));
			    
			    // Set Close Button
			    $(pdfView).find('#pdfViewCloseBtn_alink').on('click', function() {
			    	FilePreview.initView();
			    });
			    
			    // Append
			    if (event && event.target) {
			    	var targetLink = $(event.target);
			    	var parentDiv = $(targetLink).parents('.preview_popover:eq(0)').parents('div:eq(0)');
			    	
			    	if ($(parentDiv).hasClass('dataTables_scrollBody')) {
			    		$(parentDiv).parents('.dataTables_wrapper:eq(0)').append(pdfView);
			    	}
			    	else {
			    		$(parentDiv).append(pdfView);
			    	}
			    }
			}
		}
	}
};

// Init View
FilePreview.initView = function () {
	// Initialize
	if($('#pdfViewFrame_inner'	)[0]) $('#pdfViewFrame_inner').attr('src', 'about:blank');
	if($('#pdfView_inner'		)[0]) $('#pdfView_inner').hide();
	
	if($('#pdfViewFrame_dzone'	)[0]) $('#pdfViewFrame_dzone').attr('src', 'about:blank');
	if($('#pdfView_dzone'		)[0]) $('#pdfView_dzone').hide();
	
	if($('#pdfViewFrame_alink'	)[0]) $('#pdfViewFrame_alink').attr('src', 'about:blank');
	if($('#pdfView_alink'		)[0]) $('#pdfView_alink').remove();
};

// Show Preview
FilePreview.showPreview = function (fileInfo, options, event) {
	var isPreviewTarget = false;
	
	// Set Options
	FilePreview.setOptions(options);
	
	// 2018.04.09 : Do not use preview in a link
	if (FilePreview.options.target == FilePreview.constants.target.alink) {
		return false;
	}
	
	// Check Disabled Preview
	if (!FilePreview.options.disablePreview) {
		
		// Check A link Popover
		if (FilePreview.options.target == FilePreview.constants.target.alink && !options.setPopover) {
			
			if (event && event.target) {
				var targetLink = event.target;
				var targetFileName = $(targetLink).html();
				fileInfo.fileName = targetFileName;
				
				// Check PDF File
				if (FilePreview.util.isPdfFile(targetFileName)) {
					
					$(targetLink).tooltip('hide');
			    	$(targetLink).tooltip('disable');
					
					// File Info
					var popoverFileInfo = JSON.stringify(fileInfo).replace(/"/g,'\'');
					
					// Set Options
					options.setPopover = true;
					var popoverPreviewOptions = JSON.stringify(options).replace(/"/g,'\''); // Preview
					
					// Set Popover
					FilePreview.initPopover();
					
			    	var popoverHtml = [];
			    	popoverHtml.push("<div class='popover preview_popover' role='tooltip'>");
			    	popoverHtml.push("  <div class='arrow'></div>");
			    	popoverHtml.push("  <div class='popover-header'>");
			    	popoverHtml.push("  	<a href='javascript:void(0);' onclick=\"FilePreview.initPopover();\"><i class='fa fa-times'></i></a>");
			    	popoverHtml.push("  </div>");
			    	popoverHtml.push("  <div class='popover-body'>");
			    	popoverHtml.push("  	<div><a href='javascript:void(0);' onclick=\"common.doDirectFileDownload('"+ fileInfo.fileId +"');FilePreview.initPopover();\"><i class='fa fa-download' ></i> Download</a></div>");
			    	popoverHtml.push("  	<div><a href='javascript:void(0);' onclick=\"FilePreview.showPreview("+ popoverFileInfo + "," + popoverPreviewOptions + ", event);FilePreview.initPopover();\"><i class='fa fa-eye'></i> Preview</a></div>");
			    	popoverHtml.push("  </div>");
			    	popoverHtml.push("</div>");
			    	
			    	// Set Popover
			    	$(targetLink).attr('is-popover','Y');
			    	$(targetLink).attr('data-toggle','tooltip');
			    	$(targetLink).attr('data-placement','right');
			    	$(targetLink).attr('title',targetFileName);
			    	
			    	$(targetLink).popover({
			    		trigger: 'manual',
			    		html: true,
			    		template : popoverHtml.join('')
			    	});
			    	
			    	// Set Over Flow For Popover
			    	var parentDiv = $(targetLink).parents('div:eq(0)');
			    	if ($(parentDiv).hasClass('dataTables_scrollBody')) {
			    		$(parentDiv).addClass('dataTables_scrollBody_popover');
			    	}
			    	
			    	$(targetLink).popover('show');
			    	return true;
				}
			}
		}
		
		// Init View
		FilePreview.initView();
		
		// Set View
		FilePreview.setView(event);
		
		// Is PDF File
		if (FilePreview.util.isPdfFile(fileInfo.fileName)) {
			// Form Setting
			if (!$('#filePreviewForm')[0]) {
				var formHtml = [];
				formHtml.push(' <form id="filePreviewForm" name="filePreviewForm">');
				formHtml.push('		<input type="hidden" id="fileName" 			name="fileName" 			value="">');
				formHtml.push('		<input type="hidden" id="copyToTempYn" 		name="copyToTempYn"			value="Y">');
				formHtml.push('		<input type="hidden" id="originalFileName" 	name="originalFileName" 	value="">');
				formHtml.push(' </form>');
				
				var submitForm = $(formHtml.join(''));
				$(submitForm).attr('action','com.hme.ge.fm.pdfviewer.PdfViewer');
				$(submitForm).attr('method','POST');
				$('body').append(submitForm);
			}
			
			// Init Form
			$('#filePreviewForm').find('#fileName').val('');
			$('#filePreviewForm').find('#copyToTempYn').val('Y');
			$('#filePreviewForm').find('#originalFileName').val('');
			
			// Check SAP File
			if (FilePreview.options.target == FilePreview.constants.target.alink) {
				fileInfo.fileName = '';
				fileInfo.originalFileName = '';
				$('#filePreviewForm').find('#copyToTempYn').val('N');
				
				// Get And Set SAP File Info
				var returnInfo = FilePreview.getSapFileInfo(fileInfo);
				
				if (returnInfo) {
					if (returnInfo.resultType == 'S') {
						fileInfo.fileName = returnInfo.fileName;
						fileInfo.originalFileName = returnInfo.originalFileName;
					}
				}
			}
		
			// Show PDF Preview
			$('.pdfview-header span').html(fileInfo.originalFileName);
			
			$('#filePreviewForm').find('#fileName').val(fileInfo.fileName);
			$('#filePreviewForm').find('#originalFileName').val(fileInfo.originalFileName);
			
			if ($('#pdfView_inner')[0]) {
				$('#filePreviewForm').attr('target','pdfViewFrame_inner');
				$('#filePreviewForm').submit();
				$('#pdfView_inner').fadeIn();
			}
			else {
				if (FilePreview.options.target == FilePreview.constants.target.dropdownZone) {
					$('#filePreviewForm').attr('target','pdfViewFrame_dzone');
					$('#filePreviewForm').submit();
					$('#pdfView_dzone').fadeIn();
				}
				else if (FilePreview.options.target == FilePreview.constants.target.alink) {
					$('#filePreviewForm').attr('target','pdfViewFrame_alink');
					$('#filePreviewForm').submit();
					$('#pdfView_alink').fadeIn();
				}
			}
			
			isPreviewTarget = true;
		}
	}
	
	// Dropwdown Zone File Download
	if (!isPreviewTarget && FilePreview.options.target == FilePreview.constants.target.dropdownZone) {
		FilePreview.downloadPortalFile(fileInfo);
	}
	
	// Return Status 
	//  - true 	: 'common.js'-'doFileDownload' function stop
	//  - false : 'common.js'-'doFileDownload' function continue
	return isPreviewTarget; 
};

//Init Popover
FilePreview.initPopover = function () {
	$('a[is-popover=Y]').each(function(idx, obj){
		$(obj).popover('hide');
		$(obj).removeAttr('is-popover');
	});
	$('.preview_popover').remove();
};

// Get SAP File Info
FilePreview.getSapFileInfo = function (fileInfo) {
	var resultData;
	if (fileInfo && fileInfo.fileId) {
		$.ajax({
			url: "com.hme.ge.fm.pdfviewer.PdfViewer?prtmode=getSapFileInfo",
			type: "POST",
		    async: false,
		    data: {fileId : fileInfo.fileId},
		    complete: function(data) {
		    	resultData = $.parseJSON(data.responseText);
		    }
		});
	}
	return resultData;
};

// Download Portal File
FilePreview.downloadPortalFile = function (fileInfo) {
	if (fileInfo && fileInfo.fileName && fileInfo.originalFileName) {
		// Form Setting
		if (!$('#portalFileDownloadForm')[0]) {
			var formHtml = [];
			formHtml.push(' <form id="portalFileDownloadForm" name="portalFileDownloadForm">');
			formHtml.push('		<input type="hidden" id="fileName" 			name="fileName" 			value="">');
			formHtml.push('		<input type="hidden" id="originalFileName" 	name="originalFileName" 	value="">');
			formHtml.push(' </form>');
			
			var submitForm = $(formHtml.join(''));
			$(submitForm).attr('action','com.hme.ge.fm.user.common.FileDownload?prtmode=portalFileDownload');
			$(submitForm).attr('method','POST');
			$(submitForm).attr('target','_self');
			$('body').append(submitForm);
		}

		// Submit Form
		$('#portalFileDownloadForm').find('#fileName').val(fileInfo.fileName);
		$('#portalFileDownloadForm').find('#originalFileName').val(encodeURIComponent(fileInfo.originalFileName));
		$('#portalFileDownloadForm').submit();
	}
};
//]]>