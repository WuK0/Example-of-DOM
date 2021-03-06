/*
* @Author: Marte
* @Date:   2017-07-15 22:36:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-28 12:24:37
*/

'use strict';
function displayAbbreviations(){

    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
//取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");

    if (abbreviations.length<1) return false;

    var defs = new Array();
//历遍缩略词
    for (var i=0;i<abbreviations.length;i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length<1) continue;//一些浏览器不承认ABBR元素节点的地位
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
//创建动态列表
    var dlist = document.createElement("dl");
//历遍定义
    for (key in defs) {
        var definition = defs[key];
//创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
//创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
//添加描述和标题到列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length<1) return false;
//创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
//将标加到页面主体
    document.body.appendChild(header);
//将定义列表添加到页面主体
    document.body.appendChild(dlist);
}


addLoadEvent(displayAbbreviations);