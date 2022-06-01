import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { DayoneComponent } from './dayone/dayone.component';
import { DaytwoComponent } from './daytwo/daytwo.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { Tutorial2Component } from './tutorial2/tutorial2.component';
import { DaythreeComponent } from './daythree/daythree.component';
import { DaythreeFailComponent } from './daythree/daythree-fail/daythree-fail.component';
import { DaythreePassComponent } from './daythree/daythree-pass/daythree-pass.component';
import { DayfourLawyerComponent } from './dayfour/dayfour-lawyer/dayfour-lawyer.component';
import { DayfourNolawyerComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer.component';
import { DayfourNolawyer2Component } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2.component';
import { DayfourNolawyer2CalmComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-calm/dayfour-nolawyer2-calm.component';
import { DayfourNolawyer2CalmObjDanceComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-calm/dayfour-nolawyer2-calm-obj/dayfour-nolawyer2-calm-obj-dance/dayfour-nolawyer2-calm-obj-dance.component';
import { DayfourNolawyer2CalmObjComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-calm/dayfour-nolawyer2-calm-obj/dayfour-nolawyer2-calm-obj.component';
import { DayfourNolawyer2NotCalmComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-not-calm/dayfour-nolawyer2-not-calm.component';
import { DayfourNolawyer2ConfessComponent } from './dayfour/dayfour-nolawyer/dayfour-nolawyer2/dayfour-nolawyer2-confess/dayfour-nolawyer2-confess.component';
import { EnlistComponent } from './enlist/enlist.component';
import { EnlistLetterComponent } from './enlist/enlist-letter/enlist-letter.component';
import { EnlistOldentriesComponent } from './enlist/enlist-oldentries/enlist-oldentries.component';
import { EnlistDeploymentComponent } from './enlist/enlist-deployment/enlist-deployment.component';
import { EnlistDeploymentSpyComponent } from './enlist/enlist-deployment/enlist-deployment-spy/enlist-deployment-spy.component';
import { EnlistDeploymentAskComponent } from './enlist/enlist-deployment/enlist-deployment-ask/enlist-deployment-ask.component';
import { EnlistDeploymentSpyPassComponent } from './enlist/enlist-deployment/enlist-deployment-spy/enlist-deployment-spy-pass/enlist-deployment-spy-pass.component';
import { EnlistDeploymentSpyFailComponent } from './enlist/enlist-deployment/enlist-deployment-spy/enlist-deployment-spy-fail/enlist-deployment-spy-fail.component';
import { DayfourLawyerJamesComponent } from './dayfour/dayfour-lawyer/dayfour-lawyer-james/dayfour-lawyer-james.component';
import { DayfourLawyerJeffComponent } from './dayfour/dayfour-lawyer/dayfour-lawyer-jeff/dayfour-lawyer-jeff.component';


const routes: Routes = [
{ path: '', component: ArticlesComponent },
{ path: 'ef462104-4d0a-48df-aa1d-07f420e4012b', component: DayoneComponent },
{ path: 'b2f3a0b7-52af-4e01-9c9b-7c5819eb4c55', component: DaytwoComponent },
{ path: 'b103beab-ecb1-4b94-bd2e-fd719745a363', component:  DaythreeComponent},
{ path: '02a11d5e-2318-49e4-bb6d-cb6dc7fbb93b', component:  DaythreeFailComponent},
{ path: '816613be-161b-4f62-8f17-f1cfa1685ac2', component:  DaythreePassComponent},
{ path: 'e659e05d-bcb8-4ff6-aad5-e78824b3fc72', component:  DayfourLawyerComponent},
{ path: '2688dc47-e824-47a2-8182-85b85e2c1902', component:  DayfourNolawyerComponent},
{ path: 'd644b72d-5255-4244-84f3-a559dcd9403e', component:  DayfourNolawyer2Component},
{ path: 'bafb2a14-d5ce-42e9-a5e9-dfccce65887d', component:  DayfourNolawyer2CalmComponent},
{ path: 'cbff2071-8bd7-4d98-b14f-8c11665c557c', component:  DayfourNolawyer2CalmObjDanceComponent},
{ path: '4d6bde44-2697-41e0-a76c-371ab46e2ea2', component:  DayfourNolawyer2CalmObjComponent},
{ path: '0b884a30-6d2a-4630-98fc-9b177834426e', component:  DayfourNolawyer2NotCalmComponent},
{ path: 'be909345-6437-44e8-9564-eb1825c75054', component:  DayfourNolawyer2ConfessComponent},
{ path: '102b90a2-321e-4f31-adec-7502e9b26a1c', component:  EnlistComponent},
{ path: '764548c3-e01b-4762-921c-26e039ff91de', component:  EnlistLetterComponent},
{ path: '292a1886-091d-4d10-90c9-7d10e3a657cf', component:  EnlistOldentriesComponent},
{ path: '54e45547-541a-4c83-a4aa-824fc1033c99', component:  EnlistDeploymentComponent},
{ path: 'd3566514-104e-4633-bdbb-97e334a2a43d', component:  EnlistDeploymentAskComponent},
{ path: 'b5826154-cff0-4882-80d9-7d3f3aa710e3', component:  EnlistDeploymentSpyComponent},
{ path: 'e86f50c4-f692-4081-bf00-4f15656ea76f', component:  EnlistDeploymentSpyPassComponent},
{ path: '3820970a-2be0-4e6a-a7f3-f5f6a235bd36', component:  EnlistDeploymentSpyFailComponent},
{ path: 'a728d071-ce0d-4260-9cb0-8304a7eae4ee', component:  DayfourLawyerJamesComponent},
{ path: '6eff2f4d-7049-449d-a289-95d9f1d2bc0b', component:  DayfourLawyerJeffComponent},







{ path: 'tutorial', component: TutorialComponent},
{ path: 'tutorial2', component: Tutorial2Component}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
