/*
* @Author: Marte
* @Date:   2017-07-16 16:08:50
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-28 12:13:41
*/

'use strict';
function displayAccesskeys(){

    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

//取得所有链接
    var links = document.getElementsByTagName("a");
//创建数组保存访问键
    var alinks = new Array();
//历遍链接
    for(var i=0;i<links.length;i++) {
        var current_link = links[i];
//如果没有accesskey属性，结束本次循环
        if (!links[i].getAttribute("accesskey")) continue;
//取得accesskey的值
        var key = current_link.getAttribute("accesskey");
//取得链接文本
        var text = current_link.lastChild.nodeValue;
//添加到数组
        alinks[key] = text;
    }
//创建列表
    var list = document.createElement("ul");
//历遍访问键
    for(key in alinks){
        var text = alinks[key];
//创建字符串
        var str = key + ":" + text;
//创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
//添加列表项
        item.appendChild(item_text);
        list.appendChild(item);
}

    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}



