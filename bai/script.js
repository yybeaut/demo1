var btn = document.querySelectorAll(".btn span");

var lis = document.getElementsByTagName("li");
var time = new Date();

for(var i=0; i<btn.length; i++){
	btn[i].index = i;
	btn[i].onclick = function(){
		if(new Date-time>2000){
			time = new Date();
		
			fn(this.index);
		}

	}
}


function fn(btns){
	var trrW = [],
		trrH = [],
		trrL = [],
		trrT = [],
		trrO = [],
		trrZ = [];
	for(var i=0; i<lis.length; i++){

		trrW[i] = parseInt(getstyle(lis[i],"width"));
		trrH[i] = parseInt(getstyle(lis[i],"height"));
		trrL[i] = parseInt(getstyle(lis[i],"left"));
		trrT[i] = parseInt(getstyle(lis[i],"top"));
		trrZ[i] = getstyle(lis[i],"zIndex");
		trrO[i] = parseFloat(getstyle(lis[i].getElementsByTagName("img")[0],"opacity"));
		

	}


	for(var i=0; i<lis.length; i++){
		if(btns == 1){
			var index = i+1;
			if(index > 9){
				index = 0;
			}
			//alert(111111)
		}else{
			var index = i-1;
			if(index == 0){
				index = 9;
			}
		}

		animate(lis[i].getElementsByTagName("img")[0],{"opacity":trrO[index]*100});
		lis[i].style.zIndex = trrZ[index];
		animate(lis[i],{"width":trrW[index],"height":trrH[index],"top":trrT[index],"left":trrL[index]});

	}

}

function getstyle(dom,attr){

	if(dom.currentStyle){
		return dom.currentStyle[attr];
	}else{
		return getComputedStyle(dom,null)[attr];
	}

}