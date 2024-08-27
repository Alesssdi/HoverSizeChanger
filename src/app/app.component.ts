import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHoverSizeChangerDirective } from './app-hover-size-changer.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHoverSizeChangerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
  onReduce(e: string): void {
    console.log("Font-size уменьшен до", e)
  }
  onGrow(e: string): void {
    console.log("Font-size увеличен до", e)
  }
  title = 'my-app';
}
