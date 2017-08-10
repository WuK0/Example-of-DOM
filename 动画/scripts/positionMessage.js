/*
* @Author: WuK0
* @Date:   2017-07-28 20:58:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-29 11:08:35
*/

'use strict';
/*function moveMessage(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 200 && ypos == 100) {
        return true;
    }
    if (xpos < 200) {
        xpos++;
    }
    if (xpos > 200) {
        xpos--
    }
    if (ypos < 100) {
        ypos++;
    }
    if (ypos > 200) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()",10);
}

function positionMessage(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.top = "100px";
    elem.style.left = "50px";
    movement = setTimeout("moveMessage()",5000);
}
*/


function positionMessage2(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.top = "100px";
    elem.style.left = "50px";
    moveElement("message",125,25,20);
    if (!document.getElementById("message2")) return false;
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.top = "50px";
    elem.style.left = "50px";
    moveElement("message2",125,125,20);
}
addLoadEvent(positionMessage2);