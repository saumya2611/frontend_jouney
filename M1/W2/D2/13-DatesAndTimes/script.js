let d;
d = new Date();

d = d.toString();

d = new Date(2024 , 0 , 4 , 12 , 30,0); // year,month,date,hour,minutes,second

console.log('time and date',d ,'type of=>', typeof d);

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('02-2-2024');

d = Date.now();

d = new Date('1-4-2024');
d = d.getTime();
d = d.valueOf();

 d = new Date(1704306600000);

 d = Math.floor(Date.now() / 1000);

console.log(d);