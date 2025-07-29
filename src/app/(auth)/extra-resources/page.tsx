'use client';


import React, { useEffect, useState } from 'react';
import ExtraBox from '@/app/components/ExtraBox/ExtraBox';
import ExtraDropdown from '@/app/components/ProgramDropDown/ProgramDropDown';
import { FaLink, FaFile } from 'react-icons/fa';

type ExtraData = {
  title: string;
  description: string;
  buttons: { label: string; icon: React.ReactNode }[];
};

const ExtraPage = () => {
  const [resources, setResources] = useState<ExtraData[]>([]);

  useEffect(() => {
    
    
    
    const fetchResources = async () => {
      const data: ExtraData[] = [
        {
          title: 'React.js',
          description:
            'Build dynamic user interfaces using reusable components, state management, and modern frontend architecture with React.',
          buttons: [
            { label: 'Link', icon: <FaLink /> },
            { label: 'File', icon: <FaFile /> },
          ],
        },
        {
          title: 'Next.js',
          description:
            'Build full-stack web applications with server-side rendering, routing, and API integration using Next.js.',
          buttons: [
            { label: 'Link', icon: <FaLink /> },
            { label: 'File', icon: <FaFile /> },
          ],
        },
      ];
      setResources(data);
    };

    fetchResources();
  }, []);

  return (
    <div className='ml-[282px] mt-[38px] flex flex-col bg-[#F4F4F4] p-6 min-h-screen'>
      <ExtraDropdown />
      <h1 className='text-[20px] tracking-[1px] font-[500] py-8'>Extra Resources</h1>

      {resources.map((item, idx) => (
        <div key={idx} className='mb-6'>
          <ExtraBox
            title={item.title}
            description={item.description}
            buttons={item.buttons}
          />
        </div>
      ))}
    </div>
  );
};

export default ExtraPage;
