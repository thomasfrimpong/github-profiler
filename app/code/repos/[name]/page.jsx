import React from 'react';
import Repo from '@/app/components/Repo';
import Link from 'next/link';
import RepoDir from '@/app/components/RepoDirs';
import { Suspense } from 'react';

const RepoPage = ({params:{name}}) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>Back To Repositories</Link>
      <Suspense fallback={<div>Loading Repo....</div>} >
      <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories....</div>} >
      <RepoDir name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
