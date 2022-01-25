
//aqui estoy fuera de la funcion


const butoncito = document.querySelector("button");//007 esta constante fue creada para encerrar en una funcion onclick la constante arti
const body = document.querySelector("body");//006 se crea una constante para inyectar en el lugar selevcionado este caso body


function ejemplo() {//001 se crea una funcion


  //aqui estoy dentro de la funcion

     
    butoncito.onclick=function () {//002 se crea una funcion en base al evento
        const arti = document.createElement("article");//003 se crea una constante para crear un article, podria ser un p, etc
        //004 con la constante creada le agregas el innerhtml con todos los datos a inyectar
        arti.innerHTML = ` 
          <h2>perrito</h2>
         <p>perrito</p>
          <img src="https://picsum.photos/id/237/200/300" alt="">
        `;
    //console.log("%O",articulo);
    body.appendChild(arti);//005 se inyecta con appendChild la constante creada, previamente tiene que declarar otra constante con el lugar a inyectar, ver
    };
}
ejemplo();

/*
crea una funcion(001), dentro o afuera de ella, atrapas con una variable (006),(007) las herramientas del index 
para ejecutarlas en tus funciones en javascript, con un evento(002) on click,  llamas a tu herramienta (007) que creaste 
activar el evento y en ella encierras a una variable(003) lo que quieres hacer en el index, en este caso quieres enviar un articulo
en el index desde javascript(004),  con las variable creada (006), lista para usar, lo llamas en el nodo(005),
listo con esto creas en el index desde javascript, pero de forma momentanea 

info extra:
butoncito, ejemplo, arti,  son nombres que yo invente para encapsular mis herramientas a usar luego

info extra:
body, button, article  son nombres que si debes de respetar por que son lo que invocas del index para 
usar en el javacript, al menos tu los cambies en el index, por ejemplo button podrias llamarlo 
si le colocaste en una clase, en ese caso lo llamas desde su clase y con el punto(.) adelante

*/


