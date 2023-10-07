import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "@app/modules/home/services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { MessageBlockComponent } from './components/message-block/message-block.component';
import {TranslateService} from "@app/modules/home/services/translate.service";
import {TranslatePipe} from "@app/modules/home/pipes/translate.pipe";
import { SmallBlockComponent } from './components/small-block/small-block.component';



@NgModule({
  declarations: [
    HomeComponent,
    MessageBlockComponent,
    SmallBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
    NgxMaskDirective,
    ReactiveFormsModule,
    HttpClientModule,
    TranslatePipe
  ],
  providers: [
    provideEnvironmentNgxMask(),
    ApiService,
    TranslateService
  ]
})
export class HomeModule { }
