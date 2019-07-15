import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSearchComponent } from './components/home-page/home-search.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingComponent } from './components/display/landing.component';
import { RepoHoverDirective } from './repo-hover.directive';
import { FvrtTxtPipe } from './fvrt-txt.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent,
    SearchFormComponent,
    NotFoundComponent,
    LandingComponent,
    RepoHoverDirective,
    FvrtTxtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
