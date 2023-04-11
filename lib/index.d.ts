declare function ls(path: string): Promise<string[]>;
declare function cat(path: string): Promise<string>;
export { ls, cat };
