import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export const noSpaceValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control.value != null && control.value.indexOf(' ') != -1) {
    return { noSpaceAllowed: true };
  }
  return null;
};
