using MythGuards.Models;
using System.Collections.Generic;

namespace MythGuards.Repositories
{
    public interface IContractRepository
    {

        List<Contract> GetAllContracts();
        List<Contract> GetAllUserContracts(int userId);
        void Add(Contract contract);
        void Edit(Contract contract);
        Contract GetById(int id);
        void Delete(int id);
    }
}