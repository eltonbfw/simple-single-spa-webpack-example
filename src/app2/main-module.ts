import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";



@Component({
  template: `
    <div>
      Ng route is working!
    </div>
  `,
})
export class NgSubRouteComponent {
}

@Component({
  selector: 'app2',
  template: `
    <div style="margin-top: 100px;">
      This was rendered by App2 which is written in Angular
    </div>
    <a [routerLink]="['/ng-route']" routerLinkActive="active">Angular route</a>
    &nbsp;&nbsp;&nbsp;
    <a (click)="toApp1()" style="color: -webkit-link; cursor: pointer; text-decoration: underline"  >Go App1</a>
    
    <div style="height: 1px; margin-top:16px; background: #dfdfdf"></div>
    
    <router-outlet></router-outlet>
  `,
})
export class App2Component {
  toApp1(){
    (<any>window).singleSpaNavigate("/app1")
  }
}

const appRoutes: Routes = [
  {
    path: 'subroute1',
    component: NgSubRouteComponent
  },
];

enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}],
  declarations: [
    App2Component,
    NgSubRouteComponent,
  ],
  bootstrap: [App2Component]
})
export default class MainModule {
}
