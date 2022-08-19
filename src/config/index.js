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
    crowdsaleContract: "KT1Q1ckxMGn7HvfJee43uQNEfEpMea7JQrvg",
    tokenContract: "KT1WAC7iXUfaqvBPmgY9R6GQ6mB6kUmJm562",
    provenenceHash: "bafkreielvnhixhkiwlzzoqhgkshd47v5swezwkugk3lqwsjfubcg5wczma",
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