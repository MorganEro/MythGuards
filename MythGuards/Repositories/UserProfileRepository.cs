using System;
using System.Collections.Generic;
using System.Net;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using MythGuards.Models;

namespace MythGuards.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       Select up.Id, DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address, Details, JoinDate, IsActive, UserTypeId, FirebaseUserId,
	                    ut.Id AS UserType_Id, Name,
	                    ps.Id AS PayScale_Id, rate
                        From UserProfile up Join UserType ut ON up.UserTypeId = ut.Id 
                        Join PayScale ps ON ps.Id = up.PayScaleId
                         WHERE FirebaseUserId = @FirebaseuserId";

                    cmd.Parameters.AddWithValue("@FirebaseuserId", firebaseUserId);
                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                            Age = reader.GetInt32(reader.GetOrdinal("Age")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                            PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId")),
                        PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Details = reader.GetString(reader.GetOrdinal("Details")),
                            JoinDate = reader.GetDateTime(reader.GetOrdinal("JoinDate")),
                            IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                            FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                            UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                            UserType = new UserType()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                            },
                            PayScale = new PayScale()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Payscale_Id")),
                                Rate = reader.GetInt32(reader.GetOrdinal("rate")),
                            },
                        };                   

                    }
                    return userProfile;
                }
            }
        }
        public List<UserProfile> GetAllUserProfiles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       Select up.Id, DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address, Details, JoinDate, IsActive, UserTypeId, FirebaseUserId,
	                    ut.Id AS UserType_Id, Name,
	                    ps.Id AS PayScale_Id, rate
                        From UserProfile up Join UserType ut ON up.UserTypeId = ut.Id 
                        Join PayScale ps ON ps.Id = up.PayScaleId
                        ORDER BY DisplayName";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<UserProfile> userProfiles = new List<UserProfile>();
                        while (reader.Read())
                        {
                            UserProfile userProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                                Age = reader.GetInt32(reader.GetOrdinal("Age")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                                PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                Address = reader.GetString(reader.GetOrdinal("Address")),
                                Details = reader.GetString(reader.GetOrdinal("Details")),
                                JoinDate = reader.GetDateTime(reader.GetOrdinal("JoinDate")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                                UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                    Name = reader.GetString(reader.GetOrdinal("Name")),
                                },
                                PayScale = new PayScale()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Payscale_Id")),
                                    Rate = reader.GetInt32(reader.GetOrdinal("rate")),
                                },
                            };

                            userProfiles.Add(userProfile);
                        }

                        return userProfiles;
                    }
                }
            }
        }


        public List<UserProfile> GetGuardUserProfiles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       Select up.Id, DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address, Details, JoinDate, IsActive, UserTypeId, FirebaseUserId,
	                    ut.Id AS UserType_Id, Name,
	                    ps.Id AS PayScale_Id, rate
                        From UserProfile up Join UserType ut ON up.UserTypeId = ut.Id 
                        Join PayScale ps ON ps.Id = up.PayScaleId
                        WHERE ut.Id = 2
                        ORDER BY DisplayName";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<UserProfile> userProfiles = new List<UserProfile>();
                        while (reader.Read())
                        {
                            UserProfile userProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                                Age = reader.GetInt32(reader.GetOrdinal("Age")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                                PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                Address = reader.GetString(reader.GetOrdinal("Address")),
                                Details = reader.GetString(reader.GetOrdinal("Details")),
                                JoinDate = reader.GetDateTime(reader.GetOrdinal("JoinDate")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                                UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                    Name = reader.GetString(reader.GetOrdinal("Name")),
                                },
                                PayScale = new PayScale()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Payscale_Id")),
                                    Rate = reader.GetInt32(reader.GetOrdinal("rate")),
                                },
                            };

                            userProfiles.Add(userProfile);
                        }

                        return userProfiles;
                    }
                }
            }
        }

        public List<UserProfile> GetClientUserProfiles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       Select up.Id, DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address, Details, JoinDate, IsActive, UserTypeId, FirebaseUserId,
	                    ut.Id AS UserType_Id, Name,
	                    ps.Id AS PayScale_Id, rate
                        From UserProfile up Join UserType ut ON up.UserTypeId = ut.Id 
                        Join PayScale ps ON ps.Id = up.PayScaleId
                        WHERE ut.Id = 3
                        ORDER BY up.DisplayName";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<UserProfile> userProfiles = new List<UserProfile>();
                        while (reader.Read())
                        {
                            UserProfile userProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                                Age = reader.GetInt32(reader.GetOrdinal("Age")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                                PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                Address = reader.GetString(reader.GetOrdinal("Address")),
                                Details = reader.GetString(reader.GetOrdinal("Details")),
                                JoinDate = reader.GetDateTime(reader.GetOrdinal("JoinDate")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                                UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                    Name = reader.GetString(reader.GetOrdinal("Name")),
                                },
                                PayScale = new PayScale()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Payscale_Id")),
                                    Rate = reader.GetInt32(reader.GetOrdinal("rate")),
                                },
                            };

                            userProfiles.Add(userProfile);
                        }

                        return userProfiles;
                    }
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                     Select up.Id, DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address, Details, JoinDate, IsActive, UserTypeId, FirebaseUserId,
	                                 ut.Id AS UserType_Id, Name,
	                                 ps.Id AS PayScale_Id, rate
                                     From UserProfile up Join UserType ut ON up.UserTypeId = ut.Id 
                                    Join PayScale ps ON ps.Id = up.PayScaleId
                                    WHERE up.Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            UserProfile userProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                DisplayName = reader.GetString(reader.GetOrdinal("DisplayName")),
                                Age = reader.GetInt32(reader.GetOrdinal("Age")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                                PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId")),
                                PhoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
                                Address = reader.GetString(reader.GetOrdinal("Address")),
                                Details = reader.GetString(reader.GetOrdinal("Details")),
                                JoinDate = reader.GetDateTime(reader.GetOrdinal("JoinDate")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                                UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                    Name = reader.GetString(reader.GetOrdinal("Name")),
                                },
                                PayScale = new PayScale()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("Payscale_Id")),
                                    Rate = reader.GetInt32(reader.GetOrdinal("rate")),
                                },
                            };

                            return userProfile;
                        }
                        return null;
                    }
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfile (DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address, Details, JoinDate, IsActive, UserTypeId, FirebaseUserId)
                        OUTPUT INSERTED.ID
                        VALUES (@displayName, @age, @email, @imageUrl, @phoneNumber, @address, @details, @joinDate, @isActive, @userTypeId, @firebaseUserId)";
                    cmd.Parameters.AddWithValue("@displayName", userProfile.DisplayName);
                    cmd.Parameters.AddWithValue("@age", userProfile.Age);
                    cmd.Parameters.AddWithValue("@email", userProfile.Email);
                    cmd.Parameters.AddWithValue("@imageUrl", userProfile.ImageUrl);
                    cmd.Parameters.AddWithValue("@PayScaleId", userProfile.PayScaleId);
                    cmd.Parameters.AddWithValue("@phoneNumber", userProfile.PhoneNumber);
                    cmd.Parameters.AddWithValue("@address", userProfile.Address);
                    cmd.Parameters.AddWithValue("@details", userProfile.Details);
                    cmd.Parameters.AddWithValue("@joinDate", userProfile.JoinDate);
                    cmd.Parameters.AddWithValue("@isActive", userProfile.IsActive);
                    cmd.Parameters.AddWithValue("@userTypeId", userProfile.UserTypeId);
                    cmd.Parameters.AddWithValue("@firebaseUserId", userProfile.FirebaseUserId);
 
                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }



        public void Edit(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile 
                           SET DisplayName = @displayName, 
                               Age = @age, 
                               PayScaleId = @payScaleId,
                               Email = @email, 
                               ImageUrl = @imageUrl, 
                               PhoneNumber = @phoneNumber,
                               Address = @address, 
                               Details = @details, 
                               IsActive = @isActive
                         WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", userProfile.Id);
                    cmd.Parameters.AddWithValue("@displayName", userProfile.DisplayName);
                    cmd.Parameters.AddWithValue("@age", userProfile.Age);
                    cmd.Parameters.AddWithValue("@payScaleId", userProfile.PayScaleId);
                    cmd.Parameters.AddWithValue("@email", userProfile.Email);
                    cmd.Parameters.AddWithValue("@imageUrl", userProfile.ImageUrl);
                    cmd.Parameters.AddWithValue("@phoneNumber", userProfile.PhoneNumber);
                    cmd.Parameters.AddWithValue("@address", userProfile.Address);
                    cmd.Parameters.AddWithValue("@details", userProfile.Details);
                    cmd.Parameters.AddWithValue("@joinDate", userProfile.JoinDate);
                    cmd.Parameters.AddWithValue("@isActive", userProfile.IsActive);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}