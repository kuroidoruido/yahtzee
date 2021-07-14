import { Component, h, Fragment } from '@stencil/core';
import { store } from '@stencil/redux';
import { store as yahtzeeStore } from '../../yahtzee-toolkit';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  componentWillLoad() {
    store.setStore(yahtzeeStore);
  }

  render() {
    return (
      <Fragment>
        <yahtzee-header></yahtzee-header>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="app-home" />
          </stencil-route-switch>
        </stencil-router>
      </Fragment>
    );
  }
}
