class Message{

  constructor(props){
      this.message_id = props.message_id;
      this.groupmessage = props.groupmessage;
      this.to_group = props.to_group;
      this.to_user = props.to_user;
      this.from_user = props.from_user;
  }
}
module.exports = Message;