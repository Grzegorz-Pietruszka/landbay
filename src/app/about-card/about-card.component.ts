import { Component, Input } from '@angular/core';

@Component({
    selector: 'about-card',
    templateUrl: './about-card.component.html',
    styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent {
    @Input() title: string;
    @Input() imgIcon: string;
}
