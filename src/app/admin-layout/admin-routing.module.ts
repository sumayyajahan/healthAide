import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout.component";

import { ContentComponent } from "./components/content/content.component";
import { SpreadsheetComponent } from "./components/spreadsheet/spreadsheet.component";

export const adminRoutes: Routes = [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: ContentComponent
      },
      {
        path: 'spreadsheet',
        component: SpreadsheetComponent,
      },
     
    ]