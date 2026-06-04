import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SendHorizonal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { AuthField } from '../components/auth/AuthField';
import { AuthNavLinks } from '../components/auth/AuthNavLinks';
import { AuthPageShell } from '../components/auth/AuthPageShell';

const DUPLICATED_USER_IDS = ['topjug', 'admin', 'climber', 'testuser'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [userIdStatus, setUserIdStatus] = useState('');
  const [emailStatus, setEmailStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const validateEmail = (value: string) => EMAIL_PATTERN.test(value.trim());
  const validatePasswordMatch = (passwordValue: string, confirmValue: string) => {
    if (!confirmValue.trim()) {
      setPasswordConfirmError('');
      return;
    }

    if (passwordValue !== confirmValue) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setPasswordConfirmError('');
  };

  const handleCheckDuplicate = () => {
    const normalizedUserId = userId.trim().toLowerCase();

    if (!normalizedUserId) {
      setUserIdError('아이디를 먼저 입력해 주세요.');
      setUserIdStatus('');
      return;
    }

    if (normalizedUserId.length < 4) {
      setUserIdError('아이디는 4자 이상으로 입력해 주세요.');
      setUserIdStatus('');
      return;
    }

    if (DUPLICATED_USER_IDS.includes(normalizedUserId)) {
      setUserIdError('이미 사용 중인 아이디입니다.');
      setUserIdStatus('');
      return;
    }

    setUserIdError('');
    setUserIdStatus('사용 가능한 아이디입니다.');
  };

  const handleSendVerificationCode = () => {
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setEmailError('이메일을 먼저 입력해 주세요.');
      setEmailStatus('');
      return;
    }

    if (!validateEmail(normalizedEmail)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      setEmailStatus('');
      return;
    }

    setEmailError('');
    setEmailStatus('인증번호를 전송했어요. 메일함을 확인해 주세요.');
  };

  return (
    <AuthPageShell
      title={
        <>
          탑저그와 함께
          <span className="block text-sky-600">새 계정을 만들어보세요</span>
        </>
      }
      mainClassName="py-5 sm:py-5"
      headerClassName="translate-y-1 sm:translate-y-2"
      contentClassName="items-start pt-2 sm:pt-3"
      footerClassName="pt-1 sm:pt-2"
    >
      <div className="rounded-[28px] border border-white/80 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-[32px] sm:p-5">
        <form
          className="space-y-3 sm:space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            navigate('/login');
          }}
        >
          <AuthField
            id="signup-userId"
            label="아이디"
            placeholder="아이디 입력"
            value={userId}
            onChange={(event) => {
              setUserId(event.target.value);
              if (userIdError) setUserIdError('');
              if (userIdStatus) setUserIdStatus('');
            }}
            autoComplete="username"
            action={
              <Button
                type="button"
                variant="outline"
                onClick={handleCheckDuplicate}
                className="h-9 cursor-pointer rounded-full border-sky-200 bg-white px-3 text-[12px] font-semibold text-sky-700 hover:bg-sky-50 sm:h-10 sm:px-4 sm:text-[13px]"
              >
                중복검사
              </Button>
            }
            error={userIdError}
            success={userIdError ? undefined : userIdStatus || undefined}
          />

          <AuthField
            id="signup-email"
            label="이메일"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              const nextValue = event.target.value;
              setEmail(nextValue);

              if (!nextValue.trim()) {
                setEmailError('');
                setEmailStatus('');
                return;
              }

              if (!validateEmail(nextValue)) {
                setEmailError('올바른 이메일 형식이 아닙니다.');
                setEmailStatus('');
                return;
              }

              setEmailError('');
            }}
            autoComplete="email"
            action={
              <Button
                type="button"
                variant="outline"
                onClick={handleSendVerificationCode}
                className="h-9 cursor-pointer rounded-full border-sky-200 bg-white px-3 text-[12px] font-semibold text-sky-700 hover:bg-sky-50 sm:h-10 sm:px-4 sm:text-[13px]"
              >
                <SendHorizonal className="h-4 w-4" />
                인증번호 전송
              </Button>
            }
            error={emailError}
            success={emailError ? undefined : emailStatus || undefined}
          />

          <AuthField
            id="signup-verification-code"
            label="인증번호"
            placeholder="인증번호 6자리를 입력해 주세요"
            value={verificationCode}
            onChange={(event) => setVerificationCode(event.target.value)}
            autoComplete="one-time-code"
          />

          <AuthField
            id="signup-password"
            label="비밀번호"
            type="password"
            placeholder="8~16자 영문, 숫자 조합"
            value={password}
            onChange={(event) => {
              const nextPassword = event.target.value;
              setPassword(nextPassword);
              validatePasswordMatch(nextPassword, passwordConfirm);
            }}
            autoComplete="new-password"
            hint="비밀번호는 8~16자 영문과 숫자를 함께 사용하면 좋아요."
          />

          <AuthField
            id="signup-password-confirm"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요"
            value={passwordConfirm}
            onChange={(event) => {
              const nextConfirm = event.target.value;
              setPasswordConfirm(nextConfirm);
              validatePasswordMatch(password, nextConfirm);
            }}
            autoComplete="new-password"
            error={passwordConfirmError}
          />

          <div className="space-y-2 pt-0.5 sm:space-y-2.5 sm:pt-1">
            <Button type="submit" className="h-[42px] w-full cursor-pointer rounded-full bg-sky-600 text-[14px] font-semibold text-white shadow-[0_16px_36px_rgba(14,165,233,0.28)] hover:bg-sky-500 sm:h-11 sm:text-[15px]">
              회원가입
            </Button>
          </div>
        </form>

        <div className="mt-3 flex justify-end sm:mt-4">
          <AuthNavLinks
            links={[
              { to: '/login', label: '로그인' },
              { to: '/find-id', label: '아이디찾기' },
              { to: '/find-password', label: '비밀번호찾기' },
            ]}
          />
        </div>
      </div>
    </AuthPageShell>
  );
}
