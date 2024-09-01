interface INotify {
    notify(tile: string, message: string): Promise<boolean>;
}

export { INotify };