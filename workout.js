// Base collection of workout ideas that will be chosen
const crossfitWorkouts = [
  "Deadlifts",
  "Squats",
  "Burpees",
  "Box Jumps",
  "Pull-Ups",
  "Wall Balls",
  "Double Unders",
  "Kettlebell Swings",
  "Rowing",
  "Running"
];

// My workout days that will be linked to a random workout
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

// Will assign a random workout to a day of the week
for (let i = 0; i < daysOfTheWeek.length; i++) {
  const randomIndex = Math.floor(Math.random() * crossfitWorkouts.length);
  const randomWorkout = crossfitWorkouts[randomIndex];

  // Prints my created weekly plan of workouts
  console.log(daysOfTheWeek[i] + ": " + randomWorkout);
}
