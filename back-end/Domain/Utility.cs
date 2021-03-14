using Api.Interface;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Domain
{
    public static class Utility
    {
        public static List<Type> ModelsTypeList { get; }

        static Utility()
        {
            var modelInterfaceType = typeof(IModel);
            var conditional = new Func<Type, bool>(x => modelInterfaceType.IsAssignableFrom(x) && !x.IsAbstract);
            
            ModelsTypeList = AppDomain.CurrentDomain.GetAssemblies().SelectMany(x => x.GetTypes()).Where(conditional).ToList();
        }


    }
}
