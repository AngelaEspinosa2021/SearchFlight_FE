import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
    
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
    
  ]
})

export class MaterialModule { }
