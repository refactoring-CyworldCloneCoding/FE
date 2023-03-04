export interface IBook {
  book: TBook;
}

export type TBook = {
  bookImage: string;
  createdAt: number;
  guestBook: string;
  guestBookNum: number;
  guestbookId: number;
  myhomeId: number;
  name: string;
  updatedAt: number;
  userId: number;
};
