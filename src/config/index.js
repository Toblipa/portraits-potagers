import {
    BeaconEvent,
    defaultEventCallbacks,
    ColorMode,
    NetworkType,
} from "@airgap/beacon-dapp";

const config = {
    rpcUrl: "https://rpc.ghostnet.teztnets.xyz",
    networkType: NetworkType.GHOSTNET,
    serverUrl: "http://localhost:3005",
    dazaiContract: "KT1CyKZ8Gxg6MRUB6RYPe8B4bA1WLB8ktQ9u",
    dazaiCrowdsaleContract: "",
    contractAddress: "KT1CyKZ8Gxg6MRUB6RYPe8B4bA1WLB8ktQ9u",
    // contractAddress: "KT1VbJAzSAHQMvf5HC9zfEVMPbT2UcBvaMXb",
    // contractAddress: "KT1Eyc7z9cdCQ8WMwxkfKX4jQkYuPs5Lynqo",
    // contractAddress: "KT1RyCPwEjrrPCGSzdPbtb7fnn728wR5XFP3",
    walletOptions: {
        name: "Portraits Potagers",
        preferredNetwork: NetworkType.GHOSTNET,
        colorMode: ColorMode.DARK,
        disableDefaultEvents: false, // Disable all events / UI. This also disables the pairing alert.
        eventHandlers: {
            // To keep the pairing alert, we have to add the following default event handlers back
            [BeaconEvent.PAIR_INIT]: {
                handler: defaultEventCallbacks.PAIR_INIT
            },
            [BeaconEvent.PAIR_SUCCESS]: {
                handler: data => { return (data.publicKey);}
            }
        }
    }
}

export default config;