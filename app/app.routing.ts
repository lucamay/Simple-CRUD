import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ColaboradorComponent } from './colaboradores/colaborador.component';
import { AddColaboradorComponent} from './colaboradores/addcolaborador.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'colaboradores', component: ColaboradorComponent },
            { path: '', component: AddColaboradorComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }