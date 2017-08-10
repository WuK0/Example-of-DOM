/*
* @Author: Marte
* @Date:   2017-07-28 10:35:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-28 17:37:36
*/

'use strict';
function styleHeaderSibling(){
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for(var i = 0;i<headers.length;i++){
        elem = getNextElemt(headers[i].nextSibling);
        addClass(elem,"intro");
    }
}
//抽象化写法
function styleElementSibling(tag,theclass){
    if (!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tag);
    var elem;
    for(var i = 0;i<elems.length;i++){
        elem = getNextElemt(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}
//寻找下一个元素节点
function getNextElemt(node){
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElemt(node.nextSibling);
    }
    return null;
}
addLoadEvent(function(){
    styleElementSibling("h1","intro");
});