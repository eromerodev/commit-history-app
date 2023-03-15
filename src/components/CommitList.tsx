import { Children } from 'react';
import { CommitDto } from '@/data/CommitDto';

type Props = {
  data: CommitDto[];
};

const CommitList = ({ data }: Props) => {
  return (
    <>
      {Children.toArray(
        data.map((commit: CommitDto) => (
          <p className="text-sm text-gray-500">{commit.sha}</p>
        ))
      )}
    </>
  );
};

export default CommitList;
