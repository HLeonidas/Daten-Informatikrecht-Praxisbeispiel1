import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MEDIA_LICENSES, MediaLicenseItem } from '../../data/media-licenses';

@Component({
	selector: 'app-licenses',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './licenses.html',
	styleUrl: './licenses.scss'
})
export class Licenses {
	items: MediaLicenseItem[] = MEDIA_LICENSES;

	typeLabel(type: MediaLicenseItem['type']) {
		switch (type) {
			case 'image': return 'Bild/Grafik';
			case 'icon': return 'Icon';
			case 'font': return 'Schriftart';
			case 'text': return 'Text';
			case 'audio': return 'Audio';
			case 'video': return 'Video';
			default: return type;
		}
	}
}
