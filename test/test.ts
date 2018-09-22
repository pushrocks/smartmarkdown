import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmarkdown from '../ts/index';

tap.test('first test', async () => {
  console.log(smartmarkdown.standardExport);
});

tap.start();
