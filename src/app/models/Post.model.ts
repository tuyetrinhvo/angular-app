export class Post {

  constructor(
    public title: string,
    public content: string,
    public createdAt: string,
    public loveIt: number = 0,
  ) { }

}