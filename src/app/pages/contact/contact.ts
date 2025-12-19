import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type FormState = {
	name: string;
	email: string;
	subject: string;
	message: string;
	consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './contact.html',
	styleUrl: './contact.scss'
})
export class Contact {
	submitted = false;
	success = false;

	form: FormState = {
		name: '',
		email: '',
		subject: '',
		message: '',
		consent: false
	};

	errors: Errors = {};
	formError = '';

	setField<K extends keyof FormState>(key: K, value: FormState[K]) {
		this.form = { ...this.form, [key]: value };
		// live validate only that field
		this.errors = { ...this.errors, [key]: this.validateField(key) };
		if (!this.errors[key]) {
			const copy = { ...this.errors };
			delete copy[key];
			this.errors = copy;
		}
		this.formError = '';
	}

	private validateField<K extends keyof FormState>(key: K): string | undefined {
		const v = this.form[key];

		if (key === 'name') {
			if (!String(v).trim()) return 'Bitte gib deinen Namen an.';
			return;
		}

		if (key === 'email') {
			const email = String(v).trim();
			if (!email) return 'Bitte gib deine E-Mail-Adresse an.';
			const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
			if (!ok) return 'Bitte gib eine gültige E-Mail-Adresse ein.';
			return;
		}

		if (key === 'subject') {
			if (!String(v).trim()) return 'Bitte wähle einen Betreff.';
			return;
		}

		if (key === 'message') {
			const msg = String(v).trim();
			if (!msg) return 'Bitte gib eine Nachricht ein.';
			if (msg.length < 10) return 'Die Nachricht ist zu kurz (mindestens 10 Zeichen).';
			return;
		}

		if (key === 'consent') {
			if (v !== true) return 'Bitte bestätige die Datenschutzhinweise.';
			return;
		}

		return;
	}

	validateAll(): boolean {
		const keys: (keyof FormState)[] = ['name', 'email', 'subject', 'message', 'consent'];
		const next: Errors = {};

		for (const k of keys) {
			const err = this.validateField(k);
			if (err) next[k] = err;
		}

		this.errors = next;
		return Object.keys(next).length === 0;
	}

	submit() {
		this.submitted = true;
		this.success = false;
		this.formError = '';

		const ok = this.validateAll();
		if (!ok) {
			this.formError = 'Bitte überprüfe die markierten Felder.';
			return;
		}

		this.success = true;
	}

	reset() {
		this.submitted = false;
		this.success = false;
		this.formError = '';
		this.errors = {};
		this.form = { name: '', email: '', subject: '', message: '', consent: false };
	}
}
