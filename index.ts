import * as readlineSync from 'readline-sync';
import { updateAttendancePerPaper , displayAttendanceStatus } from "./ui";

// Main loop
while (true) {
    console.log("\nChoose an option:");
    console.log("1. Update Attendance");
    console.log("2. View Attendance Status");
    console.log("3. Exit");

    const choice = readlineSync.question("Enter your choice: ");

    switch (choice) {
        case '1':
            updateAttendancePerPaper();
            break;
        case '2':
            displayAttendanceStatus();
            break;
        case '3':
            process.exit(0);
        default:
            console.log("Invalid choice. Please try again.");
    }
}
