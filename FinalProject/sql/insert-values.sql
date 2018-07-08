use gym;

INSERT INTO memberstatus
(
	MemberStatusID, MemberStatusDescription
)
VALUES
(
	1, 'Active'
),
(
	2, 'Inactive'
),
(
	3, 'Pending'
);


use gym;

INSERT INTO class
(
	ClassID, ClassDescription
)
VALUES
(
	1, 'Swim'
),
(
	2, 'Yoga'
),
(
	3, 'Pilates'
),
(
	4, 'Kickboxing'
);


use gym;

INSERT INTO member
(
	FirstName, LastName, MemberStatusID, ClassID
)
VALUES
(
	'Lisa', 'Moore', 1, 4
),
(
	'Victoria', 'Bateman', 1, 2
),
(
	'John', 'Klein', 3, NULL
),
(
	'Christoper', 'Moore', 2, 4
),
(
	'Karen', 'Park', 1, 1
),
(
	'Lisa', 'Young', 2, 3
),
(
	'Thomas', 'Wei', 1, 4
),
(
	'Olivia', 'Kane', 1, 2
),
(
	'Victor', 'Hollinger', 1, 3
),
(
	'Tina', 'Hollinger', 2, 3
),
(
	'Molly', 'Walker', 3, NULL
),
(
	'Peter', 'Mackey', 2, 1
),
(
	'Christina', 'Krane', 1, 1
),
(
	'Joseph', 'Poe', 3, NULL
),
(
	'Michael', 'Lang', 1, 4
),
(
	'Luiz', 'Ramirez', 1, 3
),
(
	'Bridgette', 'Pope', 2, 2
),
(
	'Drew', 'Smith', 2, 1
),
(
	'James', 'Pike', 1, 2
),
(
	'Caroline', 'Banks', 1, 4
);
