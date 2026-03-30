import { Component } from '@angular/core';
import { SpreadsheetAllModule } from "@syncfusion/ej2-angular-spreadsheet";

@Component({
  selector: 'app-spreadsheet',
  standalone: true,
  imports: [SpreadsheetAllModule],
  templateUrl: './spreadsheet.component.html',
  styleUrl: './spreadsheet.component.css'
})
export class SpreadsheetComponent {
data = [];
}
