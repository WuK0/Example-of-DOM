window.onload = function(){
    var para = document.createElement("p");
    var txt = document.createTextNode("吃饭啦");
    para.appendChild(txt);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}