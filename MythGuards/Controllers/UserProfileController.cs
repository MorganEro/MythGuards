using MythGuards.Models;
using MythGuards.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Linq;

namespace MythGuards.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;

        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }


        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }

        [HttpGet("CurrentUser")]
        public IActionResult CurrentUser()
        {
            var userProfile = GetCurrentUserProfile();
            if (userProfile == null)
            {
                return NotFound();
            }

            return Ok(userProfile);
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);

            if (userProfile == null)
            {
                return NotFound();
            }

            return Ok(userProfile);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            return Ok(_userProfileRepository.GetAllUserProfiles());
        }
        [HttpGet("client")]
        public IActionResult GetAllClients()
        {
            return Ok(_userProfileRepository.GetClientUserProfiles());
        }

        [HttpGet("guard")]
        public IActionResult GetAllGuards()
        {
            return Ok(_userProfileRepository.GetGuardUserProfiles());
        }
        //c# controller method capture query string parameter
        [HttpGet("guardSearch/search")]
        public IActionResult SearchGuards(string input)
        {
            var Guards = _userProfileRepository.GetGuardUserProfiles();
            var foundGuards = Guards.Where(g => g.DisplayName.ToLower().Contains(input.ToLower()));
            return Ok(foundGuards);
        }

        [HttpGet("clientSearch/search")]
        public IActionResult SearchClients(string input)
        {
            var Clients = _userProfileRepository.GetClientUserProfiles();
            var foundClients = Clients.Where(c => c.DisplayName.ToLower().Contains( input.ToLower()));
            return Ok(foundClients);
        }

        [HttpGet("AllSearch/search")]
        public IActionResult SearchAllProfiles(string input)
        {
            var Profiles = _userProfileRepository.GetAllUserProfiles();
            var foundProfiles = Profiles.Where(c => c.DisplayName.ToLower().Contains(input.ToLower()));
            return Ok(foundProfiles);
        }

        [HttpGet("details/{id}")]
        public IActionResult Get(int id)
        {
            var userProfile = _userProfileRepository.GetById(id);
            if (userProfile != null)
            {
                NotFound();
            }
            return Ok(userProfile);
        }

        [HttpPost]
        public IActionResult Add(UserProfile userProfile)
        {
            var currentUserProfile = GetCurrentUserProfile();
            if (currentUserProfile.UserType.Name != "admin")
            {
                return Unauthorized();
            }
            _userProfileRepository.Add(userProfile);
            return NoContent();
        }
    
        [HttpPut ("{id}")]
        public IActionResult Edit(int id, UserProfile userProfile) 
        {
            if (id != userProfile.Id) 
            {
                return BadRequest();
            }
            _userProfileRepository.Edit(userProfile);
            return NoContent();
        }

        [HttpGet("User")]
        public IActionResult Me()
        {
            var userProfile = GetCurrentUserProfile();
            if (userProfile == null)
            {
                return NotFound();
            }

            return Ok(userProfile);
        }

    }
}