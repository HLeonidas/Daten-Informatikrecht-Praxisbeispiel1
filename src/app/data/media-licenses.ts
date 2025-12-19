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
		asset: 'assets/covers/*.svg',
		type: 'image',
		source: 'Eigenes Werk (selbst erstellt)',
		license: 'Alle Rechte vorbehalten (Urheber: Projektteam)',
		proof: 'Erstellt im Rahmen des Studienprojekts (Mock-Cover)',
		notes: 'SVG-Covergrafiken für Spiele im Katalog'
	},
	{
		asset: 'Systemschriftarten (Browser/OS)',
		type: 'font',
		source: 'System Fonts (z.B. Segoe UI, San Francisco, Roboto)',
		license: 'Durch Betriebssystem bereitgestellt',
		proof: 'Keine externen Font-Dateien eingebunden',
		notes: 'Tailwind nutzt Standard-Font-Stack, solange nichts anderes konfiguriert wird'
	}
];
