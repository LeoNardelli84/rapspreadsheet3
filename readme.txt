Hola! me gustaria explicarte un poco en que consiste rapspreadsheet...
basicamente es una planilla online para votar una competencia de freestyle (batalla de rap) que se llama Freestile master series (FMS). Es el mismo sistema que se utiliza en las batallas oficiales
Es una competencia que se realiza en varios paises, incluidos argentina, españa, colombia entre otros.
utilice varias librerias js para poder crear los graficos de la batalla.
si vas a utilizarla en computadora, te recomiendo que para votar utilices TAB para cambiar de input. estan correctamente ordenados con tabindex="" a como se vota en la batalla, y las flechas arriba y abajo te suben los puntos en 0.5, hasta un maximo de 4.
IMPORTANTE: los graficos estan preparados para recibir un maximo de 160 puntos por player, que es el maximo de puntos que uno puede sacar en una batalla, si al terminar la batalla se supera a ese numero (quizas porque en vez de votar un 4, puso 40) los graficos pueden no comportarse como deberian.
Por el momento no se me ocurrio una solucion para esa validacion.
Esta en proceso de produccion, asi que muchas de las cosas pueden ser modificadas parcial o totalmente en la version final.

En el index quise dar el efecto de que la web se arma una vez que el usuario hace scroll.
Los datos que voy obteniendo se van almacenando en el localStorage del navegador del lado del cliente. No se utilizan bases de datos.
fue todo un desafio crear todas las variables, parsearlas, sumarlas, sacar porcentajes y demas cosas.



lenguajes utilizados:
html5
css
javascript

librerias y frameworks:
typed.js
bootstrap
jquery
chart.js
animate.css

//INFO para el proyecto
participantes de cada liga
España: Sawi Elekipo y Mr. Ego
Argentina: Dtoke, G Sony, CTZ, Replik, Cacha, Naista, Larrix, MP, Stuart, Klan, Dybbuk y Jaff
Chile: Kaiser, Nitro, Basek, Joqerr, Acertijo, Teorema, Metalingúistica, Rodamiento, Racso y Satim
México: Lobo López (Franco Escamilla), Lobo Estepario, Skiper, Rapder, Jony Beltrán, RC, Dante, Zticma, Majestic y Ari Carrillo
Perú: Stick, Black Code, Jota, Kian, Vijay Kesh, Skill, Jair Wong, Diego Mc, Litzen y Piero Pistas
Colombia: Marithea, Lokillo, Valles-T, Chang, Filósofo, Airon, RBN, Letra, Carpediem, Puppy, Ken Zingle y Coloso
Caribe: Éxodo Lirical, SNK, Switch, Reverse, Aldahir, Yartzi, Ritmodelia y Zaki

“LA REGÉNESIS”
con tres formatos diferentes para la liga regular, los play-offs y las finales.
El formato principal, que se utilizará durante gran parte de la temporada, constará de cuatro rondas: Incremental Mode, Random Mode, Minutos Libres y Deluxe.

video explicativo
https://www.youtube.com/watch?v=PXYO_-UX39c
https://www.youtube.com/watch?v=G-RAFD4hqvg
https://www.youtube.com/watch?v=oR7gLmEq2j0
