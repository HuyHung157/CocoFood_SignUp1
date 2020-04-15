import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPageComponent } from './sign-up-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    CommonModule,
    // AppModule.forChild(SignUpPageComponent);
    TranslateModule
  ]
})
export class SignUpPageModule { }
