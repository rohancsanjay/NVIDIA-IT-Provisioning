# NVIDIA-IT-Provisioning
This is a repository for the IT new hire/deployment team, to generate lock codes and generate equipment lists for the team. 

NEW CODE: 

<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a random number between 1 and 10.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var w = Math.floor((Math.random() * 9) + 1);
    	var wString = w.toString();
    var x = Math.floor((Math.random() * 9) + 1);
   	 var xString = x.toString();
    var y = Math.floor((Math.random() * 9) + 1);
    	var yString = y.toString();
    var z = Math.floor((Math.random() * 9) + 1);
   	var zString = z.toString();
    var code = wString + xString + yString + zString;
    document.getElementById("demo").innerHTML = code;
}
</script>

</body>
</html>
