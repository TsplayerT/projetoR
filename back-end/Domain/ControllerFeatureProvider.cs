using Api.Infrastructure;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Api.Domain
{
    public class ControllerFeatureProvider : IApplicationFeatureProvider<ControllerFeature>
    {
        public void PopulateFeature(IEnumerable<ApplicationPart> parts, ControllerFeature feature)
        {
            var genericControllerType = typeof(Controller<>);
            var controllersTypeList = Utility.ModelsTypeList.Select(x => genericControllerType.MakeGenericType(x).GetTypeInfo()).ToList();

            controllersTypeList.ForEach(x => feature.Controllers.Add(x));
        }
    }

}
