import { Component } from '@angular/core';
import { Parameter } from "../../shared/parameter.model";

@Component({
    selector: 'input-form',
    template: require("./input-form.component.html"),
    styles: [require("./input-form.component.css")]
})
export class InputFormComponent {
    constructor() {
    }

    // Defines a main types for user input form. New parameter could be 'string', 'integer' or 'boolean';
    types = ['String', 'Integer', 'Boolean'];

    model = new Parameter('Delka', this.types[0]);

    get diagnostic() { return JSON.stringify(this.model); }
}
