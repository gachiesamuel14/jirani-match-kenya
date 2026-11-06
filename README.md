# Jirani Match Kenya

Location-based online dating platform for people in Kenya.

Connect with nearby users using GPS/location, profiles, swipe matching, filters by county, age, tribe, interests, religion, and more.

## Features

- User profiles with photos, bio, age, interests
- Location-based discovery (GPS permission + distance calculation)
- Swipe / Like / Match UI
- Filters: County (Nairobi, Mombasa, Kisumu, Kiambu...), Distance, Age, Tribe, Religion, Interests
- Real-time chat placeholder (connect Supabase Realtime)
- Photo uploads (Supabase Storage)
- Safety / Report system
- Premium features ready (M-Pesa integration possible)
- Localized for Kenya: Sheng vibes, student/professional/church modes

## Tech Stack

- **Frontend**: Next.js 15 + React 19 + Tailwind CSS
- **Backend**: Supabase (Auth, PostgreSQL with PostGIS for location, Realtime, Storage)
- **Hosting**: Netlify + GitHub
- **Location**: Browser Geolocation API + Haversine distance

## Quick Start (Local)

```bash
npm install
cp .env.example .env.local
# Add your Supabase URL and Anon Key
npm run dev
```

## Deploy to Netlify

1. Push this repo to GitHub (already done if using the connected tools).
2. In Netlify: New site from Git → select this repo.
3. Build command: `npm run build`
4. Publish directory: `out`
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Supabase Setup (Recommended)

1. Create a free project at [supabase.com](https://supabase.com)
2. Enable PostGIS extension for location queries
3. Create tables: profiles, likes, matches, messages
4. Enable Auth (email/password or phone)
5. Storage bucket for photos
6. Row Level Security policies

See `supabase/schema.sql` for starter schema.

## Kenya Localization Ideas

- County selector with all 47 counties
- Tribe options (Kikuyu, Luo, Luhya, Kalenjin, etc.)
- Sheng language support
- M-Pesa for premium (via Safaricom Daraja API or Flutterwave)
- Modes: Student, Professional, Church, Casual

## Safety

Always implement reporting, blocking, and verification for real users.

Built with ❤️ for Kenyans to connect nearby.