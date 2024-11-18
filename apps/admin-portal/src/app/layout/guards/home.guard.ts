import { CanActivateFn } from '@angular/router';

export const HomeGuard: CanActivateFn = (route, state) => {
  return true;
};
