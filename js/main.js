
    function findDir(oDiv,ev){
            var oEvent=ev||event;
            var scrollT=document.body.scrollTop || document.documentElement.scrollTop;
            var scrollL=document.body.scrollLeft || document.documentElement.scrollLeft

            var y=oDiv.offsetHeight/2+getPos(oDiv).top-(oEvent.clientY+scrollT);
            var x=oDiv.offsetWidth/2+getPos(oDiv).left-(oEvent.clientX+scrollL);

            return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
        }
        function getPos(obj){
            var l=0;
            var t=0;
            while(obj){
                l+=obj.offsetLeft;
                t+=obj.offsetTop;
                obj=obj.offsetParent;
            }
            return {left:l,top:t};
        }
        function smove(){
        	  var oUl=document.getElementById('oUl')
              var aDiv=oUl.children;
          
            for(var i=0;i<aDiv.length;i++){
                aDiv[i].onmouseover=function(ev){
                    var oEvent=ev||event;
                    var oSon=this.children[1];
                    var oFrom=oEvent.fromElement || oEvent.relatedTarget;
                    if(this.contains(oFrom))return false;

                    switch(findDir(this,ev)){
                        case 0:
//                        oDiv.innerHTML='右';
                            oSon.style.left=200+'px';
                            oSon.style.top=0;
                            break;
                        case 1:
//                        oDiv.innerHTML='下';
                            oSon.style.left=0;
                            oSon.style.top=200+'px';
                            break;
                        case 2:
//                        oDiv.innerHTML='左';
                            oSon.style.left=-200+'px';
                            oSon.style.top=0;
                            break;
                        case 3:
//                        oDiv.innerHTML='上';
                            oSon.style.top=-200+'px';
                            oSon.style.left=0;
                            break;
                    }
                    startMove(oSon,{left:0,top:0});

                };
                aDiv[i].onmouseout=function(ev){
                    var oEvent=ev||event;
                    var oSon=this.children[1];
                    var to=oEvent.toElement || oEvent.relatedTarget;
                    if(this.contains(to))return false;

                    switch(findDir(this,ev)){
                        case 0:
                             startMove(oSon,{left:200,top:0});
//                        oDiv.innerHTML='右';
                            break;
                        case 1:
//                        oDiv.innerHTML='下';
                             startMove(oSon,{left:0,top:200});
                            break;
                        case 2:
//                        oDiv.innerHTML='左';
                             startMove(oSon,{left:-200,top:0});
                            break;
                        case 3:
//                        oDiv.innerHTML='上';
                             startMove(oSon,{top:-200,left:0});
                            break;
                    }


                };
            }
   
        }
smove();

function lt(){

	   var M=11;
	var oDiv=document.getElementById('div1');
	var aDiv=oDiv.getElementsByClassName('hid');
	var x=-10;
	var y=0;
	
	var speedX=0;
	var speedY=0;
	
	for(var i=1;i<=M;i++)
	{
		var oNewDiv=document.createElement('div');
		
		oNewDiv.className='hid';
		
		(function (oNewDiv,i){
			setTimeout(function (){
				oNewDiv.style.WebkitTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.MozTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.msTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.OTransform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		oNewDiv.style.transform='rotateY('+(360*(i-1)/M)+'deg) translateZ(400px)';
		
				setTimeout(function (){
					if(i==M)fixAll();
					
					setTimeout(function (){
						
						oNewDiv.style.WebkitTransition='none';
						oNewDiv.style.MozTransition='none';
						oNewDiv.style.msTransition='none';
						oNewDiv.style.OTransition='none';
						oNewDiv.style.transition='none';
						
					},1000);
				}, 3000);
			}, (M+3-i)*200);
		})(oNewDiv,i);
		
		oNewDiv.degY=360*(i-1)/M;
		
		oNewDiv.innerHTML='<div class="img"><span class="over"><span class="shadow"></span></span></div>';
		oNewDiv=oNewDiv.getElementsByClassName('img')[0];
		
		oNewDiv.style.background='url(img/a'+i+'.jpg)';
		
		oNewDiv.getElementsByClassName('shadow')[0].style.background='-webkit-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(img/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.background='-moz-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(img/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.background='-ms-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(img/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.background='-o-linear-gradient(rgba(0,0,0,1) 40%, rgba(255,255,255,0)), url(img/'+i+'.jpg)';
		oNewDiv.getElementsByClassName('shadow')[0].style.backgroundSize='100% 100%';
		oNewDiv.style.backgroundSize='100% 100%';
		
		oDiv.appendChild(oNewDiv.parentNode);
		(function (){
			var oS=document.createElement('script');
			
			oS.type='text/javascript';
			
			
			document.body.appendChild(oS);
		})();
	}
	
	document.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		var mouseStartX=oEvent.clientX;
		var mouseStartY=oEvent.clientY;
		
		var startX=x;
		var startY=y;
		
		var lastX=mouseStartX;
		var lastY=mouseStartY;
		
		speedX=speedY=0;
		
		document.onmousemove=function(ev)
		{
			var oEvent=ev||event;
			
			y=startY+(oEvent.clientX-mouseStartX)/10;
			x=startX-(oEvent.clientY-mouseStartY)/10;
			
			speedX=(oEvent.clientX-lastX)/5;
			speedY=(oEvent.clientY-lastY)/5;
			
			fixAll();
			
			lastX=oEvent.clientX;
			lastY=oEvent.clientY;
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
			
			startMove();
		};
		
		stopMove();
		
		return false;
	};
	
	var timer=null;
	function startMove()
	{
		clearInterval(timer);
		timer=setInterval(function (){
			x-=speedY;
			y+=speedX;
			
			speedY*=0.93;
			speedX*=0.93;
			
			if(Math.abs(speedX)<0.1 && Math.abs(speedY)<0.1)
				stopMove();
			
			fixAll();
		}, 30);
	}
	
	function stopMove()
	{
		clearInterval(timer);
	}
	
	function fixAll()
	{
		oDiv.style.WebkitTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.MozTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.msTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.OTransform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		oDiv.style.transform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)';
		
		for(var i=0;i<aDiv.length;i++)
		{
			var deg=aDiv[i].degY+y;
			var a=(deg%360+360)%360;
			
			a=Math.abs(180-a);
			
			var d=0.1+(a/180)*0.9;
			
			if(d<0.2)d=0.2;
			
			aDiv[i].style.opacity=d;
			
			//aDiv[i].innerHTML=parseInt(a);
		}
	}
}
lt();
