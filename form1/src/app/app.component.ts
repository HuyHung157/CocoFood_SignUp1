import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormArray } from '@angular/forms/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'form1';
  rfContact: FormGroup;
  constructor(private fb: FormBuilder, private translateSerVice: TranslateService){
    this.translateSerVice.setDefaultLang('vi');
    this.translateSerVice.use('vi')
  }
  switchLanguage(language: string){
    this.translateSerVice.use(language);
  }
  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.minLength(3)]],
      email: '',
      social: this.fb.group({
        facebook: ['', [Validators.required, Validators.minLength(3)]],
        twitter: '',
        website: ''
      }),
      recaptchaReactive: new FormControl(null, Validators.required)
    });
  }
  
  onSubmit() {
    // Do something awesome
    console.log(this.rfContact);
  }
}
