import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SwiperModule } from 'swiper/angular';
import { SocialMidiaCardComponent } from './components/social-midia-card/social-midia-card.component';
import { FormContactMeComponent } from './components/form-contact-me/form-contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmailStatusComponent } from './components/email-status/email-status.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroductionComponent } from './components/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    AboutMeComponent,
    SkillCardComponent,
    ProjectsComponent,
    ProjectCardComponent,
    SocialMidiaCardComponent,
    FormContactMeComponent,
    FooterComponent,
    EmailStatusComponent,
    IntroductionComponent,
  ],
  imports: [BrowserModule, SwiperModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
