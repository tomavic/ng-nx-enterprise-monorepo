import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

import { TranslocoService } from '@jsverse/transloco';

export type DisplayTheme = 'light' | 'dark';
export type AppLanguage = 'en' | 'de';

/**
 * App-wide layout state: the colour theme and the language.
 * Plain signals are enough here; there is no server data, no history and nothing to undo.
 */
@Injectable({ providedIn: 'root' })
export class LayoutStore {
  private readonly transloco = inject(TranslocoService);
  private readonly root = inject(DOCUMENT).documentElement;

  readonly theme = signal<DisplayTheme>('light');
  readonly language = signal<AppLanguage>('en');

  constructor() {
    // Tailwind reads the `dark` class (darkMode: 'class'); `lang` tells screen readers and fonts which language is shown.
    effect(() => this.root.classList.toggle('dark', this.theme() === 'dark'));
    effect(() => this.root.setAttribute('lang', this.language()));
  }

  setTheme(theme: DisplayTheme): void {
    this.theme.set(theme);
  }

  setLanguage(language: AppLanguage): void {
    this.language.set(language);
    this.transloco.setActiveLang(language);
  }
}
