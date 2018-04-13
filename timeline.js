/*
Pat Kosakanchit
4/15/17
CSE154
TA: Yen Lee
Creative Project #7 : Thailand Political Timeline
This Javascript file is working with timeline.html to govern its behavior.
*/

(function() {
    'use strict';

    var $ = function(id) { return document.getElementById(id); };

    window.onload = function() {
        $("currentbutton").onclick = alert2018;
    };
    
    function alert2018() {
        alert("Sorry, but when is the election again?");
    }

})();
