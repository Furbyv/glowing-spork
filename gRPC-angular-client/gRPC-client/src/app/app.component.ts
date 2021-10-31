import { Component } from '@angular/core';
import { ColorSchemeService } from './layout/services/color-scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gRPC-client';

  constructor(colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    colorSchemeService.load();
  }
}
