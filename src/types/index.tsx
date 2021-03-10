interface IBase {
  id: number;
  name: string;
}

export type Campaign = IBase & {
  description?: string;
  type: 'character' | 'master';
};

export type User = IBase & {
  password: string;
  type: 'character' | 'master';
};