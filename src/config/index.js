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
    crowdsaleContract: "KT1NhDp849WbSxm36Fvc3y9APNPJx6Q2jrT3",
    tokenContract: "KT1MBxD2D2cp8THGSiqNtgR455dzpWWEHYTF",
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