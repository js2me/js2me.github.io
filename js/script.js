
var fullPageAnchors =  [
				'main',
				'for-whom',
				'what-included',
				'what-gets',
				'who-conduct',
				'info',
				];
var socialNetwork ={
	'instagram':'https://www.instagram.com/r_top_/',
	'vk':'https://vk.com/rtop_studio',
	'facebook':'https://www.facebook.com/rtop.ru/',
}

function openSocialNetwork(sNetwork){
	window.open(socialNetwork[sNetwork]);
};

function showMenu(){
	if(!headerFullShowed){
		header.classList.add('opened');
	}else{
		header.classList.remove('opened');
	}
	headerFullShowed = !headerFullShowed;
};

var header,
		scrollParts,
		headerFullShowed = false;

$(document).ready(function() {
	// var fullPageConfig = ;
	header = document.getElementById('header');
	scrollParts = document.getElementsByClassName('scroll-part');
	console.log(fullPageAnchors.length,'fff ', scrollParts.length);
	$('#scroll').fullpage({
				verticalCentered: true,
				// navigation:true,
				// lazyLoading:false,
				// css3:false,
				// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				// autoScrolling: false,
				scrollOverflow:true,
				// fitToSection:false,
				// scrollingSpeed: 700,
				sectionSelector: '.scroll-part',
				menu: '#menu',
				// normalScrollElements: '.who-conduct .company-info .course-info',
				anchors: fullPageAnchors,

				onLeave: function(index, nextIndex, direction){
					var currentPage = scrollParts[nextIndex-1];
					currentPage.classList.add('viewed');
					header.classList.remove('opened');
					headerFullShowed =false;
					if(nextIndex == 1){
						header.classList.remove('full-show');
					}else{
						header.classList.add('full-show');
					}
				},
			});
});