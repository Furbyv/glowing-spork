import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ColorSchemeService } from '../services/color-scheme.service';

@Component({
  selector: 'app-dark-mode-slider',
  templateUrl: './dark-mode-slider.component.html',
  styleUrls: ['./dark-mode-slider.component.scss'],
})
export class DarkModeSliderComponent implements OnInit {
  color: ThemePalette = 'accent';
  isChecked = false;
  constructor(public colorSchemeService: ColorSchemeService) {}

  ngOnInit(): void {
    if (this.colorSchemeService.currentActive() == 'dark')
      this.isChecked = true;
  }

  setTheme() {
    if (!this.isChecked) this.colorSchemeService.update('dark');
    else this.colorSchemeService.update('light');
  }
}
