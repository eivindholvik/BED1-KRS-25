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

-- SELECT * FROM students WHERE StudentID < 6 AND Birthday < '2002-11-11';
/*
SELECT * FROM students WHERE FirstName LIKE '%Anna%';
SELECT * FROM students WHERE FirstName = 'Ann';
*/