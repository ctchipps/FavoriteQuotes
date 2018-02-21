import { Quote } from '../data/quote.interface';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class QuotesService{
  private favoriteQuotes: Quote[] = [];

  constructor(private storage: Storage) {

  }

  fetchQuotes(){
    this.storage.get('favoriteQuotes')
    .then(
      (favoriteQuotes: Quote[]) => {
        this.favoriteQuotes = favoriteQuotes != null ? favoriteQuotes : [];
      }
    )
    .catch(
      err => console.log(err)
    );
  }

  addQuoteToFavorites(quote: Quote){
    this.favoriteQuotes.push(quote);
    this.storage.set('favoriteQuotes',this.favoriteQuotes);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote){
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote){
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    })
  }
}
