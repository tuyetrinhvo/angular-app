import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (dataSnapshot) => {
      this.posts = dataSnapshot.val() ? dataSnapshot.val() : [];
      this.emitPosts();
    });
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (dataSnapshot) => {
            resolve(dataSnapshot.val());
          }, (error) => {
            reject(error);
          });
      });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(i: number) {
    const postToRemove = this.posts.findIndex(
      (element) => {
        if (element === this.posts[i]) {
          return true;
        }
      }
    );
    this.posts.splice(postToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  setLoveIt(i: number) {
    this.posts[i].loveIt++;
    this.savePosts();
    this.emitPosts();
  }

  setNotLoveIt(i: number) {
    this.posts[i].loveIt--;
    this.savePosts();
    this.emitPosts();
  }

}
