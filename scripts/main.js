import { series } from "./data.js";
var tablaserie = document.getElementById("tablaseries");
var cart = document.getElementById("cartica");
mostrartablaseries(series);
function mostrartablaseries(listaseries) {
    var tbodyseries = document.createElement("tbody");
    for (var _i = 0, listaseries_1 = listaseries; _i < listaseries_1.length; _i++) {
        var se = listaseries_1[_i];
        var trseries = document.createElement("tr");
        trseries.innerHTML = "<td class=\"col\"> ".concat(se.numero, "</td><td class=\"col\"><a href=").concat(se.linkpagina, "> <pre class=\"cal\"> ").concat(se.nombre, "</pre> </a></td><td class=\"col\"> ").concat(se.productora, "</td><td class=\"col\"> ").concat(se.temportadas, "</td></tr>");
        tbodyseries.appendChild(trseries);
    }
    var trpromedio = document.createElement("tr");
    trpromedio.innerHTML = "<td colspan=2 id=\"prom\"><pre>Seasons average: ".concat(listaseries[0].darPromedioTemporadas(listaseries), "</pre></td>");
    tbodyseries.appendChild(trpromedio);
    tablaserie.appendChild(tbodyseries);
}
$(document).ready(function () {
    $("tr").click(function () {
        var _a, _b;
        (_a = cart.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
        var sss = series;
        var numero = (_b = $(this)[0].firstElementChild) === null || _b === void 0 ? void 0 : _b.textContent;
        var ind = numero - 1;
        var carbod = document.createElement("card-body");
        carbod.innerHTML = "<img src=".concat(sss[ind].linkimagen, " class=\"imagenes\" /><h1>").concat(sss[ind].nombre, "</h1><p class=\"card-text\">").concat(sss[ind].descripcion, "</p><a href=").concat(sss[ind].linkpagina, ">").concat(sss[ind].linkpagina, "</a>");
        cart.appendChild(carbod);
    });
});
