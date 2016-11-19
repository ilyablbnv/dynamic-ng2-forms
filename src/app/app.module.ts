import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";

import { AppComponent } from "./app.component";
import { ItemFormComponent } from "./components/item-form/item-form.component";
import { MetaFormComponent } from "./components/item-form/meta-form/meta-form.component";
import { SaveFormComponent } from "./components/item-form/save-form/save-form.component";
import { FormComponent } from "./components/item-form/forms/form.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SchemaFormModule
    ],
    declarations: [
        AppComponent,
        ItemFormComponent,
        FormComponent,
        MetaFormComponent,
        SaveFormComponent
    ],
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

