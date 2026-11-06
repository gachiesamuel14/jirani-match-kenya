'use client'

import { Heart, X, MapPin, Briefcase, GraduationCap } from 'lucide-react'

export default function ProfileCard({ profile, onSwipe }) {
  return (
    <div className="absolute w-full max-w-sm bg-white text-black rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-105">
      <div className="relative h-96 bg-gradient-to-br from-kenyan-green to-kenyan-red">
        <img
          src={profile.photo || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h2 className="text-3xl font-bold">{profile.name}, {profile.age}</h2>
          <p className="flex items-center gap-1 mt-1">
            <MapPin size={16} /> {profile.county} • {profile.distance} km away
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-4">{profile.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.interests?.map((interest) => (
            <span key={interest} className="bg-kenyan-green/10 text-kenyan-green px-3 py-1 rounded-full text-sm">
              {interest}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm text-gray-600">
          {profile.occupation && (
            <span className="flex items-center gap-1"><Briefcase size={14} /> {profile.occupation}</span>
          )}
          {profile.education && (
            <span className="flex items-center gap-1"><GraduationCap size={14} /> {profile.education}</span>
          )}
        </div>
        <p className="mt-3 text-xs text-gray-500">Tribe: {profile.tribe} • Religion: {profile.religion}</p>
      </div>
    </div>
  )
}