function theBeatlesPlay(musicians, instruments) {
  var result = [] 
  for (var i = 0; i < musicians.length; i++) {
    result.push(musicians[i] + " plays " + instruments[i])
    }
  return result 
}

function johnLennonFacts(facts) {
  var result = [] 
  for (var i = 0; i < facts.length; i++) {
    result.push(facts[i] + "!!!")
  }
  return result 
}

function iLoveTheBeatles(num) {
  var result = [] 
  do {
    var i = 0 
    result.push("I love the Beatles!")
    i++
  } while (i < 15)
  return result
}