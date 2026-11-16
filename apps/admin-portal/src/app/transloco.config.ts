import { Injectable } from '@angular/core';

import { Translation, TranslocoLoader } from '@jsverse/transloco';

/**
 * Loads each language as its own lazy chunk. Unlike an HTTP request for ./i18n/<lang>.json,
 * this also works while pages are prerendered at build time, when there is no server to ask.
 */
@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  getTranslation(lang: string): Promise<Translation> {
    return import(`../../public/i18n/${lang}.json`).then(m => m.default);
  }
}
