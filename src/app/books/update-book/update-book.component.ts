import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  bookFormUpdate: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  @Input() book: Book;


  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.bookFormUpdate = this.formBuilder.group({
      title: [this.book.title, Validators.required],
      author: [this.book.author, Validators.required]
    });
  }

  onUpdateBook() {
    const title = this.bookFormUpdate.get('title').value;
    const author = this.bookFormUpdate.get('author').value;
    const newBook = new Book(title, author);
    if (this.fileUrl && this.fileUrl !== '') {
      newBook.photoUrl = this.fileUrl;
    }
    this.booksService.updateBook(this.book, newBook);
    this.router.navigate(['/books']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFile(eventOfDOM: any) {
    this.onUploadFile(eventOfDOM.target.files[0]);
  }

}
