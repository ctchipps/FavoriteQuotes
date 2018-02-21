import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QuotesService } from '../services/quotes';
import { SettingsService } from '../services/settings';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotesLibraryPage } from '../pages/quotes-library/quotes-library';
import { SettingsPage } from '../pages/settings/settings';
import { QuotePage } from '../pages/quote/quote';
import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    QuotesPage,
    QuotesLibraryPage,
    SettingsPage,
    QuotePage,
    FavoritesPage,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuotesPage,
    QuotesLibraryPage,
    SettingsPage,
    QuotePage,
    FavoritesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
