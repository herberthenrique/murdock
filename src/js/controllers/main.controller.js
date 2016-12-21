import templateDefault from 'pug!../../templates/default.pug'; // eslint-disable-line import/no-extraneous-dependencies,import/no-unresolved
import { appendHtmlWithTemplate } from '../helper/helper.general';


export default class ProductController {
  constructor() {
    appendHtmlWithTemplate(templateDefault, 'app', { data: 'Murdock' });
  }
}
