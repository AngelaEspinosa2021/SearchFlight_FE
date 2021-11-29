import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConvertDatePipe } from './pipes/convert-date.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConvertDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConvertDatePipe
  ]
})
export class SharedModule { }
