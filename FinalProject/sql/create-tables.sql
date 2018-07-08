CREATE DATABASE gym;

use gym;

CREATE TABLE member
(
	MemberID int not null AUTO_INCREMENT,
	FirstName varchar(255),
	LastName varchar(255),
    MemberStatusID int,
    ClassID int,
	PRIMARY KEY (MemberID)
);

-- use gym;

-- ALTER TABLE member
-- ADD COLUMN ClassID int AFTER MemberStatusID;

use gym;

CREATE TABLE memberstatus
(
    MemberStatusID int,
	MemberStatusDescription varchar(255)
);

use gym;

CREATE TABLE class
(
    ClassID int,
	ClassDescription varchar(255)
);