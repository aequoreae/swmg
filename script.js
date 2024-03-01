const tasks = ["Cast fireballs in your kitchen", "Ride your noble steed", "Collapse the Tower of Great Evil", "Release great beasts unto the world", "Meditate on the powers of the arcane", "Stare into another dimension with a smile", "Meet with other great spellcasters", "Search the scrolls for answers", "Commune with the Great Ones", "Consume the Knector of Knowledge", "Speak to the Mind of Minds in your own mind", "Scrape away corruption from your domicile", "Train for the coming onslaught of Necromancers", "Release the beast within", "Speak to the Window of the Self", "Dine with the Rulers of the land", "Injest the horticulturalist's alchemy", "Reject the vampire's curse", "Scry into the orb's starlit center", "Reject the Grandmaster's teachings"];

const descriptions = ["(cook a real meal)", "(drive/ride to a peaceful place)", "(do laundry)", "(go for a walk with your pets)", "(take a nap)", "(watch a movie/show)", "(go out with friends)", "(look up a random, interesting fact)", "(tell a friend/partner/family member you love them)", "(drink suggested amount of water)", "(meditate for 10+ minutes)", "(clean your room)", "(exercise)", "(scream into a pillow)", "(give yourself affirmations in the mirror)", "(order out/go out to eat)", "(take your meds)", "(go to bed at a reasonable hour)", "(make a schedule)", "(free space to do what you want)"];

var rolled = [];

function rollTasks() {
  var display = "";
  for (let i = 0; rolled.length < 3; i++) {
    var h = Math.floor(Math.random() * 20);
    // console.log(h);
    if (!rolled.includes(h)) {
      rolled.push(h);
      display = display + (h + 1) + ": " + tasks[h] + " " + descriptions[h] + "<br />";
      //console.log(display);
    }
  }
  document.getElementById("p").textContent = display;
}

window.onload = rollTasks();

function assembleTasks(i, bold, ital, numbers, desc) {
  let hurgle = "";
  let stars = ""
  if (bold) {
    stars += "**";
  }
  if (ital) {
    stars += "*";
  }
  if (numbers) {
    hurgle = (i + 1) + ": ";
  }
  hurgle += stars + tasks[i] + stars;

  if (desc) {
    hurgle += " " + descriptions[i];
  }
  return hurgle + "\n";
}

function board() {
  let clip = "";
  for (let i = 0; i < rolled.length; i++) {
    clip += assembleTasks(rolled[i], document.getElementById("bold").checked, document.getElementById("italic").checked, document.getElementById("numbers").checked, document.getElementById("desc").checked)
  }
  console.log(clip);
  return clip;
}

