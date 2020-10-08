(()=>{
  const sourceElement = document.querySelector('#source')
  const newsForm = document.querySelector('#newsForm')
  const resultPanel = document.querySelector('#resultPanel')
  const BASE_URL = 'https://newsapi.org/v1/'
  const API_KEY = 'YOUR API KEY'
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
      columns:[
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
    if(datatable) {
      datatable.destroy()
    } 
    datatable = new DataTable('#newsTable',datatableOptions)

  }
  const addSource = (source) => {
    const option = document.createElement('option')
    option.value = source.id
    option.innerHTML = source.name
    sourceElement.appendChild(option)
  }



  const getNewsListener = async (event)=>{
    event.preventDefault()
    const selected = selectedSource()
    const response = await //TODO: get articles
    setupDataTable(response.data.articles)
  }
  const fetchSources = async ()=>{
    const response = await //TODO: get sources
    response.data.sources.map(addSource)
  }
  const processArticle = (article) => {
    //TODO: return article as ana array of the relevant data cells (see headers)
    //      the image cell should be an object with url and urlToImage as a string (JSON.stringify)
  }
  const textRenderer = (data, cell, row) => {
    //TODO: limit the text to 100 characters 
  }
  const imageRenderer = (data, cell, row) => {
    data = JSON.parse(data)
    //TODO: render image inside link to article
  }

  const init = () => {
    fetchSources()
    newsForm.addEventListener('submit', getNewsListener)
  }
  init()
})()
