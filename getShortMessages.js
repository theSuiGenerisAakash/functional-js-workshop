    function getShortMessages(messages) {
      // SOLUTION GOES HERE
     return messages.filter(a => a.message.length < 50 ? true : false ).map(a => a.message);
    }

    module.exports = getShortMessages;
