import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainComponent } from './layouts/main/main.component';
import { LogoComponent } from './components/logo/logo.component';
import { TrafficLightCardComponent } from './components/traffic-light-card/traffic-light-card.component';
import { TrafficLightLampComponent } from './components/shared/traffic-light-lamp/traffic-light-lamp.component';
import { LightDetailsComponent } from './components/light-details/light-details.component';
import { TrafficLightComponent } from './components/traffic-light/traffic-light.component';
import { LightTogglerComponent } from './components/light-details/components/light-toggler/light-toggler.component';
import { PrimaryBtnComponent } from './components/shared/primary-btn/primary-btn.component';
import { NoLightsPlaceholderComponent } from './components/no-lights-placeholder/no-lights-placeholder.component';
import { LightDetailsPlaceholderComponent } from './components/light-details/components/light-details-placeholder/light-details-placeholder.component';
import { TotalLightsComponent } from './components/total-lights/total-lights.component';
import { TrafficLightsStatisticsComponent } from './components/traffic-lights-statistics/traffic-lights-statistics.component';
import { ColorStatisticsComponent } from './components/traffic-lights-statistics/components/color-statistics/color-statistics.component';
import { CurrentColorDescComponent } from './components/shared/current-color-desc/current-color-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    LogoComponent,
    TrafficLightCardComponent,
    TrafficLightLampComponent,
    LightDetailsComponent,
    TrafficLightComponent,
    LightTogglerComponent,
    PrimaryBtnComponent,
    NoLightsPlaceholderComponent,
    LightDetailsPlaceholderComponent,
    TotalLightsComponent,
    TrafficLightsStatisticsComponent,
    ColorStatisticsComponent,
    CurrentColorDescComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
