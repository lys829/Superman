/**
 * Created by zeng on 16-8-23.
 */

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    this.assign('title', '管理员登录');

    //判断登录
    let userinfo = await this.session("userInfo");
    if(!think.isEmpty(userinfo)) {
      return this.redirect('/');
    }

    return this.display();
  }

  /**
   * 用户登录操作
   * @returns {Promise|*|void|PreventPromise}
   */
  async loginAction() {
    let data = this.post();
    
    let username = await data.username;
    let password = think.md5(data.password);

    let result = await this.model('users').findUser(username);

    if(username == result.username && password == result.password) {
      delete result.password;
      this.session("userInfo", result);

      return this.json({status: 1, msg: '登录成功'})
    } else {
      return this.json({status: 0, msg: '登录失败'})
    }
  }

  async exitAction() {
    this.session();

    return this.redirect('/login');
  }

  async findAction () {
    let data = await this.model('users').where({id: 1}).find();
    this.success(data);
  }
}