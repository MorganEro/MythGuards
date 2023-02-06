using MythGuards.Models;
using System.Collections.Generic;

namespace MythGuards.IRepositories
{
    public interface IContractRepository
    {
        void Add(Contract contract);
        void Edit(Contract contract);
        List<Contract> GetAllContracts();
        Contract GetById(int id);
    }
}