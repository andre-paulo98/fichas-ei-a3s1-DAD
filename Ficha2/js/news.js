(() => {
	const sourceSelect = document.querySelector("#source");
	const newsForm = document.querySelector("#newsForm");
	const resultPanel = document.getElementById("resultPanel");
	const media = resultPanel.querySelector(".media");
	const mediaClone = media.cloneNode(true);
	const panelBody = resultPanel.querySelector(".panel-body");
	media.remove();

	const newsAPIURL = "https://newsapi.org/v1/";
	const sourcesPath = "sources?country=us";
	const articlesPath = "articles?apiKey=c0c4ddd7f4e747c98f6e07d2de57c21d"

	const addSource = source => {
		const option = document.createElement("option");
		option.value = source.id;
		option.innerHTML = source.name;
		sourceSelect.appendChild(option)
	}

	const addArticle = article => {
		let newMedia = mediaClone.cloneNode(true);
		newMedia.querySelector('.media-heading').innerHTML = article.title;
		newMedia.querySelector('.media-object').src = article.urlToImage || "http://placehold.it/64x85";
		newMedia.querySelector('p').innerHTML = `${article.description} <small>${article.author}</small>`
		//newMedia.querySelector('p').text = article.description;
		//newMedia.querySelector('small').innerHTML = article.author
		newMedia.querySelector('a').href = article.url;



		panelBody.appendChild(newMedia);
	}

	const showArticles = async (sourceID, sourceName) => {
		try {
			const result = await axios.get(`${newsAPIURL}${articlesPath}&source=${sourceID}`);
			console.log(result)

			resultPanel.classList.remove("hidden");
			resultPanel.querySelector('.panel-title span').innerHTML = sourceName;

			for (let article of result.data.articles) {
				addArticle(article);
			}

		} catch (e) {
			return console.error("HTTP Error in API call");
		}
	}

	const init = async () => {
		try {
			const result = await axios.get(`${newsAPIURL}${sourcesPath}`);
			console.log(result)
			if (result.data.status !== "ok") {
				return console.error("API Call Error");
			}

			for (let source of result.data.sources) {
				addSource(source);
			}

			newsForm.addEventListener("submit", (e) => {
				e.preventDefault();
				const sourceID = sourceSelect.selectedOptions[0].value;
				const sourceName = sourceSelect.selectedOptions[0].innerHTML;

				panelBody.innerHTML = '';

				showArticles(sourceID, sourceName);


			})

		} catch (e) {
			return console.error("HTTP Error in API call");
		}
	}
	init();


})();
