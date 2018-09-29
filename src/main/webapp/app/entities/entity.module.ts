import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyapplicationRegionModule } from './region/region.module';
import { MyapplicationCountryModule } from './country/country.module';
import { MyapplicationLocationModule } from './location/location.module';
import { MyapplicationDepartmentModule } from './department/department.module';
import { MyapplicationTaskModule } from './task/task.module';
import { MyapplicationEmployeeModule } from './employee/employee.module';
import { MyapplicationJobModule } from './job/job.module';
import { MyapplicationJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MyapplicationRegionModule,
        MyapplicationCountryModule,
        MyapplicationLocationModule,
        MyapplicationDepartmentModule,
        MyapplicationTaskModule,
        MyapplicationEmployeeModule,
        MyapplicationJobModule,
        MyapplicationJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyapplicationEntityModule {}
