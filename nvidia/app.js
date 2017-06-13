

document.getElementById('lockCodeButton').onclick = function() {
// Store number of requests in lockRequests
  var lockRequests = document.getElementById('laptopNumber').value;
  alert("Are you sure you want:" + lockRequests + "?");
// Array to store lock codes
  var codeStorage = [""];
  var code = [];
// For Loop to create codes
for (var i = 0; i < lockRequests; i++)
  {
// Generate Random 4 digit lock code
  code.push(Math.floor(Math.random() * 10000) + 1000);
  // If the lock code is greater than 9999 or the same as one previously generated, throw the value out
  if(code[i] > 9999 && code[i] != code[i + 1]) {
    // Nothing
  }
  else {
  // alert(code[i]);
  codeStorage = codeStorage + "<p>" + code[i] + "</p>";
  }
}
  document.getElementById('codeBox').innerHTML = codeStorage;
}
