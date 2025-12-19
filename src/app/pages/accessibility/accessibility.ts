import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-accessibility',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './accessibility.html',
	styleUrl: './accessibility.scss'
})
export class Accessibility {
	readonly statementDate = new Date('2025-12-19').toLocaleDateString().slice(0, 10); // YYYY-MM-DD
}
