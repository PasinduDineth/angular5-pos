import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { InventoryComponent } from './inventory/inventory.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home',      component: HomeComponent, children: [{path: '', redirectTo: 'billing' , pathMatch: 'full'},
  {path: 'inventory' , component: InventoryComponent} , {path: 'billing' , component: BillingComponent}]}


];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BillingComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
