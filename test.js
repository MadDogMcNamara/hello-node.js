function moveTo( e, l )
{
	var speed = 1;
	var initTime = 30;
	
	(function f () {
		var time = 0;
		
		
		var left = parseInt( getStyle( e, "left" ) );
		//console.debug( e.style.left );
		//console.debug( left );
		if ( left < l ){
			e.style.left = left + speed;
		}
		else if ( left > l ){
			e.style.left = left - speed;
		}
		else{
			return;
		}
		//console.debug( e.style.left );
		time =  Math.max( 0, initTime - Math.abs( l - parseInt( e.style.left ) ) );
		//console.debug( time );
		setTimeout( f, time );
	})();
}


function getStyle(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}