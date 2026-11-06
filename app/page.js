'use client'

import { useState, useEffect } from 'react'
import { MapPin, Heart, MessageCircle, User, Filter, Shield } from 'lucide-react'
import ProfileCard from '../components/ProfileCard'
import { mockProfiles } from '../lib/mockData'

export default function Home() {
  const [location, setLocation] = useState(null)
  const [profiles, setProfiles] = useState(mockProfiles)
  const [filters, setFilters] = useState({ county: 'All', maxDistance: 50, ageMin: 18, ageMax: 40 })
  const [showFilters, setShowFilters] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => console.log('Location permission denied')
      )
    }
  }, [])

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      alert('Liked! (In full app this would match if mutual)')
    }
    setCurrentIndex((prev) => (prev + 1) % profiles.length)
  }

  const counties = ['All', 'Nairobi', 'Mombasa', 'Kisumu', 'Kiambu', 'Nakuru', 'Eldoret', 'Machakos', 'Kajiado']

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Jirani <span className="text-kenyan-gold">Match</span>
        </h1>
        <p className="text-xl opacity-90">Connect with Kenyans near you</p>
        {location && (
          <p className="mt-2 flex items-center justify-center gap-2 text-sm">
            <MapPin size={16} /> Location enabled • Nearby matches active
          </p>
        )}
      </header>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur"
        >
          <Filter size={18} /> Filters
        </button>
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur">
          <User size={18} /> Profile
        </button>
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur">
          <MessageCircle size={18} /> Matches
        </button>
      </div>

      {showFilters && (
        <div className="bg-black/40 backdrop-blur p-6 rounded-2xl mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">County</label>
              <select
                value={filters.county}
                onChange={(e) => setFilters({...filters, county: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2"
              >
                {counties.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Max Distance (km)</label>
              <input
                type="range" min="5" max="100" value={filters.maxDistance}
                onChange={(e) => setFilters({...filters, maxDistance: e.target.value})}
                className="w-full"
              />
              <span>{filters.maxDistance} km</span>
            </div>
            <div>
              <label className="block text-sm mb-1">Age {filters.ageMin}-{filters.ageMax}</label>
              <input type="range" min="18" max="60" value={filters.ageMax}
                onChange={(e) => setFilters({...filters, ageMax: e.target.value})} className="w-full" />
            </div>
          </div>
        </div>
      )}

      <div className="relative h-[500px] flex items-center justify-center">
        {profiles.length > 0 && (
          <ProfileCard
            profile={profiles[currentIndex]}
            onSwipe={handleSwipe}
          />
        )}
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <button
          onClick={() => handleSwipe('left')}
          className="w-16 h-16 rounded-full bg-white/10 border-2 border-red-500 flex items-center justify-center text-3xl hover:bg-red-500/20"
        >
          ✕
        </button>
        <button
          onClick={() => handleSwipe('right')}
          className="w-16 h-16 rounded-full bg-white/10 border-2 border-green-500 flex items-center justify-center text-3xl hover:bg-green-500/20"
        >
          ♥
        </button>
      </div>

      <footer className="text-center mt-12 text-sm opacity-70">
        <p className="flex items-center justify-center gap-2">
          <Shield size={14} /> Safety first • Report & Block features ready
        </p>
        <p className="mt-2">Built for Kenyans • M-Pesa premium coming soon</p>
      </footer>
    </main>
  )
}