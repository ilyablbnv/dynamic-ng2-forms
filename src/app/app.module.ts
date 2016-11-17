import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ItemFormComponent } from "./components/item-form/item-form.component";
import { MetaFormComponent } from "./components/item-form/meta-form/meta-form.component";
import { SaveFormComponent } from "./components/item-form/save-form/save-form.component";
import { FormComponent } from "./components/item-form/forms/form.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ItemFormComponent,
        FormComponent,
        MetaFormComponent,
        SaveFormComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

