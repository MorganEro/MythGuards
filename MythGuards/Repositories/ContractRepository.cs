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
    public class ContractRepository : BaseRepository, IContractRepository
    {
        public ContractRepository(IConfiguration configuration) : base(configuration) { }


        public List<Contract> GetAllContracts()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT c.Id, c.GuardId, c.UserProfileId, c.UserTypeid, c.RequestedStartingDate, c.RequestedEndingDate, c.Details, c.IsActive, 
		                    st.Id AS ServiceTypeId, st.Type,
		                    guard_up.DisplayName AS GuardName, client_up.DisplayName AS ClientName
                            FROM Contract c JOIN UserProfile guard_up ON c.GuardId = guard_up.Id 
				            JOIN UserProfile client_up ON c.UserProfileId = client_up.Id 
				            JOIN ServiceType st ON st.Id = c.ServiceTypeId";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<Contract> contracts = new List<Contract>();
                        while (reader.Read())
                        {
                            Contract contract = new Contract
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                GuardId = reader.GetInt32(reader.GetOrdinal("GuardId")),
                                GuardProfile = new UserProfile()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("GuardId")),
                                    DisplayName = reader.GetString(reader.GetOrdinal("GuardName")),
                                },
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileID")),
                                UserProfile = new UserProfile()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                    DisplayName = reader.GetString(reader.GetOrdinal("ClientName")),
                                },
                                RequestedStartingDate = reader.GetDateTime(reader.GetOrdinal("RequestedStartingDate")),
                                RequestedEndingDate = reader.GetDateTime(reader.GetOrdinal("RequestedEndingDate")),
                                Details = reader.GetString(reader.GetOrdinal("Details")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                ServiceTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                ServiceType = new ServiceType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("ServiceTypeId")),
                                    Type = reader.GetString(reader.GetOrdinal("Type")),
                                },
                            };


                            contracts.Add(contract);
                        }

                        return contracts;
                    }
                }
            }
        }

        public Contract GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT c.Id, c.GuardId, c.UserProfileId, c.UserTypeid, c.RequestedStartingDate, c.RequestedEndingDate, c.Details, c.IsActive, 
		                    st.Id AS ServiceTypeId, st.Type,
		                    guard_up.DisplayName AS GuardName, client_up.DisplayName AS ClientName
                            FROM Contract c JOIN UserProfile guard_up ON c.GuardId = guard_up.Id 
				            JOIN UserProfile client_up ON c.UserProfileId = client_up.Id 
				            JOIN ServiceType st ON st.Id = c.ServiceTypeId";

                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            Contract contract = new Contract
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                GuardId = reader.GetInt32(reader.GetOrdinal("GuardId")),
                                GuardProfile = new UserProfile()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("GuardId")),
                                    DisplayName = reader.GetString(reader.GetOrdinal("GuardName")),
                                },
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileID")),
                                UserProfile = new UserProfile()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                    DisplayName = reader.GetString(reader.GetOrdinal("ClientName")),
                                },
                                RequestedStartingDate = reader.GetDateTime(reader.GetOrdinal("RequestedStartingDate")),
                                RequestedEndingDate = reader.GetDateTime(reader.GetOrdinal("RequestedEndingDate")),
                                Details = reader.GetString(reader.GetOrdinal("Details")),
                                IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                                ServiceTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                ServiceType = new ServiceType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("ServiceTypeId")),
                                    Type = reader.GetString(reader.GetOrdinal("Type")),
                                },
                            };
                            return contract;
                        }
                        return null;
                    }
                }
            }
        }

        public void Add(Contract contract)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Contract (UserProfileId, GuardId, ServiceTypeId, RequestedStartingDate, RequestedEndingDate, Details, IsActive)
                        OUTPUT INSERTED.ID
                        VALUES ((@userProfileId, @guardId, @serviceTypeId, @requestedStartingDate, @requestedEndingDate, @details, @isActive)";
                    cmd.Parameters.AddWithValue("@userProfileId", contract.UserProfileId);
                    cmd.Parameters.AddWithValue("@guardId", contract.GuardId);
                    cmd.Parameters.AddWithValue("@serviceTypeId", contract.ServiceTypeId);
                    cmd.Parameters.AddWithValue("@requestedStartingDate", contract.RequestedStartingDate);
                    cmd.Parameters.AddWithValue("@requestedEndingDate", contract.RequestedEndingDate);
                    cmd.Parameters.AddWithValue("@details", contract.Details);
                    cmd.Parameters.AddWithValue("@isActive", contract.IsActive);

                    contract.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Edit(Contract contract)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Contract 
                           SET UserProfileId = @userProfileId,
                               GuardId = @guardId,
                               ServiceTypeId = @serviceTypeId,
                               RequestedStartingDate = @requestedStartingDate,
                               RequestedEndingDate = @requestedEndingDate,
                               Details = @details,  
                               IsActive = @isActive
                         WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@userProfileId", contract.UserProfileId);
                    cmd.Parameters.AddWithValue("@guardId", contract.GuardId);
                    cmd.Parameters.AddWithValue("@serviceTypeIdl", contract.ServiceTypeId);
                    cmd.Parameters.AddWithValue("@requestedStartingDate", contract.RequestedStartingDate);
                    cmd.Parameters.AddWithValue("@requestedEndingDate", contract.RequestedEndingDate);
                    cmd.Parameters.AddWithValue("@details", contract.Details);
                    cmd.Parameters.AddWithValue("@isActive", contract.IsActive);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }