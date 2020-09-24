(() => {

	const leadElement = document.getElementsByClassName('lead')[0];
	const actionBar = document.getElementById('actionBar');

	const toggleButton = actionBar.children[0];
	const showButton = actionBar.getElementsByClassName('btn-info')[0];
	const hideButton = actionBar.querySelector('button.btn-warning');


	toggleButton.addEventListener('click', event => {
		event.preventDefault();
		event.stopPropagation();

		leadElement.classList.toggle('invisible');

	})

	showButton.addEventListener('mouseenter', event => {
		event.preventDefault();
		event.stopPropagation();

		leadElement.classList.remove('invisible');

	})

	hideButton.addEventListener('mouseenter', event => {
		event.preventDefault();
		event.stopPropagation();

		leadElement.classList.add('invisible');

	})





})();