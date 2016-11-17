import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormComponent } from "./components/item/form/form.component";
import { ItemComponent } from "./components/item/item.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FormComponent,
        ItemComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

