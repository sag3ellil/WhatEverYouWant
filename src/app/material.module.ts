import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
