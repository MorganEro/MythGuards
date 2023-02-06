using System;
using System.Collections.Generic;
using System.Net;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using MythGuards.IRepositories;
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
                            PHoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
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
                        if (!reader.IsDBNull(reader.GetOrdinal("PayScaleId")))
                        {
                            userProfile.PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId"));
                        }

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
                        Join PayScale ps ON ps.Id = up.PayScaleId";

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
                                PHoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
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
                            if (!reader.IsDBNull(reader.GetOrdinal("PayScaleId")))
                            {
                                userProfile.PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId"));
                            }

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
                                     Select up.Id, DisplayName, Age, PayScaleId, Email, ImageUrl, PhoneNumber, Address,           Details, JoinDate, IsActive, UserTypeId, FirebaseUserId,
	                                 ut.Id AS UserType_Id, Name,
	                                 ps.Id AS PayScale_Id, rate
                                     From UserProfile up Join UserType ut ON up.UserTypeId = ut.Id 
                                    Join PayScale ps ON ps.Id = up.PayScaleId"";
                                    WHERE up.Id = @id;";

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
                                PHoneNumber = reader.GetString(reader.GetOrdinal("PhoneNumber")),
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
                            if (!reader.IsDBNull(reader.GetOrdinal("PayScaleId")))
                            {
                                userProfile.PayScaleId = reader.GetInt32(reader.GetOrdinal("PayScaleId"));
                            }

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
                    cmd.Parameters.AddWithValue("@phoneNumber", userProfile.PHoneNumber);
                    cmd.Parameters.AddWithValue("@address", userProfile.Address);
                    cmd.Parameters.AddWithValue("@details", userProfile.Details);
                    cmd.Parameters.AddWithValue("@joinDate", userProfile.JoinDate);
                    cmd.Parameters.AddWithValue("@isActive", userProfile.IsActive);
                    cmd.Parameters.AddWithValue("@userTypeId", userProfile.UserTypeId);
                    cmd.Parameters.AddWithValue("@firebaseUserId", userProfile.FirebaseUserId);
                    if (userProfile.PayScaleId == 0)
                    {
                        cmd.Parameters.AddWithValue("@PayScaleId", DBNull.Value);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@PayScaleId", userProfile.PayScaleId);
                    }

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
                    cmd.Parameters.AddWithValue("@displayName", userProfile.DisplayName);
                    cmd.Parameters.AddWithValue("@age", userProfile.Age);
                    cmd.Parameters.AddWithValue("@email", userProfile.Email);
                    cmd.Parameters.AddWithValue("@imageUrl", userProfile.ImageUrl);
                    cmd.Parameters.AddWithValue("@phoneNumber", userProfile.PHoneNumber);
                    cmd.Parameters.AddWithValue("@address", userProfile.Address);
                    cmd.Parameters.AddWithValue("@details", userProfile.Details);
                    cmd.Parameters.AddWithValue("@joinDate", userProfile.JoinDate);
                    cmd.Parameters.AddWithValue("@isActive", userProfile.IsActive);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void SoftDelete(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile 
                           SET IsActive = 0
                         WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", userProfile.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        /*   public List<UserProfile> Search(string criterion, bool sortDescending)
           {
               using (var conn = Connection)
               {
                   conn.Open();
                   using (var cmd = conn.CreateCommand())
                   {
                       var sql = @"
                 SELECT v.Id, v.Title, v.Description, v.Url, v.DateCreated AS VideoDateCreated, v.UserProfileId,

                        up.Name, up.Email, up.DateCreated AS UserProfileDateCreated,
                        up.ImageUrl AS UserProfileImageUrl

                   FROM Video v 
                        JOIN UserProfile up ON v.UserProfileId = up.Id
                  WHERE v.Title LIKE @Criterion OR v.Description LIKE @Criterion";

                       if (sortDescending)
                       {
                           sql += " ORDER BY v.DateCreated DESC";
                       }
                       else
                       {
                           sql += " ORDER BY v.DateCreated";
                       }

                       cmd.CommandText = sql;
                       DbUtils.AddParameter(cmd, "@Criterion", $"%{criterion}%");
                       using (SqlDataReader reader = cmd.ExecuteReader())
                       {

                           var videos = new List<Video>();
                           while (reader.Read())
                           {
                               videos.Add(new Video()
                               {
                                   Id = DbUtils.GetInt(reader, "Id"),
                                   Title = DbUtils.GetString(reader, "Title"),
                                   Description = DbUtils.GetString(reader, "Description"),
                                   DateCreated = DbUtils.GetDateTime(reader, "VideoDateCreated"),
                                   Url = DbUtils.GetString(reader, "Url"),
                                   UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                   UserProfile = new UserProfile()
                                   {
                                       Id = DbUtils.GetInt(reader, "UserProfileId"),
                                       Name = DbUtils.GetString(reader, "Name"),
                                       Email = DbUtils.GetString(reader, "Email"),
                                       DateCreated = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                                       ImageUrl = DbUtils.GetString(reader, "UserProfileImageUrl"),
                                   },
                               });
                           }

                           return videos;
                       }
                   }
               }
           }
       }*/
    }