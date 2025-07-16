﻿using ProjectAngularApi.Models.DTOs.Options;
using System.ComponentModel.DataAnnotations;

namespace ProjectAngularApi.Models.DTOs.Questions
{
    public class CreateQuestionDto
    {
        [Required]
        [MaxLength(1000)]
        public string Text { get; set; }

        [Required]
        [MinLength(2, ErrorMessage = "A question must have at least 2 options")]
        public List<CreateOptionDto> Options { get; set; }
    }
}
