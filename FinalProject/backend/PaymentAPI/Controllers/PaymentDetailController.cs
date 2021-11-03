using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentAPI.Contexts;
using PaymentAPI.DTOs.Requests;
using PaymentAPI.DTOs.Responses;
using PaymentAPI.Models;

namespace PaymentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PaymentDetailController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PaymentDetailController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetItems()
        {
            var items = await _context.PaymentDetails.ToListAsync();

            if (items == null)
            {
                return NotFound(new ResponseMessage()
                { Status = "Empty", Message = "PaymentDetails is empty!" });
            }

            return Ok(items);
        }

        [HttpPost]
        public async Task<ActionResult> CreateItem(PaymentDetail data)
        {
            if (ModelState.IsValid)
            {
                await _context.PaymentDetails.AddAsync(data);
                await _context.SaveChangesAsync();

                CreatedAtAction("GetItem", new { data.PaymentDetailId }, data);
                return Ok(new ResponseMessage {
                    Status = "Success",
                    Message = "Created successfully!"
                });
            }
            return BadRequest(new ResponseMessage {
                Status = "Failed",
                Message = "Created failed!"
            });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetItem(int id)
        {
            var item =
                await _context
                    .PaymentDetails
                    .FirstOrDefaultAsync(x => x.PaymentDetailId == id);

            if (item == null)
            {
                return NotFound(new ResponseMessage {
                    Status = "Failed",
                    Message = "Payment detail with Id " + id + " Not Found!"
                });
            }

            return Ok(item);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateItem(int id, PaymentDetail item)
        {
            if (id != item.PaymentDetailId)
            {
                return BadRequest(new ResponseMessage {
                    Status = "Failed",
                    Message = "Something went wrong!"
                });
            }

            var existItem =
                await _context
                    .PaymentDetails
                    .FirstOrDefaultAsync(x => x.PaymentDetailId == id);

            if (existItem == null)
            {
                return NotFound(new ResponseMessage {
                    Status = "Failed",
                    Message = "Payment detail with Id " + id + " Not Found!"
                });
            }

            existItem.PaymentDetailId = item.PaymentDetailId;
            existItem.CardOwnerName = item.CardOwnerName;
            existItem.CardNumber = item.CardNumber;
            existItem.ExpirationDate = item.ExpirationDate;
            existItem.SecurityCode = item.SecurityCode;

            await _context.SaveChangesAsync();

            return Ok(new ResponseMessage {
                Status = "Success",
                Message = "Updated successfully!"
            });
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItem(int id)
        {
            var existItem =
                await _context
                    .PaymentDetails
                    .FirstOrDefaultAsync(x => x.PaymentDetailId == id);

            if (existItem == null)
            {
                return NotFound(new ResponseMessage {
                    Status = "Failed",
                    Message = "Payment detail with Id " + id + " Not Found!"
                });
            }

            _context.PaymentDetails.Remove (existItem);
            await _context.SaveChangesAsync();

            return Ok(new ResponseMessage {
                Status = "Success",
                Message = "Deleted successfully!"
            });
        }
    }
}
