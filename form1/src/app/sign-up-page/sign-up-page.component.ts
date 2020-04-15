import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(private translateSerVice: TranslateService){
    this.translateSerVice.setDefaultLang('vi');
    this.translateSerVice.use('vi')
  }
  switchLanguage(language: string){
    this.translateSerVice.use(language);
  }
  
  ngOnInit(): void {
  }


}
