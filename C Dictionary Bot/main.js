const express = require('express')
const bodyParser = require('body-parser');

var TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();
 
const token = process.env.TELEGRAM_TOKEN;
let bot;
 
if (process.env.NODE_ENV === 'production') {
   bot = new TelegramBot(token);
   bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
   bot = new TelegramBot(token, { polling: true });
}

bot.on('message', function(msg) {
	var chatid = msg.chat.id
	if(msg.text == "/start") {
		var introduction = "Hello, Welcome to C Dictionary Bot.\n\nI can help you to know the syntaxes of each and every topic in C language.\n\nHere are some numbers to control me.\n\n1.Introduction\n2.Keywords\n3.Identifiers\n4.Variables\n5.Literals\n\t\t\t\t5.1.Integer Literals\n\t\t\t\t5.2.Floating-point Literals\n\t\t\t\t5.3.Character Literals\n\t\t\t\t5.4.String Literals\n6.Constants\n\t\t\t\t6.1.Using const keyword\n\t\t\t\t6.2.Using #define\n\t\t\t\t6.3.Using typedef\n7.Comments\n8.Data types\n9.scanf Statement\n10.printf Statement\n11.Operators\n\t\t\t\t11.1.Arithmetic Operators\n\t\t\t\t11.2.Increment and Decrement Operators\n\t\t\t\t11.3.Assignment Operators\n\t\t\t\t11.4.Relational Operators\n\t\t\t\t11.5.Logical Operators\n\t\t\t\t11.6.Bitwise Operators\n\t\t\t\t11.7.sizeof Operator\n11.8.Comma Operator\n12.Format Specifiers\n13.Escape Sequences\n14.Basic Structure of C program\n15.Arrays\n\t\t\t\t15.1.Single dimensional arrays\n\t\t\t\t15.2.Multi dimensional arrays\n16.Strings\n\t\t\t\t16.1.String Syntax\n\t\t\t\t16.2.String Syntax using pointers\n\t\t\t\t16.3.String Pre-defined functions\n17.Decision Making Statements\n\t\t\t\t17.1.Simple If\n\t\t\t\t17.2.If Else\n\t\t\t\t17.3.Else-if Ladder\n\t\t\t\t17.4.switch case\n18.Looping Statements\n\t\t\t\t18.1.while loop\n\t\t\t\t18.2.do-while loop\n\t\t\t\t18.3.for loop\n19.Unconditional Control Statements\n\t\t\t\t19.1.break Statement\n\t\t\t\t19.2.continue Statement\n\t\t\t\t19.3.goto Statement\n20.Functions\n\t\t\t\t20.1.Standard Library functions\n\t\t\t\t20.2.User-defined Functions\n\t\t\t\t20.3.Recursive Functions\n21.Storage Classes\n\t\t\t\t21.1.Automatic Variables\n\t\t\t\t21.2.External(or)Global Variables\n\t\t\t\t21.3.Static Variables\n\t\t\t\t21.4.Register Variables\n22.Pointers\n23.Dynamic Memory Allocation\n\t\t\t\t23.1.malloc() function\n\t\t\t\t23.2.calloc() function\n\t\t\t\t23.3. free() function\n\t\t\t\t23.4.realloc() function\n24.Structures\n25.Union\n26.Files\n\t\t\t\t26.1.Modes of Files\n\t\t\t\t26.2.Opening file\n\t\t\t\t26.3.Reading file\n\t\t\t\t26.4.Writing file\n\t\t\t\t26.5.Renaming file\n\t\t\t\t26.6.Removing file\n\t\t\t\t26.7.Closing file\n27.C Libraries\n\t\t\t\t27.1.Predefined library functions\n\t\t\t\t\t\t\t\t27.1.1.stdio.h\n\t\t\t\t\t\t\t\t27.1.2.math.h\n\t\t\t\t\t\t\t\t27.1.3.ctype.h\n\t\t\t\t\t\t\t\t27.1.4.time.h\n\t\t\t\t\t\t\t\t27.1.5.string.h\n\nPlease enter any of the above numbers to know about the particular topic briefly\n";
		bot.sendMessage(chatid,introduction)
	}
	else if(msg.text == 1) {
		bot.sendPhoto(chatid,"./Images/1_introductionToC.jpg");
	}
	else if(msg.text == 2) {
		bot.sendPhoto(chatid,"./Images/2_keywords.jpg")
	}
	else if(msg.text == 3) {
		bot.sendPhoto(chatid,"./Images/3_Identifiers.jpg")
	}
	else if(msg.text == 4) {
		bot.sendPhoto(chatid,"./Images/4_Variables.jpg")
	}
	else if(msg.text == 5) {
		bot.sendMessage(chatid,"Literals : \nLiterals are data used for representing fixed values. They can be used directly in the code.")
	}
	else if(msg.text == 5.1) {
		bot.sendPhoto(chatid,"./Images/5(1)_IntegerLiterals.jpg")		
	}
	else if(msg.text == 5.2) {
		bot.sendPhoto(chatid,"./Images/5(2)_FloatingPointLiterals.jpg")
	}
	else if(msg.text == 5.3) {
		bot.sendPhoto(chatid,"./Images/5(3)_CharacterLiterals.jpg")
	}
	else if(msg.text == 5.4) {
		bot.sendPhoto(chatid,"./Images/5(4)_StringLiterals.jpg")
	}
	else if(msg.text == 6) {
		bot.sendMessage(chatid,"Constants : \nA constant is a variable whose value cannot be changed.")
	}
	else if(msg.text == 6.1) {
		bot.sendPhoto(chatid,"./Images/6(1)_ConstKeyword.jpg")
	}
	else if(msg.text == 6.2) {
		bot.sendPhoto(chatid,"./Images/6(2)_#define.jpg")		
	}
	else if(msg.text == 6.3) {
		bot.sendPhoto(chatid,"./Images/6(3)_typedef.jpg")
	}
	else if(msg.text == 7) {
		bot.sendPhoto(chatid,"./Images/7_Comments.jpg")
	}
	else if(msg.text == 8) {
		bot.sendPhoto(chatid,"./Images/8_Datatypes.jpg")	
	}
	else if(msg.text == 9) {
		bot.sendPhoto(chatid,"./Images/9_scanfStatement.jpg")
	}
	else if(msg.text == 10) {
		bot.sendPhoto(chatid,"./Images/10_printfStatement.jpg")
	}
	else if(msg.text == 11) {
		bot.sendMessage(chatid,"An operator is a symbol that operates on a value or a variable.C has a wide range of operators to perform various operations.")
	}
	else if(msg.text == 11.1) {
		bot.sendPhoto(chatid,"./Images/11(1)_arithmeticOperators.jpg")
	}
	else if(msg.text == 11.2) {
		bot.sendPhoto(chatid,"./Images/11(2)_incrementAndDecrementOperators.jpg")
	}
	else if(msg.text == 11.3) {
		bot.sendPhoto(chatid,"./Images/11(3)_assignmentOperators.jpg")
	}
	else if(msg.text == 11.4) {
		bot.sendPhoto(chatid,"./Images/11(4)_relationalOperators.jpg")
	}
	else if(msg.text == 11.5) {
		bot.sendPhoto(chatid,"./Images/11(5)_logicalOperators.jpg")
	}
	else if(msg.text == 11.6) {
		bot.sendPhoto(chatid,"./Images/11(6)_BitwiseOperators.jpg")
	}
	else if(msg.text == 11.7) {
		bot.sendPhoto(chatid,"./Images/11(7)_sizeofExample.jpg")
	}
	else if(msg.text == 11.8) {
		bot.sendPhoto(chatid,"./Images/11(8)_commaOperator.jpg")
	}
	else if(msg.text == 12) {
		bot.sendPhoto(chatid,"./Images/12_formatSpecifiers.jpg")
	}
	else if(msg.text == 13) {
		bot.sendPhoto(chatid,"./Images/13_escapeSequences.jpg")
	}
	else if(msg.text == 14) {
		bot.sendPhoto(chatid,"./Images/14_BasicStructureOfCPrograms.jpg")
	}
	else if(msg.text == 15) {
		bot.sendMessage(chatid,"Arrays : \nAn array is a variable that can store multiple values.\nIt is also defined as a kind of data structure that can store a fixed-size sequential collection of elements of the same type.")
	}
	else if(msg.text == 15.1) {		
		bot.sendPhoto(chatid,"./Images/15_singleDimesionalArray.jpg")
	}
	else if(msg.text == 15.2) {
		bot.sendPhoto(chatid,"./Images/15_multiDimensionalArray.jpg")
	}
	else if(msg.text == 16) {
		bot.sendMessage(chatid,"Strings : \nIn C language the group of characters, digits, and symbols enclosed within quotation marks are called as string.\nThe string is always declared as character arrays. Every string is terminated with ‘\0’ (NULL) character. ")
	}
	else if(msg.text == 16.1) {
		bot.sendPhoto(chatid,"./Images/16(1)_stringSyntax.jpg")
	}
	else if(msg.text == 16.2) {
		bot.sendPhoto(chatid,"./Images/16(2)_stringSyntaxUsingPointers.jpg")
	}
	else if(msg.text == 16.3) {
		bot.sendPhoto(chatid,"./Images/16(3)_stringFunctions.jpg")
	}
	else if(msg.text == 17) {
		bot.sendMessage(chatid,"Decision Making Statements : \nDecision making is about deciding the order of execution of statements based on certain conditions or repeat a group of statements until certain specified conditions are met.")
	}
	else if(msg.text == 17.1) {
		bot.sendPhoto(chatid,"./Images/17(1)_simpleIf.jpg")
	}
	else if(msg.text == 17.2) {
		bot.sendPhoto(chatid,"./Images/17(2)_ifElseStatement.jpg")		
	}
	else if(msg.text == 17.3) {
		bot.sendPhoto(chatid,"./Images/17(3)_elseIfLadderSyntax.jpg")
	}
	else if(msg.text == 17.4) {
		bot.sendPhoto(chatid,"./Images/17(4)_switchCase.jpg")
	}
	else if(msg.text == 18) {
		bot.sendMessage(chatid,"Looping Statement : \nIn C programming, loops or looping statements are used to repeat a block of code until a specified condition is met")
	}
	else if(msg.text == 18.1) {
		bot.sendPhoto(chatid,"./Images/18(1)_whileLoop.jpg")
	}
	else if(msg.text == 18.2) {
		bot.sendPhoto(chatid,"./Images/18(2)dowhileLoop.jpg")
	}
	else if(msg.text == 18.3) {
		bot.sendPhoto(chatid,"./Images/18(3)_forLoop.jpg")
	}
	else if(msg.text == 19) {
		bot.sendMessage(chatid,"Unconditional Control Statements : \nIn C prograaming, there are control statements that do not need any condition to control the program execution flow. These control statements are called as unconditional control statements.")
	}
	else if(msg.text == 19.1) {
		bot.sendPhoto(chatid,"D:/NodeJSTraining/Capstone Project/Image/19(1)_break.jpg")
	}
	else if(msg.text == 19.2) {
		bot.sendPhoto(chatid,"./Images/19(2)_continue.jpg")
	}
	else if(msg.text == 19.3) {
		bot.sendPhoto(chatid,"D:/NodeJSTraining/Capstone Project/Image/19(3)_goto.jpg")
	}
	else if(msg.text == 20) {
		bot.sendMessage(chatid,"Functions : \nA function is a block of code that performs a specific task.\nFunctions are used to divide a complex problem into smaller chunks which makes our program easy to understand and reuse.")
	}
	else if(msg.text == 20.1) {
		bot.sendPhoto(chatid,"./Images/20(1)_predefinedFunctions.jpg")
	}
	else if(msg.text == 20.2) {
		bot.sendPhoto(chatid,"./Images/20(2)_userDefinedFunctions.jpg")
	}
	else if(msg.text == 20.3) {
		bot.sendPhoto(chatid,"./Images/20(3)_recursiveFunctions.jpg")
	}
	else if(msg.text == 21){
		bot.sendMessage(chatid,"Storage Classes : \nEvery variable in C programming has two properties: type and storage class.\nType refers to the data type of a variable. And, storage class determines the scope, visibility and lifetime of a variable.")
	}
	else if(msg.text == 21.1) {
		bot.sendPhoto(chatid,"./Images/21(1)_automatic.jpg")
	}
	else if(msg.text == 21.2) {
		bot.sendPhoto(chatid,"./Images/21(2)_external.jpg")
	}
	else if(msg.text == 21.3) {
		bot.sendPhoto(chatid,"./Images/21(3)_static.jpg")
	}
	else if(msg.text == 21.4) {
		bot.sendPhoto(chatid,"./Images/21(4)_register.jpg")
	}
	else if(msg.text == 22) {
		bot.sendPhoto(chatid,"./Images/22_pointers.jpg")
	}
	else if(msg.text == 23) {
		bot.sendMessage(chatid,"Dynamic Memory Allocation : \nSometimes the size of the array you declared may be insufficient. To solve this issue, you can allocate memory manually during run-time. This is known as dynamic memory allocation in C programming.\n\nTo allocate memory dynamically, library functions are malloc(), calloc(), realloc() and free() are used. These functions are defined in the <stdlib.h> header file.")
	}
	else if(msg.text == 23.1) {
		bot.sendPhoto(chatid,"./Images/23(1)_mallocFunction.jpg")
	}
	else if(msg.text == 23.2) {
		bot.sendPhoto(chatid,"./Images/23(2)_callocFunction.jpg")
	}
	else if(msg.text == 23.3) {
		bot.sendPhoto(chatid,"./Images/23(3)_freeFunction.jpg")
	}
	else if(msg.text == 23.4) {
		bot.sendPhoto(chatid,"./Images/23(4)_reallocFunction.jpg")
	}
	else if(msg.text == 24) {
		bot.sendPhoto(chatid,"./Images/24_structures.jpg")
	}
	else if(msg.text == 25) {
		bot.sendPhoto(chatid,"./Images/25_unions.jpg")	
	}
	else if(msg.text == 26) {
		bot.sendMessage(chatid,"Files : \nFile is a container in computer storage devices used for storing data.")
	}
	else if(msg.text == 26.1) {
		bot.sendPhoto(chatid,"./Images/26(1)_modesOfFile.jpg")
	}
	else if(msg.text == 26.2) {
		bot.sendPhoto(chatid,"./Images/26(2)_openingFile.jpg")
	}
	else if(msg.text == 26.3) {
		bot.sendPhoto(chatid,"./Images/26(3)_readingFile.jpg")
	}
	else if(msg.text == 26.4) {
		bot.sendPhoto(chatid,"./Images/26(4)_writingFile.jpg")
	}
	else if(msg.text == 26.5) {
		bot.sendPhoto(chatid,"./Images/26(5)_renamingFile.jpg")
	}
	else if(msg.text == 26.6) {
		bot.sendPhoto(chatid,"./Images/26(6)_removingFile.jpg")
	}
	else if(msg.text == 26.7) {
		bot.sendPhoto(chatid,"./Images/26(7)_closingFile.jpg")
	}
	else if(msg.text == 27) {
		bot.sendMessage(chatid,"C Libraries :\nC libraries are a collection of header files, exposed for use by other programs.\nThe library therefore consists of an interface expressed in a .h file (named the 'header') and an implementation expressed in a .c file.")
	}
	else if(msg.text == 27.1) {
		bot.sendMessage(chatid,"Predefined library functions :\nPredefined library functions in C language are inbuilt functions which are grouped together and placed in a common place called library. Each library function in C performs specific operation.\nWe can make use of these library functions to get the pre-defined output instead of writing our own code to get those outputs.")
	}
	else if(msg.text == '27.1.1') {
		bot.sendPhoto(chatid,"./Images/stdio.h(1).jpg")
		.then(() => {
			bot.sendPhoto(chatid,"./Images/stdio.h(2).jpg")
			.then(() => {
				bot.sendPhoto(chatid,"./Images/stdio.h(3).jpg")
			})
		})
	}
	else if(msg.text == '27.1.2') {
		bot.sendPhoto(chatid,"./Images/math.h(1).jpg")
		.then(() => {
			bot.sendPhoto(chatid,"./Images/math.h(2).jpg")
		})
	}
	else if(msg.text == '27.1.3') {
		bot.sendPhoto(chatid,"./Images/ctype.h.jpg")
	}
	else if(msg.text == '27.1.4') {
		bot.sendPhoto(chatid,"./Images/time.h.png")
	}
	else if(msg.text == '27.1.5') {
		bot.sendPhoto(chatid,"./Images/string.h(1).jpg")
		.then(() => {
			bot.sendPhoto(chatid,"./Images/string.h(2).jpg")
		})
	}
	else {
		bot.sendMessage(chatid,"Please enter a valid number..!!")
	}
})
const app = express();
 
app.use(bodyParser.json());
 
app.listen(process.env.PORT);
 
app.post('/' + token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});