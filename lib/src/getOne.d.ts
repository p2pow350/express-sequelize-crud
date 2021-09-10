import { RequestHandler } from 'express';
export declare type GetOne<R> = (identifier: string) => Promise<R | null>;
export declare const getOne: <R>(doGetOne: GetOne<R>) => RequestHandler;
