const whoamiObj = {
  "message" : [
    [
      "Amidst cosmic purrs,",
      "I navigate the maze of curiosity,",
      "echoing the eternal meow -",
    ],
    [
      "In the garden of feline dreams,",
      "I walk the paths of ancient lore,",
      "pawprints marking the quest -"
    ],
    [
      "In the corners of my home",
      "I chase yarn, all alone.",
      "A mystery to unfold,",
      "As I pounce, brave and bold."
    ],
    [
      "Morning mist, I stretch and yawn,",
      "Contemplating at the dawn.",
      "Hidden stories in my sight,",
      "Paws exploring, pure delight.",
    ],
    [
      "Footsteps echo, soft and light,",
      "I purr softly, in the night.",
      "Seeking secrets, untold tales,",
      "In my dreams, I set the sails."
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
