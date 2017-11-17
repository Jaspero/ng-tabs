import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './components/tabs/tabs.component';
import {TabComponent} from './components/tab/tab.component';
import {VariableContentComponent} from './components/variable-content/variable-content.component';

export * from './components/tabs/tabs.component';
export * from './components/tab/tab.component';

@NgModule({
  imports: [
	CommonModule
  ],
  declarations: [
	TabsComponent,
	TabComponent,
	VariableContentComponent
  ],
  exports: [
	TabsComponent,
	TabComponent,
  ]
})
export class JasperoTabsModule {
}
