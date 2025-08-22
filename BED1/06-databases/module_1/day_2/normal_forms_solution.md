# Normal Forms Solution

## 1NF

### Table:

| StudentID | StudentName | Subject | Grade |
| --------- | ----------- | ------- | ----- |
| 1         | Alice       | Math    | A     |
| 1         | Alice       | Science | B     |
| 2         | Bob         | English | B     |
| 2         | Bob         | History | A     |
| 3         | Charlie     | Science | C     |
| 3         | Charlie     | Math    | B     |

### SQL Queries:

```SQL

CREATE TABLE StudentSubjects (
    StudentID INT,
    StudentName VARCHAR(50),
    Subject VARCHAR(50),
    Grade CHAR(1),
    PRIMARY KEY (StudentID, Subject)
);

INSERT INTO StudentSubjects (StudentID, StudentName, Subject, Grade) VALUES
(1, 'Alice', 'Math', 'A'),
(1, 'Alice', 'Science', 'B'),
(2, 'Bob', 'English', 'B'),
(2, 'Bob', 'History', 'A'),
(3, 'Charlie', 'Science', 'C'),
(3, 'Charlie', 'Math', 'B');

```

## 2NF

**Partial Dependency:** StudentName depends on StudentID, not on the full composite key (StudentID, CourseID).

### Tables:

**Students:**
|StudentID |StudentName|
|-|-|
|1 |Alice|
|2 |Bob|

---

**Courses:**
|CourseID |CourseName| Instructor|
|-|-|-|
|101| Math |Dr. Smith|
|102 |Science| Dr. Brown|
|103 |English| Dr. White|

---

**Enrollments:**
|EnrollmentID |StudentID |CourseID|
|-|-|-|
|1 |1| 101|
|2| 1| 102|
|3| 2 |103|

### SQL Queries:

```SQL
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(50)
);

CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(50),
    Instructor VARCHAR(50)
);

CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

INSERT INTO Students (StudentID, StudentName) VALUES
(1, 'Alice'),
(2, 'Bob');

INSERT INTO Courses (CourseID, CourseName, Instructor) VALUES
(101, 'Math', 'Dr. Smith'),
(102, 'Science', 'Dr. Brown'),
(103, 'English', 'Dr. White');

INSERT INTO Enrollments (EnrollmentID, StudentID, CourseID) VALUES
(1, 1, 101),
(2, 1, 102),
(3, 2, 103);
```

## 3NF

**Transitive Dependency:** InstructorEmail depends on Instructor.

### Tables:

**Courses:**
|CourseID | CourseName | Instructor |
|-|-|-|
|101| Math|Dr. Smith|
|102 |Science| Dr. Brown|
|103 |English| Dr. White|

**Instructors:**
|Instructor|InstructorEmail|
|-|-|
|Dr. Smith| smith@university.com|
|Dr. Brown| brown@university.com|
|Dr. White| white@university.com|

**Enrollments:**
| StudentID | CourseID |
| --------- | -------- |
| 1 | 101 |
| 1 | 102 |
| 2 | 103 |

### SQL Queries:

```SQL
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(50),
    Instructor VARCHAR(50)
);

CREATE TABLE Instructors (
    Instructor VARCHAR(50) PRIMARY KEY,
    InstructorEmail VARCHAR(50)
);

CREATE TABLE Enrollments (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

INSERT INTO Courses (CourseID, CourseName, Instructor) VALUES
(101, 'Math', 'Dr. Smith'),
(102, 'Science', 'Dr. Brown'),
(103, 'English', 'Dr. White');

INSERT INTO Instructors (Instructor, InstructorEmail) VALUES
('Dr. Smith', 'smith@university.com'),
('Dr. Brown', 'brown@university.com'),
('Dr. White', 'white@university.com');

INSERT INTO Enrollments (StudentID, CourseID) VALUES
(1, 101),
(1, 102),
(2, 103);
```
