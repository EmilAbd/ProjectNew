import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
    CatalogComponent,
    PersonComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
