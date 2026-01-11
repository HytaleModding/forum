import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('hytalemodding-theme', () => {
  console.log('[hytalemodding/theme] Hello, forum!');
});
