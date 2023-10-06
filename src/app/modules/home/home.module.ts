import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "@app/modules/home/services/api.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
    NgxMaskDirective,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideEnvironmentNgxMask(),
    ApiService,
  ]
})
export class HomeModule { }
