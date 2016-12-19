var mouseOffsetX=0;
var mouseOffsetY=0;

var isDraging=false;

function $(id) {
	return document.getElementById(id);
}
function autoCenter(el) {
	var bodyW=document.documentElement.clientWidth;
	var bodyH=document.documentElement.clientHeight;

	var elW=el.offsetWidth;
	var elH=el.offsetHeight;

	el.style.left=(bodyW-elW)/2+'px';
	el.style.top=(bodyH-elH)/2+'px';
}
function fillToBody(el) {
	el.style.width=document.documentElement.clientWidth+'px';
	el.style.hegiht=document.documentElement.clientHeight+'px';
}

	
$('dialogTitle').addEventListener('mousedown',function (e) {
	var e=e||window.event;
	var mouseOffsetX=e.pageX-$('dialog').offsetLeft;
	var mouseOffsetY=e.pageY-$('dialog').offsetTop;
	isDraging=true;
	console.log('鼠标按下');
});
document.onmousemove=function(e) {
	var e=e||window.event;

	var mouseX=e.pageX;
	var mouseY=e.pageY;

	var moveX=0;
	var moveY=0;

	if (isDraging===true) {
		moveX=mouseX-mouseOffsetX;
		moveY=mouseY-mouseOffsetY;


	var pageW=document.documentElement.clientWidth;
	var pageH=document.documentElement.clientHeight;
	var dialogW=$('dialog').offsetWidth;
	var dialogH=$('dialog').offsetHeight;

	var maxX=pageW-dialogW;
	var maxY=pageH-dialogH;
	moveX=Math.min(maxX,Math.max(0,moveX));
	moveY=Math.min(maxY,Math.max(0,moveY));
		$('dialog').style.left=moveX+'px';
		$('dialog').style.top=moveY+'px';
	}
	console.log('鼠标移动');
};

document.onmouseup=function() {
	isDraging=false;
	console.log('鼠标松开');
};

function showDialog() {
	$('dialog').style.display="block";
	$('mask').style.display="block";
	autoCenter($('dialog'));
	fillToBody($('mask'));
}
function hideDialog() {
	$('dialog').style.display="none";
	$('mask').style.display="none";
}
window.onresize=function () {
	autoCenter($('dialog'));
	fillToBody($('mask'));
}