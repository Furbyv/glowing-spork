import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { DarkModeSliderComponent } from './dark-mode-slider/dark-mode-slider.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopMenuListComponent } from './top-menu-list/top-menu-list.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    TopMenuListComponent,
    DarkModeSliderComponent,
  ],
  imports: [FormsModule, MaterialModule],
  exports: [ToolbarComponent],
})
export class LayoutModule {}
