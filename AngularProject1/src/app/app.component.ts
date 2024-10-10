import { Component } from '@angular/core';
import { greet } from '@company/lib1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject1';

  greetUser() {
    const greeting = greet();
    console.log(greeting);
  }
}
