DROP DATABASE uni;
CREATE DATABASE uni;

USE uni;

CREATE TABLE students(
StudentID INT AUTO_INCREMENT PRIMARY KEY,
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL,
Birthday date
);

INSERT INTO Students (FirstName, LastName, Birthday) 
VALUES 
('John', 'Doe', '2002-11-11'),
('Barbara', 'Smith', '1998-01-28'),
('David', 'Rock', '2000-11-11'),
('Jackie', 'Brown', '1999-12-12'),
('Hugh', 'Walker', '1999-09-19'),
('Anna', 'Jenkins', '1994-04-06'),
('Patricia', 'Cash', '2003-12-04'),
('Ashley', 'Swift', '2001-06-02'),
('John', 'White', '2000-10-19'),
('Wayne', 'O''Neill', '1999-01-19');

INSERT INTO Students (FirstName, LastName, Birthday) 
VALUES 
('1John', 'Smith', '2002-11-11'),
('Barbara1', 'Doe', '1998-01-28'),
('Da3vid', 'Holvik', '2000-11-11');

INSERT INTO Students (FirstName, LastName) 
VALUES 
('Anders', 'Kitty');

INSERT INTO uni.students (FirstName, LastName) 
VALUES 
('Robert', 'Smith');

CREATE TABLE events(
    EventID INT AUTO_INCREMENT PRIMARY KEY,
    OrganizerID INT NOT NULL,
    Name varchar(50) NOT NULL,
    Location varchar(50) NOT NULL,
    FOREIGN KEY (OrganizerID) REFERENCES Students(StudentID)
);

INSERT INTO Events (OrganizerID, Name, Location) VALUES
(1, 'Integration', 'Campus'),
(1, 'Summer Party', 'Hall'),
(3, 'Beer Party', 'Hall'),
(4, 'Festival of Fun', 'Street'),
(1, 'University Open Days', 'Campus');

-- SELECT * FROM students WHERE StudentID < 6 AND Birthday < '2002-11-11';
/*
SELECT * FROM students WHERE FirstName LIKE '%Anna%';
SELECT * FROM students WHERE FirstName = 'Ann';
*/

-- SELECT FirstName, LastName FROM uni.students ORDER BY LENGTH(FirstName) DESC, LENGTH(LastName) DESC;

-- Only show students that have even studentID
-- SELECT * FROM uni.students WHERE StudentID % 2 = 0 ORDER BY Birthday, FirstName, LastName;

-- SELECT COUNT(*) FROM uni.students where Birthday > '2002-01-01';

-- Count all entries where FirstName starts with A, and has birthday registerd
/*
SELECT COUNT(Birthday) FROM uni.students where FirstName LIKE 'a%';
SELECT MIN(LENGTH(FirstName) + LENGTH(LastName)) FROM uni.students;

SELECT DATEDIFF(MAX(BirthDay), MIN(Birthday))/365.25 AS AgeDiff FROM uni.students;

SELECT * FROM uni.students;

SELECT * FROM uni.events;

SELECT events.Name, students.FirstName, students.LastName FROM events JOIN students ON events.OrganizerID = students.StudentID;

SELECT COUNT(Events.Name), students.StudentID FROM students LEFT JOIN events ON events.OrganizerID = students.StudentID  GROUP BY students.StudentID;
*/
-- Causes an error
-- INSERT INTO uni.students (FirstName) VALUES ("Eivind");

SELECT events.EventID, events.Name AS EventName, events.Location, students.FirstName, students.LastName, students.Birthday
FROM events
JOIN students ON StudentID=OrganizerID
WHERE EventID = 2;

SELECT * FROM students;

/*
UPDATE students
SET FirstName="Johnny";
*/

UPDATE students SET FirstName='Johnny' WHERE StudentID=6;

DELETE FROM students WHERE FirstName REGEXP '.*[0-9].*';

DELETE FROM students WHERE StudentID=12;

