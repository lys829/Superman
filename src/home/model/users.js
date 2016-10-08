/**
 * Created by zeng on 16-8-24.
 */

export default class extends think.model.base {
  
  addUser(data) {
    return this.add(data);
  }
  
  deleteUser(id) {
    return this.where({id: id}).delete();
  }
  
  updateUser(id, data) {
    return this.where({id: id}).update(data);
  }
  
  findUser(username) {
    return this.where({username: username}).find();
  }
}