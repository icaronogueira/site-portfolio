import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { GlowingCursorComponent } from './glowing-cursor/glowing-cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavigationComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    GlowingCursorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
