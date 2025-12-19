import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type PlanId = 'basic' | 'plus' | 'ultimate';

type Plan = {
	id: PlanId;
	name: string;
	priceMonthly: number;
	priceYearly: number;
	description: string;
	features: string[];
	highlight?: boolean;
};

@Component({
	selector: 'app-pricing',
	standalone: true,
	imports: [RouterLink, DecimalPipe],
	templateUrl: './pricing.html',
	styleUrl: './pricing.scss'
})
export class Pricing {
	billing: 'monthly' | 'yearly' = 'monthly';

	plans: Plan[] = [
		{
			id: 'basic',
			name: 'Basic',
			priceMonthly: 9.99,
			priceYearly: 99.99,
			description: 'Einfacher Einstieg für Casual Gamer.',
			features: [
				'Zugriff auf eine kuratierte Spielebibliothek (mock)',
				'Standard-Downloads (mock)',
				'Community Deals (mock)'
			]
		},
		{
			id: 'plus',
			name: 'Plus',
			priceMonthly: 12.99,
			priceYearly: 129.99,
			description: 'Mehr Auswahl und bessere Deals.',
			features: [
				'Größere Spielebibliothek (mock)',
				'Member-Deals & Bundles (mock)',
				'Cloud-Streaming (mock)',
				'Familienfreigabe: 1 Zusatzprofil (mock)'
			],
			highlight: true
		},
		{
			id: 'ultimate',
			name: 'Ultimate',
			priceMonthly: 16.99,
			priceYearly: 169.99,
			description: 'Maximaler Zugriff, bestes Erlebnis.',
			features: [
				'Alles aus Plus',
				'Frühzugriff auf neue Titel (mock)',
				'Premium-Support (mock)',
				'Exklusive In-Game Extras (mock)'
			]
		}
	];

	setBilling(mode: 'monthly' | 'yearly') {
		this.billing = mode;
	}

	price(plan: Plan) {
		return this.billing === 'monthly' ? plan.priceMonthly : plan.priceYearly;
	}

	priceSuffix() {
		return this.billing === 'monthly' ? '/ Monat' : '/ Jahr';
	}

	billingLabel() {
		return this.billing === 'monthly' ? 'Monatlich' : 'Jährlich';
	}
}
