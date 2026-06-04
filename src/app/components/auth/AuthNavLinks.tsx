import { Link } from 'react-router';

interface AuthNavLinksProps {
  links: Array<{ to: string; label: string }>;
}

export function AuthNavLinks({ links }: AuthNavLinksProps) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-[13px] text-neutral-400">
      {links.map((link, index) => (
        <span key={link.to} className="inline-flex items-center gap-2">
          {index > 0 ? <span className="text-neutral-300">|</span> : null}
          <Link to={link.to} className="font-medium text-neutral-400 transition hover:text-sky-600">
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
