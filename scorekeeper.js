var p1=document.querySelector("#a1");
var p2=document.querySelector("#b2");
var reset=document.querySelector("#c3");
var p1s=0;
var p2s=0;
var q=document.getElementById("p1s1");
var w=document.getElementById("p1s2");
console.log(q);
var e=document.querySelector("#ms");
console.log(e);

var ws=5;
var game=true;
p1.addEventListener("click",function(){
	if(game){
p1s++;

if(p1s===ws){
	q.classList.add("winner");
	game = !game;
}
q.textContent = p1s;
}
});
p2.addEventListener("click",function(){
	if(game){
p2s++;
if(p2s===ws){
	w.classList.add("winner");
	game = !game;
}
w.textContent = p2s;
}
});
reset.addEventListener("click",function(){
reset1();
});
function reset1(){
	p1s=0;
	p2s=0;
	q.textContent= 0;
	w.textContent=0;
	game = !game;
	w.classList.remove("winner");
	q.classList.remove("winner");
};
var numinput= document.querySelector("input");
var winningscore = document.querySelector("p span");
numinput.addEventListener("change",function(){
winningscore.textContent = numinput.value;
ws=Number(numinput.value);
reset1();
});

