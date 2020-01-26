const app = new Vue({
  el: '#app',
  data: {
	message: 'Hello Vue!',
	depictedWomanIndex: 0,
	revealed: false,	
	yourGuesses: [],
	selected: "B",	
	getNew: 0,
	womenLeadersInSTEM: [
	  {firstName: "Katherine", lastName: "Johnson", employedBy: "National Aeronautics and Space Administration (NASA)", firstSightURL: "Katherine_Johnson_at_NASA.jpg",
       revealURL: "Katherine_Johnson_award.jpg", education: "Bachelor's", sheWas: "Research Mathematician", 
	   pro: {isProLGBTQ: false,	         
	      isProFeminism: true,
		  isPavingWayForward: true, 
		  isPromotingPeace: false,
		  isProtestingRacism: true,
		  isPromotingCivilRights: true,
		  isPromotingEnvironment: false			 
		 },
	   accurateGuesses: ["Mathematician"],
	   summary: "Katherine Johnson was born in White Sulphur Springs, West Virginia in 1918, her intense curiosity and brilliance with numbers vaulted her ahead several grades in school. By ten, she was attending the high school on the campus of historically black West Virginia State College. At fourteen, she enrolled in the college itself, where she made quick work of the school’s math curriculum and found a mentor in math professor W. W. Schieffelin Claytor, the third African American to earn a PhD in Mathematics. Two years later, Katherine was handpicked to be one of three black students to integrate West Virginia’s graduate school, although she quit after one year, after becoming pregnant and choosing to focus on her family. This didn't stop her, she became as a NASA employed mathematician whose calculations of orbital mechanics were critical to the success of the first and subsequent U.S. crewed spaceflights."
	   },
	  {firstName: "Donna", lastName: "Strickland", employedBy: "University of Waterloo", firstSightURL: "DS1.jpg",
       revealURL: "DS2.jpg", education: "Ph.D", sheWas: "Research Physicist", 
	   pro: {isProLGBTQ: false,	         
	      isProFeminism: true,
		  isPavingWayForward: true, 
		  isPromotingPeace: false,
		  isProtestingRacism: false,
		  isPromotingCivilRights: false,
		  isPromotingEnvironment: false			 
		 },
	   accurateGuesses: ["Physicist"],
	   summary: "Donna Strickland was born on 27 May 1959, in Guelph, Ontario, Canada. After graduating from Guelph Collegiate Vocational Institute, she decided to attend McMaster University because its engineering physics program included lasers and electro-optics, areas of particular interest. At McMaster, she was one of three women in a class of twenty-five. While conducting her doctoral research, Strickland and her supervisor Mourou worked to develop an experimental setup that could raise the peak power of laser pulses. This work earned them the 2018 Nobel Prize in Physics."
	   },
	   {firstName: "Maria", lastName: "Goeppert Mayer", employedBy: "Los Alamos National Laboratory (The Manhattan Project)", firstSightURL: "MG1.jpg",
       revealURL: "MG2.jpg", education: "Ph.D", sheWas: "Theoretical Physicist", 
	   pro: {isProLGBTQ: false,	         
	      isProFeminism: true,
		  isPavingWayForward: true, 
		  isPromotingPeace: false,
		  isProtestingRacism: false,
		  isPromotingCivilRights: false,
		  isPromotingEnvironment: false			 
		 },
	   accurateGuesses: ["Physicist"],
	   summary: "Maria Goeppert was born on June 28, 1906, in Kattowitz, a Silesian city in Prussia. In 1921, she entered the Frauenstudium, a private high school run by suffragettes that aimed to prepare girls for university. In the Spring of 1924, Goeppert entered the University of Göttingen, where she studied mathematics and physics. In 1930 Goeppert married Joseph Mayer and the couple moved to the United States, where Joseph had been offered a position at Johns Hopkins University. Strict rules against nepotism prevented Johns Hopkins University from hiring Maria as a faculty member. By this time, these rules had lost their original purpose and were primarily used to prevent the employment of women married to faculty members. Through her friend Edward Teller, Maria was given a position a position working on the Manhattan Project, first at Columbia University then Los Alamos Laboratory. After this, Maria developed a mathematical model for the structure of nuclear shells, which she published in 1950 and earned her the 1963 Nobel Prize in physics."
	   },
	   {firstName: "Rita", lastName: "Levi-Montalcini", employedBy: "Washington University in St. Louis", firstSightURL: "Rita_Levi-Montalcini1.jpg",
       revealURL: "rita-levi-montalcini2.jpg", education: "M.D.", sheWas: "Neurobiologist", 
	   pro: {isProLGBTQ: false,	         
	      isProFeminism: true,
		  isPavingWayForward: true, 
		  isPromotingPeace: true,
		  isProtestingRacism: true,
		  isPromotingCivilRights: true,
		  isPromotingEnvironment: false			 
		 },
	   accurateGuesses: ["Neurologist"],
	   summary: "Rita Levi-Montalcini was born on 22 April 1909 in Turin, to a Sephardic Jewish family. In her teenage years she considered becoming a writer, but after seeing a close family friend die of stomach cancer she decided to attend the University of Turin Medical School. Her father discouraged his daughters from attending college, as he feared it would disrupt their potential lives as wives and mothers, but eventually he supported Levi-Montalcini's aspirations. After graduating summa cum laude M.D. in 1936, she remained at the university as Levi's assistant, but her academic career was cut short by Benito Mussolini's 1938 Manifesto of Race and the subsequent introduction of laws barring Jews from academic and professional careers. During World War II she set up a laboratory in her bedroom and studied the growth of nerve fibers in chicken embryos, which laid the groundwork for much of her later research. When the Germans invaded Italy in September 1943, her family fled south to Florence, where they survived the Holocaust, under false identities, protected by some non-Jewish friends. Once again she set up a laboratory in her hiding place, in a corner of their shared living space. Washington University in St. Louis offered her a research associate position, which she held for 30 years. It was there that, in 1952, she did her most important work: isolating nerve growth factor. This is what earned her the 1986 Nobel Prize in Medicine."
	   },
	   {firstName: "Rosalind", lastName: "Franklin", employedBy: "King's College London", firstSightURL: "Rosalind-Franklin1.jpg",
       revealURL: "rosalind2.jpg", education: "Ph.D", sheWas: "Research Chemist", 
	   pro: {isProLGBTQ: false,	         
	      isProFeminism: true,
		  isPavingWayForward: true, 
		  isPromotingPeace: false,
		  isProtestingRacism: true,
		  isPromotingCivilRights: true,
		  isPromotingEnvironment: false			 
		 },
	   accurateGuesses: ["Chemist"],
	   summary: "Rosalind Franklin was born on 25 July 1920 in 50 Chepstow Villas, Notting Hill, London, into an affluent and influential British Jewish family. Franklin's parents helped settle Jewish refugees from Europe who had escaped the Nazis, particularly those from the Kindertransport. She was 11 when she went to St Paul's Girls' School, West London, one of the few girls' schools in London that taught physics and chemistry. With six distinctions, she passed her matriculation in 1938, winning a scholarship for university, her father asked her to give the scholarship to a deserving refugee student. Franklin studied chemistry at Newnham College, Cambridge starting in 1938 and recieved her Ph.D from Cambridge university in 1945. In 1950, Franklin was granted a three-year Turner & Newall Fellowship to work at King's College London. She was originally appointed to work on X-ray diffraction of proteins and lipids in solution, but Randall, her director, redirected her work to DNA fibres. The X-ray diffraction pictures, including the landmark Photo 51 taken by Franklin's student Gosling, proved the helical shape of DNA. James Watson and Francis Crick then covertly used her data to publish a proposed model for DNA without giving her any credit for her work."
	   },
	   {firstName: "Roberta", lastName: "Bondar", employedBy: "National Aeronautics and Space Administration (NASA)", firstSightURL: "Roberta-Bondar1.jpg",
       revealURL: "Roberta-Bondar2.jpg", education: "Ph.D and M.D.", sheWas: "Neurologist/Astronaut", 
	   pro: {isProLGBTQ: false,	         
	      isProFeminism: true,
		  isPavingWayForward: true, 
		  isPromotingPeace: false,
		  isProtestingRacism: false,
		  isPromotingCivilRights: false,
		  isPromotingEnvironment: true			 
		 },
	   accurateGuesses: ["Neurologist", "Astronaut"],
	   summary: "Roberta Bondar was born in Sault Ste. Marie, Ontario, on December 4, 1945. Bondar graduated from Sir James Dunn High School in Sault Ste. Marie Ontario, and holds a Bachelor of Science in zoology and agriculture from the University of Guelph (1968), a Master of Science in experimental pathology from the University of Western Ontario (1971), a Doctor of Philosophy in neuroscience from the University of Toronto (1974), and a Doctor of Medicine from McMaster University (1977). he began astronaut training in 1984, and in 1992 was designated Payload Specialist for the first International Microgravity Laboratory Mission (IML-1). Bondar flew on the NASA Space Shuttle Discovery during Mission STS-42, January 22–30, 1992, during which she performed experiments in the Spacelab. This made her Canada's first female astronaut and the first neurologist in space. After her astronaut career, Bondar led an international team of researchers at NASA for more than a decade, examining data obtained from astronauts on space missions to better understand the mechanisms underlying the body's ability to recover from exposure to space."
	   },


	  {}
	],
    loginState: false,
    proSymbols: {lgbtqSymbol: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nuvola_LGBT_flag.svg",
	             feminismSymbol: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Feminism_symbol.svg",
				 wayForwardSymbol: "https://www.svgrepo.com/show/64250/rocket-ship.svg",
				 peaceSymbol: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Peace_sign.svg",
				 noRacismSymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Anti-Nazi-Symbol.svg/1024px-Anti-Nazi-Symbol.svg.png",
				 civilRightsSymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fist.svg/800px-Fist.svg.png",
				 environmentSymbol: "https://www.svgrepo.com/show/293497/planet-earth-environment.svg"}		 
  },
  created: function() {
	  //console.log(this.womenLeadersInSTEM.length)
	  this.depictedWomanIndex = Math.floor(Math.random() * Math.floor(this.womenLeadersInSTEM.length - 0.1)) 
	  //console.log(this.depictedWomanIndex)
	  
  },
  methods: {    
	  randomlyChosenWoman: function() {
		  this.depictedWomanIndex = Math.floor(Math.random() * Math.floor(this.womenLeadersInSTEM.length - 0.1)) 
	  },
	  addGuess: function(guess) {
		  if (!(this.yourGuesses.includes(guess))) {
             this.yourGuesses.push(guess)
          }
		  
		  
	  },
	  removeGuess: function(guess) {
		  console.log(this.guess)
		  for(var i = this.yourGuesses.length - 1; i >= 0; i--) {
            if(this.yourGuesses[i] === guess) {
              this.yourGuesses.splice(i, 1);
              }
            }
	  },
	  reveal: function() {
		  this.revealed = true;
	  },
	  
	  hide: function() {
		  this.getNew += 1
		  this.revealed = false;
	  }



	  
  },

  watch: {
	  getNew: function() {
		  this.randomlyChosenWoman()
	  }
  }  
	  
  })



