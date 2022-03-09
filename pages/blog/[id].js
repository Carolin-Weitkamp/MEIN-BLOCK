import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Link href={"/"}>
      <a>
        {" "}
        lets go back
        <h1> Guten Tag </h1>
      </a>
    </Link>
  );
}
