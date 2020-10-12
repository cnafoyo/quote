import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteB } from '../quote-b'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: QuoteB;
  @Output() delQuote = new EventEmitter<boolean>();


  deleteQuote(complete: boolean) {
    this.delQuote.emit(complete)
  }
  constructor() { }


  ngOnInit() {
  }

}
