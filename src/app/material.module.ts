import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
