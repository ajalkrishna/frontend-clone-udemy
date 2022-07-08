import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MiddleComponent } from './middle/middle.component';
import { BottomComponent } from './bottom/bottom.component';
import { TopCourseComponent } from './top-course/top-course.component';
import { EachCourseComponent } from './each-course/each-course.component';
import { LectureComponent } from './lecture/lecture.component';
import { ClipComponent } from './clip/clip.component';
import { TopPickComponent } from './top-pick/top-pick.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { CourseComponent } from './course/course.component';
import { VideoComponent } from './video/video.component';
import { CustomizeBannerComponent } from './customize-banner/customize-banner.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent,
    TopCourseComponent,
    EachCourseComponent,
    LectureComponent,
    ClipComponent,
    TopPickComponent,
    MainNavbarComponent,
    SubNavbarComponent,
    CourseComponent,
    VideoComponent,
    CustomizeBannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
