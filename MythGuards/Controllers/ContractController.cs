using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MythGuards.Models;
using MythGuards.Repositories;
using System.Security.Claims;

namespace MythGuards.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
   
    public class ContractController : ControllerBase
    {
        private readonly IContractRepository _contractRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public ContractController(IContractRepository contractRepository, IUserProfileRepository userProfileRepository)
        {
            _contractRepository = contractRepository;
            _userProfileRepository = userProfileRepository;
        }


        [HttpGet]
        public IActionResult GetAllContracts()
        {
            return Ok(_contractRepository.GetAllContracts());
        }

        [HttpGet("{userId}")]
        public IActionResult GetAllUserContracts(int userId)
        {
            return Ok(_contractRepository.GetAllUserContracts(userId));
        }

        [HttpGet("details/{id}")]
        public IActionResult GetById(int id)
        {
            var contract = _contractRepository.GetById(id);
            if (contract != null)
            {
                NotFound();
            }
            return Ok(contract);
        }

        [HttpPost("create")]
        public IActionResult Add(Contract contract)
        {
            var userProfile = GetCurrentUserProfile();
            contract.UserProfileId = userProfile.Id;
            _contractRepository.Add(contract);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Edit(int id, Contract contract)
        {
            if (id != contract.Id)
            {
                return BadRequest();
            }
            _contractRepository.Edit(contract);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _contractRepository.Delete(id);
            return NoContent();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

    }
}