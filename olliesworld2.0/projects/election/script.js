var makePolitician = function (name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;


  politician.tally = function (name) {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  return politician;
};

var reba = makePolitician("Reba is our Gal", [63, 136, 197]);
var dolly = makePolitician("Dolly Doesitall", [208, 0, 0]);

reba.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
dolly.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 4, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


reba.electionResults[9] = 1;
dolly.electionResults[9] = 28;
reba.electionResults[4] = 17;
dolly.electionResults[4] = 38;
reba.electionResults[43] = 11;
dolly.electionResults[43] = 27;

reba.tally();
dolly.tally();

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];

var rebaname = body.children[0].children[0];
var dollyname = body.children[1].children[0];
var rebaelectionResults = body.children[0].children[1];
var dollyelectionResults = body.children[1].children[1];
var winnersName = body.children[2].children[1];

var setStateResults = function (state) {
  theStates[state].winner = null;
  if (reba.electionResults[state] > dolly.electionResults[state]) {
    theStates[state].winner = reba;
  } else if (reba.electionResults[state] < dolly.electionResults[state]) {
    theStates[state].winner = dolly;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [255, 186, 8];
  }

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

  rebaname.innerText = reba.name;
  dollyname.innerText = dolly.name;

  rebaelectionResults.innerText = reba.electionResults[state];
  dollyelectionResults.innerText = dolly.electionResults[state];

  if (reba.electionResults[state] > dolly.electionResults[state]) {
    theStates[state].winner = reba;
  }
  else if (dolly.electionResults[state] > reba.electionResults[state]) {
    theStates[state].winner = dolly;
  }
  if (theStates[state].winner === null) {
    winnersName.innerText = "Draw";
  } else {
    winnersName.innerText = stateWinner.name;
  }


};

reba.addtheVotes;
dolly.addtheVotes;

var winner;
if (reba.totalVotes > dolly.totalVotes) {
  winner = reba.name;
} else if (reba.totalVotes < dolly.totalVotes) {
  winner = dolly.name;
} else {
  winner = "Draw!"
}


var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = reba.name;
row.children[1].innerText = reba.totalVotes;
row.children[2].innerText = dolly.name;
row.children[3].innerText = dolly.totalVotes;
row.children[5].innerText = winner;
