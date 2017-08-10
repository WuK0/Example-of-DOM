/*
* @Author: Marte
* @Date:   2017-07-13 17:56:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-13 20:26:52
*/

'use strict';

function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func();
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}