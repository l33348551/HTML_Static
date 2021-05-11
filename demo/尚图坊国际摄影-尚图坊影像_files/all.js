document.write("<script type=\"text/javascript\" src=\"/inClude/layui/layui.all.js\"><\/script>"); 
document.write("<link rel=\"stylesheet\" href=\"/inClude/layui/css/layui.css\" />"); 

; !function () {
    //无需再执行layui.use()方法加载模块，直接使用即可
    var form = layui.form
        , layer = layui.layer;
    //…
}();

//全局变量
var url = window.location.href;
var title = document.title;

//分页跳转
function gotoPage(urlStr) {
    //这里还需要实现一些对于输入页码的安全性验证。比如不能为空，必须是数字这些。
    var page = document.getElementById("PageInput").value;
    window.location.href = urlStr + "&page=" + page;
}

//打印
function Print() {
    bdhtml = window.document.body.innerHTML;
    sprnstr = "<!--startprint-->";
    eprnstr = "<!--endprint-->";
    prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17);
    prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
    window.document.body.innerHTML = prnhtml;
    window.print();
}

//多选框全选
function CheckAll(e, itemname) {
    var aa = document.getElementsByName(itemname);
    if (aa == undefined) return;
    for (var i = 0; i < aa.length; i++) aa[i].checked = e.checked;
}