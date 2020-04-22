import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  rfContact: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private translateSerVice: TranslateService){
    this.translateSerVice.setDefaultLang('vi');
    this.translateSerVice.use('vi')
  }
  switchLanguage(language: string){
    this.translateSerVice.use(language);
  }
  ngOnInit() {
    this.rfContact = this.fb.group({
      nameRestaurant: ['', Validators.required],
      namePartner: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addressTitle: ['', Validators.required],
      // city: ['', Validators.required],
      // district: ['', Validators.required],
      // ward: ['', Validators.required],
      street: ['', Validators.required],
      businessType: ['', Validators.required],
      website: ['', Validators.required],
      // recaptchaReactive: new FormControl(null, Validators.required)
    });
  }
  
  onSubmit() {
    this.submitted = true;
    // Do something awesome
    console.log(this.rfContact);
  }

  onReset(){
    this.submitted = false;
    this.rfContact.reset();
  }
}