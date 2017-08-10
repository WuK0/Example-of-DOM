/*
* @Author: Marte
* @Date:   2017-07-28 17:06:08
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-28 17:41:14
*/

'use strict';
function addClass(element,value){
    if (!element.className) {
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}
addLoadEvent(addClass);