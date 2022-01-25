import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ColDef, Column, ColumnApi, GridApi } from 'ag-grid-community';
import { combineLatest } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { ColorSchemeService } from 'src/app/layout/services/color-scheme.service';
import { TaxOverviewService } from '../../services/tax-overview.service';

@Component({
  selector: 'app-tax-overview-grid',
  templateUrl: 'tax-overview-grid.component.html',
  styleUrls: ['tax-overview-grid.component.scss']
})
export class TaxOverviewGridComponent {
  public isDarkTheme$ = this.colorSchemeService.isDaarkScheme$;
  private gridApi: GridApi | undefined;
  private gridColumnApi: ColumnApi | undefined;
  overlayLoadingTemplate: any = `<span class="ag-overlay-loading-center">${this.transloco.translate(
    'do-filter-objects'
  )}</span>`;

  defaultColDef: ColDef = {
    editable: false,
    filter: 'agTextColumnFilter'
  };

  rowData$ = this.taxOverviewService.overviewObject$.pipe(
    filter(state => state.success),
    map(state => state.res!),
    map(data => data.overviewObjects!)
  );

  loading$ = combineLatest([
    this.taxOverviewService.overviewObject$,
    this.taxOverviewService.refresh$
  ]).pipe(filter(([state]) => state.loading));

  constructor(
    private taxOverviewService: TaxOverviewService,
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

  columnDefs: ColDef[] = [
    {
      field: 'wozobjectnummer',
      headerName: this.transloco.translate('wozobjectnummer')
    },
    {
      field: 'gemeentecode',
      headerName: this.transloco.translate('gemeentecode')
    },
    {
      field: 'straatnaam.value',
      headerName: this.transloco.translate('straatnaam')
    },
    {
      field: 'huisnummer',
      headerName: this.transloco.translate('huisnummer')
    },
    {
      field: 'huisletter.value',
      headerName: this.transloco.translate('huisletter')
    },
    {
      field: 'huisnummertoevoeging.value',
      headerName: this.transloco.translate('huisnummertoevoeging')
    },
    {
      field: 'postcode.value',
      headerName: this.transloco.translate('postcode')
    },
    {
      field: 'wijkcode.value',
      headerName: this.transloco.translate('wijkcode')
    },
    {
      field: 'buurtcode.value',
      headerName: this.transloco.translate('buurtcode')
    },
    {
      field: 'woonplaatsnaam.value',
      headerName: this.transloco.translate('woonplaatsnaam')
    },
    {
      field: 'soortobjectcode.value',
      headerName: this.transloco.translate('soortobjectcode')
    },
    {
      field: 'groepaanduiding.value',
      headerName: this.transloco.translate('groepaanduiding')
    },
    {
      field: 'aanduidingbouwstroom.value',
      headerName: this.transloco.translate('aanduidingbouwstroom')
    },
    {
      field: 'statuswozobject.value',
      headerName: this.transloco.translate('statuswozobject')
    },
    {
      field: 'waardegebied.value',
      headerName: this.transloco.translate('waardegebied')
    },
    {
      field: 'model.value',
      headerName: this.transloco.translate('model')
    },
    {
      field: 'bouwjaar',
      headerName: this.transloco.translate('bouwjaar')
    },
    {
      field: 'woninh',
      headerName: this.transloco.translate('woninh')
    },
    {
      field: 'wonopp',
      headerName: this.transloco.translate('wonopp')
    },
    {
      field: 'aanbouwopp',
      headerName: this.transloco.translate('wonopp')
    },
    {
      field: 'grondopp',
      headerName: this.transloco.translate('woninh')
    },
    {
      field: 'schuuropp',
      headerName: this.transloco.translate('wonopp')
    },
    {
      field: 'garageopp',
      headerName: this.transloco.translate('woninh')
    },
    {
      field: 'indicatieligging.value',
      headerName: this.transloco.translate('ligging')
    },
    {
      field: 'kwaliteit.value',
      headerName: this.transloco.translate('kwaliteit')
    },
    {
      field: 'onderhoud.value',
      headerName: this.transloco.translate('onderhoud')
    },
    {
      field: 'uitstraling.value',
      headerName: this.transloco.translate('uitstraling')
    },
    {
      field: 'doelmatigheid.value',
      headerName: this.transloco.translate('doelmatigheid')
    },
    {
      field: 'voorzieningen.value',
      headerName: this.transloco.translate('voorzieningen')
    }
  ];
}
