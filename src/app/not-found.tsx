import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh_-_70px)] flex-col items-center justify-center gap-4 text-center text-[24px] font-extralight">
      <h1>404 Error</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link className="" href="/">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
