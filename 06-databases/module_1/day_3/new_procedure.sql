CREATE DEFINER=`root`@`localhost` PROCEDURE `new_procedure`()
BEGIN
DECLARE studentCount INT;

START TRANSACTION;
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');
INSERT INTO students (FirstName, LastName) VALUES ('Robert', 'Robertson');

SET @studentCount = (SELECT COUNT(*) FROM Students);
IF @studentCount > 20 THEN
    ROLLBACK;
ELSE
    COMMIT;
END IF;
END