import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ColDef, Column } from 'ag-grid-community';
import { ColorSchemeService } from 'src/app/layout/services/color-scheme.service';
import { FullWozObjectReply } from 'src/app/protos/wozobject.pb';

@Component({
  selector: 'woz-object-grid',
  templateUrl: 'object-grid.component.html',
  styleUrls: ['object-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectGridComponent implements OnChanges {
  @Input() wozObject: FullWozObjectReply | null = null;
  public isDarkTheme$ = this.colorSchemeService.isDaarkScheme$;

  defaultColDef: ColDef = {
    editable: false,
  };

  rowData: FullWozObjectReply[] = [];

  columnDefs: ColDef[] = [
    {
      field: 'postcode.value',
      headerName: this.transloco.translate('postcode'),
    },
    {
      field: 'wijkcode.value',
      headerName: this.transloco.translate('wijkcode'),
    },
    {
      field: 'buurtcode.value',
      headerName: this.transloco.translate('buurtcode'),
    },
    {
      field: 'soortobjectcode.value',
      headerName: this.transloco.translate('soortobject'),
    },
    {
      field: 'indicatieligging.value',
      headerName: this.transloco.translate('ligging'),
    },
    {
      field: 'locatieomschrijving',
      headerName: this.transloco.translate('locatieomschrijving'),
    },
  ];

  constructor(private colorSchemeService: ColorSchemeService, private transloco: TranslocoService) {}

  ngOnChanges(_: SimpleChanges): void {
    if (this.wozObject) {
      this.rowData = [this.wozObject];
    }
  }

  onGridReady(params: any) {
    const gridColumnApi = params.columnApi;
    if (gridColumnApi) {
      const allColumnIds: Column[] = [];
      const cols = gridColumnApi.getAllColumns();
      if (cols) {
        cols.forEach((column: Column) => {
          allColumnIds.push(column);
        });
      }
      gridColumnApi.autoSizeColumns(allColumnIds, false);
    }
  }
}
