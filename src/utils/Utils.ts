function getCallFunctionName(depth: number = 1): string | undefined {
    const pattern = / \(.*/g;
    return new Error().stack?.split('\n')[depth + 1].replace('at ', '').replace(pattern, '').trim();
}

export { getCallFunctionName }