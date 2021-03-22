/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />
import '@emotion/react'


declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "react-copy-to-clipboard" {
	const CopyToClipboard: any = {}
	export { CopyToClipboard }
	export default CopyToClipboard
}

declare module "viewerjs" {
	export default any
}

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

declare module '@emotion/react' {
  export interface Theme {
    color: String
  }
}
