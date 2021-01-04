//MessageParser class implements a parse method.
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
          var substrings = ["hello", "hey", "hi"];
          for (var i = 0 ; i < substrings.length ; i++) 
               if (lowerCaseMessage.includes(substrings[i]))
                    this.actionProvider.greet();
    
//------------------------------------------------------------------------
          var music__substrings = ["music", "playlist", "yes"];
          for (var i = 0 ; i < music__substrings.length ; i++) 
              if (lowerCaseMessage.includes(substrings[i]))
                    this.actionProvider.greet();
    if (lowerCaseMessage.includes("yes")){
      this.actionProvider.suggestions()
    }
//------------------------------------------------------------------------
      if (lowerCaseMessage.includes("recent")){
        this.actionProvider.handleRecents()
      }
//------------------------------------------------------------------------
      if (lowerCaseMessage.includes("feel")){
        this.actionProvider.handleLove()
      }

      if (lowerCaseMessage.includes("love")){
        this.actionProvider.handleLove()
      }

      if (lowerCaseMessage.includes("broke")){
        this.actionProvider.handleLove()
      }

      if (lowerCaseMessage.includes("sad")){
        this.actionProvider.handleLove()
      }
//------------------------------------------------------------------------
      if (lowerCaseMessage.includes("where")){
        this.actionProvider.handleDriving()
      }

      if (lowerCaseMessage.includes("trip")){
        this.actionProvider.handleDriving()
      }

      if (lowerCaseMessage.includes("car")){
        this.actionProvider.handleDriving()
      }
//------------------------------------------------------------------------
      if (lowerCaseMessage.includes("dance")){
        this.actionProvider.handleBeats()
      }

      if (lowerCaseMessage.includes("upbeat")){
        this.actionProvider.handleBeats()
      }

      if (lowerCaseMessage.includes("fast")){
        this.actionProvider.handleBeats()
      }
      if (lowerCaseMessage.includes("shake")){
        this.actionProvider.handleBeats()
      }
//------------------------------------------------------------------------
      if (lowerCaseMessage.includes("not sure")){
        this.actionProvider.handleSurprises()
      }

      if (lowerCaseMessage.includes("don't know")){
        this.actionProvider.handleSurprises()
      }

      if (lowerCaseMessage.includes("surprise")){
        this.actionProvider.handleSurprises()
      }
      if (lowerCaseMessage.includes("idk")){
        this.actionProvider.handleSurprises()
      }
/*      else{
        this.actionProvider.makeupyourmind()
      }
*/
    }
  }
  
export default MessageParser;