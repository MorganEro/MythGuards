using MythGuards.Models;
using System.Collections.Generic;

namespace MythGuards.Repositories
{
    public interface IUserProfileRepository
    {



        UserProfile GetByFirebaseUserId(string firebaseUserId);
        List<UserProfile> GetAllUserProfiles();
        List<UserProfile> GetGuardUserProfiles();
        List<UserProfile> GetClientUserProfiles();
        UserProfile GetById(int id);
        void Add(UserProfile userProfile);
        void Edit(UserProfile userProfile);

    }
}