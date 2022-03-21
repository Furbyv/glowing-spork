import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { WozObjectFilterRequest } from 'src/app/protos/taxoverview.pb';
import { Buurtcodes } from '../../filter-data/buurt-data';
import { Gemeenten } from '../../filter-data/gemeente-data';
import { Models } from '../../filter-data/model-data';
import { SoortobjectCodes } from '../../filter-data/soc-data';
import { straatnamen } from '../../filter-data/straatnaam-data';
import { WijkCodes } from '../../filter-data/wijk-data';
import { Woonplaatsen } from '../../filter-data/woonplaats-data';

@UntilDestroy()
@Component({
  selector: 'app-filter-dialog',
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

  gemeenteControl = new FormControl();
  modelControl = new FormControl();
  buurtControl = new FormControl();
  wijkControl = new FormControl();
  woonplaatsControl = new FormControl();
  straatnaamControl = new FormControl();
  socControl = new FormControl();

  filterData: WozObjectFilterRequest = new WozObjectFilterRequest();
  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.gemeenteControl.valueChanges.pipe(untilDestroyed(this)).subscribe((gemeentecodes: number[] | null) => {
      if (gemeentecodes && gemeentecodes.length) {
        this.buurtCodes = [...this.buurtCodes.filter((b) => gemeentecodes.includes(b.gemeentecode))];
      } else {
        this.buurtCodes = Buurtcodes;
      }
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
    const request = new WozObjectFilterRequest();
    request.tijdvakid = 3;
    request.buurtcodes = this.buurtControl.value;
    request.wijkcodes = this.wijkControl.value;
    request.gemeentecodes = this.gemeenteControl.value;
    request.modelids = this.modelControl.value;
    request.soortobjectcodes = this.socControl.value;
    request.woonplaatsen = this.woonplaatsControl.value;
    request.straatnamen = this.straatnaamControl.value;
    this.dialogRef.close(request);
  }
}
