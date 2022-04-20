var Serie = /** @class */ (function () {
    function Serie(numero, nombre, productora, temportadas, descripcion, linkpagina, linkimagen) {
        this.numero = numero;
        this.nombre = nombre;
        this.productora = productora;
        this.temportadas = temportadas;
        this.descripcion = descripcion;
        this.linkpagina = linkpagina;
        this.linkimagen = linkimagen;
    }
    Serie.prototype.darPromedioTemporadas = function (seriess) {
        var suma = 0;
        for (var i = 0; i < seriess.length; i++) {
            suma += seriess[i].temportadas;
        }
        return (suma / seriess.length);
    };
    return Serie;
}());
export { Serie };
