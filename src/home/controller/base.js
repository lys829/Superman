'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before() {

    //设置CSRF值
    let csrf = await this.session('__CSRF__');
    this.assign('csrf', csrf);

    //判断登录
    let userinfo = await this.session("userInfo");

    if(think.isEmpty(userinfo)) {
      if(this.http.controller != 'auth') {
        return this.redirect('/login');
      }
    } else {
      this.assign('userInfo', JSON.stringify(userinfo));
    }


  }
}