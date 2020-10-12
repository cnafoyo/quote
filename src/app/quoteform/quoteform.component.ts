import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date(), 0, 0)
  @Output() sendQuote = new EventEmitter<Quote>();
  @Input() hideForm: boolean;
  addQuote() {
    this.sendQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, " ", " ", " ", new Date(), 0, 0)
  }

  constructor() { }

  ngOnInit() {
  }

}
