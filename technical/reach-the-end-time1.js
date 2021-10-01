class estado {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
    }
}

const Maximum = 5; //Numero maximo de movimientos 
const mapa = new Array(
    "...",
    "##.",
    "#.."); //mapa laberinto

const mapaF = mapa.length;
const mapaC = mapa[0].length;
var visitados = new Array(mapaF);
for (i = 0; i < mapaF; i++) {
    visitados[i] = new Array(mapaC);
}

let cola = new Array();
var movx = [1, -1, 0, 0];
var movy = [0, 0, 1, -1];
var distanciaMin = busqueda(mapaF, mapaC, 0, 0);

if (Maximum >= distanciaMin && distanciaMin != -1) {
    console.log("Yes");
} else {
    console.log("No");
}

function busqueda(filas, columnas, x, y) {
    inical = new estado(x, y, 0);
    cola.push(inical);
    while (cola.length != 0) {
        var estadoActual = cola.shift();
        if (estadoActual.x == mapaF - 1 && estadoActual.y == mapaC - 1) {
            return estadoActual.d;
        }
        visitados[estadoActual.x][estadoActual.y] = true;
        for (let i = 0; i < 4; i++) {
            var nuevoX = estadoActual.x + movx[i];
            var nuevoY = estadoActual.y + movy[i];
            if (nuevoX >= 0 && nuevoX < mapaF && nuevoY >= 0 && nuevoY < mapaC) {
                if (!visitados[nuevoX][nuevoY] && mapa[nuevoX][nuevoY] != '#') {
                    var estadoNuevo = new estado(nuevoX, nuevoY, estadoActual.d + 1);
                    cola.push(estadoNuevo);
                }
            }
        }
    }
    return -1;
}