import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpPageComponent } from './sign-up-page.component';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// // import { AppModule} from '../app.module';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function httpLoaderFactory(httpClient: HttpClient){
//   return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json')
// }

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    CommonModule,
    // AppModule.forChild(SignUpPageComponent),
    BrowserModule,
    
  ],
  exports: [SignUpPageComponent]
})
export class SignUpPageModule { }
