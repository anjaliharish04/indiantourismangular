import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';
import { ContactComponent } from './pages/contact/contact.component';
export const routes: Routes = [

{path:'', component:HomeComponent},
{
    path:'state',component:AboutComponent
},
{
    path:'state/:id',component:SingleStateComponent
},
{
    path:'contact',component:ContactComponent
}
];