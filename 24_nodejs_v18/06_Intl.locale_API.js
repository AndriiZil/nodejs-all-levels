'use strict';

const englishUsLocale = new Intl.Locale('en-us');

console.log(englishUsLocale.calendars); // [ 'gregory' ]

console.log(englishUsLocale.collations); // [ 'emoji', 'eor' ]

console.log(englishUsLocale.hourCycles); // [ 'h12' ]

console.log(englishUsLocale.numberingSystems); // [ 'latn' ]

console.log(englishUsLocale.timeZones);
/**
 * [
 *   'America/Adak',
 *   'America/Anchorage',
 *   'America/Boise',
 *   'America/Chicago',
 *   'America/Denver',
 *   'America/Detroit',
 *   'America/Indiana/Knox',
 *   'America/Indiana/Marengo',
 *   'America/Indiana/Petersburg',
 *   'America/Indiana/Tell_City',
 *   'America/Indiana/Vevay',
 *   'America/Indiana/Vincennes',
 *   'America/Indiana/Winamac',
 *   'America/Indianapolis',
 *   'America/Juneau',
 *   'America/Kentucky/Monticello',
 *   'America/Los_Angeles',
 *   'America/Louisville',
 *   'America/Menominee',
 *   'America/Metlakatla',
 *   'America/New_York',
 *   'America/Nome',
 *   'America/North_Dakota/Beulah',
 *   'America/North_Dakota/Center',
 *   'America/North_Dakota/New_Salem',
 *   'America/Phoenix',
 *   'America/Sitka',
 *   'America/Yakutat',
 *   'Pacific/Honolulu'
 * ]
 */

console.log(englishUsLocale.textInfo); // { direction: 'ltr' }

console.log(englishUsLocale.weekInfo); // { firstDay: 7, weekend: [ 6, 7 ], minimalDays: 1 }
