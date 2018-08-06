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
        loadContent("https://raw.githubusercontent.com/pathiratk/THPoliticalTimeline/new-timeline-design/data.json");
        $("currentbutton").onclick = alert2018;
    };

    function loadContent(file) {
        var jsonFile = new XMLHttpRequest();
        jsonFile.open("GET", file, true);
        jsonFile.onreadystatechange = function () {
            
            if (jsonFile.readyState == 4) {
                if (jsonFile.status == 200 || jsonFile.status == 0) {
                    printContent(jsonFile.responseText);
                }
            }
        }
        jsonFile.send();
    };

    function printContent(json) {
        var object = JSON.parse(json);
        var events = object.events;
        var prev = -1;
        for (var i = 0; i < events.length; i++) {

            var year = events[i].start_date.year
            
            // add year if this is the first event of the year
            if (year == prev) {
                var blocks = document.getElementsByClassName("year")
                var block = blocks[blocks.length - 1]
            } else {
                var year_heading = document.createElement("span");
                year_heading.classList.add("year-heading");
                year_heading.append(year);

                var block = document.createElement("div");
                block.setAttribute("class", "year");

                var list = document.createElement("div");
                list.classList.add("list");
            }

            // A block represents a year which comprises of year-heading and list
            // There are multiple events in a list
        
            var event = document.createElement("div");
            event.classList.add(events[i].group, "event");
            if (events[i].text.headline) {
                var h3 = document.createElement("h3");
                h3.innerHTML = events[i].text.headline;
                event.append(h3);
            }
            
            if (events[i].text.body) {
                var p = document.createElement("p");
                p.innerHTML = events[i].text.body;
                event.append(p);

                if (events[i].text.source) {
                    p.innerHTML += " - ";
                    var a = document.createElement("a");
                    a.setAttribute("href", events[i].text.source.url);
                    a.innerHTML = events[i].text.source.credit;
                    p.append(a);
                }
            }


            if (year == prev) {
                list.append(event);
                block.append(list);
            } else {
                block.append(year_heading);
                list.append(event);
                block.append(list);
                $("timeline").append(block);
            }

            prev = year;
        }

    }
    
    function alert2018() {
        alert("Another delay?");
    }

})();
