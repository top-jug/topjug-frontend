import type { ReactNode } from 'react';

interface AuthPageShellProps {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  mainClassName?: string;
  footerClassName?: string;
}

export function AuthPageShell({
  title,
  subtitle,
  children,
  headerClassName,
  contentClassName,
  mainClassName,
  footerClassName,
}: AuthPageShellProps) {
  return (
    <div className="min-h-[100dvh] cursor-default overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] text-neutral-900">
      <main className={`mx-auto flex min-h-[100dvh] w-full max-w-[430px] flex-col px-5 py-9 sm:px-6 sm:py-12 ${mainClassName ?? ''}`}>
        <header className={`shrink-0 translate-y-5 text-center sm:translate-y-6 ${headerClassName ?? ''}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-sky-600 shadow-[0_10px_30px_rgba(14,165,233,0.08)] backdrop-blur sm:px-4 sm:py-2 sm:text-[12px]">
            TOPJUG
          </div>
          <h1 className="mt-5 text-[28px] font-black leading-[1.12] tracking-[-0.06em] text-neutral-900 sm:mt-6 sm:text-[34px]">
            {title}
          </h1>
          {subtitle ? <p className="mt-3 text-[13px] leading-5 text-neutral-500 sm:mt-4 sm:text-[14px] sm:leading-6">{subtitle}</p> : null}
        </header>

        <section className={`flex flex-1 items-center pt-8 sm:pt-10 ${contentClassName ?? ''}`}>
          <div className="w-full">{children}</div>
        </section>

        <footer className={`shrink-0 pt-4 text-center sm:pt-5 ${footerClassName ?? ''}`}>
          <div className="inline-flex items-end text-[24px] font-black tracking-[-0.07em] text-neutral-950 sm:text-[28px]">
            <span>탑저그</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
