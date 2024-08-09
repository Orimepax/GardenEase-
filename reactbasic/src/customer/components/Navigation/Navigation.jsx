import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
    
 categories: [
  
    {
      id: 'Shop',
      name: 'Shop',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: './images/shopnowimg.png',
          imageAlt: '',
        },
        {
        
          href: '#',
          imageSrc: './images/vegi.jpg',
          imageAlt: '',
        },
      ],
      sections: [
        {
          id: 'Plants',
          name: 'Plants',
          items: [
            { name: 'Indore Plants', href: '#' },
            { name: 'Outdore Plants', href: '#' },
            { name: 'Herbs', href: '#' },
            { name: 'Artifical Plants', href: '#' },
            { name: 'Seeds', href: '#' },
            { name: '...', href: '#'}
           
          ],
        },
        {
          id: 'Garden Tools',
          name: 'Garden Tools',
          items: [
            { name: 'Root Slayer Shovel', href: '#' },
            { name: 'Multi Purpose Scissor', href: '#' },
            { name: 'Weeding Knife', href: '#' },
            { name: 'Gloves', href: '#' },
            { name: 'Spear Head Shovel', href: '#' },
            { name: 'Collapsible Bucket', href: '#' },
            { name: '...', href: '#'}
          ],
        },
        {
          id: 'Garden Decor',
          name: 'Garden Decor',
          items: [
            { name: 'Planters', href: '#' },
            { name: 'Garden Ornaments', href: '#' },
            { name: 'Lighting', href: '#' },
            { name: '...', href: '#'}
            
          ],
        },
        {
            id: 'Soil & Fertilizers ',
            name: 'Soil & Fertilizers',
            items: [
                { name: 'Potting Mix', href: '#'},
                { name: 'Garden Soil', href: '#'},
                { name:'Compost', href: '#'},
                { name: 'Coco Peat', href: '#'},
                { name: '...', href: '#'}

            ],
        }
      ],
    },
    {
      id: 'Tips & Advice',
      name: 'Tips & Advice',
      featured: [
        {
          href: '#',
          imageSrc: './images/tipsimg1.png',
        },
        {
          href: '#',
          imageSrc: './images/tipsimg2.png',
        },
      ],
      sections: [
        {
          id: 'Tips',
          name: 'Tips',
          items: [
            { name: 'Plant Care', href: '#' },
            { name: 'Gardening Tips', href: '#' },
            { name: 'Seasonal Guides', href: '#' },
            { name: 'DIY Projects', href: '#' },
            
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
        <DialogPanel
         transition
         className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-yellow-50 pb-12 shadow-xl transition duration-300 ease-in-out"
        >

            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-green-900"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-green-900">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-green-900 data-[selected]:border-emerald-50 data-[selected]:text-green-900"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-green-900 group-hover:opacity-75">
                            <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                          </div>
                          <a href={item.href} className="mt-6 block font-medium text-green-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-green-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-green-900">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-green-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-green-900 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-green-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-yellow-50">
        <p className="flex h-10 items-center justify-center bg-green-900 px-4 text-sm font-medium text-yellow-50 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-emerald-50">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-green-900 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="GardenEase"
                    src="./images/logo.png"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-green-9s00 transition-colors duration-200 ease-out hover:text-emerald-500 data-[open]:border-emerald-500 data-[open]:text-emerald-500">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel className="absolute inset-x-0 top-full z-50 bg-yellow-50 shadow-lg">

                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-yellow-50 shadow" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-green-900 group-hover:opacity-75">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a href={item.href} className="mt-6 block font-medium text-green-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-green-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-emerald-500">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-green-900 hover:text-emerald-500"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-green-900 hover:text-emerald-500">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-green-900 hover:text-emerald-500">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-green-900 hover:text-emerald-500">
                    <img
                      alt=""
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-green-900 hover:text-emerald-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-green-900 group-hover:text-emerald-500"
                    />
                    <span className="ml-2 text-sm font-medium text-green-900 group-hover:text-emerald-500">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
    // hi
  )
}
