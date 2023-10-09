import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
    const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      // Add click event listener when the drawer is open
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove the event listener when the drawer is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={drawerRef}
      className={`fixed inset-y-0 right-0 w-64 z-50 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-start p-4">
        <button className="focus:outline-none" onClick={onClose}>
          <ArrowRight className='text-slate-800 w-6 h-6' />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Drawer;
