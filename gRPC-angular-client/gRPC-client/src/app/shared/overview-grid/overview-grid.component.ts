import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ColDef, ColumnApi, GridApi, GridOptions, SideBarDef } from 'ag-grid-community';
import { ColorSchemeService } from 'src/app/layout/services/color-scheme.service';
import { ColumnDefinition, DataType } from 'src/app/protos/columndefinition.pb';
import { WozObjectOverview } from 'src/app/protos/taxoverview.pb';
import { TransactionOverview } from 'src/app/protos/transactions.pb';

@Component({
  selector: 'woz-overview-grid',
  templateUrl: 'overview-grid.component.html',
  styleUrls: ['overview-grid.component.scss'],
})
export class OverviewGridComponent implements OnChanges {
  @Input() overviewObject: WozObjectOverview[] | TransactionOverview[] | null = [];
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
    filter: true,
    sortable: true,
  };
  columnDefs: ColDef[] = [];
  rowData: WozObjectOverview[] | TransactionOverview[] = [];
  sideBar: SideBarDef | string | boolean | null = 'filters';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.overviewObject && this.overviewObject) {
      this.rowData = this.overviewObject;
    }
    if (changes.columnDefinitions && this.columnDefinitions && this.columnDefinitions.length) {
      this.columnDefs = this.buildColumnDefinition(this.columnDefinitions);
    }
    if (this.gridApi) {
      this.gridApi.resetQuickFilter();
    }
  }

  private buildColumnDefinition(columnDefinitions: ColumnDefinition[]): ColDef[] {
    return columnDefinitions.map((cd) => ({
      field: cd.columnName ?? '',
      headerName: cd.columnHeader ?? '',
      headerTooltip: cd.columnDescription,
      editable: cd.editable,
      filter: cd.dataType === DataType.VARCHAR ? 'agTextColumnFilter' : 'agNumberColumnFilter',
    }));
  }

  constructor(private colorSchemeService: ColorSchemeService, private transloco: TranslocoService) {}

  clearFilters() {
    if (this.gridApi) {
      this.gridApi.setFilterModel(null);
    }
  }

  onSelectionChanged() {
    if (this.gridApi) {
      const selectedRows = this.gridApi.getSelectedRows();
      this.selectedObjects.emit(selectedRows.map((row) => row.wozobjectnummer));
    }
  }

  onFilterInputChanged(event: any) {
    if (this.gridApi) {
      this.gridApi.setQuickFilter(event.target.value);
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
