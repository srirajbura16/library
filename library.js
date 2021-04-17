let myLibrary = []

function Book(title, author, pages, completed){
  this.title = title
  this.author = author
  this.pages = pages
  this.completed = completed
  this.info = () => {
    return `${title}, ${pages} pages, ${completed ? 'finished reading!' : 'not read yet'}`
  }
}
const sapiens = new Book('Sapiens', 'Yuval Noah Harari', 552, false)
const book2 = new Book('book2', 'author2', 653, false)
const book3 = new Book('book3', 'author3', 323, false)
const book4 = new Book('book4', 'author4', 132, true)
myLibrary.push(sapiens, book2, book3, book4)

//Selectors
const main = document.querySelector('main')

//Functions
function displayBooks(){
  myLibrary.forEach(book => {
    const bookEle = document.createElement('div')
    bookEle.classList.add('book')

    bookEle.innerHTML = `
    <h1>${book.title}</h1>
    <p>author: ${book.author}</p>
    <p>pages: ${book.pages}</p>
    <p>completed: ${book.completed}</p>
    `
    main.appendChild(bookEle)
  })
}

displayBooks()

function addBookToLibrary(){

}