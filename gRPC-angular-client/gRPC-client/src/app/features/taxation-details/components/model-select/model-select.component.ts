import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable, of } from 'rxjs';

interface ValuationModel {
  id: number;
  description: string;
}

interface ModelState {
  selectedModel: ValuationModel;
  availableModels: ValuationModel[];
}

@Component({
  selector: 'woz-model-select',
  templateUrl: './model-select.component.html',
  styleUrls: ['./model-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RxState],
})
export class ModelSelectComponent {
  private availableModels$: Observable<ValuationModel[]> = of([
    { id: 1, description: 'WON 21/22' },
    { id: 2, description: 'HWK 21/22' },
  ]);
  @Input() currentModel(value: ValuationModel | null | undefined) {
    if (value) {
      this._state.set({ selectedModel: value });
    }
  }
  @Output() selectedModelChange = new EventEmitter<ValuationModel>();

  selectedModel$ = this._state.select('selectedModel');
  valuationModels$ = this._state.select('availableModels');

  constructor(private _state: RxState<ModelState>) {
    this._state.connect('availableModels', this.availableModels$);
  }

  onSelectionChange(selectedModel: ValuationModel) {
    this._state.set({ selectedModel });
    this.selectedModelChange.emit(selectedModel);
  }
}

