#!/usr/bin/env node

import readlineSync from "readline-sync";

const inputData = {
"start": {"What is your marital status?": ["Single", "Married"]},
"Single": {"Are you planning on getting married next year?": ["Yes", "No"]},
"Married":   {"How long have you been married?": ["Less than a year", "More than a year"]},
"More than a year": {"Have you celebrated your one year anniversary?": ["Yes", "No"]},
};

function questionAnswer(input){
	const firstKeys = Object.keys(input);
	const answers = [];
	const firstQuestion = readlineSync.question(Object.keys(input.start) + " " + Object.values(input.start)[0].join("/") + ": ");
	answers.push(firstQuestion);
	for (const answer of answers) {
		if (firstKeys.includes(answer)){
			let nextQuestions = readlineSync.question(Object.keys(input[answer]) + " " + Object.values(input[answer])[0].join("/") + ": ");
			answers.push(nextQuestions);
		}
	}
};

questionAnswer(inputData);
