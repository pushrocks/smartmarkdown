import * as plugins from './smartmarkdown.plugins';

export class SmartMarkdown {
  constructor() {}

  /**
   * converts markdown to html
   * @param mdString
   */
  public markdownToHtml(mdString: string): string {
    return plugins.marked(mdString);
  }

  public htmlToMarkdown(htmlString): string {
    const turndownInstance = new plugins.turndown({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced'
    });
    return turndownInstance.turndown(htmlString);
  }
}
