import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"lab-032-5c834","appId":"1:814042405432:web:b6a1c5ef98000a973e64cd","storageBucket":"lab-032-5c834.appspot.com","apiKey":"AIzaSyCPx3vbidAUYpJ4tWYhbzJ9c74XT9SYCr0","authDomain":"lab-032-5c834.firebaseapp.com","messagingSenderId":"814042405432","measurementId":"G-HR4G2KXL0K"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [HttpClientModule,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
