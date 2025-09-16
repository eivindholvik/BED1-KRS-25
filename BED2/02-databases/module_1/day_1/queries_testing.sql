use school;
SELECT * FROM enrollments;




SELECT c.course_name AS "Roberts Courses", e.grade AS "Roberts Grade"
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
WHERE s.name = "Robert Williams";




WITH RankedGrades AS (
    SELECT
        student_id,
        course_id,
        academic_year,
        ROW_NUMBER() OVER (ORDER BY student_id, course_id, academic_year) as rn
    FROM enrollments
    WHERE grade = 'A'
)
UPDATE enrollments e
JOIN RankedGrades r
  ON e.student_id = r.student_id AND e.course_id = r.course_id AND e.academic_year = r.academic_year
SET
  e.grade = CASE
    WHEN r.rn % 3 = 0
    THEN 'A-'  -- First, change every 3rd A to A-
    WHEN r.rn % 2 != 0
    THEN 'A+'  -- Then, change every other A (that hasn't been changed to A-) to A+
    ELSE e.grade
  END;




SELECT
  s.name AS `Student Name`,
  c.course_name AS `Course Name`
FROM students s
JOIN enrollments e
  ON s.student_id = e.student_id
JOIN courses c
  ON e.course_id = c.course_id
WHERE
  e.grade LIKE 'A%';















SELECT c.course_name
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
WHERE s.name = 'Robert Williams';

SELECT
  c.course_name,
  e.grade AS 'Roberts grade'
FROM students s
JOIN enrollments e
  ON s.student_id = e.student_id
JOIN courses c
  ON e.course_id = c.course_id
WHERE
  s.name = 'Robert Williams';
  
  SELECT
  s.name AS student_name,
  c.course_name,
  e.academic_year
FROM students s
JOIN enrollments e
  ON s.student_id = e.student_id
JOIN courses c
  ON e.course_id = c.course_id
WHERE
  e.grade = 'A';
  
  
DELETE FROM students WHERE student_id = 2;

SELECT * FROM enrollments WHERE student_id < 3;

SELECT * FROM course_instances;