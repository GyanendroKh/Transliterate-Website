import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex py-4 px-16 shadow shadow-slate-800 bg-slate-900 mb-6">
        <h1 className="text-2xl font-bold">Transliteration</h1>
      </div>

      <div className="flex flex-col w-[95%] md:w-[85%] xl:w-[850px] bg-slate-800 mx-auto rounded-lg">
        <div className="relative flex border-b border-black select-none">
          <div className="flex-1 text-center p-4">English</div>

          <div
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
          </div>

          <div className="flex-1 text-center p-4">Meitei Mayek</div>
        </div>

        <div className="flex">
          <textarea
            className="flex-1 py-8 px-6 border-r break-words break-all resize-none border-black bg-transparent focus:outline-0"
            placeholder="Type Here..."
            rows={5}
          />

          <div className="flex-1 py-8 px-6">Transliteration</div>
        </div>
      </div>
    </div>
  );
};
