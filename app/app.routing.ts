import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ColaboradorComponent } from './colaboradores/colaborador.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: ColaboradorComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }