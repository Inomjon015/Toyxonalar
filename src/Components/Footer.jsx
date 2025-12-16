export default function RentcarsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Decorative blur background */}
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>

              <div className="relative">
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-6">
                  DOWNLOAD
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Download Rentcars <br />
                  App for <span className="text-blue-600">FREE</span>
                </h1>

                <p className="text-gray-600 text-lg mb-8">For faster, easier booking and exclusive deals.</p>

                {/* App Store Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-block">
                    <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-base font-semibold">Google Play</div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="inline-block">
                    <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-base font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-white px-6 pt-3 pb-2 flex items-center justify-between">
                      <div className="text-sm font-semibold">10:01</div>
                      <div className="w-24 h-7 bg-black rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2 9V15H6L11 20V4L6 9H2M16 12C16 10.34 15.12 8.91 13.83 8.17L12.83 9.17C13.83 9.71 14.5 10.77 14.5 12C14.5 13.23 13.83 14.29 12.83 14.83L13.83 15.83C15.12 15.09 16 13.66 16 12M22 12C22 7.58 19 3.86 14.83 2.55L13.83 3.55C17.61 4.69 20.5 8.04 20.5 12C20.5 15.96 17.61 19.31 13.83 20.45L14.83 21.45C19 20.14 22 16.42 22 12Z" />
                        </svg>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1 9L2 8H22L23 9V15L22 16H2L1 15V9M3 10V14H21V10H3M2 16H5V18H2V16M6 16H9V18H6V16Z" />
                        </svg>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z" />
                        </svg>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="bg-gradient-to-br from-blue-50 to-gray-50 relative h-[600px]">
                      {/* Decorative background */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl"></div>

                      {/* Navigation */}
                      <div className="relative px-6 pt-4 pb-6 flex items-center justify-between">
                        <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M15 18L9 12L15 6" />
                          </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>

                      {/* Car Image */}
                      <div className="relative px-6">
                        <img
                          src="/blue-jaguar-luxury-sedan-car-side-view.jpg"
                          alt="Blue Jaguar XE"
                          className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-[1.1rem] left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L2,7V17H22V7L12,2M12,4.84L19.5,8.69V15.5H4.5V8.69L12,4.84M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
                <span className="text-white font-bold text-lg">RENTCARS</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    25668 Hc 1, Glenallen,
                    <br />
                    Alaska, 99588, USA
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+603 4784 273 12</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 8l9 6 9-6" />
                  </svg>
                  <span>rentcars@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Our Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Our Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Car
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Priceline
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partner Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cruises
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Developer
                  </a>
                </li>
              </ul>
            </div>

            {/* About Rentcars */}
            <div>
              <h3 className="text-white font-semibold mb-4">About Rentcars</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Why choose us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">Copyright 2023 - Rentcars, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
