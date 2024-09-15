/**
 * 現在の呼び出し元の関数名を取得します
 * @param {number} [depth=1] スタックトレースの深さ
 * @returns {string | undefined} 呼び出し元の関数名(undefinedの場合はスタックトレースが取得できなかった)
 */
function getCallFunctionName(depth: number = 1): string | undefined {
    const pattern = / \(.*/g;
    return new Error().stack?.split('\n')[depth + 1].replace('at ', '').replace(pattern, '').trim();
}

export { getCallFunctionName }