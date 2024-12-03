'use client';

import React from 'react';

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div className="">
      <p>{`Something went wrong. ${error.message}`}</p>
    </div>
  );
}
