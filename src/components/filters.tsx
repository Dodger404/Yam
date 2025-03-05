import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const kitchenTypes = ['Все', 'Традиционная кухня', 'Современная кухня', 'Морепродукты'];
const ratings = ['Все', '5 звёзд', '4 звезды', '3 звезды'];
const deliveryTimes = ['Все', 'До 30 минут', '30–40 минут', '40–50 минут'];

export default function Filters() {
  const [selectedKitchenType, setSelectedKitchenType] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openList, setOpenList] = useState<string | null>(null);

  const renderListbox = (placeholder: string, options: string[], selected: string | null, setSelected: (value: string) => void, listName: string) => (
    <div className="relative w-full">
      <Listbox
        value={selected}
        onChange={setSelected}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={`w-full py-2 pl-3 pr-10 text-left bg-white border rounded-md text-sm cursor-pointer ${open ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => setOpenList(open ? null : listName)}
            >
              {selected || placeholder}
              {open ? (
                <ChevronUpIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-500" />
              ) : (
                <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-500" />
              )}
            </Listbox.Button>
            <Listbox.Options className="absolute w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto z-50">
              {options.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) => `cursor-pointer select-none py-2 pl-4 ${active ? 'bg-gray-100' : ''}`}
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      {renderListbox('Тип кухни', kitchenTypes, selectedKitchenType, setSelectedKitchenType, 'kitchenType')}
      {renderListbox('Рейтинг ресторана', ratings, selectedRating, setSelectedRating, 'rating')}
      {renderListbox('Время доставки', deliveryTimes, selectedTime, setSelectedTime, 'time')}
    </div>
  );
}