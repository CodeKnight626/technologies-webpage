// DOM manipulation
//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}


$(document).ready(function() {

	var language = "es";
	var submited = false;

	$(".esp").click(function(){
		language = "es";
		document.querySelector("nav #home").innerHTML = "Inicio";
		document.querySelector("nav #about-us-nav").innerHTML = "Nosotros";
		document.querySelector("nav #service-nav").innerHTML = "Servicio";
		document.querySelector("nav #experience-nav").innerHTML = "Experiencia";
		document.querySelector("nav #contact-nav").innerHTML = "Contacto";


		//Main page
		document.querySelector(".about-us h2").innerHTML = "Nosotros";
		document.querySelector(".service h2").innerHTML = "Servicio";
		document.querySelector(".experience h2").innerHTML = "Experiencia";
		document.querySelector(".contact h2").innerHTML = "Contacto";

		document.querySelector(".about-us p").innerHTML = 
			"Somos una empresa joven con experiencia en el sector automotriz enfocados en la programación industrial, siendo nuestra meta consolidarnos como una empresa líder en tecnología; llevamos acabo investigaciones en nuevos campos y los dirigimos a proyectos reales con la intención de ofrecer las mejores soluciones a nuestros clientes.";
		document.querySelector(".service p").innerHTML = 
			"Entre nuestros principales servicios se encuentra el comisionamiento y puesta en marcha de robots y PLC´s, programación offline, Automatización de líneas de producción, diseño y simulación, soporte a producción, optimización de proceso y tiempo de ciclo, y entrenamiento. Aplicaciones industriales de soldadura, pegamento, manipulación, y visión artificial.";
		document.querySelector(".experience p").innerHTML = 
			"Tenemos una experiencia en conjunto en reconocidas marcas automotrices.";
		

		//Contact form
		document.querySelector(".contact-form .first-name").placeholder = "Nombre*";
		document.querySelector(".contact-form .last-name").placeholder = "Apellido*";
		document.querySelector(".contact-form .comments").placeholder = "Comentarios";

		if (!submited){
			document.getElementById("send-data").innerHTML = "Enviar";
			document.querySelector(".contact p").innerHTML = "Comunicate con nosotros y cuentanos como te podemos ayudar.";
		}
		else {
			document.getElementById("send-data").innerHTML = "Enviado";	
			document.querySelector("#contact-id p").innerHTML = "Gracias! nos comunicaremos contigo lo antes posible.";
		}
	});

	$(".eng").click(function(){
		language = "en"
		console.log(language);
		document.querySelector("nav #home").innerHTML = "Home"
		document.querySelector("nav #about-us-nav").innerHTML = "About us";
		document.querySelector("nav #service-nav").innerHTML = "Service";
		document.querySelector("nav #experience-nav").innerHTML = "Experience";
		document.querySelector("nav #contact-nav").innerHTML = "Contact";

		//Main page
		document.querySelector(".about-us h2").innerHTML = "About us";
		document.querySelector(".service h2").innerHTML = "Service";
		document.querySelector(".experience h2").innerHTML = "Experience";
		document.querySelector(".contact h2").innerHTML = "Contact";

		document.querySelector(".about-us p").innerHTML = 
			"We are a young start up bussines focused and experienced in the automotive field and industrial programming, our goal is to consolidate as leaders in technology, we continously do researchs in new fields to offer better solutions to our clients and their proyects.";
		document.querySelector(".service p").innerHTML = 
			"Our main services are commisioning and start up of industrial robots and PLC's, offline programming, automation of lines, design and simulation, shift support, cycle time and process improvements and training. Industrial applications as welding, glue, handling and artificial vision.";
		document.querySelector(".experience p").innerHTML = 
			"We have an overall experience in some recognized industries.";


		//Contact form
		document.querySelector(".contact-form .first-name").placeholder = "First Name*";
		document.querySelector(".contact-form .last-name").placeholder = "Last Name*";
		document.querySelector(".contact-form .comments").placeholder = "Comments";

		if (!submited){
			document.getElementById("send-data").innerHTML = "Submit";
			document.querySelector(".contact p").innerHTML = "Get in touch with us and we'll help you.";
		}
		else {
			document.getElementById("send-data").innerHTML = "Submited";	
			document.querySelector("#contact-id p").innerHTML = "Thanks! We'll communicate with you as soon as possible.";
		}
	});


	$("#dataUserForm").submit(function(e) {
		
		//alert( "Handler for .click() called." );
		//console.log("Hola");
		//console.log(document.getElementById("first-name-id").value);
		$.ajax({
			type: "POST",
			url: $(this).attr("action"),
			data: $('#dataUserForm').serialize(),
			success: function() {
				submited = true;

				document.getElementById("send-data").disabled = true;
				document.getElementById("send-data").style.background = "#fff";
				document.getElementById("send-data").style.color = "#000";

				if (language === "es"){
					document.getElementById("send-data").innerHTML = "Enviado";
					document.querySelector("#contact-id p").innerHTML = "Gracias! nos comunicaremos contigo lo antes posible.";
				}
				if (language === "en"){
					document.getElementById("send-data").innerHTML = "Submited";
					document.querySelector("#contact-id p").innerHTML = "Thanks! We'll communicate with you as soon as possible.";
				}
			}
		});

		e.preventDefault();
	});
	// body...
});


/*function sendData() {
	console.log("buttonpressed");

	var name = document.getElementById("first-name-id").value;
	var lastName =document.getElementById("last-name-id").value;
	var email = document.getElementById("email-id").value;
	var comments = document.getElementById("comments-id").value;

	var infoToSave = name + " " + lastName + " " + email + " " + comments;

	console.log(infoToSave);
};

/*
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.json", function (res) {
              var message = res.firstName + " " + res.lastName
              if (res.likesPizza) {
                message += " likes Pizza";
              }
              else {
                message += " doesn't like pizza";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);

/*
document.addEventListener("DOMContentLoaded",
	function (event){

		function sayHello(event) {
			console.log(event);

			this.textContent = "Said it!"
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!<h2>";

			//document.getElementById("content").textContent = message;
			document.getElementById("content").innerHTML = message;

			if (name === "student") {
				var title = document.querySelector("#title").textContent;
	
				title += " & Lovin' it!"
				document.querySelector("h1").textContent = title;
			}
	}


		//Lecture 54
		//Handling events

		//Unobstrusive event binding
		document.querySelector("button").addEventListener("click", sayHello);

		//document.querySelector("button").onclick = sayHello;


		document.querySelector("body").addEventListener("mousemove",
			function (event){
				if(event.shiftKey === true){
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}
			}
		)
	}
);*/



