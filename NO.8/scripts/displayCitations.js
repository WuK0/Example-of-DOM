function displayCitations(){

    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

    //取得所有引用
    var quotes = document.getElementsByTagName("blockquote");

    //历遍引用
    for(var i=0;i<quotes.length;i++){
    //如果没有cite属性，结束循环
        if (!quotes[i].getAttribute("cite")) continue;
    //保存cite属性
        var url = quotes[i].getAttribute("cite");
    //取得引用中所有的元素节点
        var quotesElement = quotes[i].getElementsByTagName('*');
    //如果没有元素节点，结束本次循环
        if (quotesElement.length<1) continue;
    //最后一个元素节点
        var elem = quotesElement[quotesElement.length-1];
    //创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
    //将标记添加到引用的最后一个元素节点
        elem.appendChild(superscript);
    }
}
