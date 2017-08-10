/*
* @Author: Marte
* @Date:   2017-07-28 12:02:06
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-28 17:47:35
*/

'use strict';
function stripeTables(){
    if (!document.getElementsByTagName) return false;
    var tables= document.getElementsByTagName("table");
    var odd,rows;
    for(var i = 0;i<tables.length;i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++) {
            if(odd == true){
                addClass(rows[j],"odd");
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}
addLoadEvent(stripeTables);