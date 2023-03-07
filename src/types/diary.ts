export interface IDiaryId {
  homeId: string | number;
  diaryId?: number;
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

/**댓글 */

export type TComment = {
  comment: string;
  commentId: number;
  createdAt: string;
  diaryId: number;
  myhomeId: number;
  name: string;
  updatedAt: string;
  userId: number;
};

export interface IComment {
  commentData: TComment;
}
