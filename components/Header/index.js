import { Fragment } from "react";
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BellIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  XMarkIcon,
  ChevronDownIcon,
  CircleStackIcon,
  ForwardIcon,
  ShareIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
  UserIcon,
  UserGroupIcon,
  BugAntIcon,
  VideoCameraIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import HeaderSearchbar from "./Searchbar";

const navigation = [
  { name: "Pricing", href: "https://bangdb.com/pricing", current: false },
  { name: "Docs", href: "/", current: true },
  { name: "Blog", href: "https://bangdb.com/blog", current: false },
  { name: "About", href: "https://bangdb.com/about", current: false },
  { name: "Contact", href: "https://bangdb.com/contact-us", current: false },
  { name: "Resources", href: "https://bangdb.com/resources", current: false },
];

const engagement = [
  {
    name: "BangDB - Database",
    description: "As a dedicated Database.",
    href: "https://bangdb.com/product",
    icon: CircleStackIcon,
  },
  {
    name: "Stream Processing",
    description: "Real time analysis of data.",
    href: "https://bangdb.com/products/bangdb/stream-processing",
    icon: ForwardIcon,
  },
  {
    name: "Graph Processing",
    description: "Supports graph natively",
    href: "https://bangdb.com/products/bangdb/graph-processing",
    icon: ShareIcon,
  },
  {
    name: "Artificial Intelligence",
    description: "Integrated AI for AutoML",
    href: "https://bangdb.com/products/bangdb/artificial-intelligence",
    icon: LightBulbIcon,
  },
];

const tools = [
  {
    name: "Ampere",
    description: "CLI description",
    href: "https://bangdb.com/ampere",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Agent",
    description: "agent description",
    href: "https://bangdb.com/products/bangdb/agent",
    icon: UserIcon,
  },
  {
    name: "CLI",
    description: "CLI description",
    href: "https://bangdb.com/products/bangdb/cli",
    icon: PresentationChartBarIcon,
  },
];

const callsToAction = [
  {
    name: "Watch Demo",
    href: "https://www.youtube.com/watch?v=KlJrUEQLe20",
    icon: PlayIcon,
  },
];

const resources = [
  {
    name: "App Mon",
    href: "https://bangdb.com/apps/app-mon",
    icon: UserGroupIcon,
  },
  {
    name: "Bug Tracker",
    href: "https://bangdb.com/apps/bug-tracker",
    icon: BugAntIcon,
  },
  {
    name: "Forum",
    href: "https://bangdb.com/apps/forum",
    icon: VideoCameraIcon,
  },
  {
    name: "Leads Management",
    href: "https://bangdb.com/apps/leads-management",
    icon: UserGroupIcon,
  },
  {
    name: "Leads Selling",
    href: "https://bangdb.com/apps/leads-selling",
    icon: UserGroupIcon,
  },
  {
    name: "Clickstream",
    href: "https://bangdb.com/apps/click-stream",
    icon: BookOpenIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <header>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="https://bangdb.com">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="/bangdb-fav-icon.png"
                        alt="BangDB"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="/bangdb-fav-icon.png"
                        alt="BangDB"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-black hover:text-gray-900",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                "text-black hover:text-gray-900 group inline-flex items-center rounded-md bg-white text-base font-medium"
                              )}
                            >
                              <span className="px-3 py-2 rounded-md text-sm font-medium">
                                Products
                              </span>
                              <ChevronDownIcon
                                className={classNames("ml-2 h-5 w-5")}
                                aria-hidden="true"
                              />
                            </Popover.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-hscreen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                <div className="overflow-hidden rounded-lg shadow-lg bg-white px-5 py-6 sm:p-8">
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                    {/* Column 1 - Engagement */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Engagement
                                      </h3>
                                      {engagement.map((item) => (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        >
                                          <item.icon
                                            className="h-6 w-6 flex-shrink-0 text-dbblue"
                                            aria-hidden="true"
                                          />
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                              {item.name}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                              {item.description}
                                            </p>
                                          </div>
                                        </a>
                                      ))}
                                    </div>

                                    {/* Column 2 - Tools */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Tools
                                      </h3>
                                      {tools.map((item) => (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        >
                                          <item.icon
                                            className="h-6 w-6 flex-shrink-0 text-dbblue"
                                            aria-hidden="true"
                                          />
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                              {item.name}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                              {item.description}
                                            </p>
                                          </div>
                                        </a>
                                      ))}
                                    </div>

                                    {/* Column 3 - Resources */}
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Resources
                                      </h3>
                                      {resources.map((item) => (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        >
                                          <item.icon
                                            className="h-6 w-6 flex-shrink-0 text-dbblue"
                                            aria-hidden="true"
                                          />
                                          <div className="ml-4">
                                            <p className="text-base font-medium text-gray-900">
                                              {item.name}
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                              {item.description}
                                            </p>
                                          </div>
                                        </a>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Bottom Section - Calls to Action (Spanning Full Width) */}
                                  <div className="mt-6 space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                    {callsToAction.map((item) => (
                                      <div
                                        key={item.name}
                                        className="flow-root"
                                      >
                                        <a
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                        >
                                          <item.icon
                                            className="h-6 w-6 flex-shrink-0 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span className="ml-3">
                                            {item.name}
                                          </span>
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </div>
                  </div>
                </div>
                <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-4">
                  <HeaderSearchbar />

                  <Link
                    href="https://bangdb.com/pricing"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BangDB on Cloud
                  </Link>

                  <Link
                    href="https://appstore.bangdb.com/"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Appstore
                  </Link>

                  <Link
                    href="https://bangdb.com/download"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:text-gray-900",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
