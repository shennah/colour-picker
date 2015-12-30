

var init = function() {

	// initialise the canvas
	var canvas = document.getElementById("colour");
	var ctx = canvas.getContext("2d");
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	var image = new Image();
	image.src = "rainbow2.jpg";
	image.onload = function(){
    	ctx.drawImage(image,0,0, canvas.width, canvas.height);
    	image.style.display = 'none';
    }

    // Canvas 2
    var canvas2 = document.getElementById("colour2");
    var ctx2 = canvas2.getContext("2d");
    ctx2.canvas.width  = window.innerWidth;
	ctx2.canvas.height = window.innerHeight;

	ctx.fillRect(0,0, canvas.width, canvas.height);

	ctx2.fillStyle = "#1fe2ed";
	ctx2.fillRect(0,0, canvas.width, canvas.height);
	$('#hex_picker').append("Javascript Colour Picker")

	function rgbToHex(r, g, b) {
	    if (r > 255 || g > 255 || b > 255)
	        throw "Invalid color component";
	    return ((r << 16) | (g << 8) | b).toString(16);
	}

	// draw line
  	function draw(e) {
	    var pos = getMousePos(canvas, e);
	    posx = pos.x;
	    posy = pos.y;
	    var pixel = ctx.getImageData(posx, posy, 1, 1).data;
	    console.log("pixel " + pixel);
	    var hex = "#" + ("000000" + rgbToHex(pixel[0], pixel[1], pixel[2])).slice(-6);
	    console.log("hex " + hex)
	    ctx2.fillStyle = hex;
		ctx2.fillRect(0,0, canvas.width, canvas.height);
		$('#hex_picker').empty().append(hex)

	    // // PAINT
	    // var radius = 40;
	    // ctx.beginPath();
	    // ctx.arc(posx, posy, radius, 0, 2 * Math.PI, false);
	    // ctx.fillStyle = hex;
	    // ctx.fill();

	    // ctx.fillStyle = "#000000";
	    // ctx.fillRect(posx, posy, 5, 5);
	    console.log(posx + posy)
	}

	window.addEventListener('mousemove', draw, false);

	// Mouse position
	function getMousePos(canvas, evt) {
	    var rect = canvas.getBoundingClientRect();
	    return {
	      x: evt.clientX - rect.left,
	      y: evt.clientY - rect.top
	    };
	}

}


init()
