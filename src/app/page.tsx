import React from 'react';
import CommitList from '@/components/CommitList';

export async function getCommits() {
  const url = process.env.COMMITS_API_URL || '';
  const res = await fetch(url, { next: { revalidate: 60 } });
  return await res.json();
}

export default async function CommitHistoryPage() {
  const commits = await getCommits();
  return (
    <>
      <div className="w-full p-2 sm:mt-8 sm:p-0">
        <CommitList data={commits} />
      </div>
    </>
  );
}
