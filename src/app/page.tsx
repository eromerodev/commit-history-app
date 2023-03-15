import React from 'react';
import CommitList from '@/components/CommitList';

export async function getCommits() {
  const res = await fetch('http://localhost:3005/api/v1/commits/614058686');
  return await res.json();
}

export default async function CommitHistoryPage() {
  const commits = await getCommits();
  return (
    <>
      <div>
        <CommitList data={commits} />
      </div>
    </>
  );
}
