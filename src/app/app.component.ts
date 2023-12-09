import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressbarComponent } from './progressbar/progressbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatProgressBarModule, ProgressbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progressbar';
  progressValue = 50
  color : ThemePalette = 'primary';
  mode : ProgressBarMode = 'determinate'
}
