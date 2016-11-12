import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { InputFormComponent } from "./components/input-form/input-form.component";
import { OutputFormComponent } from "./components/output-form/output-form.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
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

