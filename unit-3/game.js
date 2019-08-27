fortuneBank = [
"I hope you get better soon.",
"Snap yourself out of it.",
"Pull yourself together.",
"Look on the bright side.",
"You’ll get through this.",
"You can do it",
"May the force be with you",
"There’s a light at the end of the tunnel.",
"Don’t think too much."
];

function play() {
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		getFortune();
	},3000);
	
}

function getFortune(){
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";

}