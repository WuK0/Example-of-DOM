/*
* @Author: Marte
* @Date:   2017-07-28 14:57:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-28 15:04:34
*/

'use strict';
function highlightRows(){
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i = 0;i<rows.length;i++) {
        rows[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function(){
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);