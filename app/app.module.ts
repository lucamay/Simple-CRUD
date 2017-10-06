import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ColaboradorComponent } from './colaboradores/colaborador.component';
import { NavbarComponent } from './nav/nav.component';
import { AddColaboradorComponent} from './colaboradores/addcolaborador.component';

import { ColaboradorService } from './colaboradores/colaborador.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule
                   ],
  declarations: [ AppComponent,
                          ColaboradorComponent,
                          NavbarComponent,
                          AddColaboradorComponent
                          ],
  providers: [ ColaboradorService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }