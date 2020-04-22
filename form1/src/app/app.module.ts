import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '../../node_modules/@ngx-translate/http-loader';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
// import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

export function httpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // RecaptchaModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
