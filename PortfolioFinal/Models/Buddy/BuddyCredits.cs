using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace PortfolioFinal.Models
{
    [MetadataType(typeof(CreditBuddy))]
    public partial class Credit
    {

    }
    
    sealed class CreditBuddy
    {
        public int CreditID { get; set; }
        public string Name { get; set; }

        [Display(Name = "Company Name")]
        public string CompanyName { get; set; }

        [Display(Name = "Used In")]
        public string UsedIn { get; set; }
        public string URL { get; set; }
    }
}