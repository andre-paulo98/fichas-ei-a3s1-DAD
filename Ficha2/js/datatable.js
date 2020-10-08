(() => {
	const sourceElement = document.querySelector('#source')
	const newsForm = document.querySelector('#newsForm')
	const resultPanel = document.querySelector('#resultPanel')
	const BASE_URL = 'https://newsapi.org/v1/'
	const API_KEY = 'c0c4ddd7f4e747c98f6e07d2de57c21d'
	let datatable

	const selectedSource = () => {
		const selected = sourceElement.selectedOptions[0]
		return {
			id: selected.value,
			name: selected.innerHTML
		}
	}

	const setupDataTable = (articles) => {
		resultPanel.classList.remove('hidden')
		resultPanel.querySelector('.panel-title span').innerHTML = selectedSource().name
		const datatableOptions = {
			columns: [
				{
					select: 3,
					render: textRenderer
				},
				{
					select: 4,
					render: imageRenderer
				}
			],
			data: {
				headers: [
					'Date',
					'Author',
					'Title',
					'Description',
					'Image'
				],
				data: articles.map(processArticle)
			}
		}
		if (datatable) {
			datatable.destroy()
		}
		datatable = new DataTable('#newsTable', datatableOptions)

	}
	const addSource = (source) => {
		const option = document.createElement('option')
		option.value = source.id
		option.innerHTML = source.name
		sourceElement.appendChild(option)
	}


	const getNewsListener = async (event) => {
		event.preventDefault()
		const selected = selectedSource()
		const response = await axios.get(`${BASE_URL}articles?apiKey=${API_KEY}&source=${selected.id}`);
		setupDataTable(response.data.articles)
	}
	const fetchSources = async () => {
		const response = await axios.get(`${BASE_URL}sources?country=us`)
		response.data.sources.map(addSource)
	}
	const processArticle = (article) => {
		return [
			moment(article.publishedAt).format("YYYY/MM/DD"),
			article.author,
			article.title,
			article.description,
			JSON.stringify({url: article.url, urlToImage: article.urlToImage}),
		]
	}
	const textRenderer = (data, cell, row) => {
		return data.length >= 100 ?  data.slice(0, 97) + "..." : data
	}

	const imageRenderer = (data, cell, row) => {
		data = JSON.parse(data)
		return `<a href="${data.url}"><img class="img-responsive" src="${data.urlToImage}"></a>`;
	}

	const init = () => {
		fetchSources()
		newsForm.addEventListener('submit', getNewsListener)
	}
	init()
})()
