const genZTerms = [
  {
    genZTerm: "Gas",
    meaning: "Used to describe something as exciting, fun, or enjoyable",
  },
  {
    genZTerm: "Periodt",
    meaning:
      "End of disussion or something you say when you agree with something",
  },
  {
    genZTerm: "Its Giving",
    meaning:
      "Used to describe something. If used alone take it as a compliment.",
  },
  { genZTerm: "Mid", meaning: "Average or basic." },
  {
    genZTerm: "No cap",
    meaning: "You're being real or honest about something.",
  },
  {
    genZTerm: "Cap",
    meaning: "Used to accuse someone of being dishonest or lying.",
  },
  { genZTerm: "Slay", meaning: "Basically you're killing it. " },
  {
    genZTerm: "FOMO",
    meaning:
      "Fear of Missing Out, the feeling of missing out on something exciting or interesting.",
  },
  {
    genZTerm: "Lit",
    meaning:
      "Describing something that's exciting, amazing, or highly enjoyable.",
  },
  {
    genZTerm: "Flex",
    meaning: "Showing off or bragging about your achievements or possessions.",
  },
  {
    genZTerm: "Clout",
    meaning:
      "Influence, especially on social media, or reputation and popularity.",
  },
  {
    genZTerm: "Yeet",
    meaning:
      "An exclamation of enthusiasm, triumph, or excitement, often used when throwing or discarding something.",
  },
  {
    genZTerm: "Spill the Tea",
    meaning:
      "To share the latest gossip or information, often used in a gossipy context.",
  },
  {
    genZTerm: "Glow Up",
    meaning:
      "A transformation or improvement in someone's appearance or life over time.",
  },
  {
    genZTerm: "Vibe Check",
    meaning:
      "Assessing someone's or something's current mood or overall feeling.",
  },
  {
    genZTerm: "Ghosted",
    meaning:
      "When someone suddenly stops responding to messages and disappears from communication without explanation.",
  },
  {
    genZTerm: "Simp",
    meaning:
      "A term used to describe someone, usually a man, who is overly attentive, submissive, or affectionate towards someone they are attracted to.",
  },
  {
    genZTerm: "Sus",
    meaning:
      "Short for 'suspicious' or 'suspect,' often used to describe something or someone as shady or untrustworthy.",
  },
  {
    genZTerm: "G.O.A.T.",
    meaning:
      "An acronym for 'Greatest of All Time,' used to praise someone as the best in their field or at something.",
  },
];

const generateCards = (termArray) => {
  let divs = "";

  termArray.forEach((object) => {
    divs += `<div>
      <h3>${object.genZTerm}</h3>
      <h4>${object.meaning}</h4>
    </div>`;
  });

  return divs;
};

// called when cards were sorted alphabetially and need to update main tag
const mainTag = document.querySelector("main");
const buttonTag = document.querySelector("button");

//getting main tag and assigning the html to be the return of generate cards
document.querySelector("main").innerHTML = `${generateCards(genZTerms)}`;


const updateUI = (cards) => {
  mainTag.innerHTML = `${generateCards(cards)}`;
  buttonTag.innerHTML =
    buttonTag.innerHTML === "Sort A-Z" ? "Undo Sort" : "Sort A-Z";
};

// called upon clicking sort A-Z
const sortCardsClick = () => {
  if (buttonTag.innerHTML === "Undo Sort") {
    updateUI(genZTerms);
  } else {
    const copy = [...genZTerms]
    const newSortedArr = copy.sort((a, b) => {
      return a.genZTerm.localeCompare(b.genZTerm);
    });
    updateUI(newSortedArr);
  }
};

// click event
const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click", sortCardsClick);
