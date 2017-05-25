export class Book{
  votes: number;
  title: string;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  voteUp() {
    this.votes  += 1;
  }

  voteDown() { 
    this.votes  -= 1;
  }

}
