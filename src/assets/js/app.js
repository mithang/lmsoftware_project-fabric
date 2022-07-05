import $ from "jquery";
import "what-input";
import { fabric } from "fabric";

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();
var canvas = new fabric.Canvas("c");

// canvas.setBackgroundImage(
//   "http://lorempixel.com/400/400/fashion",
//   canvas.renderAll.bind(canvas)
// );

$("#text").on("click", function (e) {
  text = new fabric.Text($("#text").val(), { left: 100, top: 100 });
  canvas.add(text);
});
$("#rect").on("click", function (e) {
  rect = new fabric.Rect({
    left: 40,
    top: 40,
    width: 50,
    height: 50,
    fill: "transparent",
    stroke: "green",
    strokeWidth: 5,
  });
  canvas.add(rect);
});

$("#circ").on("click", function (e) {
  rect = new fabric.Circle({
    left: 40,
    top: 40,
    radius: 50,
    fill: "transparent",
    stroke: "green",
    strokeWidth: 5,
  });
  canvas.add(rect);
});

$("#save").on("click", function (e) {
  $(".save").html(canvas.toSVG());
});
