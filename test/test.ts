import { expect, tap } from '@pushrocks/tapbundle';
import * as smartmarkdown from '../ts/index';

let smartMarkdownInstance: smartmarkdown.SmartMarkdown;

tap.test('should create a valid instance of SmartMarkdown', async () => {
  smartMarkdownInstance = new smartmarkdown.SmartMarkdown();
  expect(smartMarkdownInstance).to.be.instanceOf(smartmarkdown.SmartMarkdown);
});

tap.test('should convert a markdown string to html', async () => {
  const markdownString = '# Hi!';
  const htmlString = smartMarkdownInstance.markdownToHtml(markdownString);
  expect(htmlString).to.equal('<h1 id="hi">Hi!</h1>\n');
});

tap.test('should convert a html string to markdown', async () => {
  const htmlString = '<h1 id="hi">Hi!</h1>\n<h2>This is it!</h2>';
  const markdownString = smartMarkdownInstance.htmlToMarkdown(htmlString);
  console.log(markdownString);
});

tap.start();
