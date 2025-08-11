export type Banner = { href: string; imageUrl: string; order: number; bannerId: string };

export type Notice = {
  noticeId: string;
  title: string;
  clipType: NoticeClipType;
  createdAt: string;
  href?: string;
};

export type NoticeClipType = '공지' | '이벤트' | '매거진';
