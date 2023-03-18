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
  { path: 'home', component: HomeComponent, resolve: { load: 'loading' } },
  { path: 'about', component: AboutComponent, resolve: { load: 'loading' }},
  { path: 'project', component: ProjectComponent, resolve: { load: 'loading' } },
  { path: 'skill', component: SkillComponent, resolve: { load: 'loading' } },
  { path: 'contact', component: ContactComponent, resolve: { load: 'loading' } },
  { path: '**', component: NotFoundComponent, resolve: { load: 'loading' } },
  { path: '', redirectTo: 'home', pathMatch: 'full', resolve: { load: 'loading' } }
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
