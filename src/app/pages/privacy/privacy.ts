import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-privacy',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './privacy.html',
	styleUrl: './privacy.scss'
})
export class Privacy {
	readonly lastUpdated = new Date('2025-12-19').toLocaleDateString().slice(0, 10); // YYYY-MM-DD
}
