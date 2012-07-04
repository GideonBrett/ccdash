
function whichCategory(project) { // function whichCategory with parameter project
  var configuration = { // variable configuartion
    "Mainstream": ["Static", "Smart Answers", "Publisher", "Frontend"], // category with multiple projects inside 
    "Whitehall": ["Static", "Whitehall"], // same as above comment
    "Transition": ["Router"], // same as above comment but with only one project inside
  }

  for (category in configuration) { //for each catgeory in the config
    if (!configuration.hasOwnProperty(category)) { // if the category doesn't have its won property
      next; // go on to below
    }

    var projectsInThisCategory = configuration[category]; // variable called projectsInThisCategory reads from configuation[array of category]
    if (projectsInThisCategory.indexOf(project) != -1) { // if the projects in this category are listed , return category, if not return other
      return category; // console says category
    }
  }

  return "Other"; // console says other
}

if (whichCategory('Static') === 'Mainstream') { // if static is grouped to mainstream
  alert('pass'); // pop-up says pass
} else { // otherwise
  alert('fail'); // pop-up says fail
}