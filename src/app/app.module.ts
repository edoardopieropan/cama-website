
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { CircularButtonComponent } from './circular-button/circular-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductPageComponent,
    CircularButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    MatCardModule,
    MatDividerModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
