import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { CtaComponent } from './cta/cta.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { SteponeComponent } from './registration/stepone/stepone.component';
import { SteptwoComponent } from './registration/steptwo/steptwo.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: '',
    component: AppComponent
  },

  {
    path: 'stepone',
    component: RegistrationComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServiceComponent,
    CtaComponent,
    AboutComponent,
    ContactComponent,
    DoctorComponent,
    TestimonialComponent,
    FooterComponent,
    RegistrationComponent,
    SteponeComponent,
    SteptwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
