import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post.model';
import { PostsService } from 'src/app/services/posts.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;
  check = true;
  isAuth: boolean;
  postId: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.post = new Post('', '', '');
    const id = this.route.snapshot.params['id'];
    this.postId = id;
    this.postsService.getSinglePost(+id).then(
      (post: Post) => {
        if (post !== null) {
          this.post = post;
          this.check = true;
        } else {
          this.check = false;
        }
      }
    );
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

  onDeletePost() {
    this.postsService.removePost(this.postId);
    this.onGoBackToPostList();
  }

  onGoBackToPostList() {
    this.router.navigate(['/posts']);
  }

}
