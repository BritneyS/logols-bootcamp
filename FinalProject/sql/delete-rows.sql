use gym;

DELETE 
FROM member
WHERE member.MemberID = @MemberID;
	