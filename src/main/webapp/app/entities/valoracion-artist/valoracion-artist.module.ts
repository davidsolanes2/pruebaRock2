import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Rockbible3SharedModule } from '../../shared';
import { Rockbible3AdminModule } from '../../admin/admin.module';
import {
    ValoracionArtistService,
    ValoracionArtistPopupService,
    ValoracionArtistComponent,
    ValoracionArtistDetailComponent,
    ValoracionArtistDialogComponent,
    ValoracionArtistPopupComponent,
    ValoracionArtistDeletePopupComponent,
    ValoracionArtistDeleteDialogComponent,
    valoracionArtistRoute,
    valoracionArtistPopupRoute,
} from './';

const ENTITY_STATES = [
    ...valoracionArtistRoute,
    ...valoracionArtistPopupRoute,
];

@NgModule({
    imports: [
        Rockbible3SharedModule,
        Rockbible3AdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ValoracionArtistComponent,
        ValoracionArtistDetailComponent,
        ValoracionArtistDialogComponent,
        ValoracionArtistDeleteDialogComponent,
        ValoracionArtistPopupComponent,
        ValoracionArtistDeletePopupComponent,
    ],
    entryComponents: [
        ValoracionArtistComponent,
        ValoracionArtistDialogComponent,
        ValoracionArtistPopupComponent,
        ValoracionArtistDeleteDialogComponent,
        ValoracionArtistDeletePopupComponent,
    ],
    providers: [
        ValoracionArtistService,
        ValoracionArtistPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Rockbible3ValoracionArtistModule {}
