import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//Externals
import { NgxSpinnerModule } from "ngx-bootstrap-spinner";
@NgModule({
    declarations: [

    ],
    imports :[
        NgxSpinnerModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule {}