import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { Subscribe } from './pages/subscribe/subscribe';
import { Catalog } from './pages/catalog/catalog';
import { GameDetails } from './pages/game-details/game-details';
import { Licenses } from './pages/licenses/licenses';
import { Accessibility } from './pages/accessibility/accessibility';
import { Imprint } from './pages/imprint/imprint';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'pricing', component: Pricing },
	{ path: 'subscribe', component: Subscribe },
	{ path: 'catalog', component: Catalog },
	{ path: 'catalog/:id', component: GameDetails },
	{ path: 'licenses', component: Licenses },
	{ path: 'accessibility', component: Accessibility },
	{ path: 'imprint', component: Imprint },

];
