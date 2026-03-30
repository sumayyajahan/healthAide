import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentComponent } from '../admin-layout/components/content/content.component';
import { SpreadsheetComponent } from '../admin-layout/components/spreadsheet/spreadsheet.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
