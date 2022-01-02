import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import {
  ColDef,
  ColDefUtil,
  Column,
  ColumnApi,
  GridApi,
  GridParams
} from 'ag-grid-community';
import { ColorSchemeService } from 'src/app/layout/services/color-scheme.service';

@Component({
  selector: 'app-subobject-grid',
  templateUrl: './subobject-grid.component.html',
  styleUrls: ['./subobject-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubobjectGridComponent implements OnChanges {
  public isDarkTheme$ = this.colorSchemeService.isDaarkScheme$;
  private gridApi: GridApi | undefined;
  private gridColumnApi: ColumnApi | undefined;
  // a default column definition with properties that get applied to every column
  defaultColDef: ColDef = {
    // set every column width
    // make every column editable
    editable: true,
    // make every column use 'text' filter by default
    filter: 'agTextColumnFilter'
  };

  columnDefs: ColDef[] = [
    { field: 'volgnr', headerName: this.transloco.translate('volgnr') },
    { field: 'deelcode', headerName: this.transloco.translate('deelcode') },
    { field: 'bouwjaar', headerName: this.transloco.translate('bouwjaar') },
    { field: 'kwaliteit', headerName: this.transloco.translate('kwaliteit') },
    { field: 'onderhoud', headerName: this.transloco.translate('onderhoud') },
    {
      field: 'uitstraling',
      headerName: this.transloco.translate('uitstraling')
    },
    {
      field: 'doelmatigheid',
      headerName: this.transloco.translate('doelmatigheid')
    },
    {
      field: 'voorzieningen',
      headerName: this.transloco.translate('voorzieningen')
    },
    { field: 'opp', headerName: this.transloco.translate('opp') },
    { field: 'stuks', headerName: this.transloco.translate('stuks') }
  ];

  // define a column type (you can define as many as you like)
  columnTypes: ColDefUtil = {
    nonEditableColumn: { editable: false },
    dateColumn: {
      filter: 'agDateColumnFilter',
      suppressMenu: true
    }
  };

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  ngOnChanges(_: SimpleChanges): void {}

  constructor(
    private colorSchemeService: ColorSchemeService,
    private transloco: TranslocoService
  ) {}

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    if (this.gridColumnApi) {
      const allColumnIds: Column[] = [];
      const cols = this.gridColumnApi.getAllColumns();
      if (cols) {
        cols.forEach((column: Column) => {
          allColumnIds.push(column);
        });
      }
      this.gridColumnApi.autoSizeColumns(allColumnIds, false);
    }
  }
}
