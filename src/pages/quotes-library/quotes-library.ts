import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';
import  quotes  from '../../data/quotes';

@Component({
  selector: 'page-quotes-library',
  templateUrl: 'quotes-library.html',
})
export class QuotesLibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = QuotesPage;
  ngOnInit(){
    this.quoteCollection = quotes;
  }
}
