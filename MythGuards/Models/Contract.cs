using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Policy;

namespace MythGuards.Models
{
    public class Contract
    {
        public int Id { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
        public int GuardId { get; set; }
        public UserProfile GuardProfile { get; set; }
        public DateTime RequestedStartingDate { get; set; }
        public DateTime RequestedEndingDate { get; set; }
        public int ServiceTypeId { get; set; }

        public ServiceType ServiceType { get; set; }
        [MaxLength(65)]
        public string Details { get; set; }
        public bool IsActive { get; set; }
    }
}
