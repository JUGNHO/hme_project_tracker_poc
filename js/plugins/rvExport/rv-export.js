//19.10.2016 - OJS
//Added Total sum 
//Check format date, currency

var rvExport = {
    downloadExcel: function(a, b, c, z) {
        var d = rvExport.getExportTitle(a) + rvExport.getExportHtml("", b, c, z);
        rvExport.excel(d, a);
    },
    printPreview: function(a, b, c, z) {
        var d = rvExport.getExportTitle(a) + rvExport.getExportHtml("", b, c, z);
        rvExport.print(d, a);
    },
    excel: function(a, b, c) {
        var d = [];
        d.push("<!DOCTYPE HTML>"), d.push("<html>"), d.push(" <head>"), d.push("  <title>" + b + "</title>"), d.push("<style>"), d.push(" .container {background:white;display:block;margin:0.5cm auto;box-shadow:0 0 0.5cm rgb(0,0,0,0.5)}"), d.push(" .title {padding:10px 20px;font-size:20px;font-weight:bold;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;} "), d.push(" .title2 {padding-left:10px;margin-top:40px;font-size:12px;font-weight:bold;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;border-left:5px solid #ddd;background-color:#f1f1f1;line-height:30px;}"), d.push(" table {display:table;border-spacing:0;border-collapse:collapse;width:100%;border:thin solid #888888 !important;}"), d.push(" th {border:thin solid #888888 !important;font-weight:bold;}"), d.push(" td {border:thin solid #888888 !important;}"), d.push(" .tr {text-align:right}"), d.push(" .tc {text-align:center}"), d.push(" .tl {text-align:left}"), d.push(" .header {padding-left:20px;padding-right:20px;padding-bottom:20px;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;font-size:10px;}"), d.push(" .header_tb {width:100%;border-spacing:0;border-collapse:collapse;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;font-size:10px;}"), d.push(" .header_tb th {display:table-cell;padding:8px;line-height:1.42857;white-space:norwap;text-align:left;border:1px solid #ddd;background-color:#ececec;font-size:10px;}"), d.push(" .header_tb td {display:table-cell;padding:8px 50px 8px 8px;line-height:1.42857;white-space:norwap;border:1px solid #ddd;font-size:10px;}"), d.push(" .list {padding-left:20px;padding-right:20px;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;font-size:10px;}"), d.push(" .table {display:table;border-spacing:0;border-collapse:collapse;width:100%;max-width:100%;border:thin solid #888888 !important;}"), d.push(" .table > thead > tr > th {display:table-cell;border:thin solid #888888 !important;padding:8px;line-height:1.42857;white-space:norwap;text-align:left;}"), d.push(" .table tr {display:table-row;vertical-align:inherit;border-color:inherit;}"), d.push(" .table > tbody > tr > td {display:table-cell;border:thin solid #888888 !important;padding:8px;line-height:1.42857;white-space:norwap;}"), d.push(" .table tbody {display:table-row-group;vertical-align:middle;border-color:inherit;}"), d.push(" .table > tfoot > tr > td {display:table-cell;border:thin solid #888888 !important;padding:8px;line-height:1.42857;white-space:norwap;background-color:#f9f9f9;font-weight:bold;}"), d.push(" .table tfoot {display:table-row-group;vertical-align:middle;border-color:inherit;}"), d.push(".font-wei{ font-weight: bold; }"), d.push(".td_basic_center{ font-family: Verdana, Geneva, sans-serif; background-color: #EEEEE; font-size: 10px; text-align:center; color: #676a6c; overflow-x: hidden; white-space:nowrap; }"), d.push(".td_basic_right{ font-family: Verdana, Geneva, sans-serif; background-color: #EEEEE; font-size: 10px; text-align:right; color: #676a6c; overflow-x: hidden; white-space:nowrap; }"), d.push(".total { background-color: rgba(253, 255, 209, 1) }"), d.push("</style>"), d.push("</head>"), d.push("<body>"), d.push('<div id="container" class="container">'), d.push(a), d.push(" </div>"), d.push(" </body>"), d.push("</html>");
        var e = function(a) {
                for (var b = a.length, c = new ArrayBuffer(b), d = new Uint8Array(c); b--;) d[b] = a.charCodeAt(b);
                return c
            },
            f = function() {
                var a = document.createElement("a");
                return document.body.appendChild(a), a.style.cssText = "display:none",
                    function(b, c) {
                        var d = window.webkitURL || window.URL,
                            f = new Blob([e(b)], { type: "application/vnd.ms-excel" }),
                            g = d.createObjectURL(f);
                        a.href = g, a.download = c, a.click(), d.revokeObjectURL(g)
                    }
            }(),
            w = window.navigator.userAgent,
            m = w.indexOf("MSIE");
        if (m > -1 || w.indexOf("Trident") > -1) {
            var i = window.open("");
            i.opener || (i.opener = self), setTimeout(function() {
                i = i.document, i.write(d.join("")), i.close(), i.execCommand("SaveAs", !0, b + ".xls")
            }, 100)
        }else{ f(d.join(""), b + ".xls"); }
    },
    getExportTitle: function(a, b) {
        var c = [];
        if (c.push('   <div class="title">' + a + "</div>"), void 0 != b && b.length > 0) {
            c.push('   <div class="header">'), c.push('       <table class="header_tb">');
            for (var d = 0; d < b.length; d++)(d + 1) % 3 == 1 && c.push("        <tr>"), c.push("       <th>" + b[d].title + "</th><td>" + b[d].value + "</td>"), (d + 1) % 3 == 0 && c.push("        </tr>");
            b.length % 3 != 0 && c.push("      </tr>"), c.push("       </table>"), c.push("   </div>")
        }
        return c.join("")
    },
    getExportHtml: function(a, b, c, z) {
        var d = [], arr = []; var tot = 0;
        d.push('   <div class="list">'), d.push('       <div class="title2">' + a + "</div>"), d.push('       <table class="table">'), d.push("           <thead>"), d.push("               <tr>");
        for (var e = c.length, f = 0; e > f; f++) d.push("                   <th style='text-align:center'>" + c[f].title + "</th>");
        d.push("               </tr>"), d.push("           </thead>"), d.push("           <tbody>");
        for (var g = b.length, h = 0; g > h; h++) {
            var i = b[h]; 
            d.push("               <tr>");
            for (var f = 0; e > f; f++){ 
                if(rvExport.getFormatStatus(c[f].format) === "C"){
                    d.push("                   <td class='td_basic_right'>" + rvExport.getFormatValue(i[c[f].key], c[f].format) + "</td>")
                }else if(rvExport.getFormatStatus(c[f].format) === "Y"){
                    d.push("                   <td class='td_basic_center'>" + rvExport.getFormatValue(i[c[f].key], c[f].format) + "</td>");
                }else{
                    d.push("                   <td>" + i[c[f].key] + "</td>");
                }
                if(z){
                    if(rvExport.getFormatStatus(c[f].format) === "C"){
                        if(typeof arr[f] === 'undefined'){ arr[f] = parseFloat(tot) + parseFloat(i[c[f].key]);
                        }else{ arr[f] = parseFloat(arr[f]) + parseFloat(i[c[f].key]); }
                    }else{ arr[f] = ""; }
                }
            }
            d.push("               </tr>")
        }
        if(z){
            d.push("               <tr class='total'>");
            for(var i=0, len=arr.length; i<len; i++){
                if(arr[i] === ""){
                    if(i === 0){ d.push("                   <td class='td_basic_center font-wei'>Total</td>");
                    }else{ d.push("                   <td>" + arr[i] + "</td>"); }
                }else{ d.push("                   <td class='td_basic_right font-wei'>" + rvExport.getFormatValue(arr[i], "#,###.#0") + "</td>"); }
            }
            d.push("               </tr>");
        }
        return d.push("           </tbody>"), d.push("       </table>"), d.push("   </div>"), d.join("");
    },
    print: function(a, b) {
        var c = [];
        c.push("<!DOCTYPE HTML>"), c.push("<html>"), c.push(" <head>"), c.push("  <title> " + b + "</title>"), c.push("<style>"), c.push("body{background:rgb(204,204,204);}"), c.push(""), c.push(" .container {background:white;display:block;margin:0.5cm auto;box-shadow:0 0 0.5cm rgb(0,0,0,0.5)}"), c.push(" .A4_PORTRAIT {width:210mm;min-height:297mm;height:auto;}"), c.push(" .A4_LANDSCAPE {width:297mm;min-height:210mm;height:auto;}"), c.push(" .A3_PORTRAIT {width:297mm;min-height:420mm;height:auto;}"), c.push(" .A3_LANDSCAPE {width:420mm;min-height:297mm;height:auto;}"), c.push(" .B4_PORTRAIT {width:257mm;min-height:364mm;height:auto;}"), c.push(" .B4_LANDSCAPE {width:364mm;min-height:257mm;height:auto;}"), c.push(" .LETTER_PORTRAIT {width:21.59cm;min-height:27.94cm;height:auto;}"), c.push(" .LETTER_LANDSCAPE {width:27.94cm;min-height:21.59cm;height:auto;}"), c.push(" .LEGAL_PORTRAIT {width:21.59cm;min-height:35.56cm;height:auto;}"), c.push(" .LEGAL_LANDSCAPE {width:35.56cm;min-height:21.59cm;height:auto;}"), c.push(" .title {padding:10px 20px;font-size:20px;font-weight:bold;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;} "), c.push(" .title2 {padding-left:10px;margin-top:40px;font-size:12px;font-weight:bold;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;border-left:5px solid #ddd;background-color:#f1f1f1;line-height:30px;}"), c.push(" .header {padding-left:20px;padding-right:20px;padding-bottom:20px;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;font-size:10px;}"), c.push(" .header_tb {width:100%;border-spacing:0;border-collapse:collapse;;}"), c.push(" .header_tb th {display:table-cell;padding:8px;line-height:1.42857;white-space:norwap;text-align:left;border:1px solid #ddd;background-color:#ececec;}"), c.push(" .header_tb td {display:table-cell;padding:8px 50px 8px 8px;line-height:1.42857;white-space:norwap;border:1px solid #ddd;background-color:#ececec;}"), c.push(" .list {padding-left:20px;padding-right:20px;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;font-size:10px;}"), c.push(" .table {display:table;border-spacing:0;border-collapse:collapse;width:100%;max-width:100%;}"), c.push(" .table > thead > tr > th {display:table-cell;border-bottom:2px solid #8e8e8e;padding:8px;line-height:1.42857;white-space:norwap;text-align:left;}"), c.push(" .table tr {display:table-row;vertical-align:inherit;border-color:inherit;}"), c.push(" .table > tbody > tr > td {display:table-cell;border-bottom:1px solid #ddd;padding:8px;line-height:1.42857;white-space:norwap;}"), c.push(" .table tbody {display:table-row-group;vertical-align:middle;border-color:inherit;}"), c.push(" .table > tfoot > tr > td {display:table-cell;border-bottom:1px solid #ddd;padding:8px;line-height:1.42857;white-space:norwap;background-color:#f9f9f9;font-weight:bold;}"), c.push(" .table tfoot {display:table-row-group;vertical-align:middle;border-color:inherit;}"), c.push(" .btn_print {position:absolute;right:20px;top:30px;height:20px;font-size:12px;font-family:Verdana, Geneva, sans-serif;cursor:pointer;}"), c.push(""), c.push("@media print {"), c.push("body{background:white;}"), c.push(" .container {background:white;display:block;margin:0;}"), c.push(" .A4_PORTRAIT {width:100%;height:auto;}"), c.push(" .A4_LANDSCAPE {width:100%;height:auto;}"), c.push(" .A3_PORTRAIT {width:100%;height:auto;}"), c.push(" .A3_LANDSCAPE {width:100%;height:auto;}"), c.push(" .B4_PORTRAIT {width:100%;height:auto;}"), c.push(" .B4_LANDSCAPE {width:100%;height:auto;}"), c.push(" .LETTER_PORTRAIT {width:100%;height:auto;}"), c.push(" .LETTER_LANDSCAPE {width:100%;height:auto;}"), c.push(" .LEGAL_PORTRAIT {width:100%;height:auto;}"), c.push(" .LEGAL_LANDSCAPE {width:100%;height:auto;}"), c.push(" .title {page-break-after:avoid;padding:0px 0px 20px 0px;font-size:18px;font-weight:bold;font-family:Verdana, Geneva, sans-serif;color:#000000;}   "), c.push(" .title2 {page-break-after:avoid;padding-left:10px;margin-top:40px;font-size:12px;font-weight:bold;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;border-left:5px solid #ddd;background-color:#f1f1f1;line-height:30px;}"), c.push(" .header {page-break-after:avoid;padding-left:0px;padding-right:0px;padding-bottom:20px;font-family:Verdana, Geneva, sans-serif;color:#4a4a4a;font-size:10px;}"), c.push(" .header_tb {width:100%;border-spacing:0;border-collapse:collapse;;}"), c.push(" .header_tb th {display:table-cell;padding:8px;line-height:1.42857;white-space:norwap;text-align:left;border:1px solid #ddd;background-color:#ececec;}"), c.push(" .header_tb td {display:table-cell;padding:8px 50px 8px 8px;line-height:1.42857;white-space:norwap;border:1px solid #ddd;background-color:#ececec;}"), c.push(" .list {padding-left:0px;padding-right:0px;font-family:Verdana, Geneva, sans-serif;color:#000000;font-size:9px;}"), c.push(" .table {display:table;border-spacing:0;border-collapse:collapse;width:100%;max-width:100%;}"), c.push(" .table > thead {page-break-before:always;}"), c.push(" .table > thead > tr > th {display:table-cell;border-bottom:2px solid #8e8e8e;padding:8px;line-height:1.42857;white-space:norwap;text-align:left;}"), c.push(" .table tr {display:table-row;vertical-align:inherit;border-color:inherit;}"), c.push(" .table > tbody > tr > td {display:table-cell;border-bottom:1px solid #ddd;padding:8px;line-height:1.42857;white-space:norwap;}"), c.push(" .table tbody {display:table-row-group;vertical-align:middle;border-color:inherit;}"), c.push(" .table > tfoot > tr > td {display:table-cell;border-bottom:1px solid #ddd;padding:8px;line-height:1.42857;white-space:norwap;background-color:#f9f9f9;font-weight:bold;}"), c.push(" .table tfoot {display:table-row-group;vertical-align:middle;border-color:inherit;}"), c.push(" .btn_print {display:none;}"), c.push("}"), c.push(".font-wei{ font-weight: bold; }"), c.push(".td_basic_center{ font-family: Verdana, Geneva, sans-serif; background-color: #EEEEE; font-size: 10px; text-align:center; color: #676a6c; overflow-x: hidden; white-space:nowrap; }"), c.push(".td_basic_right{ font-family: Verdana, Geneva, sans-serif; background-color: #EEEEE; font-size: 10px; text-align:right; color: #676a6c; overflow-x: hidden; white-space:nowrap; }"), c.push(".total { background-color: rgba(253, 255, 209, 1) }"), c.push(""), c.push("</style>"), c.push("<script>"), c.push("function changePageSize(){"), c.push('   var size = document.getElementById("size").value;'), c.push('   var orientation = document.getElementById("landscape").checked?"LANDSCAPE":"PORTRAIT";'), c.push('   document.getElementById("container").className = "container " + (size+"_"+orientation);'), c.push("}"), c.push("</script>"), c.push("</head>"), c.push("<body>"), c.push('<div class="btn_print">'), c.push('<div style="margin-bottom:10px;"><select id="size" onchange="changePageSize();"><option value="LETTER">Letter</option><option value="LEGAL">Legal</option><option value="A4">A4</option><option value="A3">A3</option><option value="B4">B4</option></select></div>'), c.push('<div style="margin-bottom:10px;"><input type="radio" name="orientation" id="landscape" value="LANDSCAPE" onclick="changePageSize();" checked><label for="landscape">Landscape</label><input type="radio" name="orientation" id="portrait" value="PORTRAIT" onclick="changePageSize();"><label for="portrait">Portrait</label></div>'), c.push('<div><input type="button" value="Print" onclick="javascript:alert(\'Before printing,You need to set up doucment size and orientation.\');window.print();"></div>'), c.push("</div>"), c.push('<div id="container" class="container LETTER_LANDSCAPE">'), c.push(a), c.push(" </div>"), c.push(" </body>"), c.push("</html>");
        var d = window.open();
        d.opener || (d.opener = self), setTimeout(function() {
            var a = d.document;
            a.write(c.join("")), a.close()
        }, 200)
    },
    getFormatValue: function(a, b) {
        if ("" === a) return a;
        if (!b) return a;
        if (b.indexOf("#") > -1) {
            var c = ",",
                d = 0,
                e = "."; - 1 == b.indexOf(".") ? c = "," : b.indexOf(",") < b.indexOf(".") ? (c = ",", e = ".", d = b.length - b.indexOf(".") - 1) : (c = ".", e = ",", d = b.length - b.indexOf(",") - 1);
            var f = "",
                g = "";
            v = String(parseFloat(a).toFixed(d)), v.indexOf("-") > -1 && (f = "-", v = v.substring(1)), d > 0 && (g = v.substring(v.indexOf(e)), v = v.substring(0, v.indexOf(e)));
            var h = /\D/g;
            v = v.replace(h, "");
            for (var i = /(\d+)(\d{3})/; i.test(v);) v = v.replace(i, "$1" + c + "$2");
            return f + v + g
        }
        if (b.indexOf("yy") > -1) {
            if (a) {
                var h = /\D/g;
                if (a = a.replace(h, ""), "00000000" == a) return "";
                var j = b;
                return j = j.replace("yyyy", a.substring(0, 4)), j = j.replace("MM", a.substring(4, 6)), j = j.replace("dd", a.substring(6))
            }
            return a
        }
        return b.indexOf("%") > -1 ? a ? String(parseFloat(a).toFixed(2)) + "%" : a : void 0
    },
    getFormatStatus: function(f){
        if(f === ""){
            return "";
        }else{
            if(typeof f !== 'undefined' && f !== null){
                if (f.indexOf("#") > -1) {
                    return "C";
                }else if (f.indexOf("yy") > -1 || f.indexOf("yyyy") > -1) {
                    return "Y";
                }
            }else{
                return "";
            }
        }
    }
};