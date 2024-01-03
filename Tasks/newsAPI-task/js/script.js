



function fetchHandler() {
    const url = 'https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=e4c9c091a699443d8597d63f77815c57';
        fetch(url)
                .then(function(res){ return res.json()})
                .then(function(data){
                    if (data.status === 'ok') {
                        const articles = data.articles;
                        console.log(articles);
                        const newsSection = document.getElementById('news-section')
                        for(let article in articles){
                            const newsItem = document.createElement('div');
                            newsItem.classList.add('new-card');
                            newsItem.innerHTML = `
                                <a href="${data.articles[article].url}" class="new-link">
                                    <img src="${data.articles[article].urlToImage}" alt="" class="new-img">
                                    <div class="new-info">
                                        <span class="new-author">${data.articles[article].author}</span>
                                        <h2 class="new-title">${data.articles[article].title}</h2>
                                        <p class="new-description">${data.articles[article].description}</p>
                                    </div>
                                </a>
                            `;

                            newsSection.appendChild(newsItem)
                        }
                    }else {
                        console.error('Не удалось получить новости:', data.message);
                    }
                }).catch(error => {
                    console.error('Произошла ошибка при запросе к API:', error);
                });

}

fetchHandler();