import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FilterRequest } from 'src/app/protos/overviewrequests.pb';
import { Buurtcodes } from './filter-data/buurt-data';
import { Gemeenten } from './filter-data/gemeente-data';
import { Models } from './filter-data/model-data';
import { SoortobjectCodes } from './filter-data/soc-data';
import { straatnamen } from './filter-data/straatnaam-data';
import { WijkCodes } from './filter-data/wijk-data';
import { Woonplaatsen } from './filter-data/woonplaats-data';

@UntilDestroy()
@Component({
  selector: 'woz-filter-dialog',
  templateUrl: 'filter-dialog.component.html',
  styleUrls: ['filter-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterDialogComponent {
  //#TODO: Static data, replace with services
  gemeenteList = Gemeenten;
  buurtCodes = Buurtcodes;
  modelList = Models;
  socList = SoortobjectCodes;
  wijkList = WijkCodes;
  woonplaatList = Woonplaatsen;
  straatnaamList = straatnamen;

  gemeenteControl = new UntypedFormControl();
  modelControl = new UntypedFormControl();
  buurtControl = new UntypedFormControl();
  wijkControl = new UntypedFormControl();
  woonplaatsControl = new UntypedFormControl();
  straatnaamControl = new UntypedFormControl();
  socControl = new UntypedFormControl();

  filterData: FilterRequest = new FilterRequest();
  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.gemeenteControl.valueChanges.pipe(untilDestroyed(this)).subscribe((_) => {
      this.filterBuurtcodes;
      this.filterWijkcodes;
      this.filterWoonplaats;
      this.filterStraatnaam;
    });
  }

  private filterBuurtcodes(gemeentecodes: number[]) {
    this.buurtCodes = gemeentecodes.length
      ? [...this.buurtCodes.filter((b) => gemeentecodes.includes(b.gemeentecode))]
      : Buurtcodes;
  }

  private filterWijkcodes(gemeentecodes: number[]) {
    this.wijkList = gemeentecodes.length
      ? [...this.wijkList.filter((b) => gemeentecodes.includes(b.gemeentecode))]
      : WijkCodes;
  }

  private filterWoonplaats(gemeentecodes: number[]) {
    this.woonplaatList = gemeentecodes.length
      ? [...this.woonplaatList.filter((b) => gemeentecodes.includes(b.gemeentecode))]
      : Woonplaatsen;
  }

  private filterStraatnaam(gemeentecodes: number[]) {
    this.straatnaamList = gemeentecodes.length
      ? [...this.straatnaamList.filter((b) => gemeentecodes.includes(b.gemeentecode))]
      : straatnamen;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    const request = new FilterRequest();
    request.tijdvakid = 3;
    request.buurtcodes = this.buurtControl.value;
    request.wijkcodes = this.wijkControl.value;
    request.gemeentecodes = this.gemeenteControl.value;
    request.soortobjectcodes = this.socControl.value;
    request.woonplaatsen = this.woonplaatsControl.value;
    request.straatnamen = this.straatnaamControl.value;
    this.dialogRef.close(request);
  }
}
