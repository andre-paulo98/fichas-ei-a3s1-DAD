const sliderModule = (() => {

	let interval;
	let currentImage = 1;
	let folder, max;

	const image = document.getElementById("slider");

	const next = () => {
		currentImage++;
		if(currentImage > max)
			currentImage = 1;
		renderImage();
	};

	const previous = () => {
		currentImage--;
		if(currentImage < 1)
			currentImage = max;
		renderImage();
	};

	const renderImage = () => {
		image.src = `${folder}/img-${currentImage}.jpeg`;
		if(interval != -1)
			start()
	}

	const stop = () => {
		clearInterval(interval);
		interval = -1;
	};

	const start = () => {
		stop();
		interval = setInterval(next, 2000);
	};


	document.getElementById('previous').addEventListener('click', previous);
	document.getElementById('stop').addEventListener('click', stop);
	document.getElementById('restart').addEventListener('click', start);
	document.getElementById('next').addEventListener('click', next);

	return {
		init: (folderName, maxImages) => {
			folder = folderName;
			max = maxImages;
			start();
		}
	}

})();

sliderModule.init("slide_img", 13);