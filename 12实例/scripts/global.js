/*
* @Author: Marte
* @Date:   2017-07-31 15:57:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-06 14:02:40
*/

'use strict';
function addLoadEvent(func) {
    var oldload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func();
    }else{
        window.onload = function(){
            oldload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    }else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

//string.indexOf(substring)用于在字符串中寻找子字符串的位置，返回子字符串第一次出现的位置，如果没有匹配到，则返回-1
//window.location.href取得当前页面的URL
//toLowerCase()将文本转换为小写
function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for (var i = 0;i<links.length;i++) {
        linkurl = links[i].getAttribute('href');
        if (window.location.href.indexOf(linkurl) != -1 ) {
            links[i].className = "here";
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    };
    if (!elem.style.left) {
        elem.style.left = "0px";
    };
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y ) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/10);
        xpos += dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x)/10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos)/10);
        ypos += dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y)/10);
        ypos -= dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

function prepareSlideshow(){
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("intro")) return false;
    var intro = document.getElementById("intro");
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var frame = document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("id","frame");
    slideshow.appendChild(frame);
    var preview = document.createElement("img");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
    var links = document.getElementsByTagName("a");
    var destination;
    for(var i = 0;i<links.length;i++) {
        links[i].onmouseover = function(){
            destination = this.getAttribute("href");
            if (destination.indexOf("index.html") != -1) {
                moveElement("preview",0,0,5);
            }
            if (destination.indexOf("About.html") != -1 ) {
                moveElement("preview",-150,0,5);
            }
            if (destination.indexOf("Photos.html") != -1 ) {
                moveElement("preview",-300,0,5);
            }
            if (destination.indexOf("Live.html") != -1 ) {
                moveElement("preview",-450,0,5);
            }
            if (destination.indexOf("Contact.html") != -1 ) {
                moveElement("preview",-600,0,5);
            }
        }
    }
}
//About.html

//根据指定的ID显示相应的部分，同时隐藏别的部分

function showSection(id) {
    var sections = document.getElementsByTagName("section");
    for(var i = 0;i<sections.length;i++) {
        if (sections[i].getAttribute("id") != id) {
            sections[i].style.display = "none";
        }else {
            sections[i].style.display = "block";
        }
    }
}

//array = string.split(character) 根据分隔符把一个字符分成两或多部分的一种便捷方式
//对于常见问题页面可利用，单击时仅显示对应内容，不显示别的内容

function prepareInternalnav() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var articles = document.getElementsByTagName("article");
    if (articles.length == 0) return false;
    var navs = articles[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        var sectionId = links[i].getAttribute("href").split("#")[1];
//确保确实存在相应的ID元素
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = "none";
        links[i].destination = sectionId;
        links[i].onclick = function() {
            showSection(this.destination);
            return false;
        }
    }
}

//Photos

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true;
    var placeholder = document.getElementById("placeholder");
    var source = whichpic.getAttribute("href");
    placeholder.setAttribute("src",source);
    if (!document.getElementById("description")) return false;
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    if (!text) text = " ";
    if (description.firstChild.nodeType==3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

function preparePlaceholder(){
    if (!document.getElementById) return false;
    if (!document.createTextNode) return false;
    if (!document.createElement) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}

function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for(var j= 0;i<rows.length;i++) {
            if (odd == true) {
                addClass(rows[i],"odd");
                odd= false;
            }else{
                odd=true;
            }
        }
    }
}

function highlighRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i=0;i<rows.length;i++) {
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function() {
            addClass(this,"highlight");
        }
        rows[i].onmouseout = function() {
            this.className = this.oldClassName;
        }
    }
}

function displayAbbreviations(){
    if (!document.getElementsByTagName||!document.getElementById||!document.createElement||!document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length<1) return false;
    var defs = new Array();
    for (var i= 0;i<abbreviations.length;i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length == 0) continue;
        var key = current_abbr.lastChild.nodeValue;
        var definition = current_abbr.getAttribute("title");
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length<1) return false;
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    if (articles.length<1) return false;
    var container = articles[0];
    container.appendChild(header);
    container.appendChild(dlist);
}



//contact



function focusLabels(){
    if (!document.getElementsByTagName) return false;
    var labels = document.getElementsByTagName("label");
    for(var i=0;i<labels.length;i++) {
        if (labels[i].getAttribute("for")) continue;
        labels[i].onclick=function(){
            var id = this.getAttribute("for");
            if (!document.getElementById(id)) return false;
            var element =  document.getElementById(id);
            element.focus();
        }
    }
}

function resetFields(whichform){
    if (Modernizr.input.placeholder) return;
    for(var i = 0;i < whichform.elements.length;i++) {
        var element = whichform.elements[i];
        if (element.type == "submit") continue;
        var check = element.placeholder || element.getAttribute("placeholder");
        if (!check) continue;
        element.onfocus = function(){
            var text = this.placeholder || this.getAttribute("placeholder");
            if (this.value == text) {
                this.className=" ";
                this.value="";
            }
        }
        element.onblur = function(){
            if (this.value=="") {
                this.className="placeholder";
                this.value=this.placeholder || this.getAttribute("placeholder");;
            }
        }
        element.onblur();
    }
}

function isFillef(field) {
    if (field.value.replace(" ","").length == 0) return false;
    var placeholder = field.placeholder||field.getAttribute("placeholder");
    return (field.value != placeholder);
}

function isEmail(field) {
    return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

function validateForm(whichform){
    for(var i=0;i<whichform.elements.length;i++) {
        var element = whichform.elements[i];
        if (element.required == "required") {
            if (!isFilled(element)) {
                alert("Please fill in the "+element.name+" field.");
                return false;
            }
            if (!isEmail(element)) {
                alert("The "+element.name+" field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}

s
//Ajax

function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function () {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {}
      return false;
  }
  return new XMLHttpRequest();
}

function displayAjaxLoading(element) {
    while (element.hasChildNodes()){
        element.removeChild(element.lastChild);
    }
    var content = document.createElement("img");
    content.setAttribute("src","images/loading.gif");
    content.setAttribute("alt","Loading......");
    element.appendChild(content);
}

function submitFormWithAjax(whichform,thetarget) {
    var request = getHTTPObject();
    if (!request) {
        return false;
    }
    displayAjaxLoading(thetarget);
    var dataParts = [];
    var element;
    for(var i = 0;i<whichform.elements.length;i++) {
        element = whichform.elements[i];
        dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
    }
    var data = dataParts.join('&');
    request.open('POST',whichform.getAttribute("action"),true);
    request.setRequsetHeader("Content-type","application/x-www-form-urlencoded");
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status ==200 || request.status == 0) {
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if (matches.length > 0) {
                    thetarget.interHTML = matches[1];
                }else {
                    thetarget.interHTML = '<p>Oops,there was an error.Sorry</p>'
                }
            }
            else {
                thetarget.interHTML = '<p>' + request.statusText +'</p>'
            }
        }
    };
    request.send(data);
    return true;
}

function prepareForms(){
    for(var i=0;i<document.forms.length;i++) {
        var thisform = document.forms[i];
        resetFields(thisform);
        thisform.onsubmit = function() {
        if (!validateForm(this)) return false;
        var article = documnet.getElementsByTagName("article")[0];
        if (submitFormWithAjax(this,article)) return false;
        return true;
        }
    }
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
addLoadEvent(stripeTables);
addLoadEvent(highlighRows);
addLoadEvent(displayAbbreviations);
addLoadEvent(focusLabels);
addLoadEvent(prepareForms);