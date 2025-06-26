import { DateTime } from 'luxon';

export function useHistoricalDataTimezone() {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  function getTimezoneLabel(timezone: string) {
    if (!timezone) {
      return '';
    }
    const now = DateTime.now().setZone(timezone);
    const offset = now.toFormat('ZZ');

    if (window.innerWidth > 550) {
      return `(GMT${offset}) ${timezone.replace('_', ' ')}`;
    }
    return `(GMT${offset})`;
  }

  return {
    userTimezone,
    getTimezoneLabel
  };
}
