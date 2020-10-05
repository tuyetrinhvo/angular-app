import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'First Post',
      content: "Le serveur de développement s'est lancé lorsque vous avez exécuté  ng serve  après un  npm install",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Second Post',
      content: 'PostListComponent se trouve dans un sous-dossier du dossier app.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Third Post',
      content: 'PostListItemComponent se trouve soit dans un sous-dossier du dossier app, soit dans un sous-dossier du dossier post-list',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
