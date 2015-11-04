var body = document.getElementsByTagName('body');
var html = document.getElementsByTagName('html');
var div = document.getElementsByTagName('div');
var x;
var color = 82;
var myArr = [];
function colorizer_base(temp){
	temp.style.backgroundColor = 'black';
}

function setSize(temp){
	temp.style.width = '11.1%';
	temp.style.height = '125px'
	temp.style.float = 'left';
}

function colorizer_gradient(temp){
	var rand = function(){ return Math.floor(Math.random() * 900) + 200 };
	temp.style.backgroundColor = 'rgb(' + rand() + ', ' + color + ', ' + rand() + ')';
}
var rand = function(){ return Math.floor(Math.random() * 900) + 100 };

for(var i = 0; i < (9*7); i++){
	color += 4;
	var temp = document.createElement('div');
	if(i % 2 === 0){
			colorizer_base(temp);
			setSize(temp)
		} else {
			colorizer_gradient(temp);
			setSize(temp);
		}
	myArr.push(temp);
}

for (var i = 0; i < myArr.length; i++) {
	body[0].appendChild(myArr[i]);
};

window.onload = function() {
    var currentColor = 'red';
    setInterval(function() {
    	currentColor = currentColor === 'red' ? 'green' : 'red';
        for (var i = 0; i < div.length; i++) {
        	div[i].style.backgroundColor = 'rgb(' + rand() + ', ' + color + ', ' + rand() + ')';
        };
    }, 1000);
};


