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
    empty: boolean = true;

    constructor() {
        this.paramsList = [];
    }

    get diagnostic() {
        return JSON.stringify(this.paramsList);
    }

    addParam() {
        this.paramsList.push(new Parameter('', this.types[0])); // Set default type to a 'String'
        this.empty = false;
    }

    clearForm() {
        this.paramsList.length = 0;
        this.empty = true;
    }

    deleteParam(index) {
        this.paramsList.splice(index, 1);
    }
}
