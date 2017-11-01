function getStyle(dom,attr){
	
	if(dom.currentStyle){
		
		return dom.currentStyle[attr];
		//IE获取元素样式
	}else{
		return getComputedStyle(dom,null)[attr];
		//非IE获取元素样式
	}
	  
}

function animate(dom,obj,fn){
	//1>参数1dom对象
	//2>参数2对象（改变的属性）
	//3>参数3回调函数
	
	clearInterval(dom.timer);
	//清除定时器
	//dom.timer ===>每一个物体都加入自己的timer互相不影响
	
	dom.timer = setInterval(function(){
		
		var bool = true;
		//初始值true
		
		for(var k in obj){
			
			if(k!="opacity"){
			//判断传入第三个参数.是否是opacity
				
				var objAttr = parseInt(getStyle(dom,k));
				
			}else{
				
				var objAttr = parseFloat(getStyle(dom,k))*100;
				
			}
			
			
			var speed = (obj[k]-objAttr)/10;
			//取得接近目标值
		
			if(speed > 0){
				//如果正值     向上取整
				speed = Math.ceil(speed);
			}else{
				//如果负值     向下取整
				speed = Math.floor(speed);
			}
			
			
			if( objAttr!=obj[k]){
				//变化值和目标值不相等，  初始值false
				bool=false;
				
			}
				
			if(k=="opacity"){
					//判断传入第三个参数.是否是opacity
					
				dom.style[k] = (objAttr+speed)/100;
					//除以100===》非IE
					
				dom.style["filter"] = "alpha(opacity:"+objAttr+speed+")";
					//IE中
					
			}else{
				dom.style[k] =  objAttr+speed+"px";
			}
			
		}
		
		if(bool){
			//如果变化值和目标值相等
			clearInterval(dom.timer);
			if(fn)fn();
			//执行回调函数
		}
		
	},50)
}
