using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Flags.Kit.RNFlagsKit
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNFlagsKitModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNFlagsKitModule"/>.
        /// </summary>
        internal RNFlagsKitModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNFlagsKit";
            }
        }
    }
}
