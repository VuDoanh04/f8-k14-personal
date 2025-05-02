// bai tap 1
//                   ┌───────────────┐
//                   │               │
//                   │               │
//                   │ groupedStudent│
//                   │               │
//                   │ de chua tung  │
//                   │     lop       │
//                   │               │
//                   └──────┬────────┘
//                          │
//                          │
//                          │
//                          │
//                          ▼
//                 ┌───────────────────────┐
//                 │                       │
//                 │                       │
//                 │    dung for           │
//                 │    de lay tung phan tu│
//                 │    trong mang         │
//                 │                       │
//                 │                       │
//                 │                       │
//                 │                       │
//                 └─────────┬─────────────┘
//                           │
//                           │
//                           │
//                           │
//                           │
//             ┌───────────────────────────────┐
//             │                               │
//             │                               │
//             │     lay tung name vaf class   │
//             │                               │
//             │                               │
//             │                               │
//             │                               │
//             │                               │
//             │                               │
//             └──────────────┬────────────────┘
//                            │
//                            │
//                            │
//                            │
//            ┌─────────────────────────────────────┐
//            │                                     │
//            │ kiem xem co trong    groupedStudent
//            │      neu chua thi tao mang          │
//            └────────────────┬────────────────────┘
//                             │
//                             │
//                             │
//                             │
//                             │
//                             ▼
//          ┌───────────────────────────────────────────────┐
//          │                                               │
//          │   groupedStudents[className].push(studentName)
//          │                                               │
//          └──────────────────┬────────────────────────────┘
//                             │
//                             ▼
//             ┌─────────────────────────────────────────┐
//             │      console.log(groupedStudents);      │
//             │                                         │
//             └─────────────────────────────────────────┘
const students = [
    { name: "An", class: "12A1" },
    { name: "Bình", class: "12A2" },
    { name: "Cường", class: "12A1" },
    { name: "Dung", class: "12A3" },
    { name: "Em", class: "12A2" }
];
const groupedStudents = {};

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const className = student.class;
    const studentName = student.name;
    if (groupedStudents[className] === undefined) {
        groupedStudents[className] = [];
    }
    groupedStudents[className].push(studentName);
}
console.log(groupedStudents);

//
const student = [
    { name: "An", class: "12A1" },
    { name: "Bình", class: "12A2" },
    { name: "Cường", class: "12A1" },
    { name: "Dung", class: "12A3" },
    { name: "Em", class: "12A2" }
];
const groupedStudent = {};

for (let i = 0; i < student.length; i++) {
    const student = students[i];
    const className = student.class;
    const studentName = student.name;

    if (groupedStudent[className] === undefined) {
        groupedStudent[className] = [];
    }
    groupedStudents[className].push(studentName);
}
console.log(groupedStudents);
// bài tập 2
//
//    ┌─────────────────────────────────────────────────────────────────┐
//    │                                                                 │
//    │          ┌─────────────────┐                                    │
//    │          │const result = [];                                    │
//    │          └┬──────┬─────────┘                                    │
//    │           │      │                                              │
//    │           │     ┌──────────────────────────────────────┐        │
//    │           │     │    const student of students2        │        │
//    │           │     │                                      │        │
//    │           │     │    let found = false                 │        │
//    │           │     │                                      │        │
//    │           │     │                                      │        │
//    │           │     └───────────────────┬──────────────────┘        │
//    │           │                         │                           │
//    │           │                         │                           │
//    │           │                         │                           │
//    │           │    ┌───────────────────────────────────────┐        │
//    │           │    │                                       │        │
//    │           │    │      item.class === student.class     │        │
//    │           │    │      found = true;                    │        │
//    │           │    │                                       │        │
//    │           │    │                                       │        │
//    │           │    └──────────────────┬────────────────────┘        │
//    │           │                       │                             │
//    │           │                       │                             │
//    │           │                       ▼                             │
//    │           │    ┌───────────────────────────────────────┐        │
//    │           │    │                                       │        │
//    │           │    │     student.score > item.score        │        │
//    │           │    │                                       │        │
//    │           │    └───────────────────────────────────────┘        │
//    │           ▼                                                     │
//    │                                                                 │
//    │         ┌─────────────────────────────────┐                     │
//    │         │       !found                    │                     │
//    │         │      result.push                │                     │
//    │         │                                 │                     │
//    │         │                                 │                     │
//    │         └─────────────────────────────────┘                     │
//    │                                                                 │
//    └──────────────────────┬──────────────────────────────────────────┘
//                           │
//                           │
//                           ▼
//                     ┌────────────────────────┐
//                     │ console.log(result)    │
//                     └────────────────────────┘
//
//
//
//
const students2 = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 }
];

const result = [];

for (const student of students2) {
    let found = false;

    for (const item of result) {
        if (item.class === student.class) {
            found = true;

            if (student.score > item.score) {
                item.topStudent = student.name;
                item.score = student.score;
            }

            break;
        }
    }

    if (!found) {
        result.push({
            class: student.class,
            topStudent: student.name,
            score: student.score
        });
    }
}

console.log(result);
// Bsi tap 3
//                                                                  ┌────────────────────────────────────────────────────┐
//     ┌───────────────────────────────────────────────────────────┐ │   │  tao mang rong        │                        │
//     │                                                           │ │   │ const result1         │                        │
//     │                   ┌────────────────────────┐              │ │   └──────────┬────────────┘                        │
//     │                   │ tao mang rong          │              │ │              │                                     │
//     │                   │ const classScores      │              │ │ ┌─────────────────────────────────────┐            │
//     │                   └────────────┬───────────┘              │ │ │  for const className in classScores │            │
//     │                                │                          │ │ │                                     │            │
//     │                                │                          │ │ │                                     │            │
//     │                  ┌────────────────────────────────┐       │ │ └──────────────────┬──────────────────┘            │
//     │                  │  for const student of students1│       │ │                    │                               │
//     │                  │                                │       │ │                    ▼                               │
//     │                  │                                │       │ │ ┌────────────────────────────────────────┐         │
//     │                  └─────────────┬──────────────────┘       │ │ │ const total = classScores[className].total;      │
//     │                                │                          │ │ │    const count = classScores[className].count;   │
//     │  ┌─────────────────────────────┴─────────────────────────┐│ │ │                                        │         │
//     │  │de timf toongr diem vaf so luong hoc sinh cua cac lop  ││ │ └────────────────────────────────────────┘         │
//     │  │                                                       ││ │                                                    │
//     │  │                  total   , count                      ││ │ ┌───────────────────────────────────────────────┐  │
//     │  └───────────────────────────────────────────────────────┘│ │ │ result1.push                                  │  │
//     │                                                           │ │ │       │     ┌───────────────────────────────┐ │  │
//     │                                                           │ │ │       └──►  │class: className,              │ │  │
//     │                                                           │ │ │             │averageScore: total / count         │
//     └───────────────────────────────┬───────────────────────────┘ │ └─────────────└───────────────────────────────┘─┘  │
//                                     │                             └────────────────────────┬───────────────────────────┘
//                                     │                                                      │
//                                     ▼                                                      ▼
//                         ┌─────────────────────────┐                            ┌──────────────────────────┐
//                         │ tim so hs cac lop vaf   │                            │  tinh diem trung binhf cac
//                         │ tong diem cua cac lop   │                            │  lop                     │
//                         │                         │                            │                          │
//                         └───────┬─────────────────┘                            └─────────────┬────────────┘
//                                 │                                                            │
//                                 │                                                            │
//                                 │                                                            │
//                                 │                 ┌─────────────────────────┐                │
//                                 │                 │                         │                │
//                                 └────────────────►│ console.log(result1);   │◄───────────────┘
//                      ▼                            │                         │
//                                                   │                         │
//                                                   └─────────────────────────┘
const students1 = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 }
];

const classScores = {};

for (const student of students1) {
    // Nếu lớp chưa có, tạo mới
    if (!classScores[student.class]) {
        classScores[student.class] = { total: 0, count: 0 };
    }

    classScores[student.class].total += student.score;
    classScores[student.class].count += 1;
}
const result1 = [];
for (const className in classScores) {
    const total = classScores[className].total;
    const count = classScores[className].count;
    result1.push({
        class: className,
        averageScore: total / count
    });
}

console.log(result1);



