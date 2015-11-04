var body = document.getElementsByTagName('body');
var html = document.getElementsByTagName('html');
var myArr = [];

for(var i = 0; i < (9*7); i++){
	var temp = document.createElement('div');
	if(counter % 2 === 0){
			temp.style.backgroundColor = 'red';
			temp.style.width = '11.1%';
			temp.style.height = '125px'
			temp.style.float = 'left';
			body[0].appendChild(temp);
		} else {
			temp.style.backgroundColor = 'blue';
			temp.style.width = '11.1%';
			temp.style.height = '125px';
			temp.style.float = 'left';
			body[0].appendChild(temp);
		}
	myArr.push(temp);
}

