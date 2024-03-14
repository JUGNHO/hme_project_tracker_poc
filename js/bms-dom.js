function loadPageTop() {
    var h = [];
    h.push('<div class="bn_tpp" id="btn_edds_top" style="display:none;">');
    h.push('    <a href="#" class="bn_pagetop">');
    h.push('        <i class="fa fa-chevron-up"></i>');
    h.push('    </a>');
    h.push('</div>');

    if ($("#btn_edds_top").length == 0) $(document.body).append(h.join(""));
    
    pageTop();
}

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
    
function bodyTop(){
    $('html').scrollTop(0); 
}

function bodyBottom(){
    $('html').scrollTop($(document).height()); 
}