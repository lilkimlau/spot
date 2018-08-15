var feeling;
var hungry;

function read(){
  feeling = document.getElementById("feeling").value;
  console.log(feeling);
  //slidecontainer
  hungry = document.getElementById("myRange").value;
  console.log(hungry);
  localStorage.setItem('feeling',feeling);
  localStorage.setItem('hungry', hungry);
  location.href = "file:///Users/rbcgwc10/Desktop/spot/spot2.html";
}
