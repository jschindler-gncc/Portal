import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.forgetPasswordForm.value);
  }
}
