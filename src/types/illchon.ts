export type TBests = {
  ilchonpyung?: string;
  nick?: string;
};

export type TBest = {
  createdAt: number;
  ilchonpyung: string;
  ilchonpyungId: number;
  myhomeId: number;
  name: number;
  nick: string;
  updatedAt: number;
  userId: number;
};

export interface IBest {
  best: TBest;
}
