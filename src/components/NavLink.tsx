import Link from 'next/link'

type NavLinkProps = {
  href: string
  // not certain what the intention of children is I'm assuming it's just a recursive type but I'm leaving it as any for safety since it's not currently being used
  children: any
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
