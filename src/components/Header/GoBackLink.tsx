import { Img, Link } from "@chakra-ui/react";

interface GoBackLinkProps {
  currentPath: string;
}

export function GoBackLink({ currentPath }: GoBackLinkProps) {
  if (currentPath !== '/') {
    return(
      <Link href="/">
        <Img src="/goBack.svg"  boxSize="2rem"/>
      </Link>
    );
  }
  return('');
}
