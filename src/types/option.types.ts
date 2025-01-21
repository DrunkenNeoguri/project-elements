export type Banner = { href: string; imageUrl: string; order: number };

export type Notice = {
  noticeTitle: NoticeTitle;
  noticeBody: NoticeBody;
};

export type NoticeTitle = {
  id: string;
  title: string;
  clipType: NoticeClipType;
  createdAt: string;
};

export type NoticeBody = {
  article: string;
  href: string;
};

export type NoticeClipType = "공지" | "이벤트" | "매거진";
