'use strict';

console.log(Intl.supportedValuesOf('calendar'));

/**
 * [
 *   'buddhist',      'chinese',
 *   'coptic',        'dangi',
 *   'ethioaa',       'ethiopic',
 *   'gregory',       'hebrew',
 *   'indian',        'islamic',
 *   'islamic-civil', 'islamic-rgsa',
 *   'islamic-tbla',  'islamic-umalqura',
 *   'iso8601',       'japanese',
 *   'persian',       'roc'
 * ]
 */

console.log(Intl.supportedValuesOf('collation'));
/**
 * [
 *   'big5han',  'compat',
 *   'dict',     'emoji',
 *   'eor',      'gb2312',
 *   'phonebk',  'phonetic',
 *   'pinyin',   'reformed',
 *   'searchjl', 'stroke',
 *   'trad',     'unihan',
 *   'zhuyin'
 * ]
 */

console.log(Intl.supportedValuesOf('currency'));
/**
 * [
 *   'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD',
 *   'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF',
 *   'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN',
 *   'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC',
 *   'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD',
 *   'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL',
 *   'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL',
 *   'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR',
 *   'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF',
 *   'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR',
 *   'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK',
 *   'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR',
 *   'MZN', 'NAD', 'NGN', 'NIO',
 *   ... 59 more items
 * ]
 */

console.log(Intl.supportedValuesOf('numberingSystem'));
/**
 * [
 *   'adlm',     'ahom',     'arab',     'arabext',  'bali',
 *   'beng',     'bhks',     'brah',     'cakm',     'cham',
 *   'deva',     'diak',     'fullwide', 'gong',     'gonm',
 *   'gujr',     'guru',     'hanidec',  'hmng',     'hmnp',
 *   'java',     'kali',     'khmr',     'knda',     'lana',
 *   'lanatham', 'laoo',     'latn',     'lepc',     'limb',
 *   'mathbold', 'mathdbl',  'mathmono', 'mathsanb', 'mathsans',
 *   'mlym',     'modi',     'mong',     'mroo',     'mtei',
 *   'mymr',     'mymrshan', 'mymrtlng', 'newa',     'nkoo',
 *   'olck',     'orya',     'osma',     'rohg',     'saur',
 *   'segment',  'shrd',     'sind',     'sinh',     'sora',
 *   'sund',     'takr',     'talu',     'tamldec',  'telu',
 *   'thai',     'tibt',     'tirh',     'tnsa',     'vaii',
 *   'wara',     'wcho'
 * ]
 */

console.log(Intl.supportedValuesOf('timeZone'));
/**
 * [
 *   'Africa/Abidjan',
 *   'Africa/Accra',
 *   'Africa/Addis_Ababa',
 *   'Africa/Algiers',
 *   'Africa/Asmera',
 *   'Africa/Bamako',
 *   'Africa/Bangui',
 *   'Africa/Banjul',
 *   'Africa/Bissau',
 *   'Africa/Blantyre',
 *   'Africa/Brazzaville',
 *   'Africa/Bujumbura',
 *   'Africa/Cairo',
 *   'Africa/Casablanca',
 *   'Africa/Ceuta',
 *   'Africa/Conakry',
 *   'Africa/Dakar',
 *   'Africa/Dar_es_Salaam',
 *   'Africa/Djibouti',
 *   'Africa/Douala',
 *   'Africa/El_Aaiun',
 *   'Africa/Freetown',
 *   'Africa/Gaborone',
 *   'Africa/Harare',
 *   'Africa/Johannesburg',
 *   'Africa/Juba',
 *   'Africa/Kampala',
 *   'Africa/Khartoum',
 *   'Africa/Kigali',
 *   'Africa/Kinshasa',
 *   'Africa/Lagos',
 *   'Africa/Libreville',
 *   'Africa/Lome',
 *   'Africa/Luanda',
 *   'Africa/Lubumbashi',
 *   'Africa/Lusaka',
 *   'Africa/Malabo',
 *   'Africa/Maputo',
 *   'Africa/Maseru',
 *   'Africa/Mbabane',
 *   'Africa/Mogadishu',
 *   'Africa/Monrovia',
 *   'Africa/Nairobi',
 *   'Africa/Ndjamena',
 *   'Africa/Niamey',
 *   'Africa/Nouakchott',
 *   'Africa/Ouagadougou',
 *   'Africa/Porto-Novo',
 *   'Africa/Sao_Tome',
 *   'Africa/Tripoli',
 *   'Africa/Tunis',
 *   'Africa/Windhoek',
 *   'America/Adak',
 *   'America/Anchorage',
 *   'America/Anguilla',
 *   'America/Antigua',
 *   'America/Araguaina',
 *   'America/Argentina/La_Rioja',
 *   'America/Argentina/Rio_Gallegos',
 *   'America/Argentina/Salta',
 *   'America/Argentina/San_Juan',
 *   'America/Argentina/San_Luis',
 *   'America/Argentina/Tucuman',
 *   'America/Argentina/Ushuaia',
 *   'America/Aruba',
 *   'America/Asuncion',
 *   'America/Bahia',
 *   'America/Bahia_Banderas',
 *   'America/Barbados',
 *   'America/Belem',
 *   'America/Belize',
 *   'America/Blanc-Sablon',
 *   'America/Boa_Vista',
 *   'America/Bogota',
 *   'America/Boise',
 *   'America/Buenos_Aires',
 *   'America/Cambridge_Bay',
 *   'America/Campo_Grande',
 *   'America/Cancun',
 *   'America/Caracas',
 *   'America/Catamarca',
 *   'America/Cayenne',
 *   'America/Cayman',
 *   'America/Chicago',
 *   'America/Chihuahua',
 *   'America/Coral_Harbour',
 *   'America/Cordoba',
 *   'America/Costa_Rica',
 *   'America/Creston',
 *   'America/Cuiaba',
 *   'America/Curacao',
 *   'America/Danmarkshavn',
 *   'America/Dawson',
 *   'America/Dawson_Creek',
 *   'America/Denver',
 *   'America/Detroit',
 *   'America/Dominica',
 *   'America/Edmonton',
 *   'America/Eirunepe',
 *   'America/El_Salvador',
 *   ... 328 more items
 * ]
 */

console.log(Intl.supportedValuesOf('unit'));
/**
 * [
 *   'acre',       'bit',        'byte',
 *   'celsius',    'centimeter', 'day',
 *   'degree',     'fahrenheit', 'fluid-ounce',
 *   'foot',       'gallon',     'gigabit',
 *   'gigabyte',   'gram',       'hectare',
 *   'hour',       'inch',       'kilobit',
 *   'kilobyte',   'kilogram',   'kilometer',
 *   'liter',      'megabit',    'megabyte',
 *   'meter',      'mile',       'mile-scandinavian',
 *   'milliliter', 'millimeter', 'millisecond',
 *   'minute',     'month',      'ounce',
 *   'percent',    'petabyte',   'pound',
 *   'second',     'stone',      'terabit',
 *   'terabyte',   'week',       'yard',
 *   'year'
 * ]
 */
