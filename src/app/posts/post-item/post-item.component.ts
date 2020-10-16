import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postLoveIt: number;
  @Input() postIndex: number;

  isAuth: boolean;

  constructor(
    private router: Router,
    private postsService: PostsService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onLoveIt() {
    this.postsService.setLoveIt(this.postIndex);
  }

  onNotLoveIt() {
    this.postsService.setNotLoveIt(this.postIndex);
  }

  getColor() {
    if (this.postLoveIt > 0) {
      return 'royalblue';
    } else if (this.postLoveIt < 0) {
      return 'gray';
    }
  }

  onDeletePost() {
    this.postsService.removePost(this.postIndex);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

}
