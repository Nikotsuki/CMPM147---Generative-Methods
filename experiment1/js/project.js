const fillers = {
  name: ["Susan", "Dave", "Mary", "Beth", "Sanji", "Wiskers"],
  starch: ["rice", "bread", "pasta", "potatoes"],
  vegetables: ["broccoli", "asparagus", "lettuce","corn", "cauliflower", "onions", "carrots"],
  meat: ["steak", "chicken", "bacon", "ham", "beef", "pepperoni", "pork", "duck", "lamb"],
  action: ["stir", "mix", "cook", "boil", "combine", "melt"],
  sauce: ["soy sauce", "vinegar", "ponzu", "Worcestershire", "oyster"],
  time: ["30 minutes", "1 hour", "5 hours", "8 hours", "5 minutes", "30 secons","5 minutes 38 seconds", "a few hours I think"],
  cut: ["slice", "chop", "demolish", "shred", "dice", "destroy", "mash"],  
};

const template = `Hi there, I'm chef $name and this is my recipe.

First you want to grab some $meat and marinate it in some $sauce for $time. Then grab some $vegetable and $cut it thoroughly. Finally bring everything together and $action it for $time. 

I like to serve it all with some $starch but you can do whatever you want. 
`;


// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;

function replacer(match, name) {
  let options = fillers[name];
  if (options) {
    return options[Math.floor(Math.random() * options.length)];
  } else {
    return `<UNKNOWN:${name}>`;
  }
}

function generate() {
  let story = template;
  while (story.match(slotPattern)) {
    story = story.replace(slotPattern, replacer);
  }

  /* global box */
  $("#box").text(story);
}

/* global clicker */
$("#clicker").click(generate);

generate();
