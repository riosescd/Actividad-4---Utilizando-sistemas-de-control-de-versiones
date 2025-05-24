(function () {
    function parametros() {
        var actual = new Date()
        var año = actual.getFullYear()
        var mes = actual.getMonth()
        var dia = actual.getDate()
        var diasemana = actual.getDay()
        var horas = actual.getHours()
        var min = actual.getMinutes()
        var seg = actual.getSeconds()
        var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agost', 'Sept', 'Oct', 'Nov', 'Dic']
        var dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']


        if (seg < 10) {
            seg = '0' + seg
        }
        if (min < 10) {
            min = '0' + min
        }
        var hora = document.getElementById("hora")
        hora.value = horas + ':' + min + ':' + seg

        var fecha = document.getElementById("fecha")
        fecha.value = 'Hoy es ' + dias[diasemana] + ' ' + dia + ' de ' + meses[mes] + ' del ' + año


    }

    setInterval(parametros, 1000) /*repite segundos en hora*/





}())

// CODIDO DE VARIABLES Y FUNCIONES PARA LA PARTE DEL CRONOMETRO 

var horac = 0                                      //
var minc = 0                                  //   
var segc = 0                                  //
var cronc = document.getElementById('crono')//variabes globales para funciones del cronometro
cronc.value = '0' + horac + ':0' + minc + ':0' + segc  // 
var correr

function iniciarcro() {
    correr = setInterval(cronometrar, 1000)
} /*funcion para el boton inicie con la funcion cronometrar*/

function cronometrar() {
    var cr = document.getElementById('crono')
    if (segc < 59) {
        segc += 1
    }
    else {
        minc += 1
        segc = 0
        if (minc > 59) {
            horac += 1
            minc = 0
        }
    }
    cr.value = '0' + horac + ':0' + minc + ':0' + segc
}/*Funcion para que empiece a contar milisegundos*/

function pausarcro() {
    var cronc = document.getElementById('crono')
    cronc.value = '0' + horac + ':0' + minc + ':0' + segc
    clearInterval(correr)
    var hi = document.getElementById('inicioc')// dos lineas de codigo para cambiar el valor del boton(cuando inicie esta pausa, cuando se pause inicie se convierte en continuar )
    hi.value = 'Continuar'
}/*funcion para dejar estatico el cronometro*/

function reiniciarcro() {
    horac = 0
    minc = 0
    segc = 0
    var cronc = document.getElementById('crono')
    cronc.value = '0' + horac + ':0' + minc + ':0' + segc
    clearInterval(correr)
    var hi = document.getElementById('inicioc')
    hi.value = 'Iniciar'
}/*funcion para dejar en cero el cronometro*/

//CODIGO DE FUNCIONES PARA LA PARTE DEL TEMPORIZADOR 







