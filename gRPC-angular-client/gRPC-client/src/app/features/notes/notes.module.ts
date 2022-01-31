import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GetWozObjectsService } from '../get-woz-objects/get-wozobjects.service';
import { ObjectSearchModule } from '../object-search/object-search.module';
import { NotesFormComponent } from './components/notes-form/notes-form.component';
import { NotesObjectOverviewComponent } from './components/notes-object-overview/notes-object-overview.component';
import { NotesDialogComponent } from './pages/notes-dialog.component';

@NgModule({
  declarations: [
    NotesDialogComponent,
    NotesObjectOverviewComponent,
    NotesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    ObjectSearchModule
  ],
  exports: [NotesDialogComponent],
  providers: [GetWozObjectsService]
})
export class NotesModule {}
