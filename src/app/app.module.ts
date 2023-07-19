import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { DetailComponent } from './items/detail/detail.component';
import { ListComponent } from './items/list/list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { HomeBlock1Component } from './home/home-block1/home-block1.component';
import { HomeBlock2Component } from './home/home-block2/home-block2.component';
import { HomeBlock3Component } from './home/home-block3/home-block3.component';
import { HomeBlock4Component } from './home/home-block4/home-block4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageSliderModule } from './slider/components/imageSlider.module';
import { QaSliderModule } from './slider/components/qaSlider.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ModalComponent,
    DetailComponent,
    ListComponent,
    HeaderComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeBlock1Component,
    HomeBlock2Component,
    HomeBlock3Component,
    HomeBlock4Component,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ImageSliderModule,
    QaSliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
