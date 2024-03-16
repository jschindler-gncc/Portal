import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LazyModulesModule } from 'lazy-modules';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CoreModule,
    HttpClientModule,
    LazyModulesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
