import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { FluxPatternComponent } from './flux-pattern/flux-pattern.component';
import { ReduxPatternComponent } from './redux-pattern/redux-pattern.component';
import { RxjsBasicsComponent } from './rxjs-basics/rxjs-basics.component';
import { NgrxBasicsComponent } from './ngrx-basics/ngrx-basics.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'flux',
    component: FluxPatternComponent
  },
  {
    path: 'redux',
    component: ReduxPatternComponent
  },
  {
    path: 'rxjs',
    component: RxjsBasicsComponent
  },
  {
    path: 'ngrx',
    component: NgrxBasicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
