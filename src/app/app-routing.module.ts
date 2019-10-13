import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { RedComponent } from './red.component';
import { GreenComponent } from './green.component';
import { BlueComponent } from './blue.component';

const routes : Routes = [
    { path : 'red', component : RedComponent },
    { path : 'green', component : GreenComponent },
    { path : 'blue', component : BlueComponent }
    // { path:  '' , redirectTo:  'red', pathMatch:  'full' },
]



@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule{

} 