import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { Subscribe } from './pages/subscribe/subscribe';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'pricing', component: Pricing },
	{ path: 'subscribe', component: Subscribe },
];
