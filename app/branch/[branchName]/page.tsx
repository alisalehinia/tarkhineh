'use client';
import { useParams } from 'next/navigation'
import React from 'react'

const BranchPage = () => {
    const params = useParams();
    console.log(params);
    
  return (
    <div>BranchPage</div>
  )
}

export default BranchPage