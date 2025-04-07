import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center text-white">
          <p className="text-base font-semibold ">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl uppercase">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty  sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold  shadow-xs text-black"
            >
              Go back home
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold border-1 px-3.5 py-2.5 rounded-md"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
