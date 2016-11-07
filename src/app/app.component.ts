import { Component } from '@angular/core';
import { InputFormComponent } from './components/input-form/input-form.component';
import { OutputFormComponent } from "./components/output-form/output-form.component";

@Component({
    selector: 'main-app',
    template: require("./app.component.html"),
    styles: [require("./app.component.css")]
})

export class AppComponent {
}

