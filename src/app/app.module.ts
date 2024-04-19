import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempListComponent } from './component/temp-list/temp-list.component';
import { DataService } from './services/data.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecentTempComponent } from './component/recent-temp/recent-temp.component';
import { TempMinmaxSearchComponent } from './component/temp-minmax-search/temp-minmax-search.component';


@NgModule({
  declarations: [
    AppComponent,
    TempListComponent,
    RecentTempComponent,
    TempMinmaxSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),DataService,provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
