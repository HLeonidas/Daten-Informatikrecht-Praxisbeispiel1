export type MediaType = 'image' | 'icon' | 'font' | 'text' | 'audio' | 'video';

export type MediaLicenseItem = {
	asset: string;
	type: MediaType;
	source: string;
	license: string;
	proof?: string;   // z.B. Link oder Hinweis wo die Lizenz steht
	notes?: string;
};

export const MEDIA_LICENSES: MediaLicenseItem[] = [
	{
		type: 'icon',
		asset: 'Bootstrap Icons',
		source: 'https://icons.getbootstrap.com/',
		license: 'MIT License',
		proof: 'Bootstrap Icons Projekt – frei nutzbar mit Lizenzhinweis',
		notes: ''
	},
	{
		type: 'font',
		asset: 'Systemschriftarten (Monospace-Stack)',
		source: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		license: 'Durch Betriebssystem bereitgestellt',
		proof: 'Verwendung nativer Systemschriftarten, keine Webfont-Einbettung',
		notes: 'Keine externen Font-Dateien geladen oder verteilt'
	},
	{
		asset: 'assets/covers/*.svg',
		type: 'image',
		source: 'Eigenes Werk (selbst erstellt)',
		license: 'Alle Rechte vorbehalten (Urheber: Projektteam)',
		proof: 'Erstellt im Rahmen des Studienprojekts (Mock-Cover)',
		notes: 'SVG-Covergrafiken für Spiele im Katalog'
	},
	{
		type: 'image',
		asset: 'assets/covers/the-digital-gaming.jpg',
		source: 'Wikimedia Commons – "The Digital Gaming.jpg"',
		license: 'CC BY-SA 4.0',
		proof: 'Autor: TheDigitalGaming',
		notes: 'Quelle: Wikimedia Commons, keine Änderungen vorgenommen'
	},
	{
		type: 'image',
		asset: 'assets/brand/logo.jpg',
		source: 'Eigenes Werk (selbst erstellt)',
		license: 'Alle Rechte vorbehalten (Urheber: Leon Hueber)',
		proof: 'Logo für PlayPassify im Rahmen des Studienprojekts erstellt',
		notes: 'Nicht offizielles Unternehmenslogo, nur für Studienprojekt'
	},
	{
		type: 'image',
		asset: 'assets/brand/favicon.jpg',
		source: 'Eigenes Werk (selbst erstellt)',
		license: 'Alle Rechte vorbehalten (Urheber: Leon Hueber)',
		proof: 'Favicon basierend auf eigenem Logo erstellt',
		notes: 'Nur zur Darstellung der Website verwendet'
	}
];
