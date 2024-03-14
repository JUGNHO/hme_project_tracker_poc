(function($) {
    $.fn.number = function() {
        var _input = this;
        _input.on('keydown', function(e){
            var key=(window.event)?event.keyCode:e.which;
            var ctrlkey = (window.event)?event.ctrlKey:e.ctrlKey;
            var shiftkey = (window.event)?event.shiftKey:e.shiftKey;
            if(shiftkey){
                if(window.event){
                    if(event.preventDefault) event.preventDefault();
                    else event.returnValue = false;
                }else e.preventDefault();
            }else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key==9 || key==8 || key==13 || key==37 || key==39 || key==46 || key==109 || key==189){
                return true;
            }else if(ctrlkey && key==86){
                return true;
            }else if(ctrlkey && key==67){
                return true;
            }else {
                if(window.event){
                    if(event.preventDefault) event.preventDefault();
                    else event.returnValue = false;
                }else e.preventDefault();
            }
        });
    };

    $.fn.numeric = function() {
        var _input = this;
        _input.on('keydown', function(e){
            var key=(window.event)?event.keyCode:e.which;
            var ctrlkey = (window.event)?event.ctrlKey:e.ctrlKey;
            var shiftkey = (window.event)?event.shiftKey:e.shiftKey;

            if(shiftkey){
                if(window.event){
                    if(event.preventDefault) event.preventDefault();
                    else event.returnValue = false;
                }else e.preventDefault();
            }else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key==9 || key==8 || key==13 || key==37 || key==39 || key==46 || key==110 || key==190 || key==109 || key==189){
                return true;
            }else if(ctrlkey && key==86){
                return true;
            }else if(ctrlkey && key==67){
                return true;
            }else {
                if(window.event){
                    if(event.preventDefault) event.preventDefault();
                    else event.returnValue = false;
                }else e.preventDefault();
            }
        });
    };
})(jQuery);