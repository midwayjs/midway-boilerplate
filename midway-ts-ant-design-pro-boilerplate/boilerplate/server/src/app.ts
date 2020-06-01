import { Application } from 'midway';

export = (app: Application) => {

  app.beforeStart(async () => {
    console.log('🚀 Your awesome APP is launching...');
    // start code
    console.log('✅ Your awesome APP launched');
  });
};
