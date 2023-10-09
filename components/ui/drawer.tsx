'use client';
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const touchStartXRef = useRef<number | null>(null);

    useEffect(() => {
        const handleTouchStart = (event: TouchEvent) => {
          touchStartXRef.current = event.touches[0].clientX;
        };
    
        const handleTouchMove = (event: TouchEvent) => {
          if (touchStartXRef.current !== null) {
            const touchX = event.touches[0].clientX;
            const deltaX = touchX - touchStartXRef.current;
    
            // You can adjust the threshold value as needed
            const swipeThreshold = 50;
    
            if (deltaX > swipeThreshold) {
              onClose();
              touchStartXRef.current = null;
            }
          }
        };
    
        const handleTouchEnd = () => {
          touchStartXRef.current = null;
        };
    
        const handleClickOutside = (event: MouseEvent) => {
          if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            onClose();
          }
        };
    
        if (isOpen) {
          // Add touch event listeners when the drawer is open
          drawerRef.current?.addEventListener('touchstart', handleTouchStart);
          drawerRef.current?.addEventListener('touchmove', handleTouchMove);
          drawerRef.current?.addEventListener('touchend', handleTouchEnd);
    
          // Add click event listener when the drawer is open
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          // Remove touch event listeners when the drawer is closed
          drawerRef.current?.removeEventListener('touchstart', handleTouchStart);
          drawerRef.current?.removeEventListener('touchmove', handleTouchMove);
          drawerRef.current?.removeEventListener('touchend', handleTouchEnd);
    
          // Remove click event listener when the drawer is closed
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          // Cleanup the event listeners when the component unmounts
          drawerRef.current?.removeEventListener('touchstart', handleTouchStart);
          drawerRef.current?.removeEventListener('touchmove', handleTouchMove);
          drawerRef.current?.removeEventListener('touchend', handleTouchEnd);
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
