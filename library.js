function Book(title, author, pages, completed){
  this.title = title
  this.author = author
  this.pages = pages
  this.completed = completed
  this.info = () => {
    console.log(`${title}, ${pages} pages, ${completed ? 'finished reading!' : 'not read yet'}`)
  }
} 