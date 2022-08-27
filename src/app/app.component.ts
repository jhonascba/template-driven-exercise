import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Template-driven exercise';
  @ViewChild('userForm') signupForm: NgForm;
  defaultSubscription: string = 'basic';
  user: User;
  submitted: boolean = false;

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm);
      this.setUser();
      this.signupForm.reset();
      this.submitted = true;
    }
  }

  private setUser(): User {
    return (this.user = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      subcription: this.signupForm.value.subscription,
    });
  }
}
