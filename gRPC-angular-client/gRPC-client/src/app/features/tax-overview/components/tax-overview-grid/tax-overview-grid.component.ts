import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ColDef, ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
import { ColorSchemeService } from 'src/app/layout/services/color-scheme.service';
import { ColumnDefinition } from 'src/app/protos/columndefinition.pb';
import { WozObjectOverview } from 'src/app/protos/taxoverview.pb';

@Component({
  selector: 'woz-tax-overview-grid',
  templateUrl: 'tax-overview-grid.component.html',
  styleUrls: ['tax-overview-grid.component.scss'],
})
export class TaxOverviewGridComponent implements OnChanges {
  @Input() overviewObject: WozObjectOverview[] | null = [];
  @Input() columnDefinitions: ColumnDefinition[] | null = [];
  @Output() openObject = new EventEmitter<number>();
  @Output() selectedObjects = new EventEmitter<number[]>();
  public isDarkTheme$ = this.colorSchemeService.isDarkScheme$;
  private gridApi: GridApi | undefined;
  private gridColumnApi: ColumnApi | undefined;
  overlayLoadingTemplate: any = `<span class="ag-overlay-loading-center">${this.transloco.translate(
    'do-filter-objects'
  )}</span>`;

  gridOptions: GridOptions = {
    onRowDoubleClicked: (rows: any) => {
      const objectNummer: number = rows.data.wozobjectnummer;
      this.openObject.emit(objectNummer);
    },
  };

  rowSelection = 'multiple';
  defaultColDef: ColDef = {
    editable: false,
    filter: 'agTextColumnFilter',
  };
  columnDefs: ColDef[] = [];
  rowData: WozObjectOverview[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.overviewObject && this.overviewObject) {
      this.rowData = this.overviewObject;
    }
    if (changes.columnDefinitions && this.columnDefinitions && this.columnDefinitions.length) {
      this.columnDefs = this.buildColumnDefinition(this.columnDefinitions);
    }
  }

  private buildColumnDefinition(columnDefinitions: ColumnDefinition[]): ColDef[] {
    console.log(columnDefinitions);
    return columnDefinitions.map((cd) => ({
      field: cd.columnName ?? '',
      headerName: cd.columnHeader ?? '',
      headerTooltip: cd.columnDescription,
      editable: cd.editable,
    }));
  }

  constructor(private colorSchemeService: ColorSchemeService, private transloco: TranslocoService) {}

  onSelectionChanged() {
    if (this.gridApi) {
      const selectedRows = this.gridApi.getSelectedRows();
      this.selectedObjects.emit(selectedRows.map((row) => row.wozobjectnummer));
    }
  }

  private resizeColumns() {
    if (this.gridColumnApi) {
      this.gridColumnApi.autoSizeAllColumns();
    }
  }

  onGridChanged() {
    this.resizeColumns();
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.resizeColumns();
  }
}
