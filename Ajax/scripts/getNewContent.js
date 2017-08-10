/*
* @Author: Marte
* @Date:   2017-07-13 17:58:01
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-13 20:53:26
*/

'use strict';
function getNewContent(){
    var request = getHTTPObject();
    if (request) {
        request.open("GET","example.txt",true);
        request.onreadystatechange = function(){
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para)
            };
        }
        request.send(null);
    }else{
        alert("Sorry, your browser does not support XMLHttpRequest");
    };
}


addLoadEvent(getNewContent);