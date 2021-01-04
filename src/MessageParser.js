// MessageParser class implements a parse method.
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
      
    let substrings = ["hello", "hey", "hi"];
      for (let i = 0 ; i < substrings.length ; i++) 
        if (lowerCaseMessage.includes(substrings[i]))
            this.actionProvider.greet();
//------------------------------------------------------------------------
    let music__substrings = ["music", "playlist", "yes"];
      for (let j = 0 ; j < music__substrings.length ; j++) 
        if (lowerCaseMessage.includes(music__substrings[j]))
            this.actionProvider.suggestions();
//------------------------------------------------------------------------
    let recent__substrings = ["recent", "new"];
      for (let k = 0 ; k < recent__substrings.length ; k++) 
        if (lowerCaseMessage.includes(recent__substrings[k]))
            this.actionProvider.handleRecents();
//------------------------------------------------------------------------
    let love__substrings = ["feel", "love", "broke", "sad"];
      for (var l = 0 ; l < love__substrings.length ; l++) 
        if (lowerCaseMessage.includes(love__substrings[l]))
            this.actionProvider.handleLove();      
//------------------------------------------------------------------------
    let trip__substrings = ["travel", "trip", "car", "vacation"];
      for (var m = 0 ; m < trip__substrings.length ; m++) 
        if (lowerCaseMessage.includes(trip__substrings[m]))
            this.actionProvider.handleDriving();   
//------------------------------------------------------------------------
    let beat__substrings = ["dance", "upbeat", "fast", "shake", "beat"];
      for (var n = 0 ; n < beat__substrings.length ; n++) 
        if (lowerCaseMessage.includes(beat__substrings[n]))
            this.actionProvider.handleBeats();
//------------------------------------------------------------------------
    let surprise__substrings = ["not sure", "don't know", "surprise", "idk"];
      for (var o = 0 ; o < surprise__substrings.length ; o++) 
        if (lowerCaseMessage.includes(surprise__substrings[o]))
            this.actionProvider.handleSurprises();

/* 
    Write a function that sends only one reply from the bot,
    i.e., if the user enters a sentence that includes keywords from two substring arrays,
    the bot should give a reply that best fits the user's input 
*/

  }
}
  
export default MessageParser;