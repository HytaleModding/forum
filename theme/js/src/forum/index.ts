import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('hytale-modding-theme', () => {
  console.log('[hytale-modding/theme] Hello, forum!');
});
