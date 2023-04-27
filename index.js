
let countL = 0;
let countV = 0;

// Funcion agregar gol local
function golLocal(){ 
    countL ++;
    document.getElementById('scoreLocal').textContent = countL;
    console.log(countL);
   
}
// Funcion agregar gol visitante
function golVisit(){ 
    countV ++;
    document.getElementById('scoreVisit').textContent = countV;
    console.log(countV); 
}

// Funcion anular gol local
function nullLocal(){ 
    countL --;
    document.getElementById('scoreLocal').textContent = countL;
    console.log(countL); 
}

// Funcion anular gol visitante
function nullVisit(){ 
    countV --;
    document.getElementById('scoreVisit').textContent = countV;
    console.log(countV); 
}

// funcion para el periodo de juego
function pt(){
    document.getElementById('pt').textContent = 'PT';
}
function st(){
    document.getElementById('pt').textContent = 'ST';
}


