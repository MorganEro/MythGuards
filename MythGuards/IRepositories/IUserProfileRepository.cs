using MythGuards.Models;
using System.Collections.Generic;

namespace MythGuards.IRepositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Edit(UserProfile userProfile);
        List<UserProfile> GetAllUserProfiles();
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetById(int id);
        void SoftDelete(UserProfile userProfile);
    }
}