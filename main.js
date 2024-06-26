import inqirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalence = 0;
let answer = await inqirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non_empty value.";
        }
    },
    {
        name: "course",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["MS.Office", "HTML", "Javascript", "Typescript", "Python"]
    }
]);
const tutionFee = {
    "MS.Office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Python": 10000
};
console.log(`\nTution Fees: ${tutionFee[answer.course]}/-\n`);
console.log(`My Balence: ${myBalence}\n`);
let paymentType = await inqirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank transfer", "Jazzcash", "Easypaisa",]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non_empty value.";
        }
    },
]);
console.log(`\nYou select payment method: ${paymentType.payment}`);
const tutionFees = tutionFee[answer.course];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulation, You have enrolled in ${answer.course}.\n`);
    let ans = await inqirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["Veiw status", "Exit",]
        },
    ]);
    if (ans.select === "Veiw status") {
        console.log("\n********Status********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Courses: ${answer.course}`);
        console.log(`Tution Fee paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalence += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Managment System\n");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
