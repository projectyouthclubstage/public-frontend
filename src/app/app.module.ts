import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthGuard } from '../security/AuthGuard';

import { NavbarComponent } from './navbar/navbar.component';
import { PublicComponent } from './public/public.component';
import { InternalComponent } from './internal/internal.component';

import { CookieService } from 'ngx-cookie-service';
import { AlertModule } from 'ngx-bootstrap';  
import { ButtonsModule } from 'ngx-bootstrap';   

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider  } from 'angularx-social-login';
import { UserService } from '../security/UserService';
import { LogoutComponent } from './public/logout/logout.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('433082812139-rjvtfm69ha5i2egpfrngjtgpbn2cm69h.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('')
  }
]);

export function provideConfig() {
  return config;
}

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PublicComponent,
  },{
    path: 'internal',
    component: InternalComponent,
    canActivate: [AuthGuard]
  },{
    path: 'logout',
    component: LogoutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicComponent,
    InternalComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocialLoginModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    CookieService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
