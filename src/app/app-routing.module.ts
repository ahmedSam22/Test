import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { MyCoursesComponent } from './components/pages/my-courses/my-courses.component';
import { CompletedComponent } from './components/pages/myCourses/completed/completed.component';
import { ProgressComponent } from './components/pages/myCourses/progress/progress.component';
import { StudenthomepageComponent } from './components/pages/studenthomepage/studenthomepage.component';
import { VideosectionComponent } from './components/pages/videosection/videosection.component';
import { TestformComponent } from './components/testform/testform.component';

const routes: Routes = [
  {path:'' , component:LandingPageComponent},
  {path:'homepage' , component:StudenthomepageComponent},
  {path:'mycourses' , component:MyCoursesComponent, children:[
    {path:'' , component:ProgressComponent },
    {path:'completed' , component:CompletedComponent }
  ]},
  {path:'course' , component:VideosectionComponent },
  {path:'form' , component:TestformComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
