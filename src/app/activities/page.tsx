import Programs from '../../components/Activities/Programs'

export default function Activities() {
  return (
    <div className="pt-24 pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-dark-blue mt-24 mb-12">Our Activities</h1>
                  <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
            Empowering communities through comprehensive healthcare, education, and development initiatives that create lasting positive change.
          </p>
        <Programs />
      </div>
    </div>
  )
}