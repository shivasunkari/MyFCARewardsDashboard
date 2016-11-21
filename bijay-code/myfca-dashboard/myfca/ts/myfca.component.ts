/**
 * Created by sharmab on 11/21/2016.
 */

import { Component } from '@angular/core';
import { MyFCAWelcomeComponent } from './myfca-welcome.component'
import { WelcomeJSON } from './welcome.json';
import {WelcomeJSONDataComponent} from './welcome-json-data'

let welcomeJSONDataComponentObject= new WelcomeJSONDataComponent();


@Component({
    selector: 'my-fca',
    templateUrl: '/myfca/views/myfca-welcome.component.html'

    /* template:'<h1>Welcome data</h1> <ul><li *ngFor="let wel of welcomejson">' +
     '<span>{{wel.name}}{{wel.designation}}{{wel.dealership}}</span>' +
     '</li></ul>'
     templateUrl: '/myfca/ts/newIndex.html'*/
})
export class AppComponent {
    welcomejson = welcomeJSONDataComponentObject.WELCOMEJSON;
}
