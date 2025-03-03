import PageWrapper from '@/components/common/PageWrapper'
import PreviousOrNextPages from '@/components/common/PreviousOrNextPages'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'
import { computeMarketParamsId } from '@/utils/morpho.util'

export const metadata = generatePageMetadata(AppPagePaths.ARTICLES)

export default function Page() {
    const owner = '0x1eC80258a36089E0F7E067d6b8d5EeBD4b171800'
    const baseUsdc = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'
    const curator = '0x04b12DcB0E5Bf4BFbf0B82AfA1074A227AF3f6f1'
    const allocator = '0xD2Ee5A0ac67ad68BAa6066222276923083B928c6'
    const feeRecipient = '0x6ea60D935a7Ef2B3478F6F040B37a1F861e4192c'
    // const skimRecipient = '0x9d9286533AbA793cA137cD3F32AE53b75ACA83f8'
    const address0 = '0x0000000000000000000000000000000000000000'

    // cbETH/USDC
    const cbETH_USDC_Market = {
        marketParams: {
            loanToken: baseUsdc,
            collateralToken: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
            oracle: '0x4756c26E01E61c7c2F86b10f4316e179db8F9425',
            irm: '0x46415998764C29aB2a25CbeA6254146D50D22687',
            lltv: '860000000000000000',
        },
        newSupplyCap: '1000' + '000000',
    }

    // create vault then deposit
    const steps = [
        {
            name: 'Creates a new MetaMorphoV1_1 vault',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/creation/#fill-attributes',
            contracts: {
                factory: 'https://basescan.org/address/0xFf62A7c278C62eD665133147129245053Bbf5918#code',
                function: 'createMetaMorpho',
                params: {
                    initialOwner: owner,
                    initialTimelock: 0,
                    asset: baseUsdc,
                    name: 'test fberger_xyz base:USDC vault',
                    symbol: 'test-fberger-base-USDC',
                    salt: '0x',
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x8240694a8c472e33b540c96666cd3d40b79aa314cfb7523d3185b0a5ba632684',
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#code',
            },
        },
        {
            name: 'Attributes roles: curator',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'setCurator',
                params: {
                    curator: curator,
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x2112f8362f1ab67c7a601283948c958001998832055a1fc898e3e0f770b8de44',
            },
        },
        {
            name: 'Attributes roles: allocator',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'setIsAllocator',
                params: {
                    newAllocator: allocator,
                    newIsAllocator: true,
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x7e2f003d50eadcb7d38fd7aec8416e7a051f5b5d73b21c78fc2f2c4093c8bb9b',
            },
        },
        {
            name: 'Set Fee recipient',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#fee',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'setFeeRecipient',
                params: {
                    fee: feeRecipient,
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x3e6f4b593d0653f4177cb46f7ab56b9a807fc175ac3ef991e106653208b84149',
            },
        },
        {
            name: 'Set Fee',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#fee',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'setFee',
                params: {
                    fee: '10000000000000000',
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x0bf4d590e6b734952b4e88460bb7b1d4a43aad879b0fb5a8e10b4f94039aef10',
            },
        },
        {
            name: 'Set Market Cap',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#1---submit-the-cap',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'submitCap',
                params: {
                    marketParams: cbETH_USDC_Market.marketParams,
                    newSupplyCap: cbETH_USDC_Market.newSupplyCap,
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x30bb66420a036863f4d4e715c121c76e3f88e427e7218329b30d629523a433f5',
            },
        },
        {
            name: 'Accept the Cap',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#1---submit-the-cap',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'submitCap',
                params: {
                    marketParams: cbETH_USDC_Market.marketParams,
                    newSupplyCap: cbETH_USDC_Market.newSupplyCap,
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x2591f5e73fb9ef48337dcc8690f4b670cecb3f1b3a4fefa95365416cd8bebd9e',
            },
        },
        {
            name: 'Set Idle Market Cap',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#1---submit-the-cap',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'submitCap',
                params: {
                    marketParams: {
                        loanToken: baseUsdc,
                        collateralToken: address0,
                        oracle: address0,
                        irm: address0,
                        lltv: 0,
                    },
                    // type(uint184).max == 2**184 - 1
                    newSupplyCap: '24519928653854221733733552434404946937899825954937634815',
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x6404f999cd1ec5909e49a56bcee50a091300e6b1cd8e2c6056540e250adab0f7',
            },
        },
        {
            name: 'Accept Idle Cap',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#1---submit-the-cap',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'submitCap',
                params: {
                    marketParams: {
                        loanToken: baseUsdc,
                        collateralToken: address0,
                        oracle: address0,
                        irm: address0,
                        lltv: 0,
                    },
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x1610b1621aa0920d0f6f4855143aad420ba757beee0c7e5b16d9529c70251052',
            },
        },
        {
            name: 'Set the supply queue',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup#3---set-the-supplyqueue',
            contracts: {
                vault: 'https://basescan.org/address/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE#writeContract',
                function: 'submitCap',
                params: {
                    marketParams: {
                        loanToken: baseUsdc,
                        collateralToken: address0,
                        oracle: address0,
                        irm: address0,
                        lltv: 0,
                    },
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x95eee6574c1a4a93eba9249bb05a806d958580783d9a8b67c8886026950ac234',
            },
        },
        {
            name: 'Deposit',
            doc: 'https://docs.morpho.org/morpho-vaults/tutorials/become-a-curator/setup/#4---deposit-liquidity',
            contracts: {
                vault: 'https://app.morpho.org/base/vault/0x93BB46b3abd806F57273F2bEabCa6E9665DA63CE/test-usdc-vault',
                function: 'submitCap',
                params: {
                    marketParams: {
                        loanToken: baseUsdc,
                        collateralToken: address0,
                        oracle: address0,
                        irm: address0,
                        lltv: 0,
                    },
                },
            },
            output: {
                tx: 'https://basescan.org/tx/0x95eee6574c1a4a93eba9249bb05a806d958580783d9a8b67c8886026950ac234',
            },
        },
    ]

    // manage exposure
    // todo

    // ui
    return (
        <PageWrapper>
            {steps.map((step, stepIndex) => (
                <SectionWrapper key={`${step.name}-${stepIndex}`} title={`Tx #${stepIndex + 1} - ${step.name}`} ulClassname="gap-3">
                    <pre className="overflow-scroll rounded-lg bg-very-light-hover p-2 text-xs">{JSON.stringify(step, null, 2)}</pre>
                </SectionWrapper>
            ))}

            {/* idle market for base usdc */}
            <SectionWrapper title={`Misc.`} ulClassname="gap-3">
                <p>Market id for base:cbETH/weth</p>
                <pre className="overflow-scroll rounded-lg bg-very-light-hover p-2 text-xs">
                    {JSON.stringify(
                        {
                            loanToken: cbETH_USDC_Market.marketParams.loanToken,
                            collateralToken: cbETH_USDC_Market.marketParams.collateralToken,
                            oracle: cbETH_USDC_Market.marketParams.oracle,
                            irm: cbETH_USDC_Market.marketParams.irm,
                            lltv: 860000000000000000,
                        },
                        null,
                        2,
                    )}
                </pre>
                <p>
                    {computeMarketParamsId({
                        loanToken: cbETH_USDC_Market.marketParams.loanToken,
                        collateralToken: cbETH_USDC_Market.marketParams.collateralToken,
                        oracle: cbETH_USDC_Market.marketParams.oracle,
                        irm: cbETH_USDC_Market.marketParams.irm,
                        lltv: 860000000000000000n,
                    })}
                </p>
                <p>Market id for idle USDC</p>
                <pre className="overflow-scroll rounded-lg bg-very-light-hover p-2 text-xs">
                    {JSON.stringify(
                        {
                            loanToken: baseUsdc,
                            collateralToken: address0,
                            oracle: address0,
                            irm: address0,
                            lltv: 0,
                        },
                        null,
                        2,
                    )}
                </pre>
                <p>
                    {computeMarketParamsId({
                        loanToken: cbETH_USDC_Market.marketParams.loanToken,
                        collateralToken: address0,
                        oracle: address0,
                        irm: address0,
                        lltv: 0n,
                    })}
                </p>
            </SectionWrapper>
            <PreviousOrNextPages previous={AppPagePaths.ARTICLES} />
        </PageWrapper>
    )
}
