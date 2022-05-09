import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../shared/material/material.module';
import { ActionDrawerModule } from './action-drawer/action-drawer.module';
import { DarkModeSliderComponent } from './dark-mode-slider/dark-mode-slider.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopMenuListComponent } from './top-menu-list/top-menu-list.component';

@NgModule({
  declarations: [ToolbarComponent, TopMenuListComponent, DarkModeSliderComponent],
  imports: [CommonModule, FormsModule, MaterialModule, TranslocoModule, ActionDrawerModule],
  exports: [ToolbarComponent, ActionDrawerModule],
})
export class LayoutModule {}
