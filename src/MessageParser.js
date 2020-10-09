//MessageParser class implements a parse method.
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      /*let toCheck = ['hello', 'hi']
      var myStringArray = ["hello","hi"];
      var arrayLength = myStringArray.length;
      for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray[i]);
      }
      */
      if (lowerCaseMessage.includes("hello")){
          this.actionProvider.greet()
      }

      if (lowerCaseMessage.includes("hey")){
        this.actionProvider.greet()
      }

     if (lowerCaseMessage.includes("hi")){
        this.actionProvider.greet()
      }
//------------------------------------------------------------------------
    if (lowerCaseMessage.includes("music")){
      this.actionProvider.suggestions()
    }

    if (lowerCaseMessage.includes("playlist")){
      this.actionProvider.suggestions()
    }

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