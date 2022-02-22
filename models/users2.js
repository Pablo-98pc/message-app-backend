class User{

  constructor(props){
      this.user_id = props.user_id;
      this.username = props.username;
      this.lastname = props.lastname;
      this.firstname = props.firstname;
      this.phonename = props.phonename;
      this.emailname = props.emailname;
      this.usersex = props.usersex;
      this.age = props.age;
      this.password = props.password;
      this.groups = props.groups;
      this.friends = props.friends;
  }
}
module.exports = User;