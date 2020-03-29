using System.Threading.Tasks;
using DatingApp.Api.Data;
using DatingApp.Api.Dtos;
using DatingApp.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;

        }
        [HttpPost("register")]
            public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
            //                                       [FromBody] - [ApiController] takes care of this for us 
        {
            // validate the request taken care of in DTO 

            // send user name convert to lowercase 
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if(await _repo.UserExisits(userForRegisterDto.Username))
                return BadRequest("Username already exisists");

            // create user 
            var userToCreate = new User{Username = userForRegisterDto.Username};

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);

        }

    }
}