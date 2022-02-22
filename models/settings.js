class Settings{

  constructor(props){
      this.user_id = props.user_id;
      this.show_state = props.show_state;
      this.allow_unknown_messages = props.allow_unknown_messages;
  }
}
module.exports = Settings;