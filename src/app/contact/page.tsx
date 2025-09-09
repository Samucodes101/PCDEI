export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-dark-blue mb-12">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-dark-blue mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              We&apos;d love to hear from you. Reach out to us through any of the following channels:
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-light-blue p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-dark-blue">Email</h3>
                <p className="text-gray-600">Pcdeiofficial@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-light-blue p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-dark-blue">Office Address</h3>
                <p className="text-gray-600">20 Cairo Street, Ademola Adetokunbo Wuse2</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-light-blue p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-dark-blue">Phone Number</h3>
                <p className="text-gray-600">09014466661</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}