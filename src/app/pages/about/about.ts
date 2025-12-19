import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './about.html',
	styleUrl: './about.scss'
})
export class About {
	readonly brandName = 'GamePassify';

	readonly brandColors = [
		{ name: 'Indigo', hex: '#4F46E5' },
		{ name: 'Graphite', hex: '#111827' },
		{ name: 'Slate', hex: '#E5E7EB' }
	];

	// Nizza-Klassen (vereinfachte Zuordnung, passend zum Abo-Modell)
	readonly niceClasses = [
		{
			classNo: 9,
			title: 'Klasse 9 – Software & digitale Produkte',
			examples: [
				'Computer-Software (Download/online)',
				'Softwareplattformen und Anwendungen',
				'Herunterladbare mobile Anwendungen'
			]
		},
		{
			classNo: 41,
			title: 'Klasse 41 – Unterhaltung & Gaming Services',
			examples: [
				'Bereitstellung von Online-Spielen (Service)',
				'Unterhaltungsdienstleistungen',
				'Bereitstellung von Informationen zu Spielen'
			]
		},
		{
			classNo: 42,
			title: 'Klasse 42 – IT-/SaaS-Dienstleistungen',
			examples: [
				'Software as a Service (SaaS)',
				'Bereitstellung einer Plattform für digitale Dienste',
				'Technische Entwicklung und Hosting-ähnliche Leistungen (bei echtem Betrieb)'
			]
		}
	];
}
