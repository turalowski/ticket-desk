export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tickets: {
        Row: {
          body: string | null
          created_at: string
          id: number
          priority: Database["public"]["Enums"]["Priority"] | null
          title: string | null
          user_email: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: number
          priority?: Database["public"]["Enums"]["Priority"] | null
          title?: string | null
          user_email?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: number
          priority?: Database["public"]["Enums"]["Priority"] | null
          title?: string | null
          user_email?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Priority: "low" | "medium" | "high"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
