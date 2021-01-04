//ActionProvider class implements actions that we want to take based on parsing the message.
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet(){
        const greetingMessage = this.createChatBotMessage("How's it going, Wanna listen to some music?")
        this.updateChatbotState(greetingMessage)
    }

    suggestions(){
      const message = this.createChatBotMessage(
        "Okay, here are some suggestions:",
        {
          widget: "learningOptions",
        }
      )

      this.updateChatbotState(message)
    }

    handleRecents = () => {
      const message = this.createChatBotMessage(
        "Bet, here's a list of our most recent playlists:",
        {
          widget: "recents",
        }
      )

      this.updateChatbotState(message)
    }

    handleLove = () => {
      const message = this.createChatBotMessage(
        "I'm so glad I'm not plagued by human emotions, here's some music for your meaty heart:",
        {
          widget: "love",
        }
      )

      this.updateChatbotState(message)
    }

    handleDriving = () => {
      const message = this.createChatBotMessage(
        "Where the hell you going? Here's what I'd listen to though:",
        {
          widget: "drive",
        }
      )

      this.updateChatbotState(message)
    }
    
    handleBeats = () => {
      const message = this.createChatBotMessage(
        "Party animal over here! I think you'll like this selection:",
        {
          widget: "upbeat",
        }
      )

      this.updateChatbotState(message)
    }

    handleSurprises = () => {
      const message = this.createChatBotMessage(
        "How come humans never make up their minds. Anyways, I hope you enjoy this selection:",
        {
          widget: "surprises",
        }
      )

      this.updateChatbotState(message)
    }

/*This function below is set in the constructor, and is passed in from the top
  level Chatbot component. The setState function here actually manipulates
  the top level state of the Chatbot, so it's important that we make sure 
  that we preserve the previous state. 
*/
    updateChatbotState(message){
      this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;