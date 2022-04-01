class User{
  #user_id
  #username
  #lastname
  #firstname
  #phone
  #email
  #usersex
  #age
  #password
  #groups
  #friends
  constructor(props){
      this.#user_id = props.user_id;
      this.#username = props.username;
      this.#lastname = props.lastname;
      this.#firstname = props.firstname;
      this.#phone = props.phone;
      this.#email = props.email;
      this.#usersex = props.usersex;
      this.#age = props.age;
      this.#password = props.password;
      this.#groups = props.groups;
      this.#friends = props.friends;
  }
}
module.exports = User;