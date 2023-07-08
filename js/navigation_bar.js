

var play = document.querySelector('.in')
var actionPlay = document.querySelector('.triangulo-para-direita')
const video = document.querySelector('video')


play.addEventListener('click', togPlay)

function togPlay() {
	actionPlay.classList.toggle('twoplay')	
	if (actionPlay.classList.contains('twoplay')) {
		video.play()
	}else video.pause();
}


var frameY = document.querySelector('.framevideo')


setInterval(() => {
	var clients = frameY.getBoundingClientRect()
	let heightY =  (0.562151 * clients.width)
	
	frameY.style.height = heightY + 'px'
}, 100);