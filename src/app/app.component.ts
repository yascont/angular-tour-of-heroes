import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Tour of Heroes';
  public theme: string = '';

  public toggleTheme(): void {
    this.theme = this.theme === '' ? 'dark' : '';
  }
}
