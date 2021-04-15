import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";

const myModule = [
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports: [myModule]
})
export class AngularMaterialModule { }
