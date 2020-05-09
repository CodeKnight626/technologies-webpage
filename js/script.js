// DOM manipulation
//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);

/*function sendData() {
	console.log("buttonpressed");

	var name = document.getElementById("first-name-id").value;
	var lastName =document.getElementById("last-name-id").value;
	var email = document.getElementById("email-id").value;
	var comments = document.getElementById("comments-id").value;

	var infoToSave = name + " " + lastName + " " + email + " " + comments;

	console.log(infoToSave);
}


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



