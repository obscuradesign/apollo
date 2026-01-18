export const ROOM_SCHEDULES = {
  // ==============================
  // FLOOR 1: MIXED USE
  // ==============================

  // --- STATIC STUDY ROOMS (Blue) ---
  // These will always be Blue (STUDY_ROOM color)
  "room-107b": { type: "STUDY_ROOM", label: "Group Study 107B", policy: "First come, first served" },
  "room-107c": { type: "STUDY_ROOM", label: "Group Study 107C", policy: "First come, first served" },
  "room-107d": { type: "STUDY_ROOM", label: "Group Study 107D", policy: "First come, first served" },

  // --- DYNAMIC CLASSROOMS (Red) ---
  // These function just like floors 2 & 3 (Red if Class, Gold if SI, Grey if Empty)
  "room-101": {
    type: "CLASSROOM",
    label: "MSB 101",
    events: [
      { 
        day: "Sat", 
        start: "08:00", 
        end: "22:00", // Extended time so you can see it NOW for testing
        title: "MATH 8", 
        courseName: "Calculus II", // NEW
        professor: "ASKARIAN S.A.",       // NEW
        section: "1234",                  // NEW
        status: "OCCUPIED" 
      }
    ]
  },
  "room-102": {
    type: "CLASSROOM",
    label: "MSB 102",
    events: [
      { day: "Mon", start: "09:00", end: "11:00", title: "MATH 54", status: "OCCUPIED" }
    ]
  },
  "room-103": {
    type: "CLASSROOM",
    label: "MSB 103",
    events: []
  },
  "room-106": {
    type: "CLASSROOM",
    label: "MSB 106",
    events: [] // Currently empty (Will show as Locked/Grey)
  },
  "room-112": {
    type: "CLASSROOM",
    label: "MSB 112",
    events: [
      { day: "Mon", start: "12:30", end: "14:00", title: "PHYSICS 21", status: "OCCUPIED" }
    ]
  },
  "room-113": {
    type: "CLASSROOM",
    label: "MSB 113",
    events: []
  },
  "room-116": {
    type: "CLASSROOM",
    label: "MSB 116",
    events: []
  },
  "room-117": {
    type: "CLASSROOM",
    label: "MSB 117",
    events: []
  },
  "room-119": {
    type: "CLASSROOM",
    label: "MSB 119",
    events: []
  },

  // ==============================
  // FLOOR 2: (Add your floor 2 rooms here later)
  // ==============================
  "room-201": {
    type: "CLASSROOM",
    label: "MSB 201",
    events: []
  },
    "room-202": {
    type: "CLASSROOM",
    label: "MSB 202",
    events: []
  },
    "room-203": {
    type: "CLASSROOM",
    label: "MSB 203",
    events: []
  },
    "room-205": {
    type: "CLASSROOM",
    label: "MSB 205",
    events: []
  },
    "room-206": {
    type: "CLASSROOM",
    label: "MSB 206",
    events: []
  },
    "room-207": {
    type: "CLASSROOM",
    label: "MSB 207",
    events: []
  },
    "room-208": {
    type: "CLASSROOM",
    label: "MSB 208",
    events: []
  },
    "room-209": {
    type: "CLASSROOM",
    label: "MSB 209",
    events: []
  },
    "room-210": {
    type: "CLASSROOM",
    label: "MSB 210",
    events: []
  },
    "room-211": {
    type: "CLASSROOM",
    label: "MSB 211",
    events: []
  },
    "room-212": {
    type: "CLASSROOM",
    label: "MSB 212",
    events: []
  },
    "room-214": {
    type: "CLASSROOM",
    label: "MSB 214",
    events: []
  },
    "room-216": {
    type: "CLASSROOM",
    label: "MSB 216",
    events: []
  },
    "room-217": {
    type: "CLASSROOM",
    label: "MSB 217",
    events: []
  },
    "room-219": {
    type: "CLASSROOM",
    label: "MSB 219",
    events: []
  },
  
  // ==============================
  // FLOOR 3: (Add your floor 3 rooms here later)
  // ==============================
  "room-301": {
    type: "CLASSROOM",
    label: "MSB 301",
    events: []
  },
    "room-302": {
    type: "CLASSROOM",
    label: "MSB 302",
    events: []
  },
    "room-303": {
    type: "CLASSROOM",
    label: "MSB 303",
    events: []
  },
    "room-305": {
    type: "CLASSROOM",
    label: "MSB 305",
    events: []
  },
    "room-306": {
    type: "CLASSROOM",
    label: "MSB 306",
    events: []
  },
    "room-307": {
    type: "CLASSROOM",
    label: "MSB 307",
    events: []
  },
    "room-308": {
    type: "CLASSROOM",
    label: "MSB 308",
    events: []
  },
    "room-309": {
    type: "CLASSROOM",
    label: "MSB 309",
    events: []
  },
    "room-310": {
    type: "CLASSROOM",
    label: "MSB 310",
    events: []
  },
    "room-311": {
    type: "CLASSROOM",
    label: "MSB 311",
    events: []
  },
    "room-313": {
    type: "CLASSROOM",
    label: "MSB 313",
    events: []
  },
    "room-316": {
    type: "CLASSROOM",
    label: "MSB 316",
    events: []
  },
    "room-317": {
    type: "CLASSROOM",
    label: "MSB 317",
    events: []
  },
    "room-320": {
    type: "CLASSROOM",
    label: "MSB 320",
    events: []
  },
  
};