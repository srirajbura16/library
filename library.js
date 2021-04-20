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

//---------------DISPLAY-BOOKS-----------------------
const main = document.querySelector('main')
const form = document.querySelector('.form')
let deleteBtns;

function displayBooks(){
  let dataIndex = 0
  main.innerHTML = ''
  myLibrary.forEach(book => {
    const bookEle = document.createElement('div')
    bookEle.classList.add('book')
    bookEle.setAttribute('data-index', dataIndex)

    bookEle.innerHTML = `
    <h1>${book.title}</h1>
    <p>author: ${book.author}</p>
    <p>pages: ${book.pages}</p>
    completed: <input type="checkbox">
    <button class="delete">DELETE</button>
    `
    main.appendChild(bookEle)
    dataIndex++
  })
  deleteBtns = assignDeleteBtns()
  addEventToDeleteBtn()
}
displayBooks() //inital display

//-------------------DELETE-BOOK-----------------------------
function deleteBook(index){
  myLibrary.splice(index, 1)
  displayBooks()
}

function assignDeleteBtns(){
  return document.querySelectorAll('.book .delete')
}

function addEventToDeleteBtn(){
  deleteBtns.forEach(button => {
    button.addEventListener('click', function(e) {
      let index = button.parentNode.dataset.index
      deleteBook(index)
      console.log(deleteBtns)
    })
  })
}

//----------------ADD-BOOK-----------------------------------
function addBookToLibrary(title, author, pages, completed){
  const newBook = new Book(title, author, pages, completed)
  myLibrary.push(newBook)
  displayBooks()
}

form.addEventListener('submit', function(e){
  e.preventDefault()
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  addBookToLibrary(title, author, pages, false)
  form.reset()
})

//---------------POPUP-MODAL----------------------------
const modal = document.querySelector('.modal')
const addBookBtn = document.querySelector('.add-book-btn')
const closeBtn = document.querySelector('.close')

addBookBtn.addEventListener('click', function(){
  modal.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
  modal.style.display = 'none'
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
