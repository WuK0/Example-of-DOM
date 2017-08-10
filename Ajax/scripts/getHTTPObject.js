/*
* @Author: Marte
* @Date:   2017-07-13 17:57:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-13 20:38:33
*/

'use strict';
function getHTTPObject() {
    if (typeof XMLHttpRequest == 'undefined') {
        XMLHttpRequest = function(){
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0")}
                catch (e){}
            try {return new ActiveXObject("Msxml2.XMLHTTP.3.0")}
                catch (e){}
            try {return new ActiveXObject("Msxml2.XMLHTTP")}
                catch (e){}
            return false;
        }
    }
    return new XMLHttpRequest();
}