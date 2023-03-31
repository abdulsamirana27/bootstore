import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FuseFindByKeyPipeModule} from "../../../../@fuse/pipes/find-by-key";
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        LandingHomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatSlideToggleModule,
        MatFormFieldModule,

        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatTooltipModule,
        FuseFindByKeyPipeModule,
    ]
})
export class LandingHomeModule
{
}
