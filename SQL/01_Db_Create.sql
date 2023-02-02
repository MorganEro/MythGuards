USE [master]
GO

IF db_id('MythGuards') IS NULL
  CREATE DATABASE [MythGuards]
GO

USE [MythGuards]
GO

DROP TABLE IF EXISTS Contract;
DROP TABLE IF EXISTS UserProfile;
DROP TABLE IF EXISTS UserType;
DROP TABLE IF EXISTS PayScale;
DROP TABLE IF EXISTS ServiceType;



CREATE TABLE [ServiceType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Type] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [PayScale] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [rate] int NOT NULL
)
GO

CREATE TABLE [UserType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [DisplayName] nvarchar(255) NOT NULL,
  [Age] int,
  [PayScaleId] int,
  [Email] nvarchar(255) NOT NULL,
  [ImageUrl] nvarchar(255) NOT NULL,
  [PhoneNumber] nvarchar(255) NOT NULL,
  [Address] nvarchar(255) NOT NULL,
  [Details] nvarchar(255),
  [JoinDate] datetime NOT NULL,
  [IsActive] bit NOT NULL DEFAULT (1),
  [UserTypeId] int NOT NULL,
  [FirebaseUserId] nvarchar(255) UNIQUE NOT NULL
)
GO

CREATE TABLE [Contract] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserProfileId] int NOT NULL,
  [GuardId] int NOT NULL,
  [ServiceTypeId] int NOT NULL,
  [RequestedStartingDate] datetime NOT NULL,
  [RequestedEndingDate] datetime NOT NULL,
  [Details] nvarchar(255),
  [IsActive] bit NOT NULL DEFAULT (0)
)
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
GO

ALTER TABLE [Contract] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Contract] ADD FOREIGN KEY ([ServiceTypeId]) REFERENCES [ServiceType] ([Id])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([PayScaleId]) REFERENCES [PayScale] ([Id])
GO

ALTER TABLE [Contract] ADD FOREIGN KEY ([GuardId]) REFERENCES [UserProfile] ([Id])
GO
