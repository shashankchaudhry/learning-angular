import { Component } from '@angular/core';

@Component({
    selector: 'app-alert',
    template: `
    <p class='container-fluid'>This is an alert! Be afraid.
    <app-inner-alert></app-inner-alert>
    </p>
    `,
    styles: [
        'p {color: red; background: blue; min-height: 100px;}',
    ]
})
export class AlertComponent { }