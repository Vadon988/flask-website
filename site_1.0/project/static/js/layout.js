window.addEventListener("load",function(){

	//LOAD
	var width=screen.width;
	//MAIN-NAV
	var mainNavUl=document.querySelector("#main-nav-ul");
	var mainNavForm=document.querySelector("#main-nav-form");
	var mainNavTog=document.querySelector("#main-nav-tog");
	//INFO-ROW
	var infoUl=document.querySelector("#info-ul");
	var infoTog=document.querySelector("#info-tog");
		
	if(width<780){
		mainNavUl.style.display="none";
		mainNavForm.style.display="none";
		mainNavTog.style.display="inline";
		//INFO-ROW
		infoUl.style.display="none";
		infoTog.style.display="inline";
	}else{
		mainNavUl.style.display="inline";
		mainNavForm.style.display="inline";
		mainNavTog.style.display="none";
		//INFO-ROW
		infoUl.style.display="inline";
		infoTog.style.display="none";
	}
	

	//RESIZE
	window.addEventListener("resize",function(e){

		var width=screen.width;
		//MAIN-NAV
		var mainNavUl=document.querySelector("#main-nav-ul");
		var mainNavForm=document.querySelector("#main-nav-form");
		var mainNavTog=document.querySelector("#main-nav-tog");
		//X-NAV
		var xNav=document.querySelector(".x-nav")
		//INFO-ROW
		var infoUl=document.querySelector("#info-ul");
		var infoTog=document.querySelector("#info-tog");
		//x-info
		var xInfo=document.querySelector("#x-info")
		
		if(width<780){
			mainNavUl.style.display="none";
			mainNavForm.style.display="none";
			mainNavTog.style.display="inline";
			//INFO-ROW
			infoUl.style.display="none";
			infoTog.style.display="inline";
		}else{
			mainNavUl.style.display="inline";
			mainNavForm.style.display="inline";
			mainNavTog.style.display="none";
			//INFO-ROW
			infoUl.style.display="inline";
			infoTog.style.display="none";
			//X-NAV - X-INFO
			xNav.style.display="none";
			xInfo.style.display="none";
		}
	})

	//EVENT
	var mainSidebarTog=document.querySelector("#main-sidebar-tog")
	var mainSidebar=document.querySelector("#main-sidebar")
	mainSidebarTog.addEventListener("click",function(){
		console.log("test")
		if(mainSidebar.style.display==="none"){
			mainSidebar.style.display="inline";
			mainSidebar.style.zIndex="100";
		}else{
			mainSidebar.style.display='none';
		}
	})

	mainNavTog.addEventListener("click",function(e){
		$(".x-nav").slideToggle('slow');
	})

	infoTog.addEventListener("click",function(e){
		$(".x-info-row").slideToggle('slow');
	})

	//LOGOUT
	var userSpan=document.querySelector("#user-span").innerHTML
	var logoutInput=document.querySelector("#logout-input").value=userSpan
	
})