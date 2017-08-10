/*
* @Author: Marte
* @Date:   2017-07-29 17:39:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-29 17:45:33
*/

'use strict';
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}