$(document).ready(function() {
    setTimeout(function() {
        $(".logo > div").addClass("flash");
    }, 4000);
    setTimeout(function() {
        $(".logo > div").removeClass("flash");
    }, 4800);
});

/******************************
 * Hexagons using Snap.svg
 * Developer: Milan Miljković
 * Github: https://github.com/designstorming
 ******************************
 */
const LIGHT_COLOR = "#44C9ED";
const DARK_COLOR = "#277AC5";
const DARKER_COLOR = "#290A63";

var LIGHT_PATHS = [
    "#pathSVG1-light",
    "#pathSVG2-light",
    "#pathSVG3-light",
    "#pathSVG4-light",
    "#pathSVG5-light"
];

var DARK_PATHS = [
    "#pathSVG1-dark",
    "#pathSVG2-dark",
    "#pathSVG3-dark",
    "#pathSVG4-dark",
    "#pathSVG5-dark"
];

const circleStyle = {
    fill: "transparent",
    stroke: DARK_COLOR,
    strokeWidth: 1
};

// path Points define the path from the which point of which hexegon
const pathPoints1 = [
    [0, 11, 4], // [x, y, which point]
    [0, 9, 7],
    [0, 9, 2],
    [1, 10, 3],
    [1, 9, 4]
];

const pathPoints2 = [
    [0, 6, 4],
    [0, 4, 7],
    [0, 4, 2],
    [0, 3, 1],
    [0, 3, 2],
    [1, 2, 7],
    [1, 3, 4]
];

const pathPoints3 = [
    [4, 10, 4],
    [4, 8, 1],
    [4, 8, 2],
    [4, 7, 5],
    [4, 7, 4],
    [4, 6, 3],
    [4, 5, 4],
    [4, 5, 3],
    [5, 4, 4]
];

const pathPoints4 = [
    [2, 7, 4],
    [2, 5, 1],
    [2, 5, 2],
    [3, 4, 7],
    [3, 4, 4],
    [3, 2, 7],
    [3, 3, 4]
];

const pathPoints5 = [
    [2, 11, 4],
    [2, 11, 3],
    [2, 9, 2],
    [2, 9, 3],
    [3, 8, 4],
    [3, 8, 3],
    [3, 7, 4]
];

// store all path Points
const AllPoints = [
    pathPoints1,
    pathPoints2,
    pathPoints3,
    pathPoints4,
    pathPoints5
];

const TimeStore = [
    [140, 5256, 900], // length, interval, duration
    [180, 9209, 1200],
    [230, 13834, 800],
    [190, 8012, 762],
    [250, 6032, 500]
    // [150, 2000, 1000],
    // [150, 2000, 1000],
    // [150, 2000, 1000],
    // [150, 2000, 1000],
    // [150, 2000, 1000]
];

var calculateHex = function(center, radius) {
    var x = center[0],
        y = center[1];
    // some 3rd grade math :)
    var h = (radius * Math.sqrt(3)) / 2;

    // All corner points of the hexagon
    return [
        [x - radius / 2, y + h], // left down  [0]
        [x + radius / 2, y + h], // right down [1]
        [x + radius, y], // right      [2]
        [x + radius / 2, y - h], // right top  [3]
        [x - radius / 2, y - h], // left top   [4]
        [x - radius, y], // left       [5]
        [x - radius / 2, y + h], // left down  [6]
        [x, y], // center     [7]
        [x - radius / 2, y - h], // left top   [8]
        [x, y], // center     [9]
        [x + radius, y] // right      [10]
    ];
};

// Instantiate new Snap.svg
var paper = Snap.select("#svg");
var allCordsMap = {};

$(document).ready(function() {
    // sudo make me hexagons
    buildHex([10, 20], 80);
    drawPath();
    setAnimation();
    setSinglePathAni(getRandomInt(4, 0));
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// draw the path using the const pathCords1
function drawPath() {
    // draw the path
    for (var j = 0; j < AllPoints.length; j++) {
        var pathString = "M";
        for (var i = 0; i < AllPoints[j].length; i++) {
            var x =
                allCordsMap[
                    "h" + AllPoints[j][i][0] + "-v" + AllPoints[j][i][1]
                ][AllPoints[j][i][2]];
            var y =
                allCordsMap[
                    "h" + AllPoints[j][i][0] + "-v" + AllPoints[j][i][1]
                ][AllPoints[j][i][2]];
            pathString = pathString + x + "," + y;
            if (i !== AllPoints[j].length - 1) {
                pathString += "L";
            } else {
                Snap.select(LIGHT_PATHS[j])
                    .path(pathString)
                    .attr("stroke", LIGHT_COLOR)
                    .attr("stroke-width", 1)
                    .attr("fill", "none");
                Snap.select(DARK_PATHS[j])
                    .path(pathString)
                    .attr("stroke", DARKER_COLOR)
                    .attr("stroke-width", 1)
                    .attr("fill", "none");
                console.log("draw path");
            }
        }
    }
}

function setSinglePathAni(idx) {
    // var duration = getRandomInt(800, 500)
    var duration = TimeStore[idx][2];
    var startPoint = AllPoints[idx][0];
    var endPoint = AllPoints[idx][AllPoints[idx].length - 1];
    var startID =
        "#c" + startPoint[0] + "-" + startPoint[1] + "no" + startPoint[2];
    var endID = "#c" + endPoint[0] + "-" + endPoint[1] + "no" + endPoint[2];
    var lSvg = new Walkway({
        selector: LIGHT_PATHS[idx],
        duration: duration,
        easing: "linear"
    });

    var dSvg = new Walkway({
        selector: DARK_PATHS[idx],
        duration: duration,
        easing: "linear"
    });

    lightenCircle(startID);
    lSvg.draw(function() {
        lightenCircle(endID);
    });

    setTimeout(function() {
        darkenCircle(startID);
        dSvg.draw(function() {
            setTimeout(function() {
                darkenCircle(endID);
            }, 50);
        });
    }, TimeStore[idx][0]);
}

function lightenCircle(id) {
    $(id).attr("stroke", LIGHT_COLOR);
}

function darkenCircle(id) {
    $(id).attr("stroke", DARK_COLOR);
}

function setAnimation() {
    LIGHT_PATHS.map(function(id, idx) {
        setInterval(function() {
            setSinglePathAni(idx);
        }, TimeStore[idx][1]);
    });
}

/* Draw single hexagon and apply style if needed
 * @coord - array, `x` and `y` point
 * @radius - object, style your hexagon
 */
var drawHex = function(coord, style, hori, vertical) {
    style = style || {};
    style.fill = style.fill || "transparent";
    style.stroke = style.stroke || DARK_COLOR;
    style.strokeWidth = style.strokeWidth || 1;
    paper.polyline(coord).attr(style);
};

var drawCircle = function(coord, x, y) {
    paper
        .circle(coord[0][0], coord[0][1], 4)
        .attr(circleStyle)
        .attr("id", "c" + x + "-" + y + "no0"); // leftDown
    paper
        .circle(coord[2][0], coord[2][1], 4)
        .attr(circleStyle)
        .attr("id", "c" + x + "-" + y + "no2"); // right
    paper
        .circle(coord[4][0], coord[4][1], 4)
        .attr(circleStyle)
        .attr("id", "c" + x + "-" + y + "no4"); // leftTop
};

/*
 * Creates a bunch of predefined points for a grid
 * @size - horizontal (times) vertical
 * @radius - radius of a single virtual wrapping circle
 */
var buildHex = function(size, radius) {
    // Horizontal array
    for (var i = 0; i < size[1]; i++) {
        // Offset every second row
        var offset = i % 2 == 0 ? 0 : radius * 1.5;

        // Vertical array
        for (var j = 0; j < size[0]; j++) {
            // Calculate single object
            var hex = calculateHex(
                [
                    offset + j * radius * 3 + radius,
                    i * ((radius * Math.sqrt(3)) / 2) + radius
                ],
                radius
            );
            allCordsMap["h" + j + "-v" + i] = hex;
            // Let's be artistic and cross our fingers that this work :)
            drawHex(hex, {}, j, i);
            drawCircle(hex, j, i);
        }
    }
};


$(document).ready(function () {

    if ($(document).width() <= 800) {
        $('.s-media').addClass('sm-collapse');
        $('#sm-open').delay(300).css('left', '0');

    }
    
    // Social Media Collapse
    $('#sm-close').click(function () {
        $('.s-media').addClass('sm-collapse');
        $('#sm-open').delay(300).css('left', '0');
    });

    $('#sm-open').click(function () {
        $('#sm-open').css('left', '-60px');
        $('.s-media').removeClass('sm-collapse');

    });

    // END Click Function
});// END DOCUMENT.Ready