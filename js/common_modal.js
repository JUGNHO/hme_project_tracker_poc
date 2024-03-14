function getModalPono(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal fade modal-detail' id='modal_pono' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-lg'>");
	iHtml.push("    <div class='modal-content animated'>");
	iHtml.push("      <div class='modal-header' id='modal_header_pono'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["PURCHASE_ORDER"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-7'>");
	iHtml.push("		    <div class='input-group'>");	
    iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_pono_code' placeholder='PO Num' maxLength='10'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_pono_btn_search' style='height:30px'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_pono_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center'>" + label["PO_NO"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["ITEM_NO"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["VENDOR_NAME"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["VENDOR_CODE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["AMOUNT"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["SAVED"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["IN_PROGRESS"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["APPROVED"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["OPEN_AMOUNT"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["TITLE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["USER_NAME"] + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["DATE"] + "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='12'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_pono_area").html(iHtml.join(''));
    
}

function getModalVendor(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_vendor' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_vendor'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["VENDOR"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-3'>");
    iHtml.push("			<input type='text' class='input-sm form-control' id='modal_vendor_code' placeholder='Vendor code' maxLength='10' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_vendor_desc' placeholder='Vendor name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_vendor_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_vendor_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center width_22'>" + label["CODE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_78'>" + label["NAME"] + "</th>");
    // iHtml.push("			  <th class='td_basic_center'>Address</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_vendor_area").html(iHtml.join(''));
    
}

function getModalCostCenter(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_costcenter' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_costcenter'>");
	iHtml.push("	    <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["COST_CENTER"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("		  <div class='col-sm-3'>");
	iHtml.push("			<input type='text' class='input-sm form-control' id='modal_costcenter_code' placeholder='Costcenter code' maxLength='10' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_costcenter_desc' placeholder='Costcenter name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_costcenter_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		</div>");
	iHtml.push("		<div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("		  <table class='table table-bordered table-striped table-hover' id='modal_costcenter_table'>");
	iHtml.push("			<thead>");
	iHtml.push("			  <th class='td_basic_center width_22'>" + label["CODE"] + "</th>");
	iHtml.push("			  <th class='td_basic_center width_78'>" + label["DESCRIPTION"] + "</th>");
	iHtml.push("			</thead>");
	iHtml.push("			<tbody>");
	iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
	iHtml.push("			</tbody>");
	iHtml.push("		  </table>");
	iHtml.push("        </div>");
	iHtml.push("      </div>");
	iHtml.push("	  <div class='modal-footer'>");
	iHtml.push("		<button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
	iHtml.push("	  </div>");
	iHtml.push("	</div>");
	iHtml.push("  </div>");
	iHtml.push("</div>");
    
    $("#modal_data_costcenter_area").html(iHtml.join(''));
    
}

function getModalEvent(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_event' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_event'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["EVENT"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-3'>");
    iHtml.push("			<input type='text' class='input-sm form-control' id='modal_event_code' placeholder='Event code' maxLength='24' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_event_desc' placeholder='Event name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_event_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_event_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center width_22'>" + label["CODE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_78'>" + label["DESCRIPTION"] + "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
	iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");    
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_event_area").html(iHtml.join(''));
    
}

function getModalAccount(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_account' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_account'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["ACCOUNT"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-3'>");
    iHtml.push("			<input type='text' class='input-sm form-control' id='modal_account_code' placeholder='G/L Account code' maxLength='10' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_account_desc' placeholder='G/L Account name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_account_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_account_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center width_20'>" + label["GL_ACCOUNT_CODE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_80'>" + label["GL_ACCOUNT_NAME"] + "</th>");    
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_account_area").html(iHtml.join(''));
    
}

function getModalAccount2(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_account' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-full'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_account'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["ACCOUNT"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-4' style='padding:0'>");
	iHtml.push("	      	<div class='col-sm-4'>");
    iHtml.push("				<input type='text' class='input-sm form-control' id='modal_account_code' placeholder='G/L Account code' maxLength='10' style='height:31px'>");
	iHtml.push("		  	</div>");
	iHtml.push("	      	<div class='col-sm-8 padding-left-0'>");
    iHtml.push("				<input type='text' class='input-sm form-control' id='modal_account_desc' placeholder='G/L Account name' style='height:31px'>");
	iHtml.push("		  	</div>");
	iHtml.push("		  </div>");
	iHtml.push("	      <div class='col-sm-4' style='padding:0'>");
	iHtml.push("	      	<div class='col-sm-4 padding-left-0'>");
    iHtml.push("				<input type='text' class='input-sm form-control' id='modal_account_event_code' placeholder='Event code' style='height:31px'>");
	iHtml.push("		  	</div>");
	iHtml.push("	      	<div class='col-sm-8 padding-left-0'>");
    iHtml.push("				<input type='text' class='input-sm form-control' id='modal_account_event_desc' placeholder='Event name' style='height:31px'>");
	iHtml.push("		  	</div>");
	iHtml.push("		  </div>");
	iHtml.push("	      <div class='col-sm-4' style='padding:0'>");
	iHtml.push("	      	<div class='col-sm-4 padding-left-0'>");
    iHtml.push("				<input type='text' class='input-sm form-control' id='modal_account_activity_code' placeholder='Acticity code' style='height:31px'>");
	iHtml.push("		  	</div>");
	iHtml.push("		  	<div class='col-sm-8 padding-left-0'>");
	iHtml.push("		    	<div class='input-group'>");
	iHtml.push("			  	<input type='text' class='input-sm form-control' id='modal_account_activity_desc' placeholder='Acticity name' value='' style='height:31px'>");
	iHtml.push("			  	<span class='input-group-btn'>");
	iHtml.push("			    	<button class='btn btn-sm btn-primary' id='modal_account_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  	</span>");
	iHtml.push("		    	</div>");
	iHtml.push("		  	</div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:400px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_account_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center'>" + label["GL_ACCOUNT_CODE"]  + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["GL_ACCOUNT_NAME"]  + "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["EVENT"] 			+ "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["EVENT_NAME"] 		+ "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["ACTIVITY_CODE"] 	+ "</th>");
    iHtml.push("			  <th class='td_basic_center'>" + label["ACTIVITY_NAME"] 	+ "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='6'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_account_area").html(iHtml.join(''));
    
}

function getModalAsset(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_asset' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_asset'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["ASSET"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-3'>");
    iHtml.push("			<input type='text' class='input-sm form-control' id='modal_asset_code' placeholder='Asset code' maxLength='10' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_asset_desc' placeholder='Asset name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_asset_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_asset_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center width_22'>" + label["CODE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_78'>" + label["DESCRIPTION"] + "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_asset_area").html(iHtml.join(''));
    
}

function getModalBudget(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_budget' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_budget'>");
	iHtml.push("	    <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["FUND_CENTER"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("		  <div class='col-sm-3'>");
	iHtml.push("			<input type='text' class='input-sm form-control' id='modal_budget_code' placeholder='Budget code' maxLength='10' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_budget_desc' placeholder='Budget name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_budget_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		</div>");
	iHtml.push("		<div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("		  <table class='table table-bordered table-striped table-hover' id='modal_budget_table'>");
	iHtml.push("			<thead>");
	iHtml.push("			  <th class='td_basic_center width_22'>" + label["CODE"] + "</th>");
	iHtml.push("			  <th class='td_basic_center width_78'>" + label["DESCRIPTION"] + "</th>");
	iHtml.push("			</thead>");
	iHtml.push("			<tbody>");
	iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
	iHtml.push("			</tbody>");
	iHtml.push("		  </table>");
	iHtml.push("        </div>");
	iHtml.push("      </div>");
	iHtml.push("	  <div class='modal-footer'>");
	iHtml.push("		<button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
	iHtml.push("	  </div>");
	iHtml.push("	</div>");
	iHtml.push("  </div>");
	iHtml.push("</div>");
    
    $("#modal_data_budget_area").html(iHtml.join(''));
    
}

function getModalDepartment(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_department' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_department'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["DEPARTMENT"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-3'>");
    iHtml.push("			<input type='text' class='input-sm form-control' id='modal_department_code' placeholder='Department code' maxLength='10' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_department_desc' placeholder='Department name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_department_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_department_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center width_22'>" + label["CODE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_78'>" + label["DESCRIPTION"] + "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_department_area").html(iHtml.join(''));
    
}

function getModalUser(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_user' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_user'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["USER"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-6'>");
	iHtml.push("		    <div class='input-group'>");	
    iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_user_name' placeholder='User Name' maxLength='30' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_user_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_user_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center width_22'>" + label["NAME"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_28'>" + label["DEPARTMENT"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_20'>" + label["CHANGE_NAME"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_30'>" + label["CHANGE_DEPARTMENT"] + "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='4'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_user_area").html(iHtml.join(''));
    
}

function getModalUser2(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_user' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_user'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["USER"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-6'>");
	iHtml.push("		    <div class='input-group'>");	
    iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_user_name' placeholder='User Name' maxLength='10' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_user_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_user_table'>");
	iHtml.push("		    <thead>");
	iHtml.push("			  <th class='td_basic_center width_22'>" + label["NAME"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_28'>" + label["DEPARTMENT"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_20'>" + label["CHANGE_NAME"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_30'>" + label["CHANGE_DEPARTMENT"] + "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='4'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_user_area").html(iHtml.join(''));
    
}

function getModalMiddleUser(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal fade modal-detail' id='modal_user' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-md'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_user'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["USER"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-6'>");
	iHtml.push("		    <div class='input-group'>");	
    iHtml.push("			  <input type='text' class='form-control' id='modal_user_name' placeholder='User Name' maxLength='30' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button type='button' class='btn btn-sm btn-primary' id='modal_user_btn_search' style='height:31px'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_user_table'>");
	iHtml.push("		    <thead>");
	iHtml.push("			  <th class='td_basic_center width_22'>" + label["NAME"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_78'>" + label["DEPARTMENT"] + "</th>");
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_user_area").html(iHtml.join(''));
    
}

function getModalActivity(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_activity' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_activity'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["ACTIVITY"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-3'>");
    iHtml.push("			<input type='text' class='input-sm form-control' id='modal_activity_code' placeholder='Activity code' maxLength='10' style='height:31px'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_activity_desc' placeholder='Activity name' value='' style='height:31px'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_activity_btn_search' style='height: 31px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:300px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_activity_table'>");
	iHtml.push("		    <thead>");
    iHtml.push("			  <th class='td_basic_center width_22'>" + label["ACTIVITY_CODE"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_78'>" + label["ACTIVITY_NAME"] + "</th>");   
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			<tr>");
	iHtml.push("			  <td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
	iHtml.push("			</tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_activity_area").html(iHtml.join(''));
    
}

function getModalBudgetCheck(){
    var iHtml = [];
    var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
    
    iHtml.push("<div class='modal fade modal-detail' id='modal_available_budget' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-md'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_budget'>");
    iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
    iHtml.push("        <h4 class='modal-title'>" + label["AVAILABLE_BUDGET"] + "</h4>");
    iHtml.push("      </div>");
    iHtml.push("      <div class='modal-body'>");
    iHtml.push("        <div class='table-responsive' style='height:200px;margin-top:5px;'>");
    iHtml.push("          <table class='table table-bordered table-striped table-hover' id='modal_available_budget_table'>");
    iHtml.push("            <thead>");
    iHtml.push("              <th class='td_basic_center width_30'>" + label["EVENT"] + "</th>");
    iHtml.push("              <th class='td_basic_center width_70'>" + label["CURRENT_AVAIL_BUDGET"] + "</th>");
    iHtml.push("            </thead>");
    iHtml.push("            <tbody>");
    iHtml.push("            </tbody>");
    iHtml.push("          </table>");
    iHtml.push("        </div>");
    iHtml.push("      </div>");
    iHtml.push("      <div class='modal-footer'>");
    iHtml.push("        <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("      </div>");
    iHtml.push("    </div>");
    iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_available_budget_area").html(iHtml.join(''));
    
}

function getModalMenuIcon(){
    var iHtml = [];
    var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
    
	iHtml.push("<div class='modal fade modal-detail' id='modal_menu_icon' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_menu_icon'>");
    iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
    iHtml.push("        <h4 class='modal-title'>" + label["MENU_ICON"] + "</h4>");
    iHtml.push("      </div>");
    iHtml.push("      <div class='modal-body'>");
    iHtml.push("        <div class='ibox float-e-margins'>");
    iHtml.push("          <div class='ibox-content icons-box'>");
    iHtml.push("            <div>");
    iHtml.push("              <h3> New Icons in 4.7.0 </h3>");
    iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-address-book' aria-hidden='true'></i> address-book</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-address-book-o' aria-hidden='true'></i> address-book-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-address-card' aria-hidden='true'></i> address-card</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-address-card-o' aria-hidden='true'></i> address-card-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-bandcamp' aria-hidden='true'></i> bandcamp</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-bath' aria-hidden='true'></i> bath</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-bathtub' aria-hidden='true'></i> bathtub <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-drivers-license' aria-hidden='true'></i> drivers-license <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-drivers-license-o' aria-hidden='true'></i> drivers-license-o <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-eercast' aria-hidden='true'></i> eercast</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-envelope-open' aria-hidden='true'></i> envelope-open</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-envelope-open-o' aria-hidden='true'></i> envelope-open-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-etsy' aria-hidden='true'></i> etsy</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-free-code-camp' aria-hidden='true'></i> free-code-camp</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-grav' aria-hidden='true'></i> grav</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-handshake-o' aria-hidden='true'></i> handshake-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-id-badge' aria-hidden='true'></i> id-badge</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-id-card' aria-hidden='true'></i> id-card</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-id-card-o' aria-hidden='true'></i> id-card-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-imdb' aria-hidden='true'></i> imdb</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-linode' aria-hidden='true'></i> linode</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-meetup' aria-hidden='true'></i> meetup</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-microchip' aria-hidden='true'></i> microchip</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-podcast' aria-hidden='true'></i> podcast</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-quora' aria-hidden='true'></i> quora</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-ravelry' aria-hidden='true'></i> ravelry</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-s15' aria-hidden='true'></i> s15 <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-shower' aria-hidden='true'></i> shower</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-snowflake-o' aria-hidden='true'></i> snowflake-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-superpowers' aria-hidden='true'></i> superpowers</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-telegram' aria-hidden='true'></i> telegram</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer' aria-hidden='true'></i> thermometer <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-0' aria-hidden='true'></i> thermometer-0 <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-1' aria-hidden='true'></i> thermometer-1 <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-2' aria-hidden='true'></i> thermometer-2 <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-3' aria-hidden='true'></i> thermometer-3 <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-4' aria-hidden='true'></i> thermometer-4 <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-empty' aria-hidden='true'></i> thermometer-empty</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-full' aria-hidden='true'></i> thermometer-full</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-half' aria-hidden='true'></i> thermometer-half</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-quarter' aria-hidden='true'></i> thermometer-quarter</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-thermometer-three-quarters' aria-hidden='true'></i> thermometer-three-quarters</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-times-rectangle' aria-hidden='true'></i> times-rectangle <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-times-rectangle-o' aria-hidden='true'></i> times-rectangle-o <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-user-circle' aria-hidden='true'></i> user-circle</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-user-circle-o' aria-hidden='true'></i> user-circle-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-user-o' aria-hidden='true'></i> user-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-vcard' aria-hidden='true'></i> vcard <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-vcard-o' aria-hidden='true'></i> vcard-o <span class='text-muted'>(alias)</span></a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-window-close' aria-hidden='true'></i> window-close</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-window-close-o' aria-hidden='true'></i> window-close-o</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-window-maximize' aria-hidden='true'></i> window-maximize</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-window-minimize' aria-hidden='true'></i> window-minimize</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-window-restore' aria-hidden='true'></i> window-restore</a></div>");
	iHtml.push("                <div class='infont col-md-3 col-sm-4'><a href=''><i class='fa fa-wpexplorer' aria-hidden='true'></i> wpexplorer</a></div>");

    iHtml.push("          </div>");
    iHtml.push("        </div>");
    iHtml.push("      </div>");
    iHtml.push("      <div class='modal-footer'>");
    iHtml.push("        <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("      </div>");
    iHtml.push("    </div>");
    iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_menu_icon_area").html(iHtml.join(''));
    
}

function getModalSiteMap(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal fade' id='modal_site_map' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog'>");
	iHtml.push("    <div class='modal-content animated'>");
	iHtml.push("      <div class='modal-header' id='modal_header_site_map'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["SITE_MAP"] + "</h4>");
	iHtml.push("      </div>");
	iHtml.push("      <div class='ibox-content'>");
	iHtml.push("        <div style='padding-left:50px;'>");
	iHtml.push("          <div class='row'>");
	iHtml.push("            <div class='col-sm-6'>");
	iHtml.push("              <li class='form-control-static'><strong>Budget Report</strong></li>");
	iHtml.push("            </div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <li class='form-control-static'><strong>Requesting</strong></li>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(41); return false;'>Budget Monthly Report</a></p>");
	iHtml.push("			</div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(1); return false;'>PO</a></p>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("		    <div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(42); return false;'>Budget Yearly Report</a></p>");
	iHtml.push("			</div>");
	iHtml.push("		    <div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(2); return false;'>Invoice parking</a></p>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("		    <div class='col-sm-6'>");
	iHtml.push("		    </div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(3); return false;'>Budget Increase</a></p>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("		    <div class='col-sm-6'>");
	iHtml.push("		    </div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(4); return false;'>Budget Transfer</a></p>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		</div>");
	iHtml.push("		<div style='padding:30px 0 0 50px;'>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <li class='form-control-static'><strong>Approval</strong></li>");
	iHtml.push("			</div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <li class='form-control-static'><strong>Reports</strong></li>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(21); return false;'>Funds Approval</a></p>");
	iHtml.push("			</div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(99); return false;'>PO</a></p>");
	iHtml.push("            </div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(22); return false;'>Documents Approval</a></p>");
	iHtml.push("			</div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(99); return false;'>Invoice parking</a></p>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("		    <div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(23); return false;'>Budgeting Approval</a></p>");
	iHtml.push("			</div>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(99); return false;'>Budget Increase</a></p>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='row'>");
	iHtml.push("			<div class='col-sm-6'>");
	iHtml.push("		    </div>");
	iHtml.push("		    <div class='col-sm-6'>");
	iHtml.push("			  <p class='form-control-static'><a class='text-underline' href='#' onclick='goDirectMove(99)'>Budget Transfer</a></p>");
	iHtml.push("			</div>");
	iHtml.push("		  </div>");
	iHtml.push("		</div>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-footer'>");
	iHtml.push("		<button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
	iHtml.push("	  </div>");
	iHtml.push("	</div>");
	iHtml.push("  </div>");
	iHtml.push("</div>");
    
    // $("#modal_site_map_area").html(iHtml.join(''));
    $(document.body).append(iHtml.join(""));
    
}

function getModalProfile(userinfo){
	var iHtml  = [];
	var label  = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal fade modal-detail' id='modal_profile' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-md'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_profile'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["PROFILE"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
//	iHtml.push("	    <div class='row'>");
//	iHtml.push("	      <div class='col-sm-12'>");
//    iHtml.push("		    <p class='td_basic_center margin-b20'><img src='/com.hme.ge.fm.user.common/img/margot_robbie.jpg' width='108px' height='108px'></p>");
//	iHtml.push("		  </div>");
//	iHtml.push("	    </div>");	
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-12'>");
	iHtml.push("	      	<div class='form-group'>");
	iHtml.push("	      		<label class='col-sm-3 control-label'>" + label["COMPANY"] + "</label>");
	iHtml.push("	      		<div class='col-sm-9'>");
    iHtml.push("					<p class=''>" + common.getStrSumValue(userinfo.BUKRS, userinfo.BUTXT) + "</p>");
	iHtml.push("		    	</div>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");	
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-12'>");
	iHtml.push("	      	<div class='form-group'>");
	iHtml.push("	      		<label class='col-sm-3 control-label'>" + label["AD_ACCOUNT"] + "</label>");
	iHtml.push("	      		<div class='col-sm-9'>");
    iHtml.push("					<p class=''>" + common.getValue(userinfo.ADACC) + "</p>");
	iHtml.push("		    	</div>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");	
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-12'>");
	iHtml.push("	      	<div class='form-group'>");
	iHtml.push("	      		<label class='col-sm-3 control-label'>" + label["ID"] + "</label>");
	iHtml.push("	      		<div class='col-sm-9'>");
    iHtml.push("					<p class=''>" + common.getStrSumValue(userinfo.USRID, userinfo.UNAME) + "</p>");
	iHtml.push("		    	</div>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-12'>");
	iHtml.push("	      	<div class='form-group'>");
	iHtml.push("	      		<label class='col-sm-3 control-label'>" + label["ASSIGNED_DEPARTMENT"] + "</label>");
	iHtml.push("	      		<div class='col-sm-9'>");
    iHtml.push("					<p class=''>" + common.getStrSumValue(userinfo.ORGCD, userinfo.ORGNM) + "</p>");
	iHtml.push("		    	</div>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-12'>");
	iHtml.push("	      	<div class='form-group'>");
	iHtml.push("	      		<label class='col-sm-3 control-label'>" + label["COST_CENTER"] + "</label>");
	iHtml.push("	      		<div class='col-sm-9'>");
    iHtml.push("					<p class=''>" + common.getStrSumValue(userinfo.KOSTL, userinfo.KTEXT) + "</p>");
	iHtml.push("		    	</div>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-12'>");
	iHtml.push("	      	<div class='form-group'>");
	iHtml.push("	      		<label class='col-sm-3 control-label'>"+ label["AUTHO_CLASSI"] +"</label>");
	iHtml.push("	      		<div class='col-sm-9'>");
    iHtml.push("					<p class=''>" + common.getStrSumValue(common.getValue(userinfo.AUCLS), common.getValue(userinfo.ANTXT)) + "</p>");
	iHtml.push("		    	</div>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");	
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");

    $(document.body).append(iHtml.join(""));
    // $("#modal_data_profile_area").html(iHtml.join(''));
    
}

function getModalDashboard(){
    var iHtml = [];
    var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
    
    iHtml.push("<div class='modal fade modal-detail' id='modal_dashboard_display' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-dash'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_dashboard'>");
    iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
    iHtml.push("        <h4 class='modal-title'>" + label["DASHBOARD"] + "</h4>");
    iHtml.push("      </div>");
    iHtml.push("      <div class='modal-dash-body'>");
    iHtml.push("        <div style='margin: 0px; width: 100%; height: 382px;'>");
    iHtml.push("   		  <div id='dashboard'>");
    iHtml.push("            <div class='col1'>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>Budget Transfer</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"$\");'><strong><span id='bt_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"1\");'><strong><span id='bt_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"2\");'><strong><span id='bt_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"9\");'><strong><span id='bt_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");    
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>Budget Increase</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"$\");'><strong><span id='bi_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"1\");'><strong><span id='bi_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"2\");'><strong><span id='bi_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"9\");'><strong><span id='bi_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>PO</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"$\");'><strong><span id='po_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"1\");'><strong><span id='po_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"2\");'><strong><span id='po_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"9\");'><strong><span id='po_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");    
    iHtml.push("            </div>");
    iHtml.push("            <div class='col2'>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>IP</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"$\");'><strong><span id='ip_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"1\");'><strong><span id='ip_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"2\");'><strong><span id='ip_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"9\");'><strong><span id='ip_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>Text - RFA</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"$\");'><strong><span id='text_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"1\");'><strong><span id='text_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"2\");'><strong><span id='text_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"9\");'><strong><span id='text_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");    
    iHtml.push("            </div>"); 

    iHtml.push("            <div class='col3'>");
    iHtml.push("              <ul id='approval'>");
    iHtml.push("                <h4><span>" + label["APPROVAL"] + "</span></h4>");
    // iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='visual'><span class='title'></span><img src='/com.hme.ge.fm.user.common/img/added/approval_circle.png' /><span class='shadow'></span></span>");
    // iHtml.push("                </li>");    
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"$\");'><strong><span id='ip_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"1\");'><strong><span id='ip_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"2\");'><strong><span id='ip_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"9\");'><strong><span id='ip_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");   
    iHtml.push("            </div>"); 
    iHtml.push("          </div>");
    iHtml.push("        </div>");
    iHtml.push("      </div>");
    // iHtml.push("      <div class='modal-footer'>");
    // iHtml.push("        <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i> Close</button>");
    // iHtml.push("      </div>");
    iHtml.push("    </div>");
    iHtml.push("  </div>");
    iHtml.push("</div>");
    
    //$(document.body).append(iHtml.join(""));
    $("#modal_data_dashboard_area").html(iHtml.join(''));
    
}

function getModalAvailableBudget(cabud, fipext){
	var h = [];
    h.push('<tr class="cur_pit">');
    h.push('<td class="td_basic_left">' + fipext + '</td>');
    h.push('<td class="td_basic_right">' + getFormatValue(cabud,"#,###.#0") + '</td>');
    h.push('</tr>');

    $('#modal_available_budget_table > tbody').html(h.join(''));
    $("#modal_available_budget").modal("show");
}

function getModalExecutiveDashboard(){
    var iHtml = [];
    var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
    
    iHtml.push("<div class='modal fade modal-detail' id='modal_dashboard_E' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-dash'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_dashboard_E'>");
    iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
    iHtml.push("        <h4 class='modal-title'>" + label["DASHBOARD"] + "</h4>");
    iHtml.push("      </div>");
    iHtml.push("      <div class='modal-dash-body'>");
    iHtml.push("        <div style='margin: 0px; width: 100%; height: 382px;'>");
    iHtml.push("   		  <div id='dashboard'>");
    iHtml.push("            <div class='col1'>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>Budget</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"$\");'><strong><span id='budget_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"1\");'><strong><span id='budget_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"2\");'><strong><span id='budget_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"B\",\"9\");'><strong><span id='budget_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>PO</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"$\");'><strong><span id='po_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"1\");'><strong><span id='po_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"2\");'><strong><span id='po_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"F\",\"9\");'><strong><span id='po_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");    
    iHtml.push("            </div>");
    iHtml.push("            <div class='col2'>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>IP</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"$\");'><strong><span id='ip_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"1\");'><strong><span id='ip_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"2\");'><strong><span id='ip_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"9\");'><strong><span id='ip_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>Text - RFA</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"$\");'><strong><span id='text_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"1\");'><strong><span id='text_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"2\");'><strong><span id='text_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"T\",\"9\");'><strong><span id='text_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");    
    iHtml.push("            </div>"); 

    iHtml.push("            <div class='col3'>");
    iHtml.push("              <ul id='approval'>");
    iHtml.push("                <h4><span>" + label["APPROVAL"] + "</span></h4>");
    // iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='visual'><span class='title'></span><img src='/com.hme.ge.fm.user.common/img/added/approval_circle.png' /><span class='shadow'></span></span>");
    // iHtml.push("                </li>");    
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>" + label["SAVED"] + " :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"$\");'><strong><span id='ip_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"1\");'><strong><span id='ip_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"2\");'><strong><span id='ip_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECT"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"9\");'><strong><span id='ip_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");   
    iHtml.push("            </div>"); 
    iHtml.push("          </div>");
    iHtml.push("        </div>");
    iHtml.push("      </div>");
    iHtml.push("    </div>");
    iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $(document.body).append(iHtml.join(""));
    
}

function getModalGeneralDashboard(){
    var iHtml = [];
    var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
    
    iHtml.push("<div class='modal fade modal-detail' id='modal_dashboard_G' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-dash'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_dashboard_G'>");
    iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
    iHtml.push("        <h4 class='modal-title'>" + label["DASHBOARD"] + "</h4>");
    iHtml.push("      </div>");
    iHtml.push("      <div class='modal-dash-body'>");
    iHtml.push("      <form method='post' name='form_dash' id='form_dash' class='display_n'>");
    iHtml.push("        <input type='hidden' name='cmd'>");
    iHtml.push("        <input type='hidden' name='cstat'>");
    iHtml.push("        <input type='hidden' name='frdat'>");
    iHtml.push("        <input type='hidden' name='todat'>");
    iHtml.push("      </form>");
    iHtml.push("        <div style='margin: 0px; width: 100%; height: 390px;'>");
    iHtml.push("   		  <div id='dashboard'>");
    iHtml.push("            <div class='col1'>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>"+ label["PURCHASE_ORDER"] +"</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["SAVED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"P\",\"$\");'><strong><span id='po_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"P\",\"1\");'><strong><span id='po_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"P\",\"2\");'><strong><span id='po_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"P\",\"9\");'><strong><span id='po_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");     
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>"+ label["BUDGET_TRANSFER"] +"</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["SAVED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BT\",\"$\");'><strong><span id='bt_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BT\",\"1\");'><strong><span id='bt_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BT\",\"2\");'><strong><span id='bt_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BT\",\"9\");'><strong><span id='bt_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");   
    iHtml.push("            </div>");    
    iHtml.push("            <div class='col2'>");
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>"+ label["INVOICE_PARKING"] +"</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["SAVED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"$\");'><strong><span id='ip_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"1\");'><strong><span id='ip_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"2\");'><strong><span id='ip_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"I\",\"9\");'><strong><span id='ip_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>"); 
    iHtml.push("              <ul>");
    iHtml.push("                <h4><span>"+ label["BUDGET_INCREASE"] +"</span></h4>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["SAVED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BI\",\"$\");'><strong><span id='bi_save'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REQUESTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BI\",\"1\");'><strong><span id='bi_request'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PROCESSING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BI\",\"2\");'><strong><span id='bi_process'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["REJECTED"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goEPUrl(\"BI\",\"9\");'><strong><span id='bi_reject'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");    
    iHtml.push("            </div>"); 
    iHtml.push("            <div class='col3'>");
    iHtml.push("              <ul id='approval'>");
    iHtml.push("                <h4><span>"+ label["APPROVAL"] +"</span></h4>");
    iHtml.push("              	  <span class='visual'><span class='title'></span><img src='/com.hme.ge.fm.user.common/img/added/approval_circle.png' /><span class='shadow'></span></span>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["PURCHASE_ORDER"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goApproveView(\"P\");'><strong><span id='po_approval_cnt'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["INVOICE_PARKING"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goApproveView(\"I\");'><strong><span id='ip_approval_cnt'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["BUDGET_TRANSFER"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goApproveView(\"BT\");'><strong><span id='bt_approval_cnt'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("                <li class='list_none'>");
    iHtml.push("              	  <span class='board_label'>"+ label["BUDGET_INCREASE"] +" :</span>");
    iHtml.push("              	  <span class='board_data'><a href='javascript:goApproveView(\"BI\");'><strong><span id='bi_approval_cnt'>0</span></strong></a> EA</span>");
    iHtml.push("                </li>");
    iHtml.push("              </ul>");   
    iHtml.push("            </div>"); 
    iHtml.push("          </div>");
    iHtml.push("        </div>");
    iHtml.push("      </div>");
    iHtml.push("    </div>");
    iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_data_dashboard_area").html(iHtml.join(''));
    
}

function getChangeApprovalLine(){
    var iHtml = [];
    var label = g_label.getData();
    var button = g_button.getData();
    var message = g_message.getData();
    
    iHtml.push("<div class='modal fade modal-detail' id='modal_change_approval' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-lg'>");
	iHtml.push("    <div class='modal-content animated'>");
	iHtml.push("      <div class='modal-header' id='modal_header_change_approval'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal' id='short_close'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title' id='add_approval_line_title'>" + label["ADD_APPROVAL_LINE"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("      <div class='modal-dash-body'>");
    iHtml.push("        <div style='margin: 0px; width: 100%; height: 436px;'>");
    iHtml.push("   		  <div id='change_approval'>");
    iHtml.push("            <div class='column1'>");
    iHtml.push("	    		<div class='row'>");
    iHtml.push("		  		  	<div class='col-sm-8'>");
    iHtml.push("		    	  		<div class='input-group'>");
    iHtml.push("			  				<input type='text' class='input-sm form-control' id='modal_change_user_name' placeholder='User Name' value='' maxLength='20' style='height:32px'>");
    iHtml.push("			  				<span class='input-group-btn'>");
    iHtml.push("			    	  			<button class='btn btn-sm btn-primary modal_box_button' id='modal_user_search_btn' style='height: 32px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
    iHtml.push("			  				</span>");
    iHtml.push("		    	  		</div>");
    iHtml.push("		    	  	</div>");
    iHtml.push("                </div>");
    iHtml.push("	    		<div class='table-responsive' style='height:394px;margin-top:5px;'>");
    iHtml.push("	      			<table class='table table-bordered table-striped table-hover' id='modal_change_approval_table'>");
    iHtml.push("		    			<thead>");
    iHtml.push("			  				<th class='td_basic_center width_22'>" + label["USER_NAME"] + "</th>");
    iHtml.push("			  				<th class='td_basic_center width_78'>" + label["DEPARTMENT"] + "</th>");   
    iHtml.push("		    			</thead>");
    iHtml.push(" 		    			<tbody>");
    iHtml.push("							<tr>");
    iHtml.push("			  					<td class='td_basic_center' colspan='2'>"+ message["NO_DATA"] +"</td>");
    iHtml.push("							</tr>");
    iHtml.push("		    			</tbody>");
    iHtml.push("		  			</table>");
    iHtml.push("	    		</div>");    
    iHtml.push("            </div>");
    //iHtml.push("            <div style='width: 80px; margin-top: 200px; margin-left: 2px; float: left;'>");
    //iHtml.push("	    		<div class=''>");
    //iHtml.push("	    			<button type='button' class='btn btn-xs btn-success' id='btn_approval_add' style='margin:5px'><i class='fa fa-arrow-circle-o-right'></i>Add</button>");
    //iHtml.push("	    			<button type='button' class='btn btn-xs btn-success' id='btn_approval_del' style='margin:5px'><i class='fa fa-arrow-circle-o-left'></i>Del</button>");
    //iHtml.push("	    		</div>");    
    //iHtml.push("            </div>"); 
    iHtml.push("            <div class='column2'>");
    iHtml.push("	    		<div class='table-responsive' style='height:368px;margin-top:37px;'>");
    iHtml.push("	      			<table class='table table-bordered table-striped table-hover' id='modal_parent_approval_table'>");
    iHtml.push("		    			<thead>");
    iHtml.push("			  				<th class='td_basic_center width_22'>" + label["STEP"] + "</th>");
    iHtml.push("			  				<th class='td_basic_center width_20'>" + label["APPROVER"] + "</th>");
    iHtml.push("			  				<th class='td_basic_center width_58'>" + label["MANDATARY"] + "</th>");   
    iHtml.push("		    			</thead>");
    iHtml.push(" 		    			<tbody>");
    iHtml.push("							<tr>");
    iHtml.push("			  					<td class='td_basic_center' colspan='3'>"+ message["NO_DATA"] +"</td>");
    iHtml.push("							</tr>");
    iHtml.push("		    			</tbody>");
    iHtml.push("		  			</table>");
    iHtml.push("	    		</div>");
    iHtml.push("	    		<div class=''>");
    iHtml.push("	    			<button type='button' class='btn btn-xs btn-success' id='btn_approval_add'><i class='fa fa-arrow-circle-right'></i>" + button["ADD"] + "</button>");
    iHtml.push("	    			<button type='button' class='btn btn-xs btn-success' id='btn_approval_del'><i class='fa fa-arrow-circle-left'></i>" + button["DEL"] + "</button>");
    iHtml.push("	    			<button type='button' class='btn btn-xs btn-success' id='btn_approval_up'><i class='fa fa-arrow-circle-up'></i>" + button["UP"] + "</button>");
    iHtml.push("	    			<button type='button' class='btn btn-xs btn-success' id='btn_approval_down'><i class='fa fa-arrow-circle-down'></i>" + button["DOWN"] + "</button>");
    iHtml.push("	    		</div>");    
    iHtml.push("            </div>"); 
    iHtml.push("          </div>");
    iHtml.push("        </div>");
    iHtml.push("      </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal' id='btn_approval_apply'><i class='fa fa-check'></i>" + button["APPLY"] + "</button>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal' id='btn_approval_close'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_change_approval_line").html(iHtml.join(""));
    
    $('#modal_change_user_name').on("keydown",function(e){
    	if(e.keyCode === 13){
    		//doSearchEmployee();
    		doNewSearchEmployee(action.getMode());
    	}
    });
    
    $("#modal_user_search_btn").on("click",function(){
    	//doSearchEmployee();
    	doNewSearchEmployee(action.getMode());
    });
    
    $("#btn_approval_add").on("click", function(){
    	//doAddUser();
    	doNewAddUser(action.getMode());
    });
    
    $("#btn_approval_del").on("click", function(){
    	//doDelUser();
    	doNewDelUser(action.getMode());
    });
    
    $("#btn_approval_up").on("click", function(){
    	//doUpUser();
    	doNewUpUser(action.getMode());
    });
    
    $("#btn_approval_down").on("click", function(){
    	//doDownUser();
    	doNewDownUser(action.getMode());
    });
    
    $("#btn_approval_apply").on("click", function(){
    	//setTotalApproverData();
    	setNewTotalApproverData(action.getMode());
    });
    
    $("#btn_approval_close, #short_close").on("click", function(){
    	//setChangeApprovalCloase();
    	setNewChangeApprovalClose(action.getMode());
    });
    
    $("#modal_change_approval_table tbody tr" ).draggable({revert: "invalid", cursor: "move", helper:"clone"});
	$("#modal_parent_approval_table" ).droppable({ drop:function(){ alert(); } });
    
}

function getModalFileList(){
    var iHtml = [];
    var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
    
    iHtml.push("<div class='modal fade modal-detail' id='modal_file_list' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-lg'>");
	iHtml.push("    <div class='modal-content animated'>");
	iHtml.push("      <div class='modal-header' id='modal_header_file_list'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["ATTACH_FILE_LIST"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-3'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_file_invoice_no_code' placeholder='Invoice No' maxLength='10'>");
	iHtml.push("		  </div>");
	iHtml.push("		  <div class='col-sm-9'>");
	iHtml.push("		    <div class='input-group'>");
	iHtml.push("			  <input type='text' class='input-sm form-control' id='modal_file_costcenter_code' placeholder='Cost Center'>");
	iHtml.push("			  <span class='input-group-btn'>");
	iHtml.push("			    <button class='btn btn-sm btn-primary' id='modal_file_btn_search' style='height: 30px;'><i class='fa fa-search'></i>" + button["SEARCH"] + "</button>");
	iHtml.push("			  </span>");
	iHtml.push("		    </div>");
	iHtml.push("		  </div>");	
	iHtml.push("	    </div>");
	iHtml.push("	    <div class='table-responsive' style='height:394px;margin-top:5px;'>");
	iHtml.push("	      <table class='table table-bordered table-striped table-hover' id='modal_file_table'>");
    iHtml.push("		    <thead>");
//    iHtml.push("			  <th class='td_basic_center style='width:30px;'><input type='checkbox' value='X' name='checkAll'></th>");
    iHtml.push("			  <th class='td_basic_center style='width:30px;'></th>");    
    iHtml.push("			  <th class='td_basic_center width_10'>" + label["INVOICE_NO"] + "</th>");    
    iHtml.push("			  <th class='td_basic_center width_10'>" + label["VENDOR"] + "</th>");    
    iHtml.push("			  <th class='td_basic_center width_20'>" + label["COST_CENTER"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_20'>" + label["EVENT"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_20'>" + label["ACTIVITY"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_10'>" + label["PO_NO"] + "</th>");
    iHtml.push("			  <th class='td_basic_center width_10'>" + label["ITEM_NO"] + "</th>");
    //iHtml.push("			  <th class='td_basic_center width_30'>" + label["FILE_NAME"] + "</th>");   
    iHtml.push("		    </thead>");
    iHtml.push(" 		    <tbody>");
    iHtml.push("			  <tr>");
    iHtml.push("			    <td class='td_basic_center' colspan='8'>"+ message["NO_DATA"] +"</td>");
    iHtml.push("			  </tr>");
    iHtml.push("		    </tbody>");
    iHtml.push("		  </table>");
    iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' id='btn_apply_file'><i class='fa fa-times'></i>" + button["APPLY"] + "</button>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");

    $("#modal_attach_file_area").html(iHtml.join(''));
    
    //Click file search button
	$("#modal_file_btn_search").on("click", function(){
		doSearchFileList();
	});
	
	//Click All Checkbox button
	$("input:checkbox[name='checkAll']").on("click",function(){
    	if($(this).is(":checked")){
    		$("input:checkbox[name='checkfile']").prop("checked", true);
    	}else{
    		$("input:checkbox[name='checkfile']").prop("checked", false);
    	}
    });
	
	//Click apply button
    $('#btn_apply_file').on("click", function(){
    	getItemFileData();
    });

}

function getTransactionCode(){
    var iHtml = [];
    var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
    
    iHtml.push("<div class='modal fade modal-detail' id='modal_transaction_code' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-dialog modal-md'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_transaction_code_screen'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["TCODE"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='form-chat'>");
	iHtml.push("		    <div class='input-group input-group-sm'>");	
	iHtml.push("		      <input type='text' name='command_name' placeholder='Enter the transaction code' class='input-sm form-control' autofocus>");
	iHtml.push("		      <span class='input-group-btn'>");
	iHtml.push("		        <button class='btn btn-sm btn-primary pull-right m-t-none' type='button' id='btn_tcode'><strong>Go</strong></button>");	
	iHtml.push("		      </span>");	
	iHtml.push("		    </div>");	
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_tcode_area").html(iHtml.join(''));
}

function getModalBbsNotice(){
	var iHtml = [];
	var label = g_label.getData();
	var button = g_button.getData();
	var message = g_message.getData();
	
	iHtml.push("<div class='modal' id='modal_bbs_notice' tabindex='-1' role='dialog' aria-hidden='true'>");
	iHtml.push("  <div class='modal-lg'>");
	iHtml.push("    <div class='modal-content animated bounceInDown'>");
	iHtml.push("      <div class='modal-header' id='modal_header_notice'>");
	iHtml.push("        <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>" + button["CLOSE"] + "</span></button>");
	iHtml.push("        <h4 class='modal-title'>" + label["NOTICE"] + "</h4>");
	iHtml.push("	  </div>");
	iHtml.push("	  <div class='modal-body'>");
	iHtml.push("	    <div class='row'>");
	iHtml.push("	      <div class='col-sm-12'>");
	iHtml.push("	          <div class='form-group'>");
	iHtml.push("	              <label class='col-sm-2 control-label'>" + label["TITLE"] + "</label>");
	iHtml.push("	      		  <div class='col-sm-10'>");
    iHtml.push("			          <input type='text' class='input-sm form-control' id='modal_notice_title' placeholder='Title' maxLength='30' style='height:31px'>");
	iHtml.push("		  	      </div>");
	iHtml.push("		  	  </div>");
	iHtml.push("		  	  <div class='hr-line-dashed'></div>");
	iHtml.push("	          <div class='form-group' style='margin-top: 40px;'>");
	iHtml.push("	              <label class='col-sm-2 control-label'>" + label["CONTENT"] + "</label>");
	iHtml.push("	      		  <div class='col-sm-10'>");
    iHtml.push("			          <textarea class='input-sm form-control' rows='7' id='modal_notice_content' placeholder='Content' maxLength='300'></textarea>");
	iHtml.push("		  	      </div>");
	iHtml.push("		  	  </div>");
	iHtml.push("		  </div>");
	iHtml.push("	    </div>");
    iHtml.push("	  </div>");
    iHtml.push("	  <div class='modal-footer'>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal' id='btn_bbs_save'><i class='fa fa-check'></i>" + button["SAVE"] + "</button>");
    iHtml.push("	    <button type='button' class='btn btn-success' data-dismiss='modal' id='btn_bbs_close'><i class='fa fa-times'></i>" + button["CLOSE"] + "</button>");
    iHtml.push("	  </div>");
    iHtml.push("    </div>");
	iHtml.push("  </div>");
    iHtml.push("</div>");
    
    $("#modal_input_notice_area").html(iHtml.join(''));
}