var url = "http://localhost:5000";


// var studentbatch=['b1','b2'];

// var allexams = [
//   {
//     setno: "e1",
//     name: "aptitude exam 1",
//     syllabus: "aptitude syllabus",
//     totalno: "90",
//     time: "13:30",
//     batches:["b1","b2","b3"],
//     date: "2024-04-24",
//     startingTime: "10:30",
//     status:1,
//     allquestions: [
//       {
//         qid: "q1",
//         ocm: "4",
//         owm: "1",
//         qtext: "1st question",
//         qType: "d",
//         op1: "we",
//         op2: "wsqas",
//         op3: "qas",
//         optionSet: "3",
//         qTopic: "aptitude",
//         oc: "123",
//       },
//       {
//         qid: "q2",
//         ocm: "4",
//         owm: "1",
//         qtext: "2nd question",
//         qType: "n",
//         optionSet: "0",
//         qTopic: "reasoning",
//         oc: "19083",
//       },
//       {
//         qid: "q3",
//         ocm: "4",
//         owm: "1",
//         qtext: "3rd question",
//         qType: "s",
//         op1: "we",
//         op2: "wsqas",
//         op3: "qas",
//         optionSet: "3",
//         qTopic: "english",
//         oc: "3",
//       },
//       {
//         qid: "q4",
//         ocm: "3",
//         owm: "2",
//         qtext: "4th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "456",
//       },
//       {
//         qid: "q5",
//         ocm: "3",
//         owm: "1",
//         qtext: "5th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "reasoning",
//         oc: "789",
//       }
//     ],
//     totalno: "5",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "3",
//     edcm: "5",
//     edq: "d",
//     edwm: "7"
//   },
//   {
//     setno: "e2",
//     name: "gk exam 2",
//     syllabus: "aptitude syllabus",
//     totalno: "90",


//     time: "14:00",
//     batches:["b4","b5","b6"],

//     date: "2024-04-25",
//     status:0,
//     startingTime: "11:00",
//     allquestions: [
//       {
//         qid: "q6",
//         ocm: "2",
//         owm: "2",
//         qtext: "6th question",
//         qType: "n",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "987",
//       },
//       {
//         qid: "q7",
//         ocm: "4",
//         owm: "1",
//         qtext: "7th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "3",
//         qTopic: "reasoning",
//         oc: "654",
//       },
//       {
//         qid: "q8",
//         ocm: "3",
//         owm: "1",
//         qtext: "8th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "english",
//         oc: "321",
//       }
//     ],
//     totalno: "3",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "4",
//     edcm: "8",
//     edq: "n",
//     edwm: "9"
//   },
//   {
//     setno: "e3",
//     name: "english exam 3",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     time: "15:00",
//     date: "2024-04-26",
//     batches:["b7"],

//     status:2,
//     startingTime: "12:00",
//     allquestions: [
//       {
//         qid: "q9",
//         ocm: "3",
//         owm: "1",
//         qtext: "9th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "147",
//       },
//       {
//         qid: "q10",
//         ocm: "2",
//         owm: "1",
//         qtext: "10th question",
//         qType: "n",
//         optionSet: "3",
//         qTopic: "reasoning",
//         oc: "258",
//       },
//       {
//         qid: "q11",
//         ocm: "4",
//         owm: "2",
//         qtext: "11th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "english",
//         oc: "369",
//       }
//     ],
//     totalno: "3",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "5",
//     edcm: "7",
//     edq: "s",
//     edwm: "3"
//   },
//   {
//     setno: "e4",
//     name: "maths exam 3",
//     totalno: "90",

//     syllabus: "aptitude syllabus",

//     time: "15:00",
//     batches:["b8","b9"],

//     date: "2024-04-26",
//     status:3,
//     startingTime: "12:00",
//     allquestions: [
//       {
//         qid: "q9",
//         ocm: "3",
//         owm: "1",
//         qtext: "9th question",
//         qType: "s",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "2",
//         qTopic: "aptitude",
//         oc: "147",
//       },
//       {
//         qid: "q10",
//         ocm: "2",
//         owm: "1",
//         qtext: "10th question",
//         qType: "n",
//         optionSet: "3",
//         qTopic: "reasoning",
//         oc: "258",
//       },
//       {
//         qid: "q11",
//         ocm: "4",
//         owm: "2",
//         qtext: "11th question",
//         qType: "d",
//         op1: "option1",
//         op2: "option2",
//         op3: "option3",
//         optionSet: "4",
//         qTopic: "english",
//         oc: "369",
//       }
//     ],
//     totalno: "3",
//     totaltopics: ["aptitude", "reasoning", "english", "general knowledge"],
//     nosubt: "4",
//     edo: "5",
//     edcm: "7",
//     edq: "s",
//     edwm: "3"
//   }
// ,
// {
//     "setno": "e5",
//     "name": "physics exam 1",
//     syllabus: "aptitude syllabus",
//     totalno: "90",


//     "time": "10:30",
//     "batches": ["b1", "b2"],
//     "date": "2024-05-01",
//     "status": 1,
//     "startingTime": "09:00",
//     "allquestions": [
//       {
//         "qid": "q12",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "12th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "mechanics",
//         "oc": "123"
//       },
//       {
//         "qid": "q13",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "13th question",
//         "qType": "n",
//         "optionSet": "2",
//         "qTopic": "thermodynamics",
//         "oc": "456"
//       },
//       {
//         "qid": "q14",
//         "ocm": "5",
//         "owm": "3",
//         "qtext": "14th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "3",
//         "qTopic": "optics",
//         "oc": "789"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["mechanics", "thermodynamics", "optics", "modern physics"],
//     "nosubt": "4",
//     "edo": "6",
//     "edcm": "8",
//     "edq": "n",
//     "edwm": "4"
//   },
//   {
//     "setno": "e6",
//     "name": "chemistry exam 2",
//     syllabus: "aptitude syllabus",
//     totalno: "90",


//     "time": "14:00",
//     "batches": ["b1", "b3"],
//     "date": "2024-05-05",
//     "status": 2,
//     "startingTime": "11:30",
//     "allquestions": [
//       {
//         "qid": "q15",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "15th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "2",
//         "qTopic": "stoichiometry",
//         "oc": "456"
//       },
//       {
//         "qid": "q16",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "16th question",
//         "qType": "n",
//         "optionSet": "3",
//         "qTopic": "chemical kinetics",
//         "oc": "789"
//       },
//       {
//         "qid": "q17",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "17th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "organic chemistry",
//         "oc": "123"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["stoichiometry", "chemical kinetics", "organic chemistry", "inorganic chemistry"],
//     "nosubt": "4",
//     "edo": "7",
//     "edcm": "9",
//     "edq": "d",
//     "edwm": "5"
//   },
//   {
//     "setno": "e7",
//     "name": "biology exam 1",
//     syllabus: "aptitude syllabus",
//     totalno: "90",


//     "time": "09:30",
//     "batches": ["b1", "b5"],
//     "date": "2024-05-10",
//     "status": 3,
//     "startingTime": "08:00",
//     "allquestions": [
//       {
//         "qid": "q18",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "18th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "cell biology",
//         "oc": "123"
//       },
//       {
//         "qid": "q19",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "19th question",
//         "qType": "n",
//         "optionSet": "2",
//         "qTopic": "genetics",
//         "oc": "456"
//       },
//       {
//         "qid": "q20",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "20th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "3",
//         "qTopic": "ecology",
//         "oc": "789"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["cell biology", "genetics", "ecology", "biochemistry"],
//     "nosubt": "4",
//     "edo": "8",
//     "edcm": "10",
//     "edq": "s",
//     "edwm": "6"
//   },
//   {
//     "setno": "e8",
//     "name": "history exam 2",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "11:00",
//     "batches": ["b1", "b7"],
//     "date": "2024-05-15",
//     "status": 1,
//     "startingTime": "09:30",
//     "allquestions": [
//       {
//         "qid": "q21",
//         "ocm": "5",
//         "owm": "2",
//         "qtext": "21st question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "2",
//         "qTopic": "ancient civilizations",
//         "oc": "789"
//       },
//       {
//         "qid": "q22",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "22nd question",
//         "qType": "n",
//         "optionSet": "3",
//         "qTopic": "medieval history",
//         "oc": "123"
//       },
//       {
//         "qid": "q23",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "23rd question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "modern history",
//         "oc": "456"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["ancient civilizations", "medieval history", "modern history", "world wars"],
//     "nosubt": "4",
//     "edo": "9",
//     "edcm": "11",
//     "edq": "n",
//     "edwm": "7"
//   },
//   {
//     "setno": "e9",
//     "name": "geography exam 1",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "14:30",
//     "batches": ["b1", "b9"],
//     "date": "2024-05-20",
//     "status": 2,
//     "startingTime": "12:00",
//     "allquestions": [
//       {
//         "qid": "q24",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "24th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "2",
//         "qTopic": "physical geography",
//         "oc": "456"
//       },
//       {
//         "qid": "q25",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "25th question",
//         "qType": "n",
//         "optionSet": "3",
//         "qTopic": "human geography",
//         "oc": "789"
//       },
//       {
//         "qid": "q26",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "26th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "economic geography",
//         "oc": "123"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["physical geography", "human geography", "economic geography", "political geography"],
//     "nosubt": "4",
//     "edo": "10",
//     "edcm": "12",
//     "edq": "s",
//     "edwm": "8"
//   },
//   {
//     "setno": "e10",
//     "name": "computer science exam 2",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "13:00",
//     "batches": ["b2", "b1"],
//     "date": "2024-05-25",
//     "status": 3,
//     "startingTime": "10:30",
//     "allquestions": [
//       {
//         "qid": "q27",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "27th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "programming",
//         "oc": "789"
//       },
//       {
//         "qid": "q28",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "28th question",
//         "qType": "n",
//         "optionSet": "2",
//         "qTopic": "data structures",
//         "oc": "123"
//       },
//       {
//         "qid": "q29",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "29th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "3",
//         "qTopic": "algorithms",
//         "oc": "456"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["programming", "data structures", "algorithms", "computer architecture"],
//     "nosubt": "4",
//     "edo": "11",
//     "edcm": "13",
//     "edq": "d",
//     "edwm": "9"
//   },
//   {
//     "setno": "e11",
//     "name": "literature exam 3",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "11:30",
//     "batches": ["b2", "b9"],
//     "date": "2024-05-30",
//     "status": 1,
//     "startingTime": "10:00",
//     "allquestions": [
//       {
//         "qid": "q30",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "30th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "2",
//         "qTopic": "poetry",
//         "oc": "456"
//       },
//       {
//         "qid": "q31",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "31st question",
//         "qType": "n",
//         "optionSet": "3",
//         "qTopic": "drama",
//         "oc": "789"
//       },
//       {
//         "qid": "q32",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "32nd question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "prose",
//         "oc": "123"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["poetry", "drama", "prose", "literary criticism"],
//     "nosubt": "4",
//     "edo": "12",
//     "edcm": "14",
//     "edq": "s",
//     "edwm": "10"
//   },
//   {
//     "setno": "e12",
//     "name": "art exam 2",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "10:00",
//     "batches": ["b2", "b5"],
//     "date": "2024-06-20",
//     "status": 2,
//     "startingTime": "08:30",
//     "allquestions": [
//       {
//         "qid": "q33",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "33rd question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "painting",
//         "oc": "789"
//       },
//       {
//         "qid": "q34",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "34th question",
//         "qType": "n",
//         "optionSet": "2",
//         "qTopic": "sculpture",
//         "oc": "123"
//       },
//       {
//         "qid": "q35",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "35th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "3",
//         "qTopic": "architecture",
//         "oc": "456"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["painting", "sculpture", "architecture", "graphic arts"],
//     "nosubt": "4",
//     "edo": "13",
//     "edcm": "15",
//     "edq": "d",
//     "edwm": "11"
//   },
//   {
//     "setno": "e13",
//     "name": "music exam 1",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "13:30",
//     "batches": ["b2", "b7"],
//     "date": "2024-06-10",
//     "status": 3,
//     "startingTime": "11:00",
//     "allquestions": [
//       {
//         "qid": "q36",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "36th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "2",
//         "qTopic": "classical music",
//         "oc": "123"
//       },
//       {
//         "qid": "q37",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "37th question",
//         "qType": "n",
//         "optionSet": "3",
//         "qTopic": "popular music",
//         "oc": "456"
//       },
//       {
//         "qid": "q38",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "38th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "folk music",
//         "oc": "789"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["classical music", "popular music", "folk music", "jazz music"],
//     "nosubt": "4",
//     "edo": "14",
//     "edcm": "16",
//     "edq": "n",
//     "edwm": "12"
//   },
//   {
//     "setno": "e14",
//     "name": "economics exam 2",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "12:00",
//     "batches": ["b2", "b9"],
//     "date": "2024-06-15",
//     "status": 1,
//     "startingTime": "10:30",
//     "allquestions": [
//       {
//         "qid": "q39",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "39th question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "microeconomics",
//         "oc": "456"
//       },
//       {
//         "qid": "q40",
//         "ocm": "5",
//         "owm": "2",
//         "qtext": "40th question",
//         "qType": "n",
//         "optionSet": "2",
//         "qTopic": "macroeconomics",
//         "oc": "789"
//       },
//       {
//         "qid": "q41",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "41st question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "3",
//         "qTopic": "international economics",
//         "oc": "123"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["microeconomics", "macroeconomics", "international economics", "development economics"],
//     "nosubt": "4",
//     "edo": "15",
//     "edcm": "17",
//     "edq": "s",
//     "edwm": "13"
//   },
//   {
//     "setno": "e15",
//     "name": "psychology exam 3",
//     syllabus: "aptitude syllabus",
//     totalno: "90",

//     "time": "14:30",
//     "batches": ["b3", "b1"],
//     "date": "2024-06-20",
//     "status": 2,
//     "startingTime": "12:00",
//     "allquestions": [
//       {
//         "qid": "q42",
//         "ocm": "4",
//         "owm": "2",
//         "qtext": "42nd question",
//         "qType": "s",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "2",
//         "qTopic": "cognitive psychology",
//         "oc": "789"
//       },
//       {
//         "qid": "q43",
//         "ocm": "3",
//         "owm": "1",
//         "qtext": "43rd question",
//         "qType": "n",
//         "optionSet": "3",
//         "qTopic": "developmental psychology",
//         "oc": "123"
//       },
//       {
//         "qid": "q44",
//         "ocm": "2",
//         "owm": "1",
//         "qtext": "44th question",
//         "qType": "d",
//         "op1": "option1",
//         "op2": "option2",
//         "op3": "option3",
//         "optionSet": "1",
//         "qTopic": "abnormal psychology",
//         "oc": "456"
//       }
//     ],
//     "totalno": "3",
//     "totaltopics": ["cognitive psychology", "developmental psychology", "abnormal psychology", "social psychology"],
//     "nosubt": "4",
//     "edo": "16",
//     "edcm": "18",
//     "edq": "d",
//     "edwm": "14"
//   }

// ];


// var batches=[];
var studentbatch = JSON.parse(localStorage.getItem('student')).batch;

var allexams = [];



async function fetchall() {


    
        
  
fetch(url+"/getallexams", {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
    })
    .then(response => response.json())
    .then(data => {
        allexams=data;
        console.log(allexams);
        sortExamsByDateAndTime(allexams);
        printexams(allexams);
        
        

    })
    .catch((error) => {
        console.error('Error:', error);
    });

          
          
    
      
  
  }
  fetchall();


function printexams(obj){
    // obj=allexams;
    var a=`<div id="one" class="tab-pane fade show p-0 active">
                            <div class="row g-4">
                `;
    for (var i = 0; i < obj.length; i++) {
        var exam = obj[i];
        for (var j = 0; j < exam.batches.length; j++) {
            var p=``;
            if(exam.status==0){
            }
            else if(exam.status==1){
               p=` <button disabled="true" class=" btn btn-primary " >Not Started Yet</button>`;

            }
            else if(exam.status==2){
               p=` <button  class=" btn btn-success">Start Exam</button>`;

            }
            else if(exam.status==3){
               p=` <button  class=" btn btn-info">view result</button>`;

            }

            if (studentbatch.includes(exam.batches[j]) && exam.status!=0 ) {
                
                a+=`
                                <div class="col-lg-6">
                                    <div class="menu-item d-flex align-items-center">
                                        <img style="width:60px;height:60px;margin-top:-100px"  class="flex-shrink-0 img-fluid rounded-circle" src="img/menu-02.jpg" alt="">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <div class="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                <h4>`+exam.name+`</h4>
                                                `+p+`

                                            </div>
                                            <p class="mb-0"><strong>Full Marks : </strong>`+exam.totalno+`</p>
                                            <p class="mb-0"><strong>Duration : </strong>`+exam.time+`</p>
                                            <p class="mb-0"><strong>Exam Date-time : </strong>`+exam.date+"   "+exam.startingTime+`</p>
                                        </div>
                                    </div>
                                </div>
                                 
                `;



                break;
            }
        }
    }
    document.getElementById("showexam").innerHTML=a+`</div></div>`;

}
// printexams(allexams);


function printexamcatagory(s){
var obj= allexams.filter(exam => exam.status == s);

   printexams(obj);
    
}



function searchObjects() {
  // console.log("hit");
  var objects = allexams;
  var searchPhrase = document.getElementById("searchapprove").value;
  // Convert the search phrase to lowercase for case-insensitive search
  var searchLower = searchPhrase.toLowerCase();

  // Filter the objects based on the search criteria
  var searchResults = objects.filter(object => {
    // Convert batch name, day, and time to lowercase for case-insensitive search
    var batchNameLower = object.name.toLowerCase();
    var batchDayLower = object.date.toLowerCase();
    var batchtimeLower = object.startingTime.toLowerCase();
    // var syllabus = object.syllabus.toLowerCase();
    var fullmarks = object.totalno.toLowerCase();
    var duration = object.time.toLowerCase();

    // Check if the search phrase is present in batch name, day, or time
    return batchNameLower.includes(searchLower) || batchDayLower.includes(searchLower)|| batchDayLower.includes(searchLower) || batchtimeLower.includes(searchLower) || fullmarks.includes(searchLower) || duration.includes(searchLower);
  });

  // return searchResults;
  // batches = searchResults;
  if(searchPhrase==""){
    searchResults=allexams;
  }


  printexams(searchResults);

}

function sortExamsByDateAndTime(obj) {
  allexams=obj.sort((a, b) => {
    var dateA = new Date(a.date + " " + a.startingTime);
    var dateB = new Date(b.date + " " + b.startingTime);
    return dateB - dateA;
  });
}













var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var yValues = [55, 49, 44, 24, 15];
  var barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        // backgroundColor: "blue",
        borderColor: "black",
        label: "No of exams",
        fontColor: "black",

        borderWidth: 1,

        data: yValues
      }]
    },
    options: {
      indexAxis: 'y', // Change to horizontal bars (change to 'x' for vertical bars)
      legend: {
        labels: {
          fontColor: 'black' // Changing the color of labels
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "black",

          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "black",
          }
        }],
      }
    }
  });
 