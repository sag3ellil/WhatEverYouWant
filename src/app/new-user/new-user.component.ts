import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent  implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    // Form is valid, perform user creation logic here
    const newUser = this.userForm.value;
    console.log('New User:', newUser);
    // You can send the form data to a backend server for further processing
  }

  passwordMatchValidator(formGroup: FormGroup) {
    let obpas = formGroup.get('password') ;
    let obconfpas = formGroup.get('confirmPassword') ;
    if(obpas != null && obconfpas != null)
    {
      const password = obpas.value;
      const confirmPassword = obconfpas.value;

      if (password !== confirmPassword) {
        obconfpas.setErrors({ mismatch: true });
      } else {
        obconfpas.setErrors(null);
      }
    }
  }

}