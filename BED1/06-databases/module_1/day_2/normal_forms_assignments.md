# Normal Forms Assignments

## 1NF

> First Normal Form (1NF) ensures that each column in a table contains single, indivisible values, and each row is unique. A table violates 1NF if it has composite or multi-valued attributes, such as multiple phone numbers in one cell. 1NF simplifies data, making it consistent and easy to manage.

**Objective:** Ensure the table has atomic values and no repeating groups.

**Problem:** You are given the following table:

| StudentID | StudentName | Subjects         | Grades |
| --------- | ----------- | ---------------- | ------ |
| 1         | Alice       | Math, Science    | A, B   |
| 2         | Bob         | English, History | B, A   |
| 3         | Charlie     | Science, Math    | C, B   |

**Task:**

1. Normalize the table into 1NF by removing multi-valued attributes.
2. Write SQL queries to:
    - Create the normilized table(s).
    - Insert the normalized data into the table(s).

## 2NF

> A relation is in 2NF if it is in 1NF and any non-prime attribute (attributes which are not part of any candidate key) is not partially dependent on any proper subset of any candidate key of the table. In other words, we can say that, every non-prime attribute must be fully dependent on each candidate key.

**Objective:** Ensure the table is in 1NF and remove partial dependency.

**Problem:** Consider the following 1NF table:
|EnrollmentID| StudentID |StudentName| CourseID| CourseName| Instructor|
| - | - | - | - | - | - |
|1 |1| Alice| 101| Math |Dr. Smith|
|2 |1| Alice |102| Science |Dr. Brown|
|3 |2| Bob| 103| English |Dr. White|

**Task:**

1. Identify partial dependencies in the table and normalize it into 2NF.
2. Write SQL queries to:
    - Create the 2NF-compliant table(s).
    - Insert the normalized data into the table(s).

## 3NF

> A relation is in Third Normal Form (3NF) if it is already in Second Normal Form (2NF) and does not have transitive dependencies for non-prime attributes.

**Objective:** Ensure the table is in 2NF and remove transitive dependency.

**Problem:** Consider the following 2NF table:

| StudentID | CourseID | CourseName | Instructor | InstructorEmail      |
| --------- | -------- | ---------- | ---------- | -------------------- |
| 1         | 101      | Math       | Dr. Smith  | smith@university.com |
| 1         | 102      | Science    | Dr. Brown  | brown@university.com |
| 2         | 103      | English    | Dr. White  | white@university.com |

**Task:**

1. Identify transitive dependencies in the table and normalize it into 3NF.
2. Write SQL queries to:
    - Create the 3NF-compliant table(s).
    - Insert the normalized data into the table(s).
