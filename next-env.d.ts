/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />


declare global {
	interface Window {
    version: string
    next: any
	}
}

interface Window {
  version: string
  next: any
}

declare type Maybe<T> = T | null;

declare module '*.png' {
  const src: string;
  export default src;
}
