import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LargeActionDrawerComponent } from './large-action-drawer/large-action-drawer.component';
import { SmallActionDrawerComponent } from './small-action-drawer/small-action-drawer.component';

@NgModule({
  declarations: [LargeActionDrawerComponent, SmallActionDrawerComponent],
  imports: [CommonModule, FormsModule, MaterialModule, TranslocoModule],
  exports: [LargeActionDrawerComponent, SmallActionDrawerComponent],
})
export class ActionDrawerModule {}
