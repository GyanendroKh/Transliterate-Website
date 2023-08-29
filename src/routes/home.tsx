import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { apiClient } from '../apiClient';
import { useDebounce } from '../hooks/useDebounce';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '../components/ui/dropdown-menu';

const TARGETS: Array<{ label: string; key: string }> = [
  { label: 'English', key: 'en' },
  { label: 'Meitei Mayek', key: 'mm' },
  { label: 'Bengali', key: 'bn' }
];

export const HomePage: FC = () => {
  const [selectedTo, setSelectedTo] = useState('en');
  const [source, setSource] = useState('');
  const debouncedSource = useDebounce(source, 650);
  const trans = useQuery({
    queryKey: ['trans', selectedTo, debouncedSource],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.set('to', selectedTo);
      params.set('source', source);

      if (source === '') return { output: '', time: 0 };

      const res = await apiClient.get<{ output: string; time: number }>(
        `/api/trans?${params.toString()}`
      );

      return res.data;
    },
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60,
    keepPreviousData: true
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex py-4 px-16 shadow shadow-slate-800 bg-slate-900 mb-6">
        <h1 className="text-2xl font-bold">Transliteration</h1>
      </div>

      <div className="flex flex-col w-[95%] md:w-[85%] xl:w-[850px] bg-slate-800 mx-auto rounded-lg">
        <div className="relative flex border-b border-black select-none">
          <div className="flex-1 text-center p-4">Source</div>

          {/* <div
            className="absolute px-4 py-2 hover:bg-slate-900 rounded-md cursor-pointer"
            style={{
              left: 'calc(50% - ((24px + 2rem) / 2))',
              top: ' calc(50% - ((24px + 1rem) / 2))'
            }}
          >
            <svg
              className="w-full h-full fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" />
            </svg>
          </div> */}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex-1 text-center p-4 focus:outline-0 flex items-center justify-center gap-2">
              <p>{TARGETS.find((t) => t.key === selectedTo)?.label ?? 'N/A'}</p>

              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={selectedTo}
                onValueChange={setSelectedTo}
              >
                {TARGETS.map((i) => {
                  return (
                    <DropdownMenuRadioItem key={i.key} value={i.key}>
                      {i.label}
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex">
          <textarea
            className="flex-1 py-8 px-6 border-r break-words resize-none border-black bg-transparent focus:outline-0"
            placeholder="Type Here..."
            rows={5}
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
            }}
          />

          <div className="flex-1 py-8 px-6">
            {trans.data?.output || 'Transliteration'}
          </div>
        </div>
      </div>
    </div>
  );
};
