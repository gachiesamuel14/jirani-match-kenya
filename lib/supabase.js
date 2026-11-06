import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Example location query with PostGIS (run in Supabase SQL):
// SELECT * FROM profiles
// WHERE ST_DWithin(
//   location,
//   ST_SetSRID(ST_MakePoint(user_lng, user_lat), 4326)::geography,
//   distance_meters
// )