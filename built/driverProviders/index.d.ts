export * from './attachSession';
export * from './browserStack';
export * from './direct';
export * from './driverProvider';
export * from './hosted';
export * from './local';
export * from './mock';
export * from './sauce';
export * from './testObject';
export * from './kobiton';
export * from './lambdaTest';
import { DriverProvider } from './driverProvider';
import { Config } from '../config';
export declare let buildDriverProvider: (config: Config) => DriverProvider;
export declare let logWarnings: (providerType: string, config: Config) => void;