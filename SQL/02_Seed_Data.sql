﻿USE [MythGuards]
GO



insert into [UserType] 
	([Name]) 
VALUES 
	('Admin'), 
	('Guard'), 
	('Client');





insert into [PayScale] 
	([Rate]) 
VALUES 
	('10000'), 
	('11000'), 
	('12000'), 
	('15000'), 
	('17000'),
	('19000'),
	('30000'), 
	('40000'), 
	('50000');





insert into [ServiceType] 
	([Type])
values 
	('Personal'), 
	('Property');





insert into UserProfile 
	(DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address, Details, JoinDate, IsActive, UserTypeId, FirebaseUserId) 
values 
	('Magus', 43, 1, 'MagusAgus@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1', '6125626721', '1234 BakerLane Court','I am Admin', '2021-08-01', 1, 1,'DhwISeUlkXRO64oXPQR8Imf0Vtv2'),
 	('Cervantes', 84, 3, 'Cerv@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6122534874', '54 Wilder Street','BirdFolk', '2022-10-02', 1, 2, 'XIgMvqTIPzaX522k4cpSRgrrlql1'),
 	('Krunk', 36, 1, 'krunk@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6122534874', ' 19199 Kalburt Ave', 'Centaur', '2023-11-25', 1, 2, 'MqXrDQXDAoTbbq7PrvyQ187VQC72'),
  	('Pietre', 2065, 6, 'Pietre222@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6127775958', 'Castle DurkShim', 'Dragonborn', '2022-09-06', 1, 2, 'DR0qDCoIvrVg4WHRimgchEsDQ7H3'),
  	('Arrtphiermus', 1899, 7, 'Art@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','7798609958', 'Dragon Sanctuary Lot 6', 'Dragon', '2023-01-22', 1, 2, 'YCxTnilGCzZZbZrGZTMnDcw4PXA3'),
	('Spitts', 892, 6, 'SpitFire@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6123654844', 'DragonManor 5th Floor', 'Dragon', '2023-02-03', 1, 2, 'YwWRUErMqhOd451Iqw0Rl0cKq2p1'),
	('Shpeumphraaacht', 3000, 8, 'Ship@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6128990003', 'Orphios Island', 'Dragon', '2021-06-12', 1, 2, 'H1hRZThYqFX7qk2ZFTsyJbIL9oG3'),
	('Frengur', 1076, 7, 'Freng@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','9820097644', '7th Cloud Haven', 'Dragon', '2021-08-05', 1, 2, 'Ki9Vbb0MNnSNDLyW6vNZ56x5JSQ2'),
	('Niene', 850, 6, '999@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6096096914', '13 Punic Columns', 'Elf triplets', '2023-02-10', 1, 2, '5YC4BXmCggQcezIu9HEGOcWTnYl2'),
	('Twerveen', 850, 6, 'Twe@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6096096945', '13 Punic Columns', 'Elf triplets', '2023-02-10', 1, 2, 'xZ6t5ipnc0UDfM7PlcYJRcrEnBH2'),
	('Dreerin', 850, 6, 'Dree@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6096096944', '13 Punic Columns', 'Elf triplets', '2023-02-10', 1, 2, 'oMJDPz1QxUcSiSHQtyUtJGSsFcr1'),
	('Bien', 103, 2, 'Bien@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','2667883909', 'Wayne Manor Rooftop', 'Gargoyle', '2023-01-10', 1, 2, 'q0qMacIx8Mh4wYlq73y0kJgy3wq1'),
	('Frap', 31, 3, 'Frap@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','9176096944', '456 Plum Circle', 'Gnoll', '2022-11-09', 1, 2, 'PZMhxhKY5fScBrxEX4TShEFR8zs1'),
	('Stinker', 26, 1, 'Stench@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','8128760453', '9222 Olump Square', 'Gnoll. 1.Currently in therapy for rage management', '2022-11-09', 0, 2, 'D1NTfeDv7Hczn1NN7RxGs8fzjrA2'),
	('Model6', 1, 1, 'GolemLabs6@GLI.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6096096944', 'GolemLabs', 'GolemKnight', '2023-01-04', 1, 2, 'vLRgs0smVDbewMsNKQTg8JqlWtO2'),
	('Model1', 1, 1, 'GolemLabs1@GLI.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6096096944', 'GolemLabs', 'MudGolem', '2023-01-04', 1, 2, 'TduEqDTEaYWxUqRq90yIdPI4JeI3'),
	('Model5', 1, 1, 'GolemLabs5@GLI.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6096096944', 'GolemLabs', 'ElectricGolem', '2023-01-04', 1, 2, 'NrW7MXzpm1h5bksWcdAerkxPNFV2'),
	('Pyurn', 90, 2, 'SarahVilman@gmal.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6628974563', '1878 TrueTrue Ave', 'RockGolem for rent', '2022-08-16', 1, 2, 'XRFc96QNyJNfVYt2bzOHJhD2pAr1'),
	('Byorn', 102, 3, 'AlexandraGreen@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6961111944', '8766 Acres Villa', 'Fire Golem for rent', '2023-01-30', 1, 2, 'BzuhZdaezcVe5bZZQFDYoJ0ynE52'),
	('Natura', 27, 1, 'FrancisPretern@Olviem.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','5679085436', '23 Wakem Style Rd', 'Earth Golem for rent', '2023-02-01', 1, 2, 'GdGs2uasQvNd2N5t1XCCGgMCl892'),
	('Bruin and Ferinip', 34, 4, 'Besties@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6096096944', '123 Vile Monk Ave', 'Griffin with Rider', '2022-05-07', 1, 2, 'I1MlVKoixZPoaS3LEXvLKU8iDpZ2'),
	('Alriche', 300, 6, 'Alriche@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','2137879030', '1 Paramid Plaza', 'Griffin', '2022-04-11', 1, 2, '1Luo3Oz3k1fLZtAg4SCbAS83aS52'),
	('Anyani', 35, 3, 'Anyani@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','4554666446', '89 DrinkOfWater Circle', 'LionFolk', '2022-11-17', 1, 2, 'WypmDnZYDEO8wo3JbmrnmnI4XCN2'),
	('Chinbi', 41, 3, 'Chinbi@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','6124389423', '456 Sweer Lane', 'LionFolk', '2022-05-14', 1, 2, '8yscvmDDhyLURv2IHjhp3cVlc4h1'),
	('Seth', 123, 4, 'Seth@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','3547289009', '23 MysticFalls Circle', 'Minotaur', '2022-09-22', 1, 2, 'rD2dtdxoRjRS9LLGlXwjfPxAN8G2'),
	('Sam', 26, 2, 'Sam@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','7875556722', '902 Mackem Street Square', 'Minotaur', '2023-02-01', 1, 2, 'o9sxp9YB4EMLt1gzAkCueThtrq73'),
	('Anxt', 202, 5, 'AnxtMan@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','7158279945', '601 DangoMango Court', 'Minotaur', '2022-02-16', 1, 2, 'OnXfD5MrnEVa3CbnmZH8HYOVsyC2'),
	('Byuum', 36, 3, 'Byuum@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','7143759377', '111 WaterLilly Lane', 'Werewolf', '2022-09-22', 1, 2, 'm0xzvrSMH4QKgC253O5WIh2Bc143'),
	('Tripp', 31, 3, 'Tripping@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','8159272214', '1621 Kirkley Drive', 'Werewolf', '2023-01-22', 1, 2, 'flUrD6YxAuOFzT7frgByKtogPyH2'),
	('Drake', 27, 5, 'Drake@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','4667748999', '73999 WakingDream Drive', 'Werewolf. 1)Out for combat training', '2022-09-22', 0, 2, '8y3RwkABKvQWwYyW67usKqSApJj2'),
	('Morgan', 43, Null, 'Morgan@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','9907489377', '677 Baton Rouge Parish', 'Web Developer', '2023-01-27', 1, 3, 'oASZPXZyFMbadwXkgnDg6sI9ccg1'),
	('Usher', 44, Null, 'Urshur@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','4774884949', '278 Brusly Square', 'Singer', '2022-02-17', 1, 3, 'OWtzQXHk5yPA8v3IpG9lleX4Ha53'),
	('Leslie', 38, Null, 'Leslie@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','9856359377', '412 Main Street Road', 'Banker', '2022-11-05', 1, 3, '7LEE3f2ZF0M5yDhCC4hN3ZH862u2'),
 	('Aaron', 43, Null, 'Aaron@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','9973759377', '34 Calli Squaler', 'Owner of several new energy plants', '2023-01-27', 1, 3, 'az1V6Kx3dieceOTKiaum77aOGcA3'),
	('Tophie', 31, Null, 'Tophie@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','7109859377', 'Laze Place', 'Rapper', '2022-01-04', 1, 3, 'JHtCqliZCUNfyRcplsIDqwe6Wno1'),
	('GGG Bank', 52, Null, 'GGGBank@GGGB.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','2283759377', '23 Regions Way', 'Bank', '2022-04-28', 1, 3, 'nYhrDZ5byzNTbzNhnfJouQoEer72'),
	('SlipDisk Cooperation', 6, Null, 'SLD@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','8007765554', '1345 Avenue Plaza', 'NewAge Genetics', '2022-06-27', 1, 3, 'SEygGvegEQYaMqi0D0HJ187tAAK2'),
	('Subdi', 55, Null, 'SubdiShrima@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','8004452237', 'Subdi Towers', 'Oil Money Billioneer', '2023-01-27', 1, 3, '3mGa6uBTKkQ3SBmm4oaeYXs7oct2'),
	('Phalanx Inc', 102, Null, 'Phalanx@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','8004446577', '1356 Webstar Business Center', 'New age computer tech company', '2022-03-05', 1, 3, 'wbyIyClLXXVyzfcd2bKBX81GUM63'),
	('Freedy', 45, Null, 'Freddy@MythGuards.com','https://robohash.org/numquamutut.png?size=150x150&set=set1','8004446577', '895 Rubbish Road', 'Transporter', '2021-01-25', 1, 3, 'W7Qjj7UaQpT2N1ytuzxHQNwuhJ63');


insert into Contract 
	(UserProfileId, GuardId, ServiceTypeId, RequestedStartingDate, RequestedEndingDate, Details, IsActive) 
values 
	(40, 21, 1, '2023-02-23', '2023-02-24', 'Transporting precious cargo for a client. Believe that news of it might have gotten out. Need a guard from pickup to dropoff.', 0),
	(34, 1, 1, '2023-01-27', '2023-01-29', 'Daughter is traveling with new boyfriend for the weekend. I do not like or trust him. Need guard to keep an eye on my baby. AT ALL TIMES', 0),
	(32, 3, 1, '2023-02-01', '2023-02-24', 'Doing a 3 week concert tour. Need a personal guard and an area guard for the venue', 1),
	(32, 7, 2, '2023-02-01', '2023-02-24', 'Doing a 3 week concert tour. Need a personal guard and an area guard for the venue', 1),
	(38, 12, 2, '2023-02-01', '2024-02-01', 'In need of steady  night watch. Will hope to renew every year', 1),
	(38, 4, 2, '2023-02-01', '2024-02-01', 'In need of steady daytime watch. Will hope to renew every year', 1),
	(39 ,8, 2, '2023-03-01', '2023-06-01', 'Conference for new product. Need guards from 8-4:30 at the venue for those days', 0),
	(39 ,9, 2, '2023-03-01', '2023-06-01', 'Conference for new product. Need guards from 8-4:30 at the venue for those days', 0),
	(39 ,10, 2, '2023-03-01', '2023-06-01', 'Conference for new product. Need guards from 8-4:30 at the venue for those days', 0),
 	(37 ,20, 2, '2023-04-22', '2023-04-22', 'Earth day celebration. Just need a mascot. Plus some help keeping people from tossing trash anywhere', 0),
	(36 ,15, 2, '2023-01-28', '2023-02-28', 'Steady 24hr guard duty. Can renew every month if it works out', 1),
 	(33 ,2, 1, '2023-02-21', '2023-02-28', 'I have a stalker. I would love a guard to keep an eye on me from afar but be able to strike quickly', 0);

