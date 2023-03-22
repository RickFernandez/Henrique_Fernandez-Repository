import { ContactComponent } from './page/contact/contact.component';
import { SkillComponent } from './page/skill/skill.component';
import { ProjectComponent } from './page/project/project.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';

import { of, delay } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: 'loading',
    useValue: () => of(true).pipe(delay(4000))
  }],
})
export class AppRoutingModule { }
