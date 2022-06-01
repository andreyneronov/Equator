/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});

/* ================= VIDEO ========================= */
const videoBtn = document.querySelector('.story-video-button');
const videoBtnIcon = document.querySelector('.video-story-btn-icon');
const videoOverlay = document.querySelector('.story-video-overlay');
const videoFile = document.querySelector('.story-video-object');

videoBtn.addEventListener('click', function () {

	function toggleOverlay(event){
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden');
		} else {
			videoOverlay.classList.remove('hidden');
		}
	}

	if (videoFile.paused) {
		videoFile.play();
		videoBtnIcon.src = './img/pause_btn.svg';

		videoOverlay.onmouseleave = toggleOverlay;
		videoOverlay.onmouseenter = toggleOverlay;

	} else {
		videoFile.pause();
		videoBtnIcon.src = './img/play_btn.svg';
		videoOverlay.onmouseleave = null;
		videoOverlay.onmouseenter = null;

	}

})