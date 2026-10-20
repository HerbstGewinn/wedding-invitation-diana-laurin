// Google Form "Hochzeit Laurin & Diana".
// The site shows the questions in the visitor's language but always sends the
// form's original (German) option values, so every response lands in one sheet.
export const FORM_ID = '1FAIpQLSeUlAstVmTT37vX0Bx26jKo7CxWXDXWaHG27DMij8xkxuhN7A';
export const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
export const FORM_VIEW = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;

export const ENTRY = {
  attend: 'entry.877086558',
  names: 'entry.1498135098',
  stay: 'entry.1424661284',
  food: 'entry.1934006356',
  transfer: 'entry.2606285',
} as const;

export const VALUE = {
  attend: { yes: 'Ja, ich bin dabei!', no: 'Nein, ich kann leider nicht dabei sein.' },
  stay: { one: '10-11.07 (One night)', two: '10-12.07 (Two nights)' },
  food: { none: 'Keine besonderen Wünsche', veggie: 'Vegetarisch', other: '__other_option__' },
  transfer: { yes: 'Ja', no: 'Nein' },
} as const;

// "Wie lange bleibst du?" is a required question in the Google Form, so a
// declining guest still has to send a value for it. Once it is made optional
// in the form, set this to false and declines send only attendance + name.
export const STAY_REQUIRED_IN_FORM = true;
