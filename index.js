function theBeatlesPlay(beatles, instrus) {
  
  var whoPlaysWhat = [];
  
  for (var i = 0; i < beatles.length; i++) {
    whoPlaysWhat.push(`${beatles[i]} plays ${instrus[i]}`);
  }
  
  return whoPlaysWhat;

}



function johnLennonFacts(facts) {
  var j = 0;
  var array = [];
  while(j <= facts.length) {
    
    array.push(`${facts[j]}!!!`)
    j++
  }
  return array;
}