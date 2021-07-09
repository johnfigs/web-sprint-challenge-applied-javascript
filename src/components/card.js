import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainerDiv = document.createElement('div');
  const authorImg = document.createElement('img');
  const spanByAuthor = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainerDiv.classList.add('img-container');

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(authorImg);
  authorDiv.appendChild(spanByAuthor);

  headlineDiv.textContent = article.headline;
  authorImg.setAttribute('src', article.authorPhoto);
  spanByAuthor.textContent = article.authorName;

  return cardDiv;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(res =>{
    const insertPoint = document.querySelector(selector);
    const articles = res.data.articles;
    for (let articleType in articles) {
      articles[articleType].forEach(cardInfo => {
        const article = Card(cardInfo);
        insertPoint.appendChild(article);
      })
    }
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() =>{
    console.log('done');
  })
}

export { Card, cardAppender }
