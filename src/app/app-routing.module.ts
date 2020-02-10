import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminForgetpasswordComponent } from './Admin/admin-forgetpassword/admin-forgetpassword.component';
import { FranchiseSignupComponent } from './Franchise/franchise-signup/franchise-signup.component';
import { FranchiseLoginComponent } from './Franchise/franchise-login/franchise-login.component';
import { FranchiseForgetpasswordComponent } from './Franchise/franchise-forgetpassword/franchise-forgetpassword.component';
import { FranchiseDashboardComponent } from './Franchise/franchise-dashboard/franchise-dashboard.component';
import { CustomerSignupComponent } from './Customer/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './Customer/customer-login/customer-login.component';
import { CustomerForgetpasswordComponent } from './Customer/customer-forgetpassword/customer-forgetpassword.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { AdminChangepasswordComponent } from './Admin/admin-changepassword/admin-changepassword.component';
import { AdminInventoryComponent } from './Admin/admin-inventory/admin-inventory.component';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { FranchiseDetailsComponent } from './Franchise/franchise-details/franchise-details.component';


const routes: Routes = [

  //Admin Routes
  {path:'adminLogin', component: AdminLoginComponent},
  {path:'adminForgetPwd', component: AdminForgetpasswordComponent},
  {path:'adminDashboard', component: AdminDashboardComponent},
  {path:'adminChangePwd', component: AdminChangepasswordComponent},
  {path:'Inventory', component: AdminInventoryComponent},
  {path:'adminPanel', component: AdminPanelComponent},

  //Franchise Routes
  {path:'franchiseSignUp', component: FranchiseSignupComponent},
  {path:'franchiseLogin', component: FranchiseLoginComponent},
  {path:'franchiseForgetPwd', component: FranchiseForgetpasswordComponent},
  {path:'franchiseDashboard', component: FranchiseDashboardComponent},
  {path:'franchiseDetails', component: FranchiseDetailsComponent},

  //Customer Routes
  {path:'customerSignUp', component: CustomerSignupComponent},
  {path:'customerLogin', component: CustomerLoginComponent},
  {path:'customerForgetPwd', component: CustomerForgetpasswordComponent},
  {path:'customerDashboard', component: CustomerDashboardComponent},
  
  //Others
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
