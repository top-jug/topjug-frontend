import type { ReactNode } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface AuthFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
  action?: ReactNode;
  hint?: string;
  success?: string;
  error?: string;
}

export function AuthField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  autoComplete,
  action,
  hint,
  success,
  error,
}: AuthFieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-[13px] font-bold text-neutral-900 sm:text-[14px]">
        {label}
      </Label>
      <div className="flex items-end gap-3">
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          className="h-10 cursor-text rounded-none border-0 border-b border-neutral-200 bg-transparent px-0 text-[14px] shadow-none placeholder:text-neutral-300 focus-visible:border-sky-500 focus-visible:ring-0 aria-invalid:border-rose-400 aria-invalid:ring-0 sm:h-11 sm:text-[15px]"
        />
        {action}
      </div>
      {error ? <p className="text-[11px] leading-4 text-rose-500 sm:text-[12px] sm:leading-5">{error}</p> : null}
      {!error && success ? <p className="text-[11px] leading-4 text-sky-600 sm:text-[12px] sm:leading-5">{success}</p> : null}
      {hint ? <p className="text-[11px] leading-4 text-neutral-400 sm:text-[12px] sm:leading-5">{hint}</p> : null}
    </div>
  );
}
