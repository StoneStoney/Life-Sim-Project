const demoEvents = [
  // ── CHILDHOOD ──────────────────────────────────────────────────────────────
  {
    age_group: 'childhood', theme: 'school', rarity: 1,
    description: 'You wake up for the first day of school. The building smells like industrial cleaner and anxiety.',
    choices: [
      { text: 'Find a seat near the window and stare outside', health: 0, happiness: 1, money: 0, stress: -1 },
      { text: 'Introduce yourself to someone nearby',          health: 0, happiness: 2, money: 0, stress:  1 },
    ],
  },
  {
    age_group: 'childhood', theme: 'family', rarity: 1,
    description: 'Your parents announce they\'re getting a dog. Nobody asked for your opinion.',
    choices: [
      { text: 'Immediately claim the dog as yours',      health: 1, happiness: 3, money:  0, stress: -1 },
      { text: 'Remind them you\'re allergic. You\'re not.', health: 0, happiness: -1, money: 0, stress:  0 },
      { text: 'Ask if you can name it',                  health: 0, happiness: 2, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'childhood', theme: 'friends', rarity: 2,
    description: 'A kid at recess dares you to climb the big oak tree. Everyone is watching.',
    choices: [
      { text: 'Climb it. Fall halfway. Survive.',        health: -2, happiness: 2, money: 0, stress:  1 },
      { text: 'Decline. Walk away slowly.',              health:  0, happiness:-2, money: 0, stress:  2 },
      { text: 'Negotiate a smaller tree instead',        health:  0, happiness: 1, money: 0, stress: -1 },
    ],
  },
  {
    age_group: 'childhood', theme: 'embarrassment', rarity: 2,
    description: 'You raise your hand in class and call the teacher "Mom." The room goes quiet.',
    choices: [
      { text: 'Laugh it off loudly',                health: 0, happiness: -1, money: 0, stress: -1 },
      { text: 'Stare at your desk for the rest of the day', health: 0, happiness: -3, money: 0, stress: 3 },
    ],
  },
  {
    age_group: 'childhood', theme: 'pets', rarity: 3,
    description: 'Your goldfish dies. You found it this morning. It was your responsibility.',
    choices: [
      { text: 'Hold a small funeral in the backyard',   health: 0, happiness: -1, money:  0, stress: -1 },
      { text: 'Flush it and don\'t mention it to anyone', health: 0, happiness: -2, money:  0, stress:  1 },
      { text: 'Ask for a replacement immediately',      health: 0, happiness:  1, money: -1, stress:  0 },
    ],
  },
  {
    age_group: 'childhood', theme: 'sports', rarity: 2,
    description: 'You score an own goal at your first soccer game. Your dad cheers before he realizes.',
    choices: [
      { text: 'Pretend it was on purpose',             health: 0, happiness:  1, money: 0, stress: -1 },
      { text: 'Cry a little. It\'s fine.',              health: 0, happiness: -2, money: 0, stress:  2 },
      { text: 'Laugh and keep playing',                health: 1, happiness:  2, money: 0, stress: -2 },
    ],
  },
  {
    age_group: 'childhood', theme: 'teachers', rarity: 2,
    description: 'Your favorite teacher announces she is leaving mid-year. She gives no explanation.',
    choices: [
      { text: 'Write her a goodbye card',              health: 0, happiness: -1, money:  0, stress: -1 },
      { text: 'Decide adults are unpredictable. File this away.', health: 0, happiness: -2, money: 0, stress: 1 },
    ],
  },
  {
    age_group: 'childhood', theme: 'family', rarity: 3,
    description: 'Your parents have a loud argument after dinner. You can hear it from your room.',
    choices: [
      { text: 'Put headphones on and pretend everything is fine', health: 0, happiness: -2, money: 0, stress:  2 },
      { text: 'Go downstairs and ask them to stop',               health: 0, happiness: -1, money: 0, stress:  3 },
      { text: 'Fall asleep eventually. Morning comes.',           health: 1, happiness: -1, money: 0, stress: -1 },
    ],
  },

  // ── TEEN ───────────────────────────────────────────────────────────────────
  {
    age_group: 'teen', theme: 'part-time jobs', rarity: 2,
    description: 'You get a part-time job at a coffee shop. The apron doesn\'t fit.',
    choices: [
      { text: 'Show up anyway. Learn to steam milk.',  health: -1, happiness:  1, money:  3, stress:  2 },
      { text: 'Quit before the first shift. Worth it.', health: 1, happiness:  2, money: -1, stress: -2 },
    ],
  },
  {
    age_group: 'teen', theme: 'dating', rarity: 2,
    description: 'Someone passes you a note asking if you like them. Check yes or no.',
    choices: [
      { text: 'Check yes',                            health: 0, happiness:  3, money: 0, stress:  2 },
      { text: 'Check no. Fold it up. Return it.',     health: 0, happiness: -1, money: 0, stress:  1 },
      { text: 'Lose the note on purpose',             health: 0, happiness:  0, money: 0, stress:  1 },
    ],
  },
  {
    age_group: 'teen', theme: 'social pressure', rarity: 3,
    description: 'Your friends want to sneak into an R-rated movie. The plan is flimsy at best.',
    choices: [
      { text: 'Go along with it. It works somehow.',  health:  0, happiness:  2, money: -1, stress:  1 },
      { text: 'Wait outside and pretend you were in', health:  0, happiness: -1, money:  0, stress: -1 },
      { text: 'Suggest a different movie. Nobody listens.', health: 0, happiness: -2, money: 0, stress: 1 },
    ],
  },
  {
    age_group: 'teen', theme: 'identity', rarity: 2,
    description: 'You discover a band that feels like it was made specifically for you. Nobody else at school knows them.',
    choices: [
      { text: 'Keep it private. It\'s yours.',        health: 0, happiness:  2, money:  0, stress: -1 },
      { text: 'Make everyone aware immediately',      health: 0, happiness:  1, money:  0, stress:  1 },
      { text: 'Start a playlist and leave it somewhere people might find it', health: 0, happiness: 2, money: 0, stress: 0 },
    ],
  },
  {
    age_group: 'teen', theme: 'internet', rarity: 2,
    description: 'You post something online at 11pm and immediately want to delete it. You don\'t.',
    choices: [
      { text: 'Leave it up. Commit.',                 health:  0, happiness:  1, money: 0, stress:  2 },
      { text: 'Delete it at 2am when no one is looking', health: 0, happiness: -1, money: 0, stress: -1 },
      { text: 'Mute notifications and go to sleep',  health:  1, happiness:  0, money: 0, stress: -2 },
    ],
  },
  {
    age_group: 'teen', theme: 'school', rarity: 2,
    description: 'You have a test tomorrow you haven\'t studied for. It\'s 10pm.',
    choices: [
      { text: 'Pull an all-nighter. Regret it.',      health: -2, happiness: -1, money: 0, stress:  3 },
      { text: 'Study for an hour, sleep the rest',    health:  0, happiness:  0, money: 0, stress:  0 },
      { text: 'Sleep. Accept the consequences.',      health:  2, happiness:  1, money: 0, stress: -2 },
    ],
  },
  {
    age_group: 'teen', theme: 'friend drama', rarity: 2,
    description: 'Two of your friends stop speaking to each other. Both want you to take sides.',
    choices: [
      { text: 'Stay neutral. Lose both for a while.', health: 0, happiness: -2, money: 0, stress:  2 },
      { text: 'Pick one. The drama ends faster.',     health: 0, happiness:  1, money: 0, stress:  1 },
      { text: 'Force them into the same room and leave', health: 0, happiness: 2, money: 0, stress: 3 },
    ],
  },
  {
    age_group: 'teen', theme: 'identity', rarity: 3,
    description: 'You dye your hair a color your parents would not approve of. They haven\'t seen it yet.',
    choices: [
      { text: 'Walk in confidently. Own it.',         health: 0, happiness:  3, money: -1, stress:  2 },
      { text: 'Wear a hat until it fades',            health: 0, happiness: -1, money:  0, stress:  1 },
    ],
  },

  // ── YOUNG ADULT ────────────────────────────────────────────────────────────
  {
    age_group: 'young_adult', theme: 'roommates', rarity: 2,
    description: 'Your roommate eats your leftovers again. It was the last of the good pasta.',
    choices: [
      { text: 'Leave a passive-aggressive note on the fridge', health: 0, happiness: -1, money:  0, stress:  1 },
      { text: 'Say nothing. Buy a mini fridge.',               health: 0, happiness: -2, money: -2, stress: -1 },
      { text: 'Have a direct conversation. It goes okay.',     health: 0, happiness:  1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'young_adult', theme: 'college', rarity: 2,
    description: 'Your professor gives back your essay with a grade you didn\'t expect.',
    choices: [
      { text: 'Accept it and move on',               health: 0, happiness: -1, money:  0, stress: -1 },
      { text: 'Email asking for a regrade. Politely.', health: 0, happiness:  0, money:  0, stress:  2 },
      { text: 'Drop the class',                      health: 1, happiness:  0, money: -2, stress: -2 },
    ],
  },
  {
    age_group: 'young_adult', theme: 'jobs', rarity: 2,
    description: 'You get a callback for a job you applied to drunk at midnight. The role is real.',
    choices: [
      { text: 'Interview anyway. You need money.',   health:  0, happiness:  1, money:  3, stress:  2 },
      { text: 'Research the company. Actually prepare.', health: 0, happiness: 2, money:  3, stress:  1 },
      { text: 'Ghost them. Not a good fit.',         health:  0, happiness: -1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'young_adult', theme: 'debt', rarity: 3,
    description: 'Your student loan statement arrives. You open it. You close it.',
    choices: [
      { text: 'Open it again. Actually read it.',    health:  0, happiness: -2, money: -1, stress:  3 },
      { text: 'Set up autopay and never look again', health:  0, happiness:  0, money: -2, stress: -1 },
      { text: 'Call your parents',                   health:  0, happiness: -1, money:  1, stress:  1 },
    ],
  },
  {
    age_group: 'young_adult', theme: 'relationships', rarity: 2,
    description: 'Someone you\'ve been seeing for two months asks where this is going.',
    choices: [
      { text: 'Answer honestly. It gets complicated.', health: 0, happiness:  0, money: 0, stress:  2 },
      { text: 'Deflect. Buy more time.',               health: 0, happiness: -1, money: 0, stress:  1 },
      { text: 'End it. Better now than later.',        health: 0, happiness: -2, money: 0, stress: -1 },
    ],
  },
  {
    age_group: 'young_adult', theme: 'moving', rarity: 2,
    description: 'You move into your first apartment alone. It is smaller than it looked in the photos.',
    choices: [
      { text: 'Make it yours anyway. Buy one plant.',  health: 1, happiness:  2, money: -1, stress: -1 },
      { text: 'Spend the first night wondering if you made a mistake', health: 0, happiness: -1, money: 0, stress: 2 },
      { text: 'Invite people over immediately to fill the silence', health: 0, happiness: 2, money: -1, stress: 0 },
    ],
  },
  {
    age_group: 'young_adult', theme: 'career anxiety', rarity: 2,
    description: 'Everyone from your graduating class seems to have their life together. LinkedIn confirms it.',
    choices: [
      { text: 'Delete the app',                      health: 1, happiness:  2, money:  0, stress: -2 },
      { text: 'Update your profile frantically',     health: 0, happiness: -1, money:  0, stress:  2 },
      { text: 'Close the tab. Go for a walk.',       health: 1, happiness:  1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'young_adult', theme: 'college', rarity: 3,
    description: 'You pull a library all-nighter with a stranger who ends up being your closest friend for the next three years.',
    choices: [
      { text: 'Exchange numbers. Make plans.',        health: -1, happiness:  3, money:  0, stress:  0 },
      { text: 'Enjoy the night. Don\'t push it.',    health:  0, happiness:  2, money:  0, stress: -1 },
    ],
  },

  // ── ADULT ──────────────────────────────────────────────────────────────────
  {
    age_group: 'adult', theme: 'health', rarity: 2,
    description: 'Your doctor recommends you get more exercise. You nod and go home.',
    choices: [
      { text: 'Buy running shoes. Wear them twice.',                    health:  1, happiness: 0, money: -2, stress:  1 },
      { text: 'Start walking to the corner store instead of driving',  health:  2, happiness: 1, money:  0, stress: -1 },
      { text: 'Research gyms for six weeks and join none of them',     health:  0, happiness:-1, money:  0, stress:  1 },
    ],
  },
  {
    age_group: 'adult', theme: 'career', rarity: 2,
    description: 'You\'re offered a promotion that comes with more money but significantly more hours.',
    choices: [
      { text: 'Take it. You\'ll adjust.',            health: -1, happiness: -1, money:  4, stress:  3 },
      { text: 'Negotiate for fewer hours. It half-works.', health: 0, happiness: 1, money: 2, stress: 1 },
      { text: 'Decline politely. Stay where you are.', health: 1, happiness: 1, money: 0, stress: -1 },
    ],
  },
  {
    age_group: 'adult', theme: 'children', rarity: 3,
    description: 'Your child has a meltdown in the grocery store. Other shoppers are watching.',
    choices: [
      { text: 'Calmly get down to their level',      health:  0, happiness: 0, money:  0, stress:  1 },
      { text: 'Abandon the cart. Leave.',            health:  1, happiness: 1, money: -1, stress: -1 },
      { text: 'Power through. Pay. Get out.',        health: -1, happiness:-1, money:  0, stress:  3 },
    ],
  },
  {
    age_group: 'adult', theme: 'burnout', rarity: 2,
    description: 'You realize you haven\'t taken a full day off in four months.',
    choices: [
      { text: 'Book a weekend somewhere. Anything.',  health:  2, happiness:  2, money: -2, stress: -3 },
      { text: 'Take Saturday off. Check email twice.', health: 1, happiness:  1, money:  0, stress: -1 },
      { text: 'Keep going. You\'re almost through.',  health: -2, happiness: -2, money:  1, stress:  3 },
    ],
  },
  {
    age_group: 'adult', theme: 'marriage', rarity: 2,
    description: 'You and your partner have the same argument you\'ve had twelve times before.',
    choices: [
      { text: 'Suggest counseling',                  health: 0, happiness:  1, money: -1, stress: -1 },
      { text: 'Drop it for now. Return to it later.', health: 0, happiness: -1, money:  0, stress:  1 },
      { text: 'Actually finish the conversation this time', health: 0, happiness: 2, money: 0, stress: 2 },
    ],
  },
  {
    age_group: 'adult', theme: 'mortgages', rarity: 3,
    description: 'The boiler breaks in January. The quote to fix it is more than you expected.',
    choices: [
      { text: 'Pay it. What choice is there.',       health:  0, happiness: -1, money: -3, stress:  2 },
      { text: 'Get three more quotes first',         health:  0, happiness: -1, money: -2, stress:  1 },
      { text: 'Use space heaters for a week while you figure it out', health: -1, happiness: -1, money: -1, stress: 2 },
    ],
  },
  {
    age_group: 'adult', theme: 'routine', rarity: 1,
    description: 'You realize you have eaten the same lunch every weekday for three months.',
    choices: [
      { text: 'Lean in. It\'s efficient.',           health:  0, happiness:  0, money:  1, stress: -1 },
      { text: 'Try something new today',             health:  0, happiness:  1, money: -1, stress:  0 },
      { text: 'Find this mildly alarming',           health:  0, happiness: -1, money:  0, stress:  1 },
    ],
  },

  // ── MIDDLE AGE ─────────────────────────────────────────────────────────────
  {
    age_group: 'middle_age', theme: 'health scares', rarity: 3,
    description: 'A routine checkup flags something. The doctor says it\'s probably nothing but schedules a follow-up.',
    choices: [
      { text: 'Research it obsessively for a week',  health: -1, happiness: -2, money:  0, stress:  4 },
      { text: 'Wait for the follow-up. Distract yourself.', health: 0, happiness: -1, money: 0, stress: 2 },
      { text: 'Tell someone close to you',           health:  0, happiness:  1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'middle_age', theme: 'aging', rarity: 2,
    description: 'You find a gray hair. Then several more.',
    choices: [
      { text: 'Accept it. It suits you.',            health: 0, happiness:  1, money:  0, stress: -1 },
      { text: 'Buy something to deal with it',       health: 0, happiness:  1, money: -1, stress:  0 },
      { text: 'Spend an hour examining yourself in the mirror', health: 0, happiness: -2, money: 0, stress: 2 },
    ],
  },
  {
    age_group: 'middle_age', theme: 'adult children', rarity: 2,
    description: 'Your adult child asks to move back home temporarily. They don\'t define temporarily.',
    choices: [
      { text: 'Yes, with a loose end date',          health:  0, happiness:  1, money: -1, stress:  1 },
      { text: 'Yes, no conditions',                  health:  0, happiness:  2, money: -2, stress:  2 },
      { text: 'Help them find alternatives instead', health:  0, happiness: -1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'middle_age', theme: 'reflection', rarity: 2,
    description: 'A song from twenty years ago comes on in the supermarket. You stop moving.',
    choices: [
      { text: 'Stand there a moment. Let it pass.',  health: 0, happiness:  0, money: 0, stress: -1 },
      { text: 'Make a playlist when you get home',   health: 0, happiness:  2, money: 0, stress: -1 },
      { text: 'Feel inexplicably sad for the rest of the afternoon', health: 0, happiness: -2, money: 0, stress: 1 },
    ],
  },
  {
    age_group: 'middle_age', theme: 'retirement', rarity: 3,
    description: 'A financial advisor tells you your retirement savings are behind where they should be.',
    choices: [
      { text: 'Increase contributions immediately',  health:  0, happiness: -1, money: -2, stress:  2 },
      { text: 'Get a second opinion',               health:  0, happiness:  0, money: -1, stress:  1 },
      { text: 'Decide you\'ll work longer. Close the laptop.', health: 0, happiness: -2, money: 0, stress: 2 },
    ],
  },
  {
    age_group: 'middle_age', theme: 'nostalgia', rarity: 2,
    description: 'You drive past your childhood home. Someone else lives there now. The tree is gone.',
    choices: [
      { text: 'Keep driving',                        health: 0, happiness: -1, money: 0, stress:  0 },
      { text: 'Park and sit for a minute',           health: 0, happiness: -2, money: 0, stress:  1 },
      { text: 'Call someone who would remember it',  health: 0, happiness:  1, money: 0, stress: -1 },
    ],
  },

  // ── ELDERLY ────────────────────────────────────────────────────────────────
  {
    age_group: 'elderly', theme: 'health', rarity: 2,
    description: 'Your doctor suggests you cut back on something you\'ve been doing for forty years.',
    choices: [
      { text: 'Do it. You\'re pragmatic.',           health:  2, happiness: -1, money:  0, stress: -1 },
      { text: 'Cut back partway. A compromise.',     health:  1, happiness:  0, money:  0, stress:  0 },
      { text: 'Nod and continue as before.',         health: -1, happiness:  2, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'elderly', theme: 'loneliness', rarity: 2,
    description: 'The week passes and you realize you haven\'t spoken to anyone outside the house.',
    choices: [
      { text: 'Call someone',                        health: 0, happiness:  2, money:  0, stress: -2 },
      { text: 'Go somewhere where people are, no agenda', health: 1, happiness: 2, money: -1, stress: -1 },
      { text: 'Write a letter. Maybe send it.',      health: 0, happiness:  1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'elderly', theme: 'grandchildren', rarity: 2,
    description: 'Your grandchild asks you to explain what the world was like before the internet.',
    choices: [
      { text: 'Tell them everything. They half-listen.', health: 0, happiness: 3, money: 0, stress: -1 },
      { text: 'Say it was quieter. Leave it at that.',    health: 0, happiness: 1, money: 0, stress: -1 },
    ],
  },
  {
    age_group: 'elderly', theme: 'memory', rarity: 3,
    description: 'You go to the kitchen and forget why.',
    choices: [
      { text: 'Retrace your steps. Remember.',       health: 0, happiness:  0, money: 0, stress:  0 },
      { text: 'Make tea anyway',                     health: 1, happiness:  1, money: 0, stress: -1 },
      { text: 'Sit down. Let it come back.',         health: 0, happiness: -1, money: 0, stress:  1 },
    ],
  },
  {
    age_group: 'elderly', theme: 'old friendships', rarity: 3,
    description: 'You find an old address book. Half the names are people you\'ve lost touch with. A few you\'ve lost entirely.',
    choices: [
      { text: 'Reach out to one of them',            health: 0, happiness:  2, money:  0, stress:  1 },
      { text: 'Read through it slowly. Put it back.', health: 0, happiness: -1, money:  0, stress:  1 },
      { text: 'Write down the ones still here',      health: 0, happiness:  1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'elderly', theme: 'community', rarity: 2,
    description: 'Someone at the community center asks you to lead a weekly activity. You haven\'t decided what.',
    choices: [
      { text: 'Say yes and figure it out later',     health: 0, happiness:  2, money:  0, stress:  1 },
      { text: 'Suggest something you\'re good at',   health: 0, happiness:  3, money:  0, stress: -1 },
      { text: 'Decline. You\'re not ready for that.', health: 0, happiness: -1, money:  0, stress: -1 },
    ],
  },
  {
    age_group: 'elderly', theme: 'health', rarity: 3,
    description: 'You sleep longer than you used to. You\'re not sure if this is good or bad.',
    choices: [
      { text: 'Enjoy it. You\'ve earned it.',        health:  2, happiness:  2, money: 0, stress: -2 },
      { text: 'Mention it to your doctor',           health:  1, happiness:  0, money: 0, stress:  1 },
      { text: 'Set an earlier alarm. Keep structure.', health: 0, happiness: 0, money: 0, stress:  0 },
    ],
  },
]

export default demoEvents
