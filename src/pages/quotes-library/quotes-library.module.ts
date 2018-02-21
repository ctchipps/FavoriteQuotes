import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesLibraryPage } from './quotes-library';

@NgModule({
  declarations: [
    QuotesLibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesLibraryPage),
  ],
})
export class QuotesLibraryPageModule {}
