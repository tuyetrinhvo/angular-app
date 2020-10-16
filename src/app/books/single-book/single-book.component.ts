import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: Book;
  check = true;
  isUpdate = false;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Book) => {
        if (book === null) {
          this.check = false;
        } else {
          this.book = book;
        }
      }
    );
  }

  onUpdate() {
    this.isUpdate = true;
  }

  onGoBackToBooksList() {
    this.router.navigate(['/books']);
  }

  onDeleteBook() {
    this.booksService.removeBook(this.book);
    this.onGoBackToBooksList();
  }

}
