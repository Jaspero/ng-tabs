import {Input, Component, OnInit, TemplateRef, ViewEncapsulation, HostBinding, ChangeDetectionStrategy} from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
  selector: 'jaspero-tab',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit {

  @HostBinding('class.active')
  @Input()
  active = false;

  @Input() title: string | TemplateRef<any> = 'Tab';
  @Input() disabled = false;

  isTemplate = false;
  position: number;

  constructor(
    private tabsComp: TabsComponent
  ) {}

  ngOnInit() {
    this.position = this.tabsComp.tabs.length;
    this.isTemplate = this.title instanceof TemplateRef;
    this.tabsComp.addTab(this);
  }
}
