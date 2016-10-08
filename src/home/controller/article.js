/**
 * Created by zeng on 16-8-23.
 */

import Base from './base';

export default class extends Base {

  /**
   * 详情页
   */
  detailAction() {
    let id = this.get('id');

    this.id = id;
    return this.display();
  }
}