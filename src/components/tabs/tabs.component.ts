import {Component, EventEmitter, Output, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'jaspero-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  @Output() tabSelected = new EventEmitter<string | TemplateRef<any>>();

  tabs: TabComponent[] = [];

  selectTab(selectedTab: TabComponent) {
	this.tabs.forEach( tab => tab.active = false);
	selectedTab.active = true;
	this.tabSelected.emit(selectedTab.title);
  }

  addTab(tab: TabComponent) {
	const index = this.tabs.findIndex(t => t.title === tab.title);

	if (index !== -1) {
	  this.tabs[index] = tab;
	} else {
	  this.tabs.push(tab);
	}
  }
}