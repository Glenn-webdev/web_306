export default async function Footer() {
    
    return(
    
        <footer className="bg-green-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul>
                    <li className="text-gray-600 hover:text-gray-900">Services</li>
                    <li><a href="/pages/nursesPage.js" className="text-gray-600 hover:text-gray-900">Book a Nurse</a></li>
                    <li className="text-gray-600 hover:text-gray-900">Caregivers</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="text-gray-600 hover:text-gray-900">Contact</li>
                    <li className="text-gray-600 hover:text-gray-900">Email</li>
                    <li className="text-gray-600 hover:text-gray-900">Phone</li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>)

    }
    