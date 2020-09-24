(() => {

	const nameInput = document.getElementById('name');
	const gradeInput = document.getElementById('grade');
	const periodInput = document.getElementById('period');

	const nameOutput = document.querySelector("#nameOutput");
	const gradeOutput = document.querySelector("#gradeOutput");
	const periodOutput = document.querySelector("#periodOutput");

	const form = document.querySelector("form")



	const changeName = event => {
		console.log(nameInput.value);
		nameOutput.innerHTML = nameInput.value || "Empty";
	};
	nameInput.addEventListener('change', changeName)

	const changeGrade = event => {
		gradeOutput.innerHTML = gradeInput.value || "Empty";
	};
	gradeInput.addEventListener('keyup', changeGrade)

	const changePeriod = event => {
		let selected = periodInput.selectedOptions[0];

		periodOutput.innerHTML = selected.value + " (" +  selected.text + ")";
	};
	periodInput.addEventListener('change', changePeriod)


	form.addEventListener('submit', e => e.preventDefault());
	form.addEventListener('reset', e => {
		nameOutput.innerHTML = "Empty";
		gradeOutput.innerHTML = "Empty";
		periodOutput.innerHTML = "Empty";
	});





})();