declare global {
  namespace NodeJS {
    interface ProcessEnv {
      Ether_Token: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}
export {}
