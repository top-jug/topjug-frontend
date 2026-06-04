import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SendHorizonal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { AuthField } from '../components/auth/AuthField';
import { AuthNavLinks } from '../components/auth/AuthNavLinks';
import { AuthPageShell } from '../components/auth/AuthPageShell';

export default function FindIdPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  return (
    <AuthPageShell
      title={
        <>
          아이디를
          <span className="block text-sky-600">빠르게 찾아드릴게요</span>
        </>
      }
    >
      <div className="rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-[32px] sm:p-6">
        <form
          className="space-y-4 sm:space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            navigate('/login');
          }}
        >
          <AuthField
            id="find-id-email"
            label="이메일"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            action={
              <Button type="button" variant="outline" className="h-9 cursor-pointer rounded-full border-sky-200 bg-white px-3 text-[12px] font-semibold text-sky-700 hover:bg-sky-50 sm:h-10 sm:px-4 sm:text-[13px]">
                <SendHorizonal className="h-4 w-4" />
                인증번호 전송
              </Button>
            }
          />

          <AuthField
            id="find-id-code"
            label="인증번호"
            placeholder="인증번호 6자리를 입력해 주세요"
            value={verificationCode}
            onChange={(event) => setVerificationCode(event.target.value)}
            autoComplete="one-time-code"
          />

          <div className="pt-1 sm:pt-2">
            <Button type="submit" className="h-11 w-full cursor-pointer rounded-full bg-sky-600 text-[14px] font-semibold text-white shadow-[0_16px_36px_rgba(14,165,233,0.28)] hover:bg-sky-500 sm:h-12 sm:text-[15px]">
              아이디 찾기
            </Button>
          </div>
        </form>

        <div className="mt-4 flex justify-end sm:mt-4">
          <AuthNavLinks
            links={[
              { to: '/login', label: '로그인' },
              { to: '/signup', label: '회원가입' },
              { to: '/find-password', label: '비밀번호찾기' },
            ]}
          />
        </div>
      </div>
    </AuthPageShell>
  );
}
