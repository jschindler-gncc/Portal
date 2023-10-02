import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from 'auth-data-access';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {

  private authFacade = inject(AuthFacade);

  forgetPasswordForm: FormGroup;

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.forgetPasswordForm.value);
    this.authFacade.forgotPassword(this.forgetPasswordForm.value);
  }
}
