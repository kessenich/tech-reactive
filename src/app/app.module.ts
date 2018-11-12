import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FluxPatternComponent } from './flux-pattern/flux-pattern.component';
import { ReduxPatternComponent } from './redux-pattern/redux-pattern.component';
import { RxjsBasicsComponent } from './rxjs-basics/rxjs-basics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ExamplesModule } from './examples/examples.module';
import { environment } from 'src/environments/environment';
import { NgrxBasicsComponent } from './ngrx-basics/ngrx-basics.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    FluxPatternComponent,
    ReduxPatternComponent,
    RxjsBasicsComponent,
    NgrxBasicsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ExamplesModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
