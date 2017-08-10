/*
* @Author: Marte
* @Date:   2017-07-28 10:34:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-28 10:43:25
*/

'use strict';
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}