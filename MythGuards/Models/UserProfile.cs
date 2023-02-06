using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MythGuards.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string DisplayName { get; set; }

        public int Age { get; set; }

       
        public int PayScaleId { get; set; }
        public PayScale PayScale { get; set; }

        
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }

        public string ImageUrl { get; set; }
        [Required]
        public string PHoneNumber { get; set; }

        
        public string Address { get; set; }
        public string Details { get; set; }

        
        public DateTime JoinDate { get; set; }
        public bool IsActive { get; set; }

        public int UserTypeId { get; set; }
        public UserType UserType { get; set; }

        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

    }
}
