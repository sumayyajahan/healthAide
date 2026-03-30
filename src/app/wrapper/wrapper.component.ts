import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ContentComponent } from "../admin-layout/components/content/content.component";
import { ScrollComponent } from "../scroll/scroll.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [SidebarComponent, ContentComponent, ScrollComponent, ButtonComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {

}
