import { totalPapers, hoursPerPaper, minAttendancePercentage } from "./constants";

export function calculateAttendedHours(attendedHoursPerPaper: number[]): number {
    return attendedHoursPerPaper.reduce((total, hours) => total + hours, 0);
}

export function calculateHoursLeft(attendedHours: number): number {
    const totalHours: number = totalPapers * hoursPerPaper;
    const minAttendanceHours: number = totalHours * minAttendancePercentage;
    return minAttendanceHours - attendedHours;
}
