//Import các thư viên cài bằng npm
import $ from "jquery";
import "what-input";
import { fabric } from "fabric";

window.jQuery = $;
require("foundation-sites");

//Import các thư viên bằng file .js, , min.js
// import './lib/foundation-explicit-pieces';

$(document).foundation();


var canvas = new fabric.Canvas("c");

canvas.setBackgroundImage(
  "http://lorempixel.com/400/400/fashion",
  canvas.renderAll.bind(canvas)
);

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
