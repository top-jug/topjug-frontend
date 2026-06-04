import { MessageCircleMore } from 'lucide-react';

export function AuthSocialLogin() {
  return (
    <div className="space-y-4 [@media(max-height:820px)]:space-y-3 sm:space-y-6">
      <div className="flex items-center gap-3 text-neutral-400 [@media(max-height:820px)]:gap-2 sm:gap-4">
        <div className="h-px flex-1 bg-neutral-200" />
        <span className="text-[12px] font-semibold tracking-[-0.02em] [@media(max-height:820px)]:text-[11px] sm:text-[13px]">SNS 계정으로 로그인</span>
        <div className="h-px flex-1 bg-neutral-200" />
      </div>

      <div className="flex items-center justify-center gap-5 [@media(max-height:820px)]:gap-4 sm:gap-6">
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full bg-[#FEE500] text-black shadow-[0_10px_24px_rgba(254,229,0,0.25)] transition hover:scale-[1.03] [@media(max-height:820px)]:size-10 sm:size-12"
          aria-label="카카오로 로그인"
        >
          <MessageCircleMore className="h-6 w-6 fill-current stroke-current [@media(max-height:820px)]:h-5 [@media(max-height:820px)]:w-5" />
        </button>
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full bg-[#03C75A] text-[18px] font-black text-white shadow-[0_10px_24px_rgba(3,199,90,0.22)] transition hover:scale-[1.03] [@media(max-height:820px)]:size-10 [@media(max-height:820px)]:text-[16px] sm:size-12 sm:text-[20px]"
          aria-label="네이버로 로그인"
        >
          N
        </button>
      </div>
    </div>
  );
}
