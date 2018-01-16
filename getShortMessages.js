    function getShortMessages(messages) {
      // SOLUTION GOES HERE
     let s =  messages.filter(a => a.message.length < 50 ? true : false ).map(a => a.message);
     console.log(s);
     return s;
    }

    module.exports = getShortMessages;
