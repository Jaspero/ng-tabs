import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'jaspero-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {
  constructor(
    private _cdr: ChangeDetectorRef
  ) {}

  @ContentChildren(TabComponent) tabs: any;
  @Output() tabSelected = new EventEmitter<{index: number, tab: TabComponent}>();

  ngAfterContentInit() {
    this.tabs.changes.subscribe(res => {
      this.adjustTabs(res);
    });
    this.adjustTabs(this.tabs);
  }

  selectTab(tab: TabComponent, index: number) {

    if (tab.disabled) {
      return;
    }

    this.tabs.forEach((tabComponent, tabIndex) => tabComponent.active = tabIndex === index);
    this.tabSelected.emit({index, tab});
  }

  adjustTabs(entry) {
    let hasActive = false;

    entry.forEach(tab => {
      if (tab.active) {
        hasActive = true;
      }

      tab.isTemplate = tab.tabTitle instanceof TemplateRef;
    });

    if (!hasActive) {
      entry.first.active = true;
    }

    this._cdr.markForCheck();
  }
}
