import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuperInfoComponent } from './components/super-info/super-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbieComponent } from './components/hobbie/hobbie.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperInfoComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    HobbieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
