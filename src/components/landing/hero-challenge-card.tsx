import type { Difficulty } from '@prisma/client';
import { clsx } from 'clsx';
import { motion, type SVGMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

function getRandomWidth() {
  const min = 100;
  const range = 240 - min;
  let rand = Math.random();
  rand = Math.floor(Math.random() * range);
  rand = rand + min;

  return rand;
}

export type FakeChallengeCardProps = {
  title: string;
  className?: string;
  difficulty: Difficulty;
  prompt: ReactNode;
};

const COLORS_BY_DIFFICULTY = {
  BEGINNER: 'dark:bg-pink-300 bg-pink-600',
  EASY: 'dark:bg-green-300 bg-green-600',
  MEDIUM: 'dark:bg-yellow-300 bg-yellow-600',
  HARD: 'dark:bg-red-300 bg-red-600',
  EXTREME: 'dark:bg-orange-300 bg-orange-600',
};

const codeLineProps = {
  width: 0,
  rx: '4.5',
  height: 10,
  initial: { width: 0 },
  transition: { duration: 0.5, delay: 0.15 },
} as SVGMotionProps<SVGRectElement>;

export const HeroChallengeCard = ({
  prompt,
  title,
  className,
  difficulty,
}: FakeChallengeCardProps) => {
  return (
    <div
      className={clsx(className, {
        'group/card flex w-[320px] flex-col gap-3 rounded-2xl border border-neutral-300 bg-zinc-100 p-7 drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] duration-300 hover:-skew-x-3 hover:scale-105 hover:shadow-[2rem_2rem_2rem_-1rem_#0004,inset_1rem_1rem_4rem_-1rem_#fff1] dark:border-zinc-800 dark:bg-zinc-900 dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.35)] dark:hover:border-zinc-600':
          true,
      })}
    >
      <p className="translate-x-1 text-lg font-medium">{title}</p>
      <div className="flex gap-3">
        <div
          className={`inline-flex w-fit translate-x-1 items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold text-primary-foreground duration-300 group-hover/card:-translate-x-0 group-hover/card:-translate-y-1 group-hover/card:shadow-[0.5rem_0.5rem_0.25rem_-0.25rem_#0004] ${
            COLORS_BY_DIFFICULTY[difficulty || 'HARD']
          }`}
        >
          {difficulty || 'HARD'}
        </div>
        <div className="flex w-fit items-center justify-center rounded-full bg-transparent bg-zinc-300 px-2.5 py-1 pl-1.5 pr-2 text-xs font-bold text-neutral-700 duration-300 group-hover/card:-translate-x-1 group-hover/card:-translate-y-1 group-hover/card:shadow-[0.5rem_0.5rem_0.25rem_-0.25rem_#0004] dark:bg-zinc-700 dark:text-white">
          @you
        </div>
      </div>
      <div className="translate-x-1 text-xs">{prompt}</div>
      <div className="mt-4 h-56 flex-grow rounded-xl bg-zinc-300/70 p-4 duration-300 group-hover/card:-translate-x-1 group-hover/card:-translate-y-3 group-hover/card:shadow-[1rem_1rem_2.5rem_-1rem_#0008] dark:bg-zinc-800/70">
        <svg
          width="256"
          height="193"
          viewBox="0 0 256 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="0"
            fill="#2B2B32"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="19"
            fill="#544048"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="38"
            fill="#544048"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="57"
            fill="#404F54"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="90"
            fill="#2B2B32"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="109"
            fill="#2B2B32"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            transition={{ delay: 0.3, duration: 0.5 }}
            y="128"
            fill="#544048"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="147"
            fill="#544048"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="166"
            fill="#404F54"
          />
          <motion.rect
            {...codeLineProps}
            animate={{ width: getRandomWidth() }}
            y="184"
            fill="#404F54"
          />
        </svg>
      </div>
    </div>
  );
};