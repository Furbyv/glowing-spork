import { Component, Input } from '@angular/core';
import { ObjectSearchService } from '../services/object-search.service';

@Component({
  selector: 'app-object-search',
  templateUrl: './object-search.component.html',
  styleUrls: ['./object-search.component.scss'],
  providers: [ObjectSearchService],
})
export class ObjectSearchComponent {
  @Input() maxCharacters: number = 12;

  wozobjects$ = this.objectSearchService.wozObjects$;

  constructor(private objectSearchService: ObjectSearchService) {}

  onSearch(value: string) {
    var numberValue = this.ConvertStringToNumber(value);
    console.log(numberValue);
    this.objectSearchService.findWozObjects(numberValue);
  }

  ConvertStringToNumber(input: string) {
    if (!input) return NaN;
    if (input.trim().length == 0) return NaN;
    return Number(input);
  }
}
