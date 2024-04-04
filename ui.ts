import * as readlineSync from 'readline-sync';
import { calculateAttendedHours, calculateHoursLeft } from "./attendanceTracker";
import { totalPapers, hoursPerPaper, minAttendancePercentage } from "./constants";

interface PaperAttendance {
    name: string;
    attendedHours: number;
}

let paperAttendances: PaperAttendance[] = [
    { name: "FullStack", attendedHours: 25 },
    { name: "Design and analysis of algorithm", attendedHours: 0 },
    { name: "Advanced software Engineering", attendedHours: 0 },
    { name: "Mobile app development", attendedHours: 0 },
    { name: "Python using DataScience", attendedHours: 0 },
    { name: "Next Generations Networks", attendedHours: 0 },
    { name: "Advanced Database Management", attendedHours: 0 },
    { name: "Internet Of Things", attendedHours: 0 }
];

export function updateAttendancePerPaper() {
    console.log("Update attended hours for each paper:");

    for (let i = 0; i < totalPapers; i++) {
        const hours = readlineSync.question(`Enter attended hours for ${paperAttendances[i].name}: `);
        paperAttendances[i].attendedHours = parseInt(hours);
    }
}

export function displayTotalHoursCompleted() {
    const totalAttendedHours: number = calculateAttendedHours(paperAttendances.map(p => p.attendedHours));
    const totalHoursCompleted: number = totalAttendedHours / totalPapers;

    console.log("\nTotal Hours Completed Currently:", totalHoursCompleted);

    const hoursLeft: number = calculateHoursLeft(totalAttendedHours);
    console.log("Hours Left to Take Leave:", hoursLeft);
}

export function displayAttendanceStatus() {
    console.log("\nCurrent Attendance Status:");

    for (let i = 0; i < totalPapers; i++) {
        const paper = paperAttendances[i];
        const totalHours: number = paper.attendedHours;
        const percentage: number = (totalHours / hoursPerPaper) * 100;
        console.log(`${paper.name} - Total attended hours: ${totalHours}, Percentage: ${percentage.toFixed(2)}%`);
    }

    const totalAttendedHours: number = calculateAttendedHours(paperAttendances.map(p => p.attendedHours));
    const totalHours: number = totalAttendedHours + calculateHoursLeft(totalAttendedHours);
    const overallPercentage: number = (totalAttendedHours / (totalPapers * hoursPerPaper)) * 100;

    console.log("\nOverall Total Hours Completed:", totalAttendedHours);
    console.log("Overall Percentage:", overallPercentage.toFixed(2) + "%");
}
