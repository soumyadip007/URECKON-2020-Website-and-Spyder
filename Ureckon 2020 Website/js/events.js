var catBtn = document.querySelector('.select_event_button');
var selectEvent = document.querySelector('.select_event');

function selectPanel(){
  selectEvent.classList.toggle('close_select_event');
  selectEvent.classList.toggle('open_select_event');
}

catBtn.addEventListener('click', (e) => {
  selectPanel();
});

// Select Buttons
var robotics = document.querySelector('.robotics');
var coding = document.querySelector('.coding');
var gaming = document.querySelector('.gaming');
var uosc = document.querySelector('.uosc');
var flag = document.querySelector('.flagship');
var bus = document.querySelector('.business');
var int = document.querySelector('.initiatives');
var misc = document.querySelector('.misc');

// Selected Events
var roboticsEvent = document.querySelector('.robotic_events');
var codingEvent = document.querySelector('.coding_events');
var gamingEvent = document.querySelector('.gaming_events');
var uoscEvent = document.querySelector('.uosc_events');
var flagEvent = document.querySelector('.flagship_events');
var busEvent = document.querySelector('.b_events');
var intEvent = document.querySelector('.int_events');
var miscEvent = document.querySelector('.misc_events');

robotics.addEventListener('click', () => {
  roboticsEvent.style.display = 'block';
  codingEvent.style.display = 'none';
  gamingEvent.style.display = 'none';
  uoscEvent.style.display = 'none';
  flagEvent.style.display = 'none';
  busEvent.style.display = 'none';
  intEvent.style.display = 'none';
  miscEvent.style.display = 'none';
  document.querySelector(".fees").style.display = "block"
  selectPanel();
});

coding.addEventListener('click', () => {
  codingEvent.style.display = 'block';
  roboticsEvent.style.display = 'none';
  gamingEvent.style.display = 'none';
  uoscEvent.style.display = 'none';
  flagEvent.style.display = 'none';
  busEvent.style.display = 'none';
  intEvent.style.display = 'none';
  miscEvent.style.display = 'none';
  document.querySelector(".fees").style.display = "block"
  selectPanel();
});
gaming.addEventListener('click', () => {
  gamingEvent.style.display = 'block';
  roboticsEvent.style.display = 'none';
  codingEvent.style.display = 'none';
  uoscEvent.style.display = 'none';
  flagEvent.style.display = 'none';
  busEvent.style.display = 'none';
  intEvent.style.display = 'none';
  miscEvent.style.display = 'none';
  document.querySelector(".fees").style.display = "none"
  selectPanel();
});

// uosc.addEventListener('click', () => {
//   uoscEvent.style.display = 'block';
//   roboticsEvent.style.display = 'none';
//   codingEvent.style.display = 'none';
//   gamingEvent.style.display = 'none';
//   flagEvent.style.display = 'none';
//   busEvent.style.display = 'none';
//   intEvent.style.display = 'none';
//   miscEvent.style.display = 'none';
//   selectPanel();
// });

flag.addEventListener('click', () => {
  flagEvent.style.display = 'block';
  roboticsEvent.style.display = 'none';
  codingEvent.style.display = 'none';
  gamingEvent.style.display = 'none';
  uoscEvent.style.display = 'none';
  busEvent.style.display = 'none';
  intEvent.style.display = 'none';
  miscEvent.style.display = 'none';
  document.querySelector(".fees").style.display = "block"
  selectPanel();
});

bus.addEventListener('click', () => {
  busEvent.style.display = 'block';
  roboticsEvent.style.display = 'none';
  codingEvent.style.display = 'none';
  gamingEvent.style.display = 'none';
  uoscEvent.style.display = 'none';
  flagEvent.style.display = 'none';
  intEvent.style.display = 'none';
  miscEvent.style.display = 'none';
  document.querySelector(".fees").style.display = "block"
  selectPanel();
});

int.addEventListener('click', () => {
  intEvent.style.display = 'block';
  roboticsEvent.style.display = 'none';
  codingEvent.style.display = 'none';
  gamingEvent.style.display = 'none';
  uoscEvent.style.display = 'none';
  flagEvent.style.display = 'none';
  busEvent.style.display = 'none';
  miscEvent.style.display = 'none';
  document.querySelector(".fees").style.display = "block"
  selectPanel();
});

misc.addEventListener('click', () => {
  miscEvent.style.display = 'block';
  roboticsEvent.style.display = 'none';
  codingEvent.style.display = 'none';
  gamingEvent.style.display = 'none';
  uoscEvent.style.display = 'none';
  flagEvent.style.display = 'none';
  busEvent.style.display = 'none';
  intEvent.style.display = 'none';
  document.querySelector(".fees").style.display = "block"
  selectPanel();
});


// Details Modal Close
var detailsCloseBtn = document.querySelector('.details_modal_close');
var detailsModal = document.querySelector('.event_details_modal');

detailsCloseBtn.addEventListener('click', (e) => {
  detailsModal.classList.toggle('modal_close');
});

let eventInfo = [
  // UIC
  {
    name: 'Urekcon Innovation Challenge',
    email: 'abhishekuem89@gmail.com',
    about:
      "\"I have not failed. I've just found 10,000 ways that won't work.\"  ~ Edison.Do you have that indomitable spirit which strives beyond bounds to revolutionize the industry? Is your innovative idea robust enough to not only disrupt the market, but also adhere to its constraints, catering to the problem it was intended to solve?If you're answering affirmatively to all the questions, then you must register for the Ureckon Innovation Challenge (UIC). It is the flagship innovation contest of UEM Kolkata, to be held as a part of Ureckon 2020 on 15-16 February, that pits the best contemporary innovations from all over India and beyond. So, what are you waiting for?",
    coordinators: [
      {
        name: 'Abhishek Jaiswal',
        phone: 8910924144
      },
      {
        name: 'Chandan Kumar',
        phone: 9163036910
      }
    ],
    type: 'Both',
    max: '5',
    image: "images/event_icons/UIC.png"
  },

  // Ureck-A-Thon
  {
    name: 'Ureck-a-thon',
    email: 'anirban.mukherjee997@gmail.com',
    about:
      'When solving a problem, dig deep into the roots instead of just hacking at the leaves.Programmers are artists with logic-based creativity and programming today is a race amongst software developers striving to create bigger and better software projects.Do you have the interminating gusto for designing problem-solving algorithms? URECK-A-THON, the Flagship event of URECKON 2020 calls for all the software developers to think, ideate, collaborate and solve. Register yourselves for this compelling two-day event that demands you to unveil your analytical, technical and problem-solving skills on 15th and 16th February’20.Tech – up your analytical skills to the next level.',
    coordinators: [
      {
        name: 'Anirban Mukherjee',
        phone: 9477772677
      },
      {
        name: 'Anirban Dey',
        phone: 7890998781
      }
    ],
    type: 'Both',
    max: '4',
    image: "images/event_icons/HACKATHON.png"
  },

  // Tech Expo
  {
    name: 'Tech-Expo',
    email: 'dutta.pritam22@gmail.com',
    about:
      '"Everything begins with an idea. Your ideas might not work at the very first attempt. Your innovations might not be acknowledged by everyone, but stopping is not the solution because you have miles to go before you sleep. Not everyone comes up with an idea similar to yours. But it’s never the idea, it’s always what you do with it.URECKON 2020, the third edition of the techno-management extravaganaza of UEM Kolkata, sets the platform for enthusiastic minds who envision to bring a change through their innovative ideas, via TECH EXPO, the flagship exhibition contest to be held on 15th and 16th February’20.Man’s mind once stretched by a new idea never regains it’s original dimensions.Grab this opportunity to present your ideas, unravel new dimensions and to comprehend points of improvements.Innovation by you – Innovation for you – Innovation of you',
    coordinators: [
      {
        name: 'Pritam Dutta',
        phone: 9674038036
      },
      {
        name: 'Subhrajit Dutta',
        phone: 9830219382
      }
    ],
    type: 'Both',
    max: '5',
    image: "images/event_icons/TECH EXPO.png"
  },

  // Robo Dangal
  {
    name: 'Robo Dangal',
    email: 'arnabdas.das40@gmail.com',
    about:
      '"Ever wondered the bot you designed fighting to knock the other down or watched metal warriors match against treacherous objects?Witness sparks fly as metal crushes metal in the most glorious battles along with magnificent artist performances for non-stop entertainment by making yourselves a part of the most intense battle of URECKON\'20, the ROBO DANGAL happening on the 15th and 16th of February at the University of Engineering and Management, Kolkata. Brace yourself for the ultimate battle by registering into the game wasting not a second more.',
    coordinators: [
      {
        name: 'Arnab Das',
        phone: 9230468967
      },
      {
        name: 'Adarsh Singh',
        phone: 9504414052
      }
    ],
    type: 'Team',
    max: '5',
    image: "images/event_icons/ROBODANGAL.png"
  },

  // Robo League
  {
    name: 'Robo League',
    email: 'pratik2d.28@gmail.com',
    about:
      '"""Great opportunities come to those who make the most of small ones.""Its time to show your technical skills and conquer the battlefield of Bots. Bring out your Bots to fight against different colleges in ROBO-LEAGUE by URECKON, a football league of Robots! Don\'t miss out the opportunity to hit the goal and bring yourself glory!',
    coordinators: [
      {
        name: 'Pratik dey',
        phone: 8697178236
      },
      {
        name: 'Souronil chatterjee',
        phone: 8514931866
      }
    ],
    type: 'Both',
    max: '5',
    image: "images/event_icons/ROBO LEAGUE.png"
  },

  // Need for Torque
  {
    name: 'Need For Torque',
    email: 'debarup.ds98@gmail.com',
    about:
      '"Are you fast enough to reach the finish line? Do you think your Bots can defeat and bring you the honor?If so, then fuel up your Bots and bring them to NEED FOR TORQUE, organized by URECKON where Robots will race against each other! Don\'t miss out the chance to rule the track!',
    coordinators: [
      {
        name: 'Debarup Sadhukhan',
        phone: 7278816589
      },
      {
        name: 'Rahul Sil',
        phone: 9748692859
      }
    ],
    type: 'Team',
    max: '4',
    image: "images/event_icons/NEED FOR TORQUE.png"
  },

  // Direcion
  {
    name: 'Dirrecion',
    email: 'tatha.b10@gmail.com',
    about:
      "\"Triumphant starts with knowing exactly where you're going and how you'll reach there. URECKON brings the event DIRRECION, where your Bot has to reach the destination without loosing the trail. With minimum time loss, test your power in designing and governing your Bots! Embrace the opportunity to attain the aim and win yourself the glory!",
    coordinators: [
      {
        name: 'Tathagata Banerjee',
        phone: 9477583958
      },
      {
        name: 'Sayan Bose',
        phone: 7278724340
      }
    ],
    type: 'Team',
    max: '4',
    image: "images/event_icons/DIRRECION.png"
  },

  // Hold the Grip
  {
    name: 'Hold the Grip',
    email: 'ritayandhara123@gmail.com',
    about:
      '"The grip shall be strong for you to conquer the game. With a strong grip of your bot, you can step ahead your opponents. If you think your Bot is as strong as your technical skills, then bring your bots and showcase their grips in HOLD THE GRIP organized by URECKON!It\'s your chance to exhibit your hold!',
    coordinators: [
      {
        name: 'Somipom Mondal',
        phone: 8918053544
      },
      {
        name: 'Ritayan Dhara',
        phone: 8967343907
      }
    ],
    type: 'Both',
    max: '4',
    image: "images/event_icons/HOLD THE GRIP.png"
  },

  // Aerostorm
  {
    name: 'Aerostorm',
    email: 'riddhi1098@gmail.com',
    about:
      "Aerostorm Let's be the pilot of our dreams.So here peeps now the time has finally arrived to make your dreams fly high with Ureckon's Aerostorm challenge. This challenge not only gives you a chance to showcase your techincal skills but also provides a platform to compete with others using your electric planes through a series of tasks and showcase your talents in flying. So Fasten your seat belts and be ready to take off on 15th and 16th of February, 2020.",
    coordinators: [
      {
        name: 'Riddhiman Mukhopadhyay',
        phone: 8337008899
      },
      {
        name: 'Riddhiman Mukhopadhyay',
        phone: 8337008899
      }
    ],
    type: 'Both',
    max: '2',
    image: "images/event_icons/AEROSTORM.png"
  },

  // Bridge-O-Nics
  {
    name: 'Bridge-O-Nics',
    email: 'bridgeonics@gmail.com',
    about:
      'Biote Xpression.Biology when applied with Technology has always been advantageous.Ureckon³ is also giving you an exciting opportunity to showcase your ideas in the field of biology along with technological skills.So the time has arrived peeps to show the world your innovative ideas and its usefulness in the form of working models in a team in the event ""Biote Expression"" on 15th and 16th of February, 2020.Hurry up and register yourselves for the same.',
    coordinators: [
      {
        name: 'Sambit Chakraborty',
        phone: 8902290887
      },
      {
        name: 'Anjali Singh',
        phone: 9525564439
      }
    ],
    type: 'Team',
    max: '3',
    image: "images/event_icons/BRIDGE-O-NICS.png"
  },

  // Code Ranch
  {
    name: 'Code Ranch',
    email: 'sagnik.sengupta56@gmail.com',
    about:
      "Think. Invent. Code.Do you want to gruel your brain to the bashing cryptic languages? Do you feel you are worthy enough to earn the title of a 'coder'?Here is your chance to grab the opportunity and enhance your congnizance! Hop onto your coding platforms and join in to the *Ureckon 2020 Code Ranch! The biggest Techno-Management fest is back with the most thoroughly tickling brain gruellers to test your skills!",
    coordinators: [
      {
        name: 'Sagnik Sengupta',
        phone: 9733197523
      },
      {
        name: 'Jagjeet Kaur',
        phone: 7278722839
      }
    ],
    type: 'Both',
    max: '2',
    image: "images/event_icons/CODE RANCH.png"
  },

  // Code Golf
  {
    name: 'Code Golf',
    email: 'abhishekmadhu.uem@gmail.com',
    about:'Tick... tock...tick... tock...You solve your codes, while a timer poses your deadline! Are you up for it? Can you prove to be a smart coder? Here is your chance to blend in to a new adventure of solving codes with the clutches of a fixed time!Code Golf , offered by *Ureckon 2020* provides you this platform. Sink in to the dates : 15-16 February.The greatest Techno-Management fest, awaits your participation!',
    coordinators: [
      {
        name: 'Yusuf Idrishi',
        phone: 8910611930
      },
      {
        name: 'Rajdeep',
        phone: 8240841662
      }
    ],
    type: 'Both',
    max: '2',
    image: "images/event_icons/CODE GOLF.png"
  },

  // Spyder
  {
    name: 'Spyder',
    email: 'soumyadip.note@gmail.com',
    about: 'We don\'t just build websites.We build websites that SELL ~Christopher Dayagdag. Flaunt your e- creativity.Merge them into websites.And cause people to dig in to the awe of aesthetic vision.Do you think you can own this task ? Do you think you can craft your websites into uniqueness ? Bring on your skills to * Spyder *, a web designing competition offered by the biggest Techno - Management fest, * Ureckon 2020 * !!* 15 - 16 February * awaits your skills to pour in !Bring on the flavour to this competition by indulging in e - art and aesthetism!',
    coordinators: [
      {
        name: 'Kumar Shivam',
        phone: 8420355858
      },
      {
        name: 'Soumyadip',
        phone: 7687028083
      }
    ],
    type: 'Both',
    max: '2',
    image: "images/event_icons/SPYDER.png"
  },

  // Debugger
  {
    name: 'Debugger',
    email: 'ipratikgoel@gmail.com',
    about: 'Stop. Debug. Learn. Code.Solve the intricacies that prevent a code from working.Be the debugger, the only dexterous man to get the program running.Do you have what it takes?Register to the *Debugger* , offered by *Ureckon 2020*, the greatest Techno- Management fest.It provides you with a series of problems to be debugged and tested, to judge your capabilities! Why wait ? You are just a click away.',
    coordinators: [
      {
        name: 'Pratik Goel',
        phone: 9051481667
      },
      {
        name: 'Soumyajit Dey',
        phone: 9903348739
      }
    ],
    type: 'Both',
    max: '2',
    image: "images/event_icons/DEBUGGER.png"
  },

  // Cyber Crime
  {
    name: 'Cyber Cipher',
    email: 'sangramjitmaity@gmail.com',
    about:
      'It is an ethical hacking contest in which certain pieces of information called ‘flags’ are hidden in the challenges. Bring a team ready to be tested in cryptography, steganography, cyber forensics, binary exploitation, reverse engineering and other real world problems on their way to  capture the flag. <br> <br>CTF Type: Jeopardy',
    coordinators: [
      {
        name: 'Sangramjit Maity',
        phone: 7548934651
      },
      {
        name: 'Tathagata Rudra',
        phone: 9830812424
      }
    ],
    type: 'Both',
    max: '4',
    image: "images/event_icons/CYBER CIPHER.png"
  },

  // RSS
  {
    name: 'Rainbow Six Seige',
    email: 'grichik@rediffmail.com',
    about:
      '"Got what it takes to handle stress like a pro? Times when your world has turned upside down, cause there is a need of rescuing a hostage or defusing a bomb at the earliest, since you are on a mission to save the world?If yes, then check this awesome game called the RAINBOW SIX SIEGE COMPETITION happening at the University of Engineering and Management at its annual techno-management fest,  URECKON happening on 15th and 16th of February 2k20.So? Gear up yourself and register at link given below to be a part.',
    coordinators: [
      {
        name: 'Richik Gangopadhyay',
        phone: 9674377482
      },
      {
        name: 'Soham Halder',
        phone: 00000000
      }
    ],
    type: 'Team',
    max: '5',
    image: "images/event_icons/RAINBOW SIX SEIGE.png",
    fees: "₹500 / team"
  },

  // PUBG
  {
    name: 'PUBG',
    email: 'sds241@gmail.com',
    about:
      '"Do you have what it takes?To defeat the enemy?To prove your worth on battleground?To make everyone proud with you actions and sacrifices?Then, get ready to drop in for the ultimate face-off, as the  University of Engineering and Management introduces you to the PUBG - MOBILE contest at Ureckon 2020, organized on 15th and 16th of February. Get your guns loaded, grenades ready and get into the field to strike down the opponent squad and be the conqueror.So what is the wait for?Grab your gizmos and get ready for the slaughter to win the Ultimate Chicken Dinner.',
    coordinators: [
      {
        name: 'Soumyadeep Saha',
        phone: 8420175067
      },
      {
        name: 'Ranajoy Ghatak ',
        phone: 9123376058
      }
    ],
    type: 'Team',
    max: '4',
    image: "images/event_icons/PUBG(MOBILE+EMULATOR).png",
    fees: "₹200 / Team"
  },

  // FIFA
  {
    name: 'FIFA',
    email: 'samanway.ghosh@gmail.com',
    about:
      '"Football is like life - it requires perseverance, self-denial, hard work, sacrifice, dedication and respect for authority. ~ Vince Lombardi.Are you devoted enough towards football, to such an extent that you can push the game beyond your limits and lead the team to a victory?If yes, what are you waiting for? The University of Engineering and Management is organizing FIFA GAME CONTEST on the 15th and 16th of February at its annual techno-management fiesta URECKON.',
    coordinators: [
      {
        name: 'ARINDRAJIT JAS',
        phone: 8910277688
      },
      {
        name: 'DEBADRITA PAL',
        phone: 8240639619
      }
    ],
    type: 'Solo',
    max: '1',
    image: "images/event_icons/FIFA.png",
    fees: "₹100 / participant"
  },

  // CSGO
  {
    name: 'CSGO',
    email: 'sagnik.sengupta56@gmail.com',
    about:
      'The power of choosing good and evil is within the reach of all." ~Origen.Passionate enough within yourself to take to terrorism? For them to fulfill your demands, or the courage to take to counter-terrorism to save the world? The choice is yours.Either of the ways you choose, we will be happy to serve you at the ultimate showdown as the University of Engineering and Management is coming up with the Counter Strike: Global Offensive Contest at URECKON 2K20.Wanna know more about it?It is the most stunning gaming contest of UEM Kolkata, to be held as a part of Ureckon 2020 on 15-16 February, which compiles the unforeseen gaming manoeuvre from around the world. So, what are you waiting for? For your life end up in this usual boring schedule? Cmon and show the world what you got',
    coordinators: [
      {
        name: 'Rohit Chakraborty',
        phone: 9432372114
      },
      {
        name: 'Swagatam Biswas',
        phone: 9051582873
      }
    ],
    type: 'Team',
    max: '2',
    image: "images/event_icons/CS GO.png",
    fees: "₹200 / Team"
  },

  // Urecka
  {
    name: 'Urecka',
    email: 'abhishekuem89@gmail.com',
    about:
      "One cannot discover new oceans unless one has the courage to lose sight of the shore.Innovation is seeing what everybody has seen and thinking what nobody has thought.Your innovation becomes a motivation not only for your generation but also for the future generations. Is thinking out of the box, your forte ? Can you enthral the technical domain with your innovative project?If yes, then grasp onto this window of opportunity by registering yourseves for URECKA (URECKON Innovation Challenge for School) and also become a part of URECKON'20, to be held on 15th and 16th February'20. So what are you waiting for?",
    coordinators: [
      {
        name: 'Abhishek Jaiswal',
        phone: 8910924144
      },
      {
        name: 'Chandan Kumar',
        phone: 9163036910
      }
    ],
    type: 'Both',
    max: '5'
  },

  // Clue X
  {
    name: 'ClueX',
    email: 'somlina0320@gmail.com',
    about:
      '"""Mind is like a plant. The more you water it with knowledege, the faster it grows.""If keeping up with the facts from all around the globe your knack, rejuvenating your mind with the smell of the pages of books and newspapers your hobby, and using the knowledge gained from each sentence of every page, to stay a step ahead of others, then URECKON 2020 welcomes you to participate in the school level apti and quiz competition, CLUE X.The motive of CLUE X is not to judge who is ahead of whom rather to make sure that everyone is on the same page.So become a part of this two day quizzing journey with challenging and appealing rounds, to be held on 15th and 16th February\'20.',
    coordinators: [
      {
        name: 'Avinandan Mukherjee',
        phone: 8981814735
      },
      {
        name: 'Somlina Ghosh Ray',
        phone: 8017424905
      }
    ],
    type: 'Both',
    max: '2'
  },

  // Ad Mad
  {
    name: 'Ad Mad',
    email: 'arijitjalui81@gmail.com',
    about:
      'URECKON stands for Innovation and Creativity After the grand success of last two seasons URECKON 2020 is back with more excitement and enthusiasm._""Creative without strategy is called ‘art.’_Creative with strategy is called ‘advertising.”_Confident enough to exhibit your own advertisement with most entertaining and convincing dialogues?Why wait? AD MAD - ADVERTISEMENT MAKING COMPETITION on 15-16 February\'20 at University of Engineering and Management Kolkata Campus* is the apt platform for you.Grab this opportunity and become a part of URECKON\'20, one of the biggest Techno-Management fest.Gear up to present your most eye appealing Advertisement',
    coordinators: [
      {
        name: 'Arijit Jalui',
        phone: 9123086608
      },
      {
        name: 'Aman Mehta',
        phone: 9648339933
      }
    ],
    type: 'Both',
    max: '4',
    image: "images/event_icons/AD-MAD.png"
  },

  // Get Set Sell
  {
    name: 'Get Set Sell',
    email: 'iamaditinandan1999@gmail.com',
    about:
      '"Visualising yourself as a successful Entrepreneur in Future?Everyone journey starts with a single leap.Waiting to put your foot forward?URECKON 2020 brings you GET SET SELL, an event to showcase your marketing skills to the open world on 15-16 February\'20 at University of Engineering and Management Kolkata Campus.Strategize your marketing skills and sell your products at higest value.',
    coordinators: [
      {
        name: 'Aditi Nandan',
        phone: 8910627702
      },
      {
        name: 'Ayan saha',
        phone: 9038775817
      }
    ],
    type: 'Both',
    max: '4',
    image: "images/event_icons/GET SET SELL.png"
  },

  // Idea Preach
  {
    name: 'Idea Preach',
    email: 'rishritwik2208@gmail.com',
    about:
      '"Bill Gates quoted -"Whether it\'s Google or Apple or free software, we\'ve got some fantastic competitors and it keeps us on our toes".Have your Business Idea Ready?Are you passionate enough to make your Idea Work?IDEA PREACH presented by *URECKON 2020* may turn your dream into reality.What are you waiting for? Embrace your dream Start-Up, Brush it and Present your Idea this 15-16 February \' 20 at University of Engineering and Management Kolkata Campus.You can be the next Bill Gates or Mark Zuckerberg',
    coordinators: [
      {
        name: 'Rishabh Verma',
        phone: 9831852054
      },
      {
        name: 'Sabyasachi Ganguly',
        phone: 9874287348
      }
    ],
    type: 'Solo',
    max: '1',
    image: "images/event_icons/IDEA PREACH.png"
  },

  // Healthy Bites
  {
    name: 'Healthy Bites',
    email: 'arunimaghosh444@gmail.com',
    about:
      "Can you hear the smell of someone cooking?Do you have a chef inside you? Can you cook deliciously healthy food? So the time has come. Ureckon³ brings to you an exciting opportunity to showcase your cooking skills. Healthy food is not always tasty. So here is the challenge of how can you make it delicious. So don't waste the time and come and showcase your skills in the event Healthy Bites  on 15th and 16th of February.",
    coordinators: [
      {
        name: 'Arunima Ghosh',
        phone: 8584856172
      },
      {
        name: 'Sohini Roy',
        phone: 9674929318
      }
    ],
    type: 'Team',
    max: '4',
    image: "images/event_icons/HEALTHY BITES.png"
  },

  // Biotextpression
  {
    name: 'BIOTEXPRESSION',
    email: 'sushantikachatterjee1999@gmail.com',
    about:
      'Biote Xpression.Biology when applied with Technology has always been advantageous.Ureckon³ is also giving you an exciting opportunity to showcase your ideas in the field of biology along with technological skills.So the time has arrived peeps to show the world your innovative ideas and its usefulness in the form of working models in a team in the event ""Biote Expression"" on 15th and 16th of February, 2020.Hurry up and register yourselves for the same.',
    coordinators: [
      {
        name: 'Sushantika Chatterjee',
        phone: 8620869405
      },
      {
        name: 'Sudeshna Roy',
        phone: 7003085794
      }
    ],
    type: 'Team',
    max: '4',
    image: "images/event_icons/BIOTEXPRESSION.png"
  },

  // Think Tech
  {
    name: 'Think Tech',
    email: 'dave.nivesh15@gmail.com',
    about:
      "\"From high-stakes mergers to high-tech wheeling and dealing to high-profile flops, Test your memory with Think Tech presented by University of Engineering and Management Kolkata on 15-16 February'20 at University Campus.Crack through the Techno-Biz Test storming your brain out of the box to make your Intelligence Quotient count.Grab the opportunity and win exciting prizes.Don't wait!",
    coordinators: [
      {
        name: 'Nivesh Dave',
        phone: 8013147519
      },
      {
        name: 'Rishab Das',
        phone: 9874431406
      },
      {
        name: 'Sabyasachi Ganguly',
        phone: 9874287348
      }
    ],
    type: 'Team',
    max: '2',
    image: "images/event_icons/THINK TECH.png"
  },

  // UICC
  {
    name: 'Ureckon International Coding Challenge',
    email: 'ipratikgoel@gmail.com',
    about:
      '"Hey, you there! Yes, you! So you are a coder, huh? Do you love challenges? Or do you love making new algorithms for problems?So here a challenge from team URECKON...come up on UICC and solve all of it',
    coordinators: [
      {
        name: 'Pratik Goel',
        phone: 9051481667
      },
      {
        name: 'Pratik Goel',
        phone: 9051481667
      }
    ],
    type: 'Solo',
    max: '1',
    image: "images/event_icons/UICC.png"
  },

  // Tech Script
  {
    name: 'Tech Script',
    email: 'somlina0320@gmail.com',
    about:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.With this approach, the third edition of Ureckon comes up with Tech Script which is one of the International Competitions of our Annual techno- management festival.Any sufficiently advance technology is synonymous to magic.However, the key does not lie in the already proven laws, but how one can incorporate their imagination into the laws and come up with new ideas.So what is the wait for??  URECKON 2020 invites you to share your theories with us and get recognized.Let the technical worms in your minds get to work.",
    coordinators: [
      {
        name: 'Somlina Ghosh Ray',
        phone: 8017424905
      },
      {
        name: 'Somlina Ghosh Ray',
        phone: 8017424905
      }
    ],
    type: 'Solo',
    max: '1',
    image: "images/event_icons/TECH SCRIPT.png"
  },

  // Post X
  {
    name: 'Post X',
    email: 'souvikbiswasred5@gmail.com',
    about:
      'Tired of the way things are working? Want to bring some change? Want to raise your voice and make others more aware...then this is your chance ... open up to the world Though your poster ...in post x',
    coordinators: [
      {
        name: 'SOUVIK BISWAS',
        phone: 9163267240
      },
      {
        name: 'Akash Mukherjee',
        phone: 9830351567
      }
    ],
    type: 'Both',
    max: '4',
    image: "images/event_icons/POST X.png"
  }
];

const fillDetails = (index) => {
  let event = eventInfo[index];
  console.log(event);
  
  document.querySelector('.about').innerHTML = event.about;
  document.querySelector('.about').innerHTML += event.fees ? `<br> <br>Registration Fees: ${event.fees}` : ""
  document.querySelector('.event_name').innerHTML = event.name;
  document.querySelector('.event_logo').src = event.image;
  if(event.type === "Both"){
    document.querySelector('.max_members').innerHTML = event.max;
    document.querySelector('.solo').style.display = 'block';
    document.querySelector('.team').style.display = 'block';
  }
  if(event.type === "Solo"){
    document.querySelector('.team').style.display = 'none';
    document.querySelector('.solo').style.display = 'block';
  }
  if(event.type === "Team"){
    document.querySelector('.solo').style.display = 'none';
    document.querySelector('.team').style.display = 'block';
    document.querySelector('.max_members').innerHTML = event.max;
  }
  let coordinators = event.coordinators;
  document.querySelector(
    '.event_contacts'
  ).innerHTML = `<div class="header_email">
            <h2>Contacts</h2>
            <a href="mailto:${event.email}" class="event_mail"><img src="./images/email.png" alt="Email" class="email_logo"></a>
          </div>

          <div class="event_contact">
            <img class="contact_logo" src="./images/support.png" alt="Support">
            <p class="contact_name">${coordinators[0].name}</p>
            <a href="tel:${coordinators[0].phone}" class="contact_phone"><img src="./images/icon_phone.svg" alt="Phone" class="phone_logo"></a>
          </div>
        
          <div class="event_contact">
            <img class="contact_logo" src="./images/support.png" alt="Support">
            <p class="contact_name">${coordinators[1].name}</p>
            <a href="tel:${coordinators[1].phone}" class="contact_phone"><img src="./images/icon_phone.svg" alt="Phone" class="phone_logo"></a>
          </div>`;
  
    if (event.coordinators[2] !== undefined) {
      document.querySelector(
        '.event_contacts'
      ).innerHTML += `<div class="event_contact">
            <img class="contact_logo" src="./images/support.png" alt="Support">
            <p class="contact_name">${coordinators[2].name}</p>
            <a href="tel:${coordinators[2].phone}" class="contact_phone"><img src="./images/icon_phone.svg" alt="Phone" class="phone_logo"></a>
          </div>`
    }
  detailsModal.classList.toggle('modal_close');
}

// View Detail Buttons
var _0 = document.querySelector('._0');
_0.addEventListener('click', () => {fillDetails(0)});
var _1 = document.querySelector('._1');
_1.addEventListener('click', () => fillDetails(1));
var _2 = document.querySelector('._2');
_2.addEventListener('click', () => fillDetails(2));
var _3 = document.querySelector('._3');
_3.addEventListener('click', () => fillDetails(3));
var _4 = document.querySelector('._4');
_4.addEventListener('click', () => fillDetails(4));
var _5 = document.querySelector('._5');
_5.addEventListener('click', () => fillDetails(5));
var _6 = document.querySelector('._6');
_6.addEventListener('click', () => fillDetails(6));
var _7 = document.querySelector('._7');
_7.addEventListener('click', () => fillDetails(7));
var _8 = document.querySelector('._8');
_8.addEventListener('click', () => fillDetails(8));
var _9 = document.querySelector('._9');
_9.addEventListener('click', () => fillDetails(9));
var _10 = document.querySelector('._10');
_10.addEventListener('click', () => fillDetails(10));
var _11 = document.querySelector('._11');
_11.addEventListener('click', () => fillDetails(11));
var _12 = document.querySelector('._12');
_12.addEventListener('click', () => fillDetails(12));
var _13 = document.querySelector('._13');
_13.addEventListener('click', () => fillDetails(13));
var _14 = document.querySelector('._14');
_14.addEventListener('click', () => fillDetails(14));
var _15 = document.querySelector('._15');
_15.addEventListener('click', () => fillDetails(15));
var _16 = document.querySelector('._16');
_16.addEventListener('click', () => fillDetails(16));
var _17 = document.querySelector('._17');
_17.addEventListener('click', () => fillDetails(17));
var _18 = document.querySelector('._18');
_18.addEventListener('click', () => fillDetails(18));
var _19 = document.querySelector('._19');
_19.addEventListener('click', () => fillDetails(19));
var _20 = document.querySelector('._20');
_20.addEventListener('click', () => fillDetails(20));
var _21 = document.querySelector('._21');
_21.addEventListener('click', () => fillDetails(21));
var _22 = document.querySelector('._22');
_22.addEventListener('click', () => fillDetails(22));
var _23 = document.querySelector('._23');
_23.addEventListener('click', () => fillDetails(23));
var _24 = document.querySelector('._24');
_24.addEventListener('click', () => fillDetails(24));
var _25 = document.querySelector('._25');
_25.addEventListener('click', () => fillDetails(25));
var _26 = document.querySelector('._26');
_26.addEventListener('click', () => fillDetails(26));
var _27 = document.querySelector('._27');
_27.addEventListener('click', () => fillDetails(27));
var _28 = document.querySelector('._28');
_28.addEventListener('click', () => fillDetails(28));
// var _29 = document.querySelector('._29');
// _29.addEventListener('click', () => fillDetails(29));

$(document).ready(function () {
  selectPanel();
})