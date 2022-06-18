import { MondayStack } from './MondayStack';
import { App } from '@serverless-stack/resources';

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'functions',
    bundle: {
      format: 'esm',
      minify: true,
    },
  });
  app.stack(MondayStack);
}
