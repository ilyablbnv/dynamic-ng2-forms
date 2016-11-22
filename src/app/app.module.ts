import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";

import { AppComponent } from "./app.component";
import { ItemFormComponent } from "./components/item-form/item-form.component";
import { MetaFormComponent } from "./components/item-form/meta-form/meta-form.component";
import { SaveFormComponent } from "./components/item-form/save-form/save-form.component";
import { SharedService } from "./shared/shared.service";

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
        MetaFormComponent,
        SaveFormComponent
    ],
    providers: [SharedService, {provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

