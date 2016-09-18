import { provideRouter } from '@angular/router';

import { PlayersComponent }  from './players/players.component.js';
import { PetsComponent } from './pets/pets.component';
import { MapsComponent } from './maps/maps.component';

export const routes = [
  { path: '',         redirectTo: 'players', pathMatch: 'full' },
  { path: 'players',  component: PlayersComponent },
  { path: 'pets',     component: PetsComponent },
  { path: 'maps',     component: MapsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];