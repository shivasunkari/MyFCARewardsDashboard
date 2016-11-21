import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './myfca.component';
import { MyFCAWelcomeComponent } from './myfca-welcome.component'
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, MyFCAWelcomeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
