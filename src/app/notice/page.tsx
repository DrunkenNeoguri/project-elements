import { Fragment } from 'react';
import OptionService from '../../services/option-services';
import NoticeItem from './_components/notice-item';
import { sendErrorToSentry } from '../../utils/util-sentry';

export default async function Notice() {
  try {
    const noticeTitleList = await OptionService.getNoticeItemList();

    return (
      <>
        {noticeTitleList.map(({ id, title, clipType, createdAt }) => {
          return (
            <Fragment key={id}>
              <NoticeItem
                id={id}
                title={title}
                clipType={clipType as '이벤트' | '공지' | '매거진'}
                createdAt={createdAt}
              />
              <div className="h-[1px] w-full bg-grey" />
            </Fragment>
          );
        })}
      </>
    );
  } catch (error) {
    sendErrorToSentry({
      type: 'client',
      context: 'Notice.getNoticeItemList',
      error: error as Error,
    });
    return <></>;
  }
}
