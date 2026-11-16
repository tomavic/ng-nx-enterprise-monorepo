import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TranslocoService } from '@jsverse/transloco';

import { LayoutStore } from './layout.store';

describe('LayoutStore', () => {
  const setActiveLang = jest.fn();

  function setup() {
    TestBed.configureTestingModule({
      providers: [{ provide: TranslocoService, useValue: { setActiveLang } }]
    });
    return { store: TestBed.inject(LayoutStore), root: TestBed.inject(DOCUMENT).documentElement };
  }

  it('starts light and in English', () => {
    const { store } = setup();
    expect(store.theme()).toBe('light');
    expect(store.language()).toBe('en');
  });

  it('puts the dark class on the page when the theme is dark', () => {
    const { store, root } = setup();
    store.setTheme('dark');
    TestBed.tick();
    expect(root.classList.contains('dark')).toBe(true);

    store.setTheme('light');
    TestBed.tick();
    expect(root.classList.contains('dark')).toBe(false);
  });

  it('switches Transloco and the page language together', () => {
    const { store, root } = setup();
    store.setLanguage('de');
    TestBed.tick();
    expect(setActiveLang).toHaveBeenCalledWith('de');
    expect(root.getAttribute('lang')).toBe('de');
  });
});
