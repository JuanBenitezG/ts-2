import {Serie} from "./serie.js";
import {series} from "./data.js";



let tablaserie:HTMLElement=document.getElementById("tablaseries")!;

let cart:HTMLElement=document.getElementById("cartica")!;

mostrartablaseries(series);

function mostrartablaseries(listaseries: Serie[]):void{

    let tbodyseries=document.createElement("tbody");
    for(let se of listaseries){
        let trseries=document.createElement("tr");
        trseries.innerHTML=`<td class="col"> ${se.numero}</td><td class="col"><a href=${se.linkpagina}> <pre class="cal"> ${se.nombre}</pre> </a></td><td class="col"> ${se.productora}</td><td class="col"> ${se.temportadas}</td></tr>`;
        tbodyseries.appendChild(trseries);
    }
    let trpromedio=document.createElement("tr");
    trpromedio.innerHTML=`<td colspan=2 id="prom"><pre>Seasons average: ${listaseries[0].darPromedioTemporadas(listaseries)}</pre></td>`
    tbodyseries.appendChild(trpromedio);

    tablaserie.appendChild(tbodyseries);
}
$(document).ready(function(){
    $("tr").click(function() {
        cart.firstElementChild?.remove();
        let sss: Serie[]=series;
	    let numero:number = <number> <unknown>$(this)[0].firstElementChild?.textContent;
        let ind:number=numero-1;


        let carbod=document.createElement("card-body");
        carbod.innerHTML=`<img src=${sss[ind].linkimagen} class="imagenes" /><h1>${sss[ind].nombre}</h1><p class="card-text">${sss[ind].descripcion}</p><a href=${sss[ind].linkpagina}>${sss[ind].linkpagina}</a>`;
        
        cart.appendChild(carbod);
        
    });
});


