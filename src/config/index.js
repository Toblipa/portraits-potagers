import {
    BeaconEvent,
    defaultEventCallbacks,
    ColorMode,
    NetworkType,
} from "@airgap/beacon-dapp";

const config = {
    rpcUrl: "https://rpc.tzbeta.net/",
    networkType: NetworkType.MAINNET,
    crowdsaleContract: "KT19ingJJZ3oKJX9EsAcffCyPw5VPM6p5pLc",
    tokenContract: "KT1AAAMhfiWnLB6xVXrY25niEJt5sSL75pwy",
    provenanceHash: "98642d3383333e252c63f425b49121cf853b65ff193535140b80b29a114bf533",
    walletOptions: {
        name: "Portraits Potagers",
        preferredNetwork: NetworkType.MAINNET,
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
