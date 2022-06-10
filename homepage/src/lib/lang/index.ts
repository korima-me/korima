import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

register('en-US', () => import('./en-US.json'));
register('de', () => import('./de.json'));

init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
});
