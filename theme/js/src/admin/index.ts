import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('hytale-modding-theme', () => {
  console.log('[hytale-modding/theme] Hello, admin!');
});
