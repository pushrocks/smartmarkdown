import * as plugins from './smartmarkdown.plugins';

export const markdownToHtml = (mdString: string): string => plugins.marked(mdString);
