import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionsComponent } from './sections.component';
import { HeadersComponent } from './headers/headers.component';
import { FeaturesComponent } from './features/features.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DescriptionAreasComponent } from './description-areas/description-areas.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCGQHmu90tR2SHtsW7QI-LFTrmYTEpV_bU'
        }),
        RouterModule
    ],
    declarations: [
        SectionsComponent,
        HeadersComponent,
        FeaturesComponent,
        BlogsComponent,
        TeamsComponent,
        ProjectsComponent,
        PricingComponent,
        TestimonialsComponent,
        DescriptionAreasComponent,
        ContactsComponent
    ],
    exports: [
        SectionsComponent
    ]
})
export class SectionsModule { }
