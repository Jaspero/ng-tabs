[![Build Status](https://travis-ci.org/Jaspero/ng-tabs.svg?branch=master)](https://travis-ci.org/jaspero/ng-tabs)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/ng-tabs.svg)](https://www.npmjs.com/package/@jaspero/ng-tabs)

# NG Tabs
An easy tabs implementation for Angular.

A demo can be found [here](https://stackblitz.com/edit/jaspero-ng-tabs?file=app%2Fexample.component.html)

## Installation

To install this library, run:

```bash
$ npm install --save @jaspero/ng-tabs
```

## Setup
Import `JasperoTabsModule` in your `@NgModule`:

```ts
@NgModule({
    imports: [
        JasperoTabsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

Then create the component in a root component (you can create it anywhere but you can only use it in that component on any lower ones).

## How To Use
You can use any of a following will approaches:
```html
<jaspero-tabs>
  <jaspero-tab [tabTitle]="templateRef">Content 1</jaspero-tab>
  <jaspero-tab [tabTitle]="'<p>example 2</p>'">Content 2</jaspero-tab>
  <jaspero-tab tabTitle="example 3">Content 3</jaspero-tab>
</jaspero-tabs>
<ng-template #templateRef>
  <p>This is an example</p>
</ng-template>
```
### Options

Available inputs: 

```typescript
tabTitle: string | TemplateRef<any> = 'Tab'; // default value is 'Tab'
active: boolean // defaults to the first if no tabs are active
disabled: boolean // default value is false. Prevents tab from being toggled
```

**Note:**

The `tabTitle` input can be a string or a TemplateRef.

### FAQ

**Does this library support AoT?**

Yes AoT is supported. 

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Jaspero co.](mailto:info@jaspero.co)
