export type Campaign = {
  id: number,
  name: string;
  description?: string;
  type: 'character' | 'master';
};
