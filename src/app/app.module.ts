import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatSidenavModule  } from  '@angular/material/sidenav';
import { MatListModule  } from  '@angular/material/list';
import { MatButtonModule  } from  '@angular/material/button';
import { MatIconModule  } from  '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
