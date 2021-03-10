import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MegamenuComponent } from './components/shared/megamenu/megamenu.component';
import { StudenthomepageComponent } from './components/pages/studenthomepage/studenthomepage.component';
import { MyCoursesComponent } from './components/pages/my-courses/my-courses.component';
import { ProgressComponent } from './components/pages/myCourses/progress/progress.component';
import { CompletedComponent } from './components/pages/myCourses/completed/completed.component';
import { VideosectionComponent } from './components/pages/videosection/videosection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestformComponent } from './components/testform/testform.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    MegamenuComponent,
    StudenthomepageComponent,
    MyCoursesComponent,
    ProgressComponent,
    CompletedComponent,
    VideosectionComponent,
    TestformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
