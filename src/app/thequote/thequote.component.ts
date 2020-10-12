import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-thequote',
  templateUrl: './thequote.component.html',
  styleUrls: ['./thequote.component.css']
})
export class ThequoteComponent implements OnInit {
  isForm: boolean = false
  quoteEntries: Quote[] = [new Quote("Touch a life", "Life is about making an impact, not making an income.", new Date(2020, 10, 12)),
  new Quote("Life Challenge", "Every next level in your life will demand a new you.", new Date(2020, 10, 12))
  ]
  showForm() {
    this.isForm = !this.isForm
  }

  constructor() {
    console.log(this.quoteEntries)
  }

  ngOnInit(): void {
  }

}
