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