export type TBests = {
  ilchonpyung?: string;
  nick?: string;
};

export interface IBests {
  data?: TBests;
  id?: number;
  myHomeId: string | undefined;
}

export interface IBest {
  createdAt: number;
  ilchonpyung: string;
  ilchonpyungId: number;
  myhomeId: number;
  nick: string;
  updatedAt: number;
  userId: number;
}
