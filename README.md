# wc-context-redux
Used to decouple elements (like MyComponent below) from the store, so they can be used with any store

# Usage

## Store provider
```
import { html, LitElement } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import 'wc-context-redux/store-context';

class MyParentClass extends connect(store)(LitElement) {
    render() {
        return html`
            <store-provider .value=${store}>
                <my-app .compositionId="${this.id}"></my-app>
            </store-provider>
        `;
    }
}
```

## Components
```
import connect from 'wc-context-redux/connect';

const mapStateToProps = state => ({
    componentProp = state.stateProp
});
  
const mapDispatchToProps = dispatch => ({
    componentMethod: (theParam) => dispatch(actionCreator(theParam))
});

class MyComponent extends connect(mapStateToProps, mapDispatchToProps)(LitElement) {
   ...
}

```
