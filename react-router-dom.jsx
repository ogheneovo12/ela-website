import NextLink from "next/link";
export const Link = ({ to, children, onClick, className,...rest }) => (
  <NextLink href={to} {...rest}>
    <a onClick={onClick} className={className}>{children}</a>
  </NextLink>
);
