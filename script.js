var body = document.getElementsByTagName('body');
var body = document.getElementsByTagName('body');
var myArr = [];

for(var i = 0; i < (9*7); i++){
	var temp = document.createElement('div')
	myArr.push(temp);
}
function Colorizer(arr){
	var counter = 0;
	for (var i = 0; i < arr.length; i++) {
		counter ++;
		var num = Math.floor(Math.random() * 900000) + 100000;
		if(counter % 2 === 0){
			arr[i].style.backgroundColor = 'red';
			arr[i].style.width = '11.1%';
			arr[i].style.height = '125px'
			arr[i].style.float = 'left';
			body[0].appendChild(arr[i]);
		} else {
			arr[i].style.backgroundColor = 'blue';
			arr[i].style.width = '11.1%';
			arr[i].style.height = '125px';
			arr[i].style.float = 'left';
			body[0].appendChild(arr[i]);
		}
	};
}
Colorizer(myArr);
