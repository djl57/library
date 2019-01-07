function Book(name, createTime, id, nav, main) {
  this.name = name;
  this.createTime = createTime;
  this.id = id;
  this.nav = nav;
  this.main = main;
}

let book1 = new Book('javascript', '2018-12-07 19:25:00', 'book_2018_1', jsNav, jsMain);
let book2 = new Book('css', '2018-12-08 12:28:00', 'book_2018_2', cssNav, cssMain);
let book3 = new Book('html', '2018-12-08 12:29:00', 'book_2018_3', htmlNav, htmlMain);
let book4 = new Book('组件化思想', '2018-12-09 16:23:00', 'book_2018_4', comNav, comMain);
let book5 = new Book('遇到问题时怎么找解决方法', '2018-12-09 16:23:00', 'book_2018_5', problomNav, problomMain);

let books = [
  book1,
  book2,
  book3,
  book4,
  book5
];

console.log(books)