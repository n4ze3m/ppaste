import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b p-6 flex items-center flex-wrap justify-between">
            <div className="flex items-center flex-no-shrink">
                <Link
                    href="/"
                >
                    <a className="text-2xl font-bold">
                        Ppaste
                    </a>
                </Link>
            </div>
            <div className="md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0 sm:mt-0 mt-3">
                <Link
                    href="https://github.com/nazeemnato/ppaste"
                >
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </Link>
            </div>
        </nav>
    )
}