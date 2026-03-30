import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./admin-layout/components/content/content.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ContentComponent, SidebarComponent, WrapperComponent, SpreadsheetAllModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  public data: Object[] = [{
    "Patient Name" : "Rahima Rahman",
    "DOB" : "01/01/1978",
    "MID" : "MM78902W",


  },
  {}
  ]
}
