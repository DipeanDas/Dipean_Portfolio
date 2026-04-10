import { ArrowRight } from 'lucide-react';

export default function ArrowLink({ children, href = '#', onClick, className = '' }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`arrow-link ${className}`}
    >
      {children}
      <ArrowRight size={14} />
    </a>
  );
}
