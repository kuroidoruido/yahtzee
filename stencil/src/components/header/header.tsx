import { Component, h, Prop } from '@stencil/core';
import { store, Unsubscribe } from '@stencil/redux';
import { changeLang, SupportedLanguages, SUPPORTED_LANGUAGES } from '../../yahtzee-toolkit';

@Component({
  tag: 'yahtzee-header',
  styleUrl: 'header.css',
  shadow: true,
})
export class Header {
  @Prop({ reflect: true, mutable: true }) currentLang: SupportedLanguages = 'en';
  changeLang: typeof changeLang;
  unsubscribe!: Unsubscribe;

  constructor() {
    this.onLangChange = this.onLangChange.bind(this);
  }

  connectedCallback() {
    this.unsubscribe = store.mapStateToProps(this, state => {
      return { currentLang: state.currentLang };
    });
    store.mapDispatchToProps(this, { changeLang });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  onLangChange(event: Event) {
    const lang = (event?.target as any)?.value;
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      this.changeLang(lang);
    }
  }

  render() {
    return (
      <header>
        <h1>Anthony's Yahtzee</h1>
        <select name="lang" class="select" onChange={this.onLangChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
              <option selected={lang === this.currentLang}>
                {lang}
              </option>)
          )}
        </select>
      </header>
    );
  }
}
