/*
* @Author: Marte
* @Date:   2017-07-15 23:22:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-16 16:10:14
*/

'use strict';
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func();
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);