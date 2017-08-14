(function () {
   var names = ["Mohammad", "Reem", "Khaled", "Jamal", "Paul", "Mosi", "Wled", "Lara", "Ali", "Jim"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();