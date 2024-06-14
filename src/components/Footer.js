'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
  const pathName = usePathname();

  if (pathName.includes('dashboard')) 
    return (
      <div className="bg-blue-400">
        Dashboard footer
      </div>
    );

  return (
    <footer>
      This is footer
    </footer>
  );
}
