import { Component } from '@angular/core';
import { SpreadsheetAllModule } from "@syncfusion/ej2-angular-spreadsheet";
import { PatientDetails } from './data';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-spreadsheet',
  standalone: true,
  imports: [SpreadsheetAllModule],
  templateUrl: './spreadsheet.component.html',
  styleUrl: './spreadsheet.component.css'
})
export class SpreadsheetComponent {
  title = 'patientAide';
public data:DataManager = new DataManager({
  url:"https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});
}
