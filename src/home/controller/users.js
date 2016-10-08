'use strict';
/**
 * rest controller
 * @type {Class}
 */
export default class extends think.controller.rest {
  /**
   * init
   * @param  {Object} http []
   * @return {}      []
   */
  init(http){
    super.init(http);

    this._method = 'method';
  }
  /**
   * before magic method
   * @return {Promise} []
   */
  __before(){
    //隐藏password字段
    this.modelInstance.fieldReverse("password");
  }

  /**
   * 注册成功,添加用户
   */
  async postAction() {
    let data = this.post();

    if(!data.username) {
      return this.fail();
    }

    let username = data.username;
    let password = think.md5(data.password);

    let param = {
      username: username,
      password: password,
      admin: false,
      avatar : '',
      created_at: (new Date()).getTime()
    };
    // let result = await this.model('user').add(data);
    let result = await this.modelInstance.addUser(param);
    
    return this.success(result);
  }
}