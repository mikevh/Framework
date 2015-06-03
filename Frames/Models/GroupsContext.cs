using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Frames.Models
{
    public class GroupsContext : DbContext
    {
        public GroupsContext() : base("name=DefaultConnection") {
            
        }

        public DbSet<Group> Groups { get; set; }
    }
}