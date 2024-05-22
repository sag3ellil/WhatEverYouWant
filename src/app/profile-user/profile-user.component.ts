import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Adjust path as needed
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent  implements OnInit {
  profileForm: FormGroup;
  profilePicture: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      picture: [null]
    });
  }

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(profile => {
      this.profileForm.patchValue(profile);
      this.profilePicture = profile.picture;
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicture = reader.result;
        this.profileForm.patchValue({ picture: file });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formData = new FormData();
      Object.entries(this.profileForm.value).forEach(([key, value]) => {
        if (key === 'picture' && value instanceof File) {
          formData.append(key, value); // Type assertion
        } else if (typeof value === 'string') {
          formData.append(key, value); // Type assertion
        }
      });
      this.authService.updateUserProfile(formData).subscribe(response => {
        console.log('Profile updated successfully', response);
      }, error => {
        console.error('Error updating profile', error);
      });
    }
  }
}