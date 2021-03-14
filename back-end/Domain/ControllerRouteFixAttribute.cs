using Api.Infrastructure;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System;
using System.Linq;

namespace Api.Domain
{
    public class ControllerRouteFixAttribute : Attribute, IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            var genericControllerType = typeof(Controller<>);

            if (!controller.ControllerType.IsGenericType || controller.ControllerType.GetGenericTypeDefinition() != genericControllerType)
            {
                return;
            }

            var entityType = controller.ControllerType.GenericTypeArguments.FirstOrDefault();

            if (entityType != null)
            {
                controller.ControllerName = entityType.Name;
                controller.RouteValues["Controller"] = entityType.Name;
            }
        }
    }
}
