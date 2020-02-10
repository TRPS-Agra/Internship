import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompareValidatorDirective } from './Shared/compare-validator.directive';

//Material
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

// Application Components
import { GoBestHeaderComponent } from './go-best-header/go-best-header.component';
import { GoBestFooterComponent } from './go-best-footer/go-best-footer.component';
import { GoBestSliderComponent } from './go-best-slider/go-best-slider.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { WorkingAreaComponent } from './working-area/working-area.component';
import { UniqueFectorComponent } from './unique-fector/unique-fector.component';
import { GobestProductsComponent } from './gobest-products/gobest-products.component';
import { GobestTestimonialsComponent } from './gobest-testimonials/gobest-testimonials.component';
import { GobestAboutComponent } from './gobest-about/gobest-about.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminForgetpasswordComponent } from './Admin/admin-forgetpassword/admin-forgetpassword.component';
import { AdminChangepasswordComponent } from './Admin/admin-changepassword/admin-changepassword.component';
import { FranchiseSignupComponent } from './Franchise/franchise-signup/franchise-signup.component';
import { FranchiseLoginComponent } from './Franchise/franchise-login/franchise-login.component';
import { FranchiseForgetpasswordComponent } from './Franchise/franchise-forgetpassword/franchise-forgetpassword.component';
import { FranchiseChangepasswordComponent } from './Franchise/franchise-changepassword/franchise-changepassword.component';
import { FranchiseDashboardComponent } from './Franchise/franchise-dashboard/franchise-dashboard.component';
import { CustomerSignupComponent } from './Customer/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './Customer/customer-login/customer-login.component';
import { CustomerForgetpasswordComponent } from './Customer/customer-forgetpassword/customer-forgetpassword.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { CustomerChangepasswordComponent } from './Customer/customer-changepassword/customer-changepassword.component';
import { from } from 'rxjs';

import { NavbarComponent } from './Admin/navbar/navbar.component';
import { AdminInventoryComponent } from './Admin/admin-inventory/admin-inventory.component';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { FranchiseDetailsComponent } from './Franchise/franchise-details/franchise-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CompareValidatorDirective,
    
    //Application Components
    GoBestHeaderComponent,
    GoBestSliderComponent,
    WelcomeScreenComponent,
    WorkingAreaComponent,
    UniqueFectorComponent,
   
    GoBestFooterComponent,
    GoBestSliderComponent,
    GobestProductsComponent,
    GobestTestimonialsComponent,
    GobestAboutComponent,
    ContactUSComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    PageNotFoundComponent,
    AdminForgetpasswordComponent,
    AdminChangepasswordComponent,
    FranchiseSignupComponent,
    FranchiseLoginComponent,
    FranchiseForgetpasswordComponent,
    FranchiseChangepasswordComponent,
    FranchiseDashboardComponent,
    CustomerSignupComponent,
    CustomerLoginComponent,
    CustomerForgetpasswordComponent,
    CustomerDashboardComponent,
    CustomerChangepasswordComponent,
    NavbarComponent,
    AdminInventoryComponent,
    AdminPanelComponent,
    FranchiseDetailsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,

    //Material
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDialogModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
