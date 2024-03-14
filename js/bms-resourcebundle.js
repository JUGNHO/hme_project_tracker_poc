var resource_bundle = {
	language : "",
	path : "",
	
	setLanguage : function(language){
		this.language = language;
	},
	
	getLanguage : function(){
		return this.language;
	},
	
	setPath : function(path){
		this.path = path;
	},
	
	getPath : function(){
		return this.path;
	},
	
    loadLabel : function(path, language){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 

        jQuery.i18n.properties({
            name:'label', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
                var attr = "rv-i18n-label";
                var f = $("[" + attr + "]");
                var len = f.length;
                for (var i = 0; i < len; i++) {
                    $(f[i]).html(jQuery.i18n.prop($(f[i]).attr(attr)));
                }
            }
        });
    },

    getLabel : function(path, language, keys){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 

        var i18n = {};

        jQuery.i18n.properties({
            name:'label', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
                var len = keys.length;
                for (var i = 0; i < len; i++) {
                    i18n[keys[i]] = jQuery.i18n.prop(keys[i]);              
                }
            }
        });

        return i18n;
    },
    
    getLabels : function(keys){
        var lang = 'en';
        if(this.getLanguage() !== null && typeof this.getLanguage() !== undefined){
            lang = this.getLanguage();
        }

        var i18n = {};

        jQuery.i18n.properties({
            name:'label', 
            path:this.getPath(), 
            mode:'both', 
            language:lang,
            callback: function() {
                var len = keys.length;
                for (var i = 0; i < len; i++) {
                    i18n[keys[i]] = jQuery.i18n.prop(keys[i]);              
                }
            }
        });

        return i18n;
    },

    loadButton : function(path, language){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 

        jQuery.i18n.properties({
            name:'button', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
                var attr = "rv-i18n-button";
                var f = $("[" + attr + "]");
                var len = f.length;
                for (var i = 0; i < len; i++) {
                    $(f[i]).html(jQuery.i18n.prop($(f[i]).attr(attr)));
                }
            }
        });
    },
    
    getButtons : function(keys){
        var lang = 'en';
        if(this.getLanguage() !== null && typeof this.getLanguage() !== undefined){
            lang = this.getLanguage();
        }

        var i18n = {};

        jQuery.i18n.properties({
            name:'button', 
            path:this.getPath(), 
            mode:'both', 
            language:lang,
            callback: function() {
                var len = keys.length;
                for (var i = 0; i < len; i++) {
                    i18n[keys[i]] = jQuery.i18n.prop(keys[i]);              
                }
            }
        });

        return i18n;
    },

    loadMessage : function(path, language){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 
        
        this.setLanguage(lang);
        this.setPath(path);

        jQuery.i18n.properties({
            name:'message', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
                var attr = "rv-i18n-message";
                var f = $("[" + attr + "]");
                var len = f.length;
                for (var i = 0; i < len; i++) {
                    $(f[i]).html(jQuery.i18n.prop($(f[i]).attr(attr)));
                }
            }
        });
    },
    
    getMsg : function(key){
        var lang = 'en';
        if(this.getLanguage() !== null && typeof this.getLanguage() !== undefined){
            lang = this.getLanguage();
        } 

        var result = "";

        jQuery.i18n.properties({
            name:'message', 
            path:this.getPath(), 
            mode:'both', 
            language:lang,
            callback: function() {
        		result = jQuery.i18n.prop(key);              
            }
        });
        
        return result;
    },
    
    getMsgs : function(keys){
        var lang = 'en';
        if(this.getLanguage() !== null && typeof this.getLanguage() !== undefined){
            lang = this.getLanguage();
        } 

        var i18n = {};

        jQuery.i18n.properties({
            name:'message', 
            path:this.getPath(), 
            mode:'both', 
            language:lang,
            callback: function() {
                var len = keys.length;
                for (var i = 0; i < len; i++) {
                    i18n[keys[i]] = jQuery.i18n.prop(keys[i]);              
                }
            }
        });
        return i18n;
    },

    getMessage : function(path, language, key){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 

        var i18n = "";

        jQuery.i18n.properties({
            name:'message', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
            	i18n = jQuery.i18n.prop(key);              
            }
        });
        return i18n;
    },
    
    getMessages : function(path, language, keys){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 

        var i18n = {};

        jQuery.i18n.properties({
            name:'message', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
                var len = keys.length;
                for (var i = 0; i < len; i++) {
                    i18n[keys[i]] = jQuery.i18n.prop(keys[i]);              
                }
            }
        });
        return i18n;
    },

    loadTooltip : function(){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 

        jQuery.i18n.properties({
            name:'tooltip', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
                var attr = "rv-i18n-tooltip";
                var f = $("[" + attr + "]");
                var len = f.length;
                for (var i = 0; i < len; i++) {
                    $(f[i]).html(jQuery.i18n.prop($(f[i]).attr(attr)));
                }
            }
        });
    },
    
    getMessages : function(path, language, keys){
        var lang = 'en';
        if(language !== null && typeof language !== undefined){
            lang = language;
        } 

        var i18n = {};

        jQuery.i18n.properties({
            name:'message', 
            path:path, 
            mode:'both', 
            language:lang,
            callback: function() {
                var len = keys.length;
                for (var i = 0; i < len; i++) {
                    i18n[keys[i]] = jQuery.i18n.prop(keys[i]);              
                }
            }
        });
        return i18n;
    },
};