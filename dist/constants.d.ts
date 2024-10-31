export declare const FACTORY_ADDRESS = "0x7748893602a1421B9Dc4d240e5185FB1634bcFFE";
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0xd2517377ef73fc1e39ce1938b04f650a70b13e11cf9f93c309df970abd1b868f";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};
