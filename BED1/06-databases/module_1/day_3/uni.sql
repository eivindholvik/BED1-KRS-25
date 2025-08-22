DROP DATABASE myTodo;
CREATE DATABASE myTodo;

select * from mytodo.statuses;
select * from mytodo.todos;
select * from mytodo.users;

INSERT INTO statuses (`id`, `status`) values 
(1, 'Not Started'),
(2, 'In Progress'),
(3, 'Completed'),
(4, 'Deleted');

CREATE DATABASE uni;
SET SQL_SAFE_UPDATES = 0;

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

/*
UPDATE students
SET FirstName="Johnny";
*/

UPDATE students SET FirstName='Johnny' WHERE StudentID=6;

-- DELETE FROM students WHERE FirstName REGEXP '.*[0-9].*';

DELETE FROM students WHERE StudentID=12;

ALTER TABLE uni.students ADD Email VARCHAR(255);

ALTER TABLE uni.students MODIFY COLUMN Email VARCHAR(500);

ALTER TABLE uni.students DROP COLUMN Email;



/*
Add column Email again.
Fill it with a query, with the format FirstName.LastName@company.no
Is this unique?
If not, make it unique
*/

INSERT INTO uni.students (FirstName, LastName, Birthday) VALUES
('John', 'Doe', '2002-1-3');

ALTER TABLE uni.students ADD COLUMN email VARCHAR(255);
ALTER TABLE uni.students ADD CONSTRAINT unique_email UNIQUE (email);
SET SQL_SAFE_UPDATES = 0;
UPDATE uni.students SET email = LOWER(CONCAT(FirstName, '.', LastName, StudentID,'@company.no'));
-- Concat 'Eivind.Holvik5@company.no'
-- Lower 'eivind.holvik5@company.no'
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM students;


-- TRANSACTIONS
/*
START TRANSACTION;
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
    INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
COMMIT;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM students WHERE LastName = 'Robertson';
SET SQL_SAFE_UPDATES = 1;

*/
use mytodo;
select * from users;

-- CALL uni.new_procedure();

select * from reservations;

ALTER TABLE uni.students ADD LastAddedEventName VARCHAR(50);

DELIMITER $$
CREATE TRIGGER `uni`.`events_AFTER_INSERT` AFTER INSERT ON uni.events
FOR EACH ROW
BEGIN
UPDATE uni.students SET LastAddedEventName = new.Name
WHERE StudentID = new.OrganizerID;
END;
DELIMITER ;

INSERT INTO uni.events (OrganizerID, Name, Location) VALUES ( 5, "New event", "New Location");

SELECT * FROM uni.students;

-- SELECT OrganizerID FROM events WHERE Location = 'Hall';

SELECT FirstName, LastName FROM students
WHERE StudentID IN (
    SELECT OrganizerID FROM events WHERE Location = 'Hall'
)
ORDER BY LastName;

SELECT FirstName, LastName FROM students
JOIN events ON students.StudentID = events.OrganizerID
WHERE events.Location = "Hall"
ORDER BY LastName;

SELECT * FROM (SELECT * FROM students WHERE FirstName LIKE 'J%') AS S
JOIN (SELECT * FROM Events WHERE Location = 'Hall') AS E
ON StudentID = OrganizerID;


