import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JioComponent } from './jio/jio.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JioComponent],
  exports:[
    JioComponent
  ]
})
export class FirstmoduleModule { }
