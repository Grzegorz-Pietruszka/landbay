import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../common/validators/validation.service';

@Component({
    selector: 'error-msg',
    template: `
        <div *ngIf="errorMessage">{{ errorMessage }}</div>
    `,
})
export class ErrorMsgComponent {
    @Input() control: FormControl;
    constructor() {}
}
