import { Component, inject, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  router = inject(RouterExtensions);

  view(type: number) {
    switch (type) {
      case 1:
        this.router.navigate(['../listview-a']);
        break;
      case 2:
        this.router.navigate(['../listview-b']);
        break;
      case 3:
        this.router.navigate(['../listview-c']);
        break;
    }
  }
}
