import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Actions, Effect,  } from '@ngrx/effects';
import * as companyActions from './../actions/company.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyEffects {
    constructor(
        private actions$: Actions,
        private companyService: CompanyService
    ) { }

    // tslint:disable-next-line:member-ordering
    @Effect() loadCompanies$ = this.actions$
        .ofType(companyActions.LOAD_COMPANIES)
        .switchMap(() => {
            return this.companyService.loadCompanies()
                .map(companies => new companyActions.LoadCompaniesSuccessAction(companies));
        });

    

};