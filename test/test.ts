import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmarkdown from '../ts/index';

tap.test('first test', async () => {
  const mdString = smartmarkdown.markdownToHtml('# Hi!');
  expect(mdString).to.equal('<h1 id="hi">Hi!</h1>\n');
});

tap.start();
