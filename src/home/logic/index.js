'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction(){
   
  }

  addAction() {
    this.allowMethods = 'post';

    this.rules = {
      username: 'required',
      password: 'required'
    }
  }
}