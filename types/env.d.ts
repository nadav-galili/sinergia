declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_AMPLITUDE_API_KEY: string;
    }
  }
}

export {};
