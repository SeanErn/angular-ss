import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { DaytwoComponent } from './daytwo/daytwo.component';
import { DayoneComponent } from './dayone/dayone.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { Tutorial2Component } from './tutorial2/tutorial2.component';
import { DaythreeComponent } from './daythree/daythree.component';
import { DaythreeFailComponent } from './daythree/daythree-fail/daythree-fail.component';
import { DaythreePassComponent } from './daythree/daythree-pass/daythree-pass.component';
import { DayfourLawyerComponent } from './dayfour/dayfour-lawyer/dayfour-lawyer.component';
import { DayfourNolawyerComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer.component';
import { DayfourNolawyer2Component } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2.component';
import { DayfourNolawyer2CalmComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-calm/dayfour-nolawyer2-calm.component';
import { DayfourNolawyer2CalmObjComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-calm/dayfour-nolawyer2-calm-obj/dayfour-nolawyer2-calm-obj.component';
import { DayfourNolawyer2CalmObjDanceComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-calm/dayfour-nolawyer2-calm-obj/dayfour-nolawyer2-calm-obj-dance/dayfour-nolawyer2-calm-obj-dance.component';
import { DayfourNolawyer2NotCalmComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-not-calm/dayfour-nolawyer2-not-calm.component';
import { DayfourLawyerJeffComponent } from './dayfour/dayfour-lawyer/dayfour-lawyer-jeff/dayfour-lawyer-jeff.component';
import { DayfourNolawyer2ConfessComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-confess/dayfour-nolawyer2-confess.component';
import { EnlistComponent } from './enlist/enlist.component';
import { EnlistLetterComponent } from './enlist/enlist-letter/enlist-letter.component';
import { EnlistOldentriesComponent } from './enlist/enlist-oldentries/enlist-oldentries.component';
import { EnlistDeploymentComponent } from './enlist/enlist-deployment/enlist-deployment.component';
import { EnlistDeploymentSpyComponent } from './enlist/enlist-deployment/enlist-deployment-spy/enlist-deployment-spy.component';
import { EnlistDeploymentAskComponent } from './enlist/enlist-deployment/enlist-deployment-ask/enlist-deployment-ask.component';
import { EnlistDeploymentSpyPassComponent } from './enlist/enlist-deployment/enlist-deployment-spy/enlist-deployment-spy-pass/enlist-deployment-spy-pass.component';
import { EnlistDeploymentSpyFailComponent } from './enlist/enlist-deployment/enlist-deployment-spy/enlist-deployment-spy-fail/enlist-deployment-spy-fail.component';
import { EnlistDeploymentSpyChaosComponent } from './enlist/enlist-deployment/enlist-deployment-spy-pass/enlist-deployment-spy-chaos/enlist-deployment-spy-chaos.component';
import { EnlistDeploymentSpyPrepareComponent } from './enlist/enlist-deployment/enlist-deployment-spy-pass/enlist-deployment-spy-prepare/enlist-deployment-spy-prepare.component';
import { DayfourLawyerJamesComponent } from './dayfour/dayfour-lawyer/dayfour-lawyer-james/dayfour-lawyer-james.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    DaytwoComponent,
    DayoneComponent,
    TutorialComponent,
    Tutorial2Component,
    DaythreeComponent,
    DaythreeFailComponent,
    DaythreePassComponent,
    DayfourLawyerComponent,
    DayfourNolawyerComponent,
    DayfourNolawyer2Component,
    DayfourNolawyer2CalmComponent,
    DayfourNolawyer2CalmObjComponent,
    DayfourNolawyer2CalmObjDanceComponent,
    DayfourNolawyer2NotCalmComponent,
    DayfourLawyerJeffComponent,
    DayfourNolawyer2ConfessComponent,
    EnlistComponent,
    EnlistLetterComponent,
    EnlistOldentriesComponent,
    EnlistDeploymentComponent,
    EnlistDeploymentSpyComponent,
    EnlistDeploymentAskComponent,
    EnlistDeploymentSpyPassComponent,
    EnlistDeploymentSpyFailComponent,
    EnlistDeploymentSpyChaosComponent,
    EnlistDeploymentSpyPrepareComponent,
    DayfourLawyerJamesComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
  ],
  exports: [
    DaytwoComponent,
    DayoneComponent,
    TutorialComponent,
    Tutorial2Component,
    DaythreeComponent,
    DaythreeFailComponent,
    DaythreePassComponent,
    DayfourLawyerComponent,
    DayfourNolawyerComponent,
    DayfourNolawyer2Component,
    DayfourNolawyer2CalmComponent,
    DayfourNolawyer2CalmObjComponent,
    DayfourNolawyer2CalmObjDanceComponent,
    DayfourNolawyer2NotCalmComponent,
    DayfourLawyerJeffComponent,
    DayfourNolawyer2ConfessComponent,
    EnlistComponent,
    EnlistLetterComponent,
    EnlistOldentriesComponent,
    EnlistDeploymentComponent,
    EnlistDeploymentSpyComponent,
    EnlistDeploymentAskComponent,
    EnlistDeploymentSpyPassComponent,
    EnlistDeploymentSpyFailComponent,
    EnlistDeploymentSpyChaosComponent,
    EnlistDeploymentSpyPrepareComponent,
    DayfourLawyerJamesComponent,
  ]
})
export class ArticlesModule { }
