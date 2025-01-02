/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

/*

  possible solutions for 3 round games:

  [RRR,RRP,RRS,RPR,RPP,RPS,RSR,RSP,RSS,
   PRR,PRP,PRS,PPR,PPP,PPS,PSR,PSP,PSS,
   SRR,SRP,SRS,SPR,SPP,SPS,SSR,SSP,SSS]

*/

var rockPaperScissors = function (rounds) {
  // 3 games
  // returns all possible throws for games of 3 rounds
  var rounds = rounds || 3;
  var throws = ['R','P','S'];
  var games = [];
  var roundOutcomes = function(string, count) {
    if (count === 0) {
      games.push(string);
    } else {
      throws.forEach(function(element) {
          roundOutcomes(string + element, count-1);
      });
    }
  }
  roundOutcomes('', rounds);
  // returns games
  return games;
};
