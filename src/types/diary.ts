export interface IDiaryId {
  homeId: string;
  diaryId: string;
}

export type TDiaryData = {
  content: string;
  dirImg: FileList;
};

export interface IDiaryData {
  homeId: string;
  data: TDiaryData;
}
