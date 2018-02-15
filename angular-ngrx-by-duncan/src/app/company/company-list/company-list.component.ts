import { Component, OnInit, state } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from '../../models';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state';
import * as companyAcitons from './../../actions/company.actions';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<any>;

   constructor(
     private store: Store<AppState>
  ) { 
    this.companies$=this.store.select(state=>state.companies)
  }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.store.dispatch(new companyAcitons.LoadCompaniesAction())
  }

  deleteCompany(companyId: number) {

  }

}
