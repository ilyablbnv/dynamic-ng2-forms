import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InputFormComponent } from "./components/input-form/input-form.component";
import { OutputFormComponent } from "./components/output-form/output-form.component";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        InputFormComponent,
        OutputFormComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

