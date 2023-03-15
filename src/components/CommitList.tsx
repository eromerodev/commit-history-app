import Image from 'next/image';
import { Children } from 'react';
import { CommitDto } from '@/data/CommitDto';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

type Props = {
  data: CommitDto[];
};

function formatDate(commitDate: string): string {
  const d = new Date(commitDate);
  const h = d.getHours().toString().padStart(2, '0');
  const m = d.getMinutes().toString().padStart(2, '0');
  return `${d.toLocaleDateString()} ${h}:${m}`;
}

const CommitList = ({ data }: Props) => {
  return (
    <div className="overflow-hidden bg-slate-700 shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-slate-300">
        {Children.toArray(
          data.map((commit: CommitDto) => (
            <li className="text-sm text-gray-100">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={commit.avatarUrl}
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 x-space-2">
                    <p className="font-semibold text-lg">
                      {commit.author}
                    </p>

                    <p className="text-sm text-yellow-200 truncate">
                      <code>commit: <span className="">{commit.sha}</span></code>
                    </p>
                    <p className="mt-2 font-medium text-white">
                      <code>{commit.message}</code>
                    </p>
                  </div>
                </div>
                {formatDate(commit.date)}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CommitList;
