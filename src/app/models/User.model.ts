export class User {

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public job: string,
    public hobbies?: string[]
  ) { }

}