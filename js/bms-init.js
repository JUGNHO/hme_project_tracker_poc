/*
 *
 *   Budget Management System  
 *   version 1.0
 *
 */
var view = setViewMode();
$(document).ready(function () {

//  common_init�� doCheckAutoLogout �댁슜.    
//  $( document ).idleTimer( parseInt(constants.c_logout_time) );
    goShortKey();
    
    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();  
    
    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small');
    } else {
        $('body').removeClass('body-small');
    }
    
    // MetsiMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').click(function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').click(function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').click(function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Close menu in canvas mode
    $('.close-canvas-menu').click(function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    // Run menu of canvas
    $('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').click(function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Initialize slimscroll for right sidebar
    $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Open close small chat
    $('.open-small-chat').click(function () {
        $(this).children().toggleClass('fa-navicon').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });

    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

    // Small todo handler
    $('.check-link').click(function () {
        var button = $(this).find('i');
        var label = $(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });

    // Append config box / Only for demo purpose
    // Uncomment on server mode to enable XHR calls
    //$.get("skin-config.html", function (data) {
    //    if (!$('body').hasClass('no-skin-config'))
    //        $('body').append(data);
    //});

    // Minimalize menu
    $('.navbar-minimalize').click(function (event) {
        $("body").toggleClass("mini-navbar");
        setAutoTableLayout();       //Control Table layout
        SmoothlyMenu();
        showMiniMenuBar();          //Mini Menu
    });

    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });

    // Move modal to body
    // Fix Bootstrap backdrop issu with animation.css
    $('.modal').appendTo("body");

    // Full height of sidebar
    function fix_height() {
        setTimeout(function(){
            var heightWithoutNavbar = $("body > #wrapper").height() - 61;
            $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
    
            var navbarHeigh = $('nav.navbar-default').height();
            var wrapperHeigh = $('#page-wrapper').height();
    
            if (navbarHeigh > wrapperHeigh) {
                $('#page-wrapper').css("min-height", navbarHeigh + "px");
            }
    
            if (navbarHeigh < wrapperHeigh) {
                $('#page-wrapper').css("min-height", $(window).height() + "px");
            }
    
            if ($('body').hasClass('fixed-nav')) {
                if (navbarHeigh > wrapperHeigh) {
                    $('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
                } else {
                    $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
                }
            }
            
            setAutoTableLayout();
        }, 500);
    }

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    //$(window).bind("load resize scroll", function () {
    $(window).bind("load resize", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    $("[data-toggle=popover]")
        .popover();

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    });
    
    $(".btn").on("mouseover",function(){
        var text = $(this).text();
        $(this).tooltip({title: text, placement: "bottom"}); 
        
    });
    
    $(".btn").on("mouseout",function(){
        $(this).attr("title", "").tooltip('hide');
    });
    
    $("input[type='text'], textarea").on("blur",function(){
        //var obj = $("input[name=" + $(this).attr("name") + "]");
        var obj = $("#" + $(this).attr("id") + "");

        if(obj.val() !== ""){
            if(obj.hasClass("form-control-warning")){
                obj.removeClass("form-control-warning").closest("div.form-group").removeClass("has-warning");
            }
        }
    });
    
    //Site map
    // $("#site_map").on("click", function(event){
    //     var xWidth = event.pageX - 720;
    //     var yHeight = event.pageY - 18;
    //    $("#modal_site_map").modal('show').css({top: yHeight + "px", left: xWidth + "px"});
    // });

    //Show Dashboard
    $("#site_map").on("click", function(event){
        var xWidth = event.pageX - 766;
        var yHeight = event.pageY - 20;
        var id = "";
        
        if(jsonData.UserInfo["EXECU"] === "X"){
            //getModalExecutiveDashboard();
            id = "modal_dashboard_G";
        }else{
            //getModalGeneralDashboard();
            id = "modal_dashboard_G";
        }
        
        $("#" + id + "").modal('show').css({top: yHeight + "px", left: xWidth + "px"});
        doDashboardCount();
        
    });
    
    //Change approval line
    $("#btn_change_approval").on("click", function(event){
        //swal({   title: "Warning",   text: "Under Construction!!",   type: "warning"});
        //return false;
        showAllEmployee();
    });
    
    //Click attach file list
    $("#btn_attach_file").on("click", function(event){
        showFileList();
    });
    
    //Transaction code
    $("input[name='command_name']").keydown(function(e){
        if(e.keyCode === 13){
            goTrasactionURL($(this).val());
        }
    });
    
    $("#btn_tcode").on("click", function(e){
        goTrasactionURL($("input[name='command_name']").val());
    });
    
    //Approval line button
    $("#btn_add_approval").on("click", function(e){
        action.setMode("A");
        showNewAllEmployee('A');
    });
    
    //Reference line button
    $("#btn_add_reference").on("click", function(e){
        action.setMode("C");
        showNewAllEmployee('C');
    });
    
    //Text Area
    $.each($('textarea[data-autoresize]'), function() {
        var offset = this.offsetHeight - this.clientHeight;
     
        var resizeTextarea = function(el) {
            $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
            $(el).parents().find(".approval_comments").css('height', 'auto').css('height', el.scrollHeight + offset);
        };
        $(this).on('keyup input', function() { resizeTextarea(this); });//.removeAttr('data-autoresize');
    });
    
    $("input[type='text']").on("blur", function(e){
        setInputBoxClear($(this)[0].id);
    });
    
    $("select").on("change", function(e){
        setInputBoxClear($(this)[0].id);
    });

    
    $('#btn_expand').click(function() {
        setAutoTableLayout();
    });
            
//==================================================    
//怨듭��ы빆
//==================================================    
    $("#btn_notice").on("click", function(e){
        $("#modal_bbs_notice").modal('show');
    });
    
    $("#btn_bbs_save").on("click", function(e){
        doBoardSave();
    });
    
    $("#btn_bbs_close").on("click", function(e){
        $("#modal_notice_title").val('');
        $("#modal_notice_content").val('');
    });

    $('body').css('overflowY', 'auto');
    
  //==================================================    
  //怨듭��ы빆
  //==================================================    
    isViewPageStatus();                                                             //For approval button
    
    //the user cannot dismiss the modal by pressing the Escape key.
    if(swal) swal.setDefaults({allowEscapeKey: false});     
});

// Minimalize menu when screen is less than 768px
//==================================================    
//釉뚮씪�곗� 李� 議곗젅�� �ㅽ뻾
//==================================================
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small');
    } else {
        $('body').removeClass('body-small');
    }
    showMiniMenuBar();
    setAutoTableLayout();
});

// Local Storage functions
// Set proper body class and plugins based on user configuration
$(document).ready(function () {
    if(localStorageSupport) {

        var collapse = localStorage.getItem("collapse_menu");
        var fixedsidebar = localStorage.getItem("fixedsidebar");
        var fixednavbar = localStorage.getItem("fixednavbar");
        var boxedlayout = localStorage.getItem("boxedlayout");
        var fixedfooter = localStorage.getItem("fixedfooter");

        var body = $('body');

        if (fixedsidebar === 'on') {
            body.addClass('fixed-sidebar');
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }

        if (collapse === 'on') {
            if (body.hasClass('fixed-sidebar')) {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }
            } else {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }

            }
        }

        if (fixednavbar === 'on') {
            $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
            body.addClass('fixed-nav');
        }

        if (boxedlayout === 'on') {
            body.addClass('boxed-layout');
        }

        if (fixedfooter === 'on') {
            $(".footer").addClass('fixed');
        }
    }
    
//==================================================    
//Idle timer start
//==================================================
    $( document ).on( "idle.idleTimer", function(event, elem, obj){
        console.log("start");
        doAutoLogout();
    });

//==================================================    
//Idle timer end
//==================================================
    $( document ).on( "active.idleTimer", function(event, elem, obj, triggerevent){
        // function you want to fire when the user becomes active again
        console.log("clear");
        doLoginTime();              //Check Log in Time
    });
    
//==================================================    
//Message
//==================================================    
    setMessageData(jsonMsgData.MessageKeyData);
    
});

function goTrasactionURL(val){
    if(val === ""){
        alert("Please enter the command.");
        return false;
    }
    goTcodeMoveMenu(val);
    $("#modal_transaction_code").modal('hide');
    $("input[name='command_name']").val("");
}

//==================================================    
//�붾㈃ 異뺤냼�� 誘몃땲 硫붾돱 �붾㈃�� 蹂댁씠湲�/�④린湲�
//==================================================
function showMiniMenuBar(val){
    var timer = 0;
    if(typeof val !== "undefined" && val !== null){
        timer = val; 
    }else{
        timer = "100"; 
    }
    
    timer = parseInt(timer);
    
    setTimeout(function(){
        if($("body").hasClass("mini-navbar")){
            $("#side-menu > li.in > ul").hide();
        }else{
            $("#side-menu > li.in > ul").show();
        }
    }, timer);
    
}

//==================================================    
//HTML5 Local Storage �ъ슜
//==================================================
var refreshTime = "";
function localStorageSupport() {
    return (('localStorage' in window) && window['localStorage'] !== null)
}

// For demo purpose - animation css script
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
    
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}

function goShortKey(){
    $(document).keydown(function(e){
        if(window.event.ctrlKey){
            special_key.ctrlKey = true;
        }
        
        if(window.event.shiftKey){
            special_key.shiftKey = true;
        }
    });
    
    $(document).keypress(function(e){
        var flag = false;

        if(special_key.ctrlKey && special_key.shiftKey && e.keyCode === 49){
            //Open transaction modal 
            showShortKeyModal();
            flag = true;
        } 
        
        //Initialize
        if(flag){
            special_key.ctrlKey = false;
            special_key.shiftKey = false;
        }
    });
}

//Approval Button
function isViewPageStatus(){
    if(typeof $("input[name='utype']").val() !== "undefined" && $("input[name='utype']").val() !== null){
        if($("input[name='utype']").val() === constants.c_utype_11 || $("input[name='utype']").val() === constants.c_utype_52 ||
           $("input[name='utype']").val() === constants.c_utype_61 || $("input[name='utype']").val() === constants.c_utype_62){
            var url = document.location.href;
            if(url.lastIndexOf("Create") > -1){
                view.setData("C");
            }else if(url.lastIndexOf("Detail") > -1 || url.lastIndexOf("Approval") > -1){
                view.setData("D");
            }else if(url.lastIndexOf("Update") > -1){
                view.setData("U");
            }
        }
    }
    
}

//==================================================
// Board Save
//==================================================
function isIndexedDB(){
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    
    if(!window.indexedDB){
        console.log("Your Browser does not support IndexedDB");
        return false;
    }else{
        request = window.indexedDB.open("Board", 2);
        request.onerror = function(event){
            console.log("Error opening DB", event);
            return false;
        }
        request.onupgradeneeded = function(event){
            console.log("Upgrading");
            g_db = event.target.result;
            var objectStore = g_db.createObjectStore("Notice", { keyPath : "IDX" });
            
        };
        request.onsuccess  = function(event){
            console.log("Success opening DB");
            //db = event.target.result;
            g_db = event.target.result;
        }
    }
}

function doBoardSave(){
    if($("#modal_notice_title").val() === ""){
        return false;
    }
    if($("#modal_notice_content").val() === ""){
        return false;
    }
    
    doAddNoticeData();
    isNoticeDetailData(boardData.Notice["IDX"]);
    
    $("#modal_notice_title").val('');
    $("#modal_notice_content").val('');
}

function doAddNoticeData() {
    var userinfo = jsonData.UserInfo;
    
    boardData.Notice["BUKRS"]   = userinfo["BUKRS"];
    boardData.Notice["IDX"]     = "1";
    boardData.Notice["TITLE"]   = $("#modal_notice_title").val();
    boardData.Notice["CONTENT"] = $("#modal_notice_content").val();
    boardData.Notice["WDATE"]   = common.getSystemDate();
    boardData.Notice["UNAME"]   = userinfo["UNAME"];
    boardData.Notice["USRID"]   = userinfo["USRID"];
    boardData.Notice["HIT"]     = "1";
}

function doNoticeSave() {
    var transaction = g_db.transaction(["Notice"],"readwrite");
    transaction.oncomplete = function(event) {
        console.log("Success :)");
    };
    
    transaction.onerror = function(event) {
        console.log("Error :(");
    };  
    var objectStore = transaction.objectStore("Notice");
    objectStore.add({ 
        BUKRS  : boardData.Notice["BUKRS"], 
        IDX    : boardData.Notice["IDX"], 
        TITLE  : boardData.Notice["TITLE"], 
        CONTENT: boardData.Notice["CONTENT"], 
        WDATE  : boardData.Notice["WDATE"], 
        UNAME  : boardData.Notice["UNAME"], 
        USRID  : boardData.Notice["USRID"], 
        HIT    : boardData.Notice["HIT"]
    });
}

function doNoticeDelete(idx) {
    g_db.transaction(["Notice"],"readwrite").objectStore("Notice").delete(idx);
}

function doNoticeDetail(idx) {
    var request = g_db.transaction(["Notice"],"readwrite").objectStore("Notice").get(idx);
    request.onsuccess = function(event){
        if(request.result){
            showNoticeDetail(request.result);
        }
    };
    
    request.onerror = function(event) {
        console.log("Unable to retrieve daa from database!");
    };
}

function doNoticeUpdate() {
    var transaction = g_db.transaction(["Notice"],"readwrite");
    var objectStore = transaction.objectStore("Notice");
    var request = objectStore.get(boardData.Notice["IDX"]);
    
    var param = boardData.Notice;
    for(var key in param){
        console.log('type: ' + typeof param[key] +', key: '+ key +', value:'+param[key]);
    }
    
    request.onsuccess = function(event){
        request.result.BUKRS   = boardData.Notice["BUKRS"];
        request.result.IDX     = boardData.Notice["IDX"];
        request.result.TITLE   = boardData.Notice["TITLE"]; 
        request.result.CONTENT = boardData.Notice["CONTENT"]; 
        request.result.WDATE   = boardData.Notice["WDATE"];
        request.result.UNAME   = boardData.Notice["UNAME"]; 
        request.result.USRID   = boardData.Notice["USRID"]; 
        request.result.HIT     = boardData.Notice["HIT"];
        objectStore.put(request.result);
    };
}

function isNoticeDetailData(idx) {
    var request = g_db.transaction(["Notice"],"readwrite").objectStore("Notice").get(idx);
    request.onsuccess = function(event){
        if(request.result) {
            doNoticeUpdate();
        }else{
            doNoticeSave();
        }
    };
    request.onerror = function(event) {
        console.log("It couldn't be found in your database!");  
    };
}

//=======================================================
//Show toast notice
//=======================================================
function showNotice(){
    if(common.removeLeadZero(jsonData.UserInfo.AUCLS) === constants.c_aucls_1 || common.removeLeadZero(jsonData.UserInfo.AUCLS) === constants.c_aucls_4){
        $("#btn_notice").show();
    }
    
    setTimeout(function(){
        doNoticeDetail("1");
    }, 1000);
}

function showNoticeDetail(result){
    Command: toastr["info"](result["CONTENT"], result["TITLE"]);

    toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": true,
          "progressBar": true,
          "positionClass": "toast-top-full-width",
          "preventDuplicates": true,
          "onclick": null,
          "showDuration": "3000",
          "hideDuration": "10000",
          "timeOut": "100000",
          "extendedTimeOut": "100000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
    }
}