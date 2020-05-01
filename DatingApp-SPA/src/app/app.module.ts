// components
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';


// angular modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// routes
import { appRoutes } from './routes';

// services
import { AuthService } from './_services/auth.service';

// components
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

// ngx-bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
