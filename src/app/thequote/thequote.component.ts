import { Component, OnInit } from '@angular/core';
import { QuoteB } from '../quote-b'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  showForm: boolean = false
  count = 0;
  countDown = 0;
  quotes: QuoteB[] = [
    new QuoteB(1, "Billy", "William Shakespear", "To be, or not to be, that is the question", new Date(2020, 9, 10), this.count, this.countDown),
    new QuoteB(2, "Micky Mouse", "Winston Churchill", "Empires of the future will be empires of the mind.", new Date(2020, 10, 2), this.count, this.countDown),
    new QuoteB(3, "Naruto", "Village Dev", "It is working from my machine", new Date(2020, 10, 12), this.count, this.countDown)


  ]

  showDetails(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote
  }
  addUpvote(index) {

    this.quotes[index].upVote = this.quotes[index].count += 1;

  }
  addDownVote(index) {

    this.quotes[index].downVote = this.quotes[index].countDown += 1;

  }
  displayQuote(bool: boolean) {
    this.showForm = !this.showForm
  }
  calcUpest() {
    for (var i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i] > this.quotes[i + 1]) {
        return i;
        console.log(i);
      }
    }
  }
  addedQuote(quote) {
    // alert("The problem is at the quote .ts")
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postenOn = new Date();
    this.quotes.push(quote)
    this.showForm = !this.showForm
  }
  deletedQuote(delQuote, index) {
    this.quotes.splice(index, 1);
  }
  constructor() {
    this.calcUpest()
  }
  ngOnInit() {
  }

}
