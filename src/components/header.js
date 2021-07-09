const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //Creating object with markup
  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');
  
  //adding classes
  header.classList.add('header');
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp');

  //creating object structure
  header.appendChild(dateSpan);
  header.appendChild(titleH1);
  header.appendChild(tempSpan);

  //adding text content to tags
  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  //creating header
  const myHeader = Header('Ventura is beautiful.', 'July 9, 2021', '68');

  //creating insert point
  var insertPoint = document.querySelector(selector);
  insertPoint.appendChild(myHeader);

}

export { Header, headerAppender }
