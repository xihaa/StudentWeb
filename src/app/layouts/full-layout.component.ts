import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled = false;
  isCollapsed :boolean = false ;
  public status: {isopen: boolean} = {isopen: false};
  public max: number=100;
  public dynamic: number=20;
  public daycuo:number;
  submitted = false;
  active = true;
  onSubmit() {
    this.submitted = true;
    this.isCollapsed = !this.isCollapsed;
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }
  public collapsed(event: any): void {
    console.log(event);

  };
  public expanded(event: any): void {
    console.log(event);
  };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}
