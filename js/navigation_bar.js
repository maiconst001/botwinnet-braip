

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


var frameY = document.querySelectorAll('.framevideo')


setInterval(() => {
	for (c of frameY) {
			
		var clients = c.getBoundingClientRect()
		let heightY =  (0.562151 * clients.width)
		
		c.style.height = heightY + 'px'
	}
}, 100);