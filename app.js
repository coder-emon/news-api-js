const loadNews = () => {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-09-07&sortBy=popularity&apiKey=20592f905f3549b2b414ea926dd80411')
        .then(res => res.json())
        .then(data => displayNews(data.articles))
}
const displayNews = (data) => {
    // console.log(data)
    const newsWrap = document.getElementById('news-wraper');
    // data = data.map(item => item.urlToImage ? item : "no image found")
    console.log(data)
    data.forEach(item => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col')
        newsDiv.innerHTML = `
        <div class="card h-100">
            <img class="h-50" src="${item.urlToImage ? item.urlToImage : "no image found"}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title ? item.title : 'no title found'}</h5>
                <p class="card-text">${item.content ? item.content : 'no content found'}</p>
                <p title="${item.author ? item.author : 'no name found'}"><b>Author: ${item.author ? item.author : 'no name found'}</b></p>
                <a class="btn btn-primary" href="${item.url}">View News</a>
            </div>
        </div>

        `
        newsWrap.appendChild(newsDiv)
    })
}
loadNews()