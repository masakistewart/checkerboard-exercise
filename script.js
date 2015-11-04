var body = document.getElementsByTagName('body');
var html = document.getElementsByTagName('html');
var masterDiv = document.createElement('div')
masterDiv.className = 'master';
var myArr = [];
for(var i = 0; i < (9*7); i++){
	var temp = document.createElement('div');
	if(i % 2 === 0){
			temp.style.backgroundColor = 'red';
			temp.style.width = '11.1%';
			temp.style.height = '125px'
			temp.style.float = 'left';
		} else {
			temp.style.backgroundColor = 'blue';
			temp.style.width = '11.1%';
			temp.style.height = '125px';
			temp.style.float = 'left';
		}
	myArr.push(temp);
}

for (var i = 0; i < myArr.length; i++) {
	body[0].appendChild(myArr[i]);
};

