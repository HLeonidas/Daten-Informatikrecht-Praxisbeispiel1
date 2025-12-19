import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

type PlanId = 'basic' | 'plus' | 'ultimate';

type Plan = {
	id: PlanId;
	name: string;
	priceMonthly: number;
	description: string;
	features: string[];
};

type Step = 'select' | 'confirm' | 'success';

@Component({
	selector: 'app-subscribe',
	standalone: true,
	imports: [RouterLink, DecimalPipe, FormsModule],
	templateUrl: './subscribe.html',
	styleUrl: './subscribe.scss'
})
export class Subscribe {
	step: Step = 'select';

	plans: Plan[] = [
		{
			id: 'basic',
			name: 'Basic',
			priceMonthly: 9.99,
			description: 'Einfacher Einstieg für Casual Gamer.',
			features: ['Kuratierte Bibliothek (mock)', 'Standard-Downloads (mock)', 'Community Deals (mock)']
		},
		{
			id: 'plus',
			name: 'Plus',
			priceMonthly: 12.99,
			description: 'Mehr Auswahl und Cloud (mock).',
			features: ['Größere Bibliothek (mock)', 'Member-Deals (mock)', 'Cloud-Streaming (mock)', '1 Zusatzprofil (mock)']
		},
		{
			id: 'ultimate',
			name: 'Ultimate',
			priceMonthly: 16.99,
			description: 'Maximaler Zugriff, bestes Erlebnis.',
			features: ['Alles aus Plus', 'Frühzugriff (mock)', 'Premium-Support (mock)', 'Exklusive Extras (mock)']
		}
	];

	selectedPlanId: PlanId = 'plus';

	// Confirm step controls
	acceptTerms = false;
	email = '';
	errorMsg = '';

	get selectedPlan(): Plan {
		return this.plans.find(p => p.id === this.selectedPlanId) ?? this.plans[0];
	}

	selectPlan(id: PlanId) {
		this.selectedPlanId = id;
		this.errorMsg = '';
	}

	goToConfirm() {
		this.step = 'confirm';
		this.errorMsg = '';
	}

	backToSelect() {
		this.step = 'select';
		this.errorMsg = '';
	}

	completeCheckout() {
		// Mock validation
		const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
		if (!emailOk) {
			this.errorMsg = 'Bitte gib eine gültige E-Mail-Adresse ein.';
			return;
		}
		if (!this.acceptTerms) {
			this.errorMsg = 'Bitte bestätige die Nutzungsbedingungen, Lizenz und Datenschutzerklärung.';
			return;
		}

		// Success (mock)
		this.step = 'success';
		this.errorMsg = '';
	}

	reset() {
		this.step = 'select';
		this.acceptTerms = false;
		this.email = '';
		this.errorMsg = '';
	}
}
