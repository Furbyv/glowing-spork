import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ColDef, ColDefUtil, Column, ColumnApi, GridApi, GridParams } from 'ag-grid-community';
import { filter, map, startWith } from 'rxjs/operators';
import { ColorSchemeService } from 'src/app/layout/services/color-scheme.service';
import { SubObjectsService } from '../../services/subobjects.service';

@Component({
  selector: 'app-subobject-grid',
  templateUrl: './subobject-grid.component.html',
  styleUrls: ['./subobject-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubobjectGridComponent implements OnChanges {
  @Input() wozId: number | undefined;
  public isDarkTheme$ = this.colorSchemeService.isDarkScheme$;
  private gridApi: GridApi | undefined;
  private gridColumnApi: ColumnApi | undefined;

  defaultColDef: ColDef = {
    editable: true,
    //filter: 'agTextColumnFilter'
  };

  columnDefs: ColDef[] = [
    {
      field: 'nummerwozdeelobject',
      headerName: this.transloco.translate('volgnr'),
    },
    {
      field: 'codewozdeelobject.value',
      headerName: this.transloco.translate('deelcode'),
    },
    {
      field: 'bouwjaar',
      headerName: this.transloco.translate('bouwjaar'),
    },
    {
      field: 'kwaliteit.value',
      headerName: this.transloco.translate('kwaliteit'),
    },
    {
      field: 'onderhoud.value',
      headerName: this.transloco.translate('onderhoud'),
    },
    {
      field: 'uitstraling.value',
      headerName: this.transloco.translate('uitstraling'),
    },
    {
      field: 'doelmatigheid.value',
      headerName: this.transloco.translate('doelmatigheid'),
    },
    {
      field: 'voorzieningen.value',
      headerName: this.transloco.translate('voorzieningen'),
    },
    { field: 'oppervlakte', headerName: this.transloco.translate('opp') },
    { field: 'aantalstuks', headerName: this.transloco.translate('stuks') },
  ];

  columnTypes: ColDefUtil = {
    nonEditableColumn: { editable: false },
    dateColumn: {
      filter: 'agDateColumnFilter',
      suppressMenu: true,
    },
  };

  loading$ = this.subobjectsService.subObjects$.pipe(
    filter((state) => state.loading),
    startWith(true)
  );

  rowData$ = this.subobjectsService.subObjects$.pipe(
    filter((state) => state.success),
    map((state) => state.res!)
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wozId && this.wozId) {
      this.subobjectsService.getSubObjects(this.wozId);
    }
  }

  constructor(
    private subobjectsService: SubObjectsService,
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
      this.gridColumnApi.autoSizeColumns(allColumnIds, true);
    }
  }
}
