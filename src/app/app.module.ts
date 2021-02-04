import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modules for styling
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Custom components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

// Custom modules
import { MainModules } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    MainModules,
    SharedModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }