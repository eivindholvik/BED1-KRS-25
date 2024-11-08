const students = [
  {
    id: 0,
    f_name: "Eivind",
    l_name: "Holvik",
    email: "eivind.holvik@noroff.no",
    tlf: "99514780",
    subjects: [
      0
    ]
  },
  {
    id: 1,
    f_name: "Eline",
    l_name: "Holvik",
    email: "eline.holvik@noroff.no",
    tlf: "95144859",
    subjects: [

    ]
  },
  {
    id: 3,
    f_name: "Frank",
    l_name: "Jensen",
    email: "frank.jensen@noroff.no",
    tlf: "99554780",
    subjects: [
      0
    ]
  }
];

const courses = [
  {
    id: 0,
    abr: "Gym",
    name: "Gymnastikk",
    points: 15
  }, {
    id: 1,
    abr: "Matte1",
    name: "Matematikk 1",
    points: 15
  }, {
    id: 2,
    abr: "FET",
    name: "Front End Technologies",
    points: 30
  }
];

const instancesOfCourses = [
  {
    id: 0,
    courseId: 2,
    teacher: 0,
    location: "Kristiansand",
    students: [
      0, 2
    ]
  },
  {
    id: 1,
    courseId: 2,
    teacher: 1,
    location: "Bergen",
    students: [
      1
    ]
  }
]

const teachers = [
  {
    id: 0,
    f_name: "Jens",
    l_name: "Trulsen",
    teaching: [
      0
    ]
  },
  {
    id: 1,
    f_name: "Johanne",
    l_name: "Holm",
    teaching: [
    ]
  },
  {
    id: 3,
    f_name: "Marvin",
    l_name: "Mikalsen",
    teaching: [
    ]
  }
];