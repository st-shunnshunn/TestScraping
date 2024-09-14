import logger from "./Logger.js";

function methodLogged<This, Args extends any[], Return>(
    originalMethod: Function,
    context: ClassMethodDecoratorContext
) {
    async function replacementMethod(this: any, ...args: any[]) {
        const error = new Error();
        const pattern = / \(.*/g;
        const result = originalMethod.call(this, ...args);
        console.log(`${error.stack?.split('\n')[2].replace('at ', '').replace(pattern, '').trim()} : ${result}`);
        return result;
    }

    return replacementMethod;
};

export { methodLogged };