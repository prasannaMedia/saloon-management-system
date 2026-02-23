import { Sparkles, Target, Award, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"> Fabb6</span>
          </h1>
          <p className="text-xl text-gray-600">
            Empowering beauty businesses to grow and succeed
          </p>
        </div>

        <div className="space-y-12">
          <div className="card">
            <Sparkles className="w-12 h-12 text-pink-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We're dedicated to helping salon and spa businesses thrive in the digital age. 
              Our platform combines powerful booking, payments, and management tools with 
              beautiful design and ease of use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <Target className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">10K+</h3>
              <p className="text-gray-600">Businesses Served</p>
            </div>
            <div className="card text-center">
              <Award className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">500K+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="card text-center">
              <Heart className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
