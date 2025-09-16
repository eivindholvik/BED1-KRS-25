-- Migrate to a new structure with two more tables

-- Step 1: Create the new 'teachers' and 'course_instances' tables.
-- The 'teachers' table stores information about the instructors.
CREATE TABLE teachers (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- The 'course_instances' table now holds the 'academic_year' and the optional 'teacher_id'.
CREATE TABLE course_instances (
    course_instance_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    academic_year YEAR NOT NULL,
    teacher_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE,
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id) ON DELETE SET NULL
);

-- Step 2: Migrate existing course-year data into the new 'course_instances' table.
-- This creates a unique instance for each course and academic year combination from your existing enrollments.
INSERT INTO course_instances (course_id, academic_year, teacher_id)
SELECT DISTINCT
    course_id,
    academic_year,
    NULL -- No teacher information is available in the old schema, so we set it to NULL.
FROM enrollments;

-- Step 3: Modify the 'enrollments' table to fit the new structure.
-- First, we must drop the old foreign keys and primary key to allow us to drop the columns.
ALTER TABLE enrollments
    DROP FOREIGN KEY enrollments_ibfk_2,
    DROP FOREIGN KEY enrollments_ibfk_1,
    DROP PRIMARY KEY;

-- Add the new column 'course_instance_id' to the enrollments table.
ALTER TABLE enrollments
    ADD COLUMN course_instance_id INT;

-- Step 4: Populate the new 'course_instance_id' column with the correct IDs.
-- We join the 'enrollments' table with the new 'course_instances' table to match the old data.
UPDATE enrollments e
JOIN course_instances ci
    ON e.course_id = ci.course_id AND e.academic_year = ci.academic_year
SET
    e.course_instance_id = ci.course_instance_id;

-- Step 5: Clean up and add new constraints.
-- Drop the now-redundant columns from the 'enrollments' table.
ALTER TABLE enrollments
    DROP COLUMN course_id,
    DROP COLUMN academic_year;

-- Add the new primary key and foreign keys.
ALTER TABLE enrollments
    ADD PRIMARY KEY (student_id, course_instance_id),
    ADD FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    ADD FOREIGN KEY (course_instance_id) REFERENCES course_instances(course_instance_id) ON DELETE CASCADE;