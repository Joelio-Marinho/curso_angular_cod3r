import { HeaderData } from './header-data-model';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{
    return this.headerService.HeaderData.title
  }
  get icon(): string{
    return this.headerService.HeaderData.icon
  }

  get routeUrl(): string{
    return this.headerService.HeaderData.routeUrl
  }


}
