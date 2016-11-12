import { Component } from '@angular/core';
import { Parameter } from "../../shared/parameter.model";

@Component({
    selector: 'input-form',
    template: require("./input-form.component.html"),
    styles: [require("./input-form.component.css")]
})
export class InputFormComponent {
    paramsList: Array<Parameter>;
    types: Array<string> = ['String', 'Integer', 'Boolean'];
    empty: boolean = false;

    constructor() {
        this.paramsList = [];
    }

    get diagnostic() { return JSON.stringify(this.paramsList); }

    addParametr() {
        this.paramsList.push(new Parameter('', this.types[0])); // Set default type to a 'String'
        this.empty = true;
    }
}
