import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngcc-new-template-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    login: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
