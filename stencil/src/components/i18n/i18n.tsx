import { Component, Prop, State } from '@stencil/core';
import { store, Unsubscribe } from '@stencil/redux';
import { DEFAULT_LANG, i18n, I18nKey, SupportedLanguages } from '../../yahtzee-toolkit';

@Component({
  tag: 'yahtzee-i18n',
  styleUrl: 'i18n.css',
  shadow: false,
})
export class I18n {
  @Prop({ mutable: true }) i18n: I18nKey = '';
  @State() currentLang: SupportedLanguages = DEFAULT_LANG;

  unsubscribe!: Unsubscribe;

  connectedCallback() {
    this.unsubscribe = store.mapStateToProps(this, state => {
      return { currentLang: state.currentLang };
    });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  render() {
    return i18n(this.currentLang, this.i18n);
  }
}
