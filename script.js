var body = document.getElementsByTagName('body');
var html = document.getElementsByTagName('html');
var masterDiv = document.createElement('div')
masterDiv.className = 'master';
var color = 82;
var myArr = [];
function colorizer_base(temp){
	temp.style.backgroundColor = 'rgb(365, ' + color + ', 100' + ')';
	temp.style.width = '11.1%';
	temp.style.height = '125px'
	temp.style.float = 'left';
}

function colorizer_gradient(temp){
	temp.style.backgroundColor = 'rgb(180, ' + color + ', 19' + ')';
	temp.style.width = '11.1%';
	temp.style.height = '125px';
	temp.style.float = 'left';
}

for(var i = 0; i < (9*7); i++){
	color += 4;
	var temp = document.createElement('div');
	if(i % 2 === 0){
			colorizer_base(temp);
		} else {
			colorizer_gradient(temp);
		}
	myArr.push(temp);
}

for (var i = 0; i < myArr.length; i++) {
	body[0].appendChild(myArr[i]);
};
