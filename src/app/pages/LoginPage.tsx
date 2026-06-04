import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { AuthField } from '../components/auth/AuthField';
import { AuthNavLinks } from '../components/auth/AuthNavLinks';
import { AuthPageShell } from '../components/auth/AuthPageShell';

const DEMO_ACCOUNT = {
  userId: 'topjug',
  password: 'climb1234',
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    await new Promise((resolve) => setTimeout(resolve, 500));

    const isValid =
      userId.trim() === DEMO_ACCOUNT.userId &&
      password.trim() === DEMO_ACCOUNT.password;

    if (!isValid) {
      setIsSubmitting(false);
      setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다. 다시 확인해 주세요.');
      return;
    }

    navigate('/home');
  };

  return (
    <AuthPageShell
      title={
        <>
          반가워요,
          <span className="block text-sky-600">탑저그에 로그인해요</span>
        </>
      }
    >
      <div className="rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-[32px] sm:p-6">
        <form
          className="space-y-4 sm:space-y-5"
          onSubmit={handleSubmit}
        >
          <AuthField
            id="userId"
            label="아이디"
            placeholder="아이디 입력"
            value={userId}
            onChange={(event) => {
              setUserId(event.target.value);
              if (errorMessage) setErrorMessage('');
            }}
            autoComplete="username"
            error={errorMessage ? ' ' : undefined}
          />

          <AuthField
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              if (errorMessage) setErrorMessage('');
            }}
            autoComplete="current-password"
            error={errorMessage}
          />

          <div className="space-y-2.5 pt-1 sm:space-y-3 sm:pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-full cursor-pointer rounded-full bg-sky-600 text-[14px] font-semibold text-white shadow-[0_16px_36px_rgba(14,165,233,0.28)] hover:bg-sky-500 disabled:bg-sky-400 sm:h-12 sm:text-[15px]"
            >
              {isSubmitting ? '로그인 중...' : '로그인'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/signup')}
              className="h-11 w-full cursor-pointer rounded-full border-sky-200 bg-white text-[14px] font-semibold text-sky-700 hover:bg-sky-50 hover:text-sky-700 sm:h-12 sm:text-[15px]"
            >
              회원가입
            </Button>
          </div>
        </form>

        <div className="mt-4 flex justify-end sm:mt-4">
          <AuthNavLinks
            links={[
              { to: '/find-id', label: '아이디찾기' },
              { to: '/find-password', label: '비밀번호찾기' },
            ]}
          />
        </div>
      </div>
    </AuthPageShell>
  );
}
