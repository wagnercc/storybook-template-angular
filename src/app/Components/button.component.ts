import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    
    /**
         * Button contents
         *
         * @required
    */
    @Input() label = 'Click me!';
    @Input() backgroundColor?: string;

    /**
     * What background color to use
    */
    @Input() color?: string;
    @Input() size: 'small' | 'medium' | 'large' = 'medium';

    public get classes(): string[] {
        return ['my-btn', `my-btn--${this.size}`];
    }

    constructor() { }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
