const days = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
let birthday = new  Date(1989, 09, 23);
console.log(days[birthday.getDay()]);
