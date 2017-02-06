
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
	// alert(sNetwork);
	window.open(socialNetwork[sNetwork]);
};
$(document).ready(function() {
	// var fullPageConfig = ;
	var menuClassList = document.getElementById('header').classList;
	var scrollParts = document.getElementsByClassName('scroll-part');
	console.log(fullPageAnchors.length,'fff ', scrollParts.length);
	$('#scroll').fullpage({
		verticalCentered: false,
				// navigation:true,
				lazyLoading:false,
				css3:true,
				// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				autoScrolling: false,

				fitToSection:false,
				scrollingSpeed: 1000,
				sectionSelector: '.scroll-part',
				menu: '#menu',
				// normalScrollElements: '.who-conduct .company-info .course-info',
				anchors: fullPageAnchors,

				onLeave: function(index, nextIndex, direction){
					var currentPage = scrollParts[nextIndex-1];
					currentPage.classList.add('viewed');
					if(nextIndex == 1){
						menuClassList.remove('full-show');
					}else{
						menuClassList.add('full-show');
					}
				},
			});
});