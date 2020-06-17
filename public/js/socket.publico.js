var socket = io();

var lblticket1 = $("#lblTicket1");
var lblticket2 = $("#lblTicket2");
var lblticket3 = $("#lblTicket3");
var lblticket4 = $("#lblTicket4");
var lblescritorio1 = $("#lblEscritorio1");
var lblescritorio2 = $("#lblEscritorio2");
var lblescritorio3 = $("#lblEscritorio3");
var lblescritorio4 = $("#lblEscritorio4");

var lbltickets = [lblticket1, lblticket2, lblticket3, lblticket4];
var lblescritorios = [lblescritorio1, lblescritorio2, lblescritorio3, lblescritorio4];

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    console.log(ultimos4);
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lbltickets[i].text('Ticket ' + ultimos4[i].numero);
        lblescritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}