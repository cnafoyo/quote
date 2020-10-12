import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() delQuote = new EventEmitter<boolean>();


  deleteQuote(complete: boolean) {
    this.delQuote.emit(complete)
  }
  constructor() { }


  ngOnInit() {
  }

}
