import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	mobileOpen = signal(false);

	navItems = [
		{ label: 'Home', path: '/' },
		{ label: 'Katalog', path: '/catalog' },
		{ label: 'Über uns', path: '/about' },
		{ label: 'Kontakt', path: '/contact' }
	];

	toggleMenu() {
		this.mobileOpen.update(v => !v);
	}

	closeMenu() {
		this.mobileOpen.set(false);
	}
}
