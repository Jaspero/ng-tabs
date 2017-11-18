import {Input, Component, TemplateRef, ViewEncapsulation, HostBinding, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'jaspero-tab',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TabComponent {

  @HostBinding('class.active')
  @Input()
  active = false;

  @Input() tabTitle: string | TemplateRef<any> = 'Tab';
  @Input() disabled = false;

  isTemplate = false;
}
