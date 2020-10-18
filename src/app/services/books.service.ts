import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/Book.model';
import * as firebase from 'firebase';

@Injectable()
export class BooksService {

  books: Book[] = [];
  bookSubject = new Subject<Book[]>();

  constructor() { }

  // prendre le contenu du books et remettra à travers du bookSubject
  emitBooks() {
    this.bookSubject.next(this.books);
  }

  saveBooks() {
    firebase.database().ref('/books').set(this.books);
  }

  getBooks() {
    firebase.database().ref('/books').on('value', (data) => {
      this.books = data.val() ? data.val() : [];
      this.emitBooks();
    });
  }

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      });
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  updateBook(book: Book, newBook: Book) {
    this.removeBook(book);
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book) {
    if (book.photoUrl) {
      const storageRef = firebase.storage().refFromURL(book.photoUrl);
      storageRef.delete().then(
        () => {
          console.log('Image supprimée!');
        }
      ).catch(
        (error) => {
          console.log('Erreur : ' + error);
        }
      );
    }
    const bookToRemove = this.books.findIndex(
      (ele) => {
        if (ele === book) {
          return true;
        }
      }
    );
    this.books.splice(bookToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const fileName = Date.now().toString();
        const upload = firebase.storage().ref().child('images/' + fileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            if (snapshot.totalBytes > 100000) {
              reject();
              upload.cancel();
            }
            console.log('Chargement...');
          },
          (error) => {
            console.log('Erreur : ' + error);
            reject();
          },
          () => {
            console.log('Téléchargement terminé');
            resolve(upload.snapshot.ref.getDownloadURL());
          });
      }
    );
  }

}
