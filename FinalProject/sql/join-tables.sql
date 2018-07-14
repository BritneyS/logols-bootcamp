use gym;

SELECT  m.MemberID, m.FirstName, m.LastName,
        ms.MemberStatusDescription,
        c.ClassDescription
FROM    member m
        INNER JOIN memberstatus ms
            ON m.MemberStatusID = ms.MemberStatusID
        LEFT OUTER JOIN class c
            ON m.ClassID = c.ClassID
ORDER BY MemberID ASC;

use gym;

SELECT  m.MemberID, m.FirstName, m.LastName
FROM    member m
ORDER BY MemberID ASC;

use gym;

SELECT  m.MemberID, m.FirstName, m.LastName,
        ms.MemberStatusDescription
FROM    member m
        INNER JOIN memberstatus ms
            ON m.MemberStatusID = ms.MemberStatusID
ORDER BY MemberID ASC;

use gym;

SELECT  m.MemberID, m.FirstName, m.LastName,
        c.ClassDescription
FROM    member m
        LEFT OUTER JOIN class c
            ON m.ClassID = c.ClassID
WHERE c.ClassDescription = "Swim"
ORDER BY MemberID ASC;

use gym;

SELECT  m.MemberID, m.FirstName, m.LastName,
        c.ClassDescription
FROM    member m
        LEFT OUTER JOIN class c
            ON m.ClassID = c.ClassID
WHERE c.ClassDescription = "Yoga"
ORDER BY MemberID ASC;

use gym;

SELECT  m.MemberID, m.FirstName, m.LastName,
        c.ClassDescription
FROM    member m
        LEFT OUTER JOIN class c
            ON m.ClassID = c.ClassID
WHERE c.ClassDescription = "Pilates"
ORDER BY MemberID ASC;

use gym;

SELECT  m.MemberID, m.FirstName, m.LastName,
        c.ClassDescription
FROM    member m
        LEFT OUTER JOIN class c
            ON m.ClassID = c.ClassID
WHERE c.ClassDescription = "Kickboxing"
ORDER BY MemberID ASC;