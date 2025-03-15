import React from 'react';

interface TabsProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

const tabs = [
  { id: 'all', label: 'Все' },
  { id: 'favorites', label: 'Избранные' },
  { id: 'recent', label: 'Заказывали недавно' },
];

export default function Tabs({ activeTab, onChangeTab }: TabsProps) {
  return (
    <div className="grid w-full grid-cols-[1fr_1fr_2fr] gap-4 border-b border-gray-200 md:grid-cols-3 lg:hidden">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onChangeTab(id)}
          className={`relative text-sm ${activeTab === id ? 'font-bold text-blue-500' : 'text-gray-500'}`}
        >
          {label}
          {activeTab === id && (
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500" />
          )}
        </button>
      ))}
    </div>
  );
}
