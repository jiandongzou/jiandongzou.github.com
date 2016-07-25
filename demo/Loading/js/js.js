	// 顶部气泡隐藏
	function hideWeatherbox(){
		document.getElementById('weather_box').style.display='none';
	}
	// 右侧气泡隐藏
	function hideSmenuTip(){
		document.getElementById('s_menu_tip').style.display='none';
	}

	// 更多产品隐藏显示
	function showMoreGoods(){
		document.getElementById('more-goods').style.display='block';
	}
	function hideMoreGoods(){
		document.getElementById('more-goods').style.display='none';
	}

	// 换肤显示隐藏
	function showSkinBox(){
		document.getElementById('skin_box').style.display='block'
	}
	function hideSkinBox(){
		document.getElementById('skin_box').style.display='none'
	} 

	// 右侧导航显示隐藏
	function showLeftMenu(){
		document.getElementById('leftMenu').style.display='block'
	}
	function hideLeftMenu(){
		document.getElementById('leftMenu').style.display='none'
	}

	// 登录框显示隐藏
	function showLoginBox(){
		var oLoginBox = document.getElementById('login_box');
		oLoginBox.style.display='block';
		oLoginBox.style.left='50%';
		oLoginBox.style.top='50%';
		oLoginBox.style.marginLeft='-200px';
		oLoginBox.style.marginTop='-120px';
		document.getElementById('layer_bg').style.display='block';
	}
	function hideLoginBox(){
		document.getElementById('login_box').style.display='none';
		document.getElementById('layer_bg').style.display='none';
	}
	// 换肤
	function toCity(){
		document.getElementById('link1').href='style/city.css';
	}
	function toMao(){
		document.getElementById('link1').href='style/mao.css';
	}
	function toNvhai(){
		document.getElementById('link1').href='style/nvhai.css';
	}
	function toPugongying(){
		document.getElementById('link1').href='style/pugongying.css';
	}
	function toQingxin(){
		document.getElementById('link1').href='style/qingxin.css';
	}
	function toQiu(){
		document.getElementById('link1').href='style/qiu.css';
	}
	function toDeful(){
		document.getElementById('link1').href='style/default.css';
	}