let aboutBox = document.getElementsByClassName("about-us-box");
let aboutheading = document.getElementById("about-heading-section");
function scrollFunction(){

	
	console.log(window.pageYOffset);

	if(window.pageYOffset > document.getElementById("about-us-section").offsetTop-300  )
	{ 
	setTimeout(function() {for(let i = 0; i < aboutBox.length ; i++){
		aboutBox[i].style.opacity = 1;
		aboutBox[i].style.marginTop = 0;
	}
}, 500);
	aboutheading.style.opacity = 1;
		
	// var functionBasedDuration = anime({
	// targets: '#feature-boxes .about-us-box',
	// translateY: -80,
	// direction: 'alternate',
	// loop: false,
	// duration: function(el, i, l) {
	// return 1000 + (i * 1000);
	// }

	// });
}

// Work Item Animations 
if(window.pageYOffset > document.getElementById("work-list").offsetTop-350){

	let workItem = document.getElementsByClassName("work-item");

	for (let i = 0; i < workItem.length; i++){
		workItem[i].style.opacity = 1;
		workItem[i].style.marginTop = 0 ;
	}

	let projectName = document.getElementsByClassName("project-name");
	setTimeout( function(){
	for (let i = 0; i < projectName.length; i++){
		projectName[i].style.opacity = 1;
		projectName[i].style.bottom = "40px" ;
	} }, 1000)

}

let callAction = document.getElementById("call-to-action");
if(window.pageYOffset > callAction.offsetTop-550){
	callAction.style.opacity = 1;
	callAction.style.marginTop = 0;
}



if(window.pageYOffset > document.getElementById("brand").offsetTop-350){
	let logoImg = document.getElementsByClassName("logo-img");
for(let i=0; i < logoImg.length; i++){
	logoImg[i].style.opacity = 1;
	logoImg[i].style.marginTop = 0;
}
}





}




window.addEventListener('scroll', scrollFunction);