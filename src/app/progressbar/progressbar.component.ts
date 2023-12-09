import { Component , OnInit} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatProgressBarModule, ProgressBarMode} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [MatProgressBarModule,MatButtonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent implements OnInit{

  progressValue = 5;
  color : ThemePalette = 'primary';
  mode : ProgressBarMode = 'determinate'

  
  ngOnInit(){
    this.fillProgress()
  }

  startProgress(){
    this.progressValue = 5;
    this.fillProgress();

  }
  fillProgress(){
    if(this.progressValue < 100){
      let interval = setInterval(()=>{
        this.progressValue = this.progressValue + 5;
      },1000);
    }
  }

}
