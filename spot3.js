var feeling;
var hungry;

function init(){
feeling = localStorage.getItem('feeling');
hungry = localStorage.getItem('hungry');
console.log(feeling);
console.log(hungry);
var happysnack = ["FRUITS", "SMOOTHIE", "FROZEN YOGURT", "ICE CREAM", "DONUTS", "CAKE", "CHEEZ-ITS", "CUPCAKES", "BUBBLE TEA", "RITZ CRACKERS", "FRIES"];
var happymeal = ["SALAD", "NUGGETS", "MCDONALDS", "MAC AND CHEESE", "PENNE VODKA", "RAMEN", "KOREAN BARBEQUE", "HOTPOT", "BURGERS", "BONCHON CHICKEN", "EGGS AND BACON"];
var sadsnack = ["CHOCOLATE", "CANDY", "ICE CREAM", "HOT CHEETOS", "TAKIS", "CHIPS", "CHIPS N GUAC"];
var sadmeal = ["SANDWICHES", "SPAGHETTI", "PIZZA", "RAMEN", "SOUP", "PASTA", "MAC AND CHEESE", "CHINESE TAKEOUT", "BURRITOS", "PANINI"];
var romanticsnack = ["MOZZARELLA STICKS", "MILKSHAKE", "SUNDAE", "CHOCOLATE COVERED STRAWBERRIES", "CREPES", "MILKSHAKES", "MACAROONS", "FONDUE"];
var romanticmeals = ["SUSHI", "SPAGHETTI AND MEATBALLS", "CHOCOLATE CAKE", "TIRAMISU", "RAMEN", "TORTA DE POLLO"];
var stressedsnack = ["DARK CHOCOLATE", "CHOCOLATE CHIP COOKIES", "CHOCOLATE COVERED PRETZELS"];
var stressedmeal = ["LAMB OVER RICE", "CURRY GOAT", "RAMEN", "EGGS", "BREAD", "COOKIE DOUGH"];

var rand1 = happysnack[Math.floor(Math.random() * happysnack.length)];
var rand2 = happymeal[Math.floor(Math.random() * happymeal.length)];
var rand3 = sadsnack[Math.floor(Math.random() * sadsnack.length)];
var rand4 = sadmeal[Math.floor(Math.random() * sadmeal.length)];
var rand5 = romanticsnack[Math.floor(Math.random() * romanticsnack.length)];
var rand6 = romanticmeals[Math.floor(Math.random() * romanticmeals.length)];
var rand7 = stressedsnack[Math.floor(Math.random() * stressedsnack.length)];
var rand8 = stressedmeal[Math.floor(Math.random() * stressedmeal.length)];

if (feeling == "HAPPY" && hungry <= 50){
  document.getElementById("food").innerHTML = rand1;}
else if (feeling == "HAPPY" && hungry >= 50){
  document.getElementById("food").innerHTML = rand2;}
else if (feeling == "SAD" && hungry <= 50){
  document.getElementById("food").innerHTML = rand3;}
else if (feeling == "SAD" && hungry >= 50){
  document.getElementById("food").innerHTML = rand4;}
else if (feeling == "ROMANTIC" && hungry <= 50){
  document.getElementById("food").innerHTML = rand5;}
else if (feeling == "ROMANTIC" && hungry >= 50){
  document.getElementById("food").innerHTML = rand6;}
else if (feeling == "STRESSED" && hungry <= 50){
  document.getElementById("food").innerHTML = rand7;}
else if (feeling == "STRESSED" && hungry >= 50){
  document.getElementById("food").innerHTML = rand8;}
}

window.onload = init;
