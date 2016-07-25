var elements = document.getElementsByClassName("project-title");
for(i=0; i<elements.length; i++)
 {
 	var x = elements[i].getElementsByTagName("h2")[0].innerHTML;
 	var xhr = new XMLHttpRequest();
 	xhr.open("GET", "https://www.omdbapi.com/?t=" + x, false);
 	xhr.send(null);
 	var resp = xhr.responseText;
 	var res = JSON.parse(resp);
 	var rating = res["imdbRating"];
 	var rate = document.createElement("h3");
 	var node = document.createTextNode(rating);
 	rate.appendChild(node);
 	elements[i].appendChild(rate);
 }
