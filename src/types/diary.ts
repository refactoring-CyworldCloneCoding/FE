export interface IDiaryId {
  homeId: string;
  diaryId: string;
}

export type TDiaryData = {
  Comments: [];
  content: string;
  createdAt: string;
  diaryId: number;
  diaryNo: number;
  dirImg: string;
  myhomeId: number;
  updatedAt: string;
  userId: number;
};

export interface IDiaryData {
  diaryData: TDiaryData;
}
