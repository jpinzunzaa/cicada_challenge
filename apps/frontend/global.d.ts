export {};

declare global {
  interface Window {
    api: {
      fetchData: (url: string) => Promise<any>;
    };
  }
}