class Message{

  constructor(props){
      this.id = props.id;
      this.groupmessage = props.groupmessage;
      this.text = props.text;
      this.subject = props.subject;
      this.from_user = props.from_user;
      this.to_user = props.to_user;
      this.from_group = props.from_group;
      this.to_group = props.to_group;
      this.date = props.date;
  }
}
module.exports = Message;