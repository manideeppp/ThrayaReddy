import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lyezbzbsfrelwjguedix.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5ZXpiemJzZnJlbHdqZ3VlZGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NDUxMzQsImV4cCI6MjA5MTEyMTEzNH0.RCzmeceBbl1aprC_ctSN1R-mmZHqVkpLIZudhgTDL8A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface WeddingMessage {
  id: string
  name: string
  message: string
  created_at: string
}
