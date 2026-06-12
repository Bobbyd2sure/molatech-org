export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      admin_sessions: {
        Row: {
          created_at: string | null
          expires_at: string
          id: string
          token: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          expires_at: string
          id?: string
          token: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          expires_at?: string
          id?: string
          token?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admin_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          last_login: string | null
          name: string | null
          password_hash: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          last_login?: string | null
          name?: string | null
          password_hash: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          last_login?: string | null
          name?: string | null
          password_hash?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_avatar: string | null
          author_name: string | null
          author_role: string | null
          category_id: string | null
          content: string
          cover_image: string | null
          created_at: string | null
          excerpt: string | null
          featured: boolean | null
          id: string
          published_at: string | null
          reading_time: string | null
          slug: string
          status: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
          views: number | null
        }
        Insert: {
          author_avatar?: string | null
          author_name?: string | null
          author_role?: string | null
          category_id?: string | null
          content: string
          cover_image?: string | null
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          published_at?: string | null
          reading_time?: string | null
          slug: string
          status?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          author_avatar?: string | null
          author_name?: string | null
          author_role?: string | null
          category_id?: string | null
          content?: string
          cover_image?: string | null
          created_at?: string | null
          excerpt?: string | null
          featured?: boolean | null
          id?: string
          published_at?: string | null
          reading_time?: string | null
          slug?: string
          status?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string | null
          email: string
          first_name: string
          id: string
          ip_address: string | null
          last_name: string
          message: string
          notes: string | null
          phone: string | null
          status: string | null
          subject: string | null
          updated_at: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          ip_address?: string | null
          last_name: string
          message: string
          notes?: string | null
          phone?: string | null
          status?: string | null
          subject?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          ip_address?: string | null
          last_name?: string
          message?: string
          notes?: string | null
          phone?: string | null
          status?: string | null
          subject?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          phone: string
          source: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          phone: string
          source?: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          phone?: string
          source?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          first_name: string | null
          id: string
          source: string | null
          status: string | null
          subscribed_at: string | null
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          first_name?: string | null
          id?: string
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          first_name?: string | null
          id?: string
          source?: string | null
          status?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      project_inquiries: {
        Row: {
          budget_range: string | null
          company: string | null
          created_at: string | null
          email: string
          first_name: string
          id: string
          ip_address: string | null
          last_name: string
          notes: string | null
          phone: string | null
          project_description: string
          service_type: string | null
          status: string | null
          timeline: string | null
          updated_at: string | null
        }
        Insert: {
          budget_range?: string | null
          company?: string | null
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          ip_address?: string | null
          last_name: string
          notes?: string | null
          phone?: string | null
          project_description: string
          service_type?: string | null
          status?: string | null
          timeline?: string | null
          updated_at?: string | null
        }
        Update: {
          budget_range?: string | null
          company?: string | null
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          ip_address?: string | null
          last_name?: string
          notes?: string | null
          phone?: string | null
          project_description?: string
          service_type?: string | null
          status?: string | null
          timeline?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      blog_stats: {
        Row: {
          draft_posts: number | null
          featured_posts: number | null
          published_posts: number | null
          total_posts: number | null
          total_views: number | null
        }
        Relationships: []
      }
      contact_stats: {
        Row: {
          last_30_days: number | null
          last_7_days: number | null
          new_submissions: number | null
          read_submissions: number | null
          replied_submissions: number | null
          total_submissions: number | null
        }
        Relationships: []
      }
      published_posts_view: {
        Row: {
          author_avatar: string | null
          author_name: string | null
          author_role: string | null
          category_name: string | null
          category_slug: string | null
          content: string | null
          cover_image: string | null
          excerpt: string | null
          featured: boolean | null
          id: string | null
          published_at: string | null
          reading_time: string | null
          slug: string | null
          tags: string[] | null
          title: string | null
          views: number | null
        }
        Relationships: []
      }
      recent_contacts: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string | null
          status: string | null
          subject: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      can_manage_membership: {
        Args: { check_org_id: string; check_user_id?: string }
        Returns: boolean
      }
      create_organization_with_membership: {
        Args: { org_name: string; user_id?: string }
        Returns: Json
      }
      diagnose_user_setup: { Args: { check_user_id?: string }; Returns: Json }
      get_user_orgs: { Args: { user_id: string }; Returns: string[] }
      is_org_admin: {
        Args: { check_org_id: string; check_user_id?: string }
        Returns: boolean
      }
      rpc_compute_risk: {
        Args: { _impact: number; _likelihood: number; _matrix?: string }
        Returns: number
      }
      rpc_resolve_member: {
        Args: { _email: string; _org: string }
        Returns: string
      }
      rpc_seed_org_controls: {
        Args: { _framework_keys: string[]; _org: string }
        Returns: Json
      }
      rpc_seed_test_cycle: {
        Args: { _cycle: string; _org: string; _status?: string }
        Returns: number
      }
      rpc_upsert_assets: { Args: { _org: string; _rows: Json }; Returns: Json }
      rpc_upsert_org_controls: {
        Args: { _org: string; _rows: Json }
        Returns: Json
      }
      rpc_upsert_risk_items: {
        Args: { _org: string; _rows: Json }
        Returns: Json
      }
      seed_annexa_documents: {
        Args: { control_id: string; control_key: string }
        Returns: number
      }
    }
    Enums: {
      app_role: "owner" | "admin" | "manager" | "analyst" | "auditor" | "vendor"
      assessment_status: "issued" | "in_review" | "completed" | "closed"
      asset_type:
        | "application"
        | "infrastructure"
        | "dataset"
        | "device"
        | "vendor"
        | "other"
      audit_status: "planned" | "fieldwork" | "reporting" | "closed"
      control_status:
        | "not_applicable"
        | "planned"
        | "in_progress"
        | "effective"
        | "ineffective"
      criticality: "low" | "medium" | "high" | "critical"
      dsr_status:
        | "received"
        | "verifying"
        | "in_progress"
        | "fulfilled"
        | "rejected"
      dsr_type:
        | "access"
        | "erasure"
        | "rectification"
        | "portability"
        | "restriction"
        | "objection"
      finding_severity: "low" | "medium" | "high" | "critical"
      incident_severity: "low" | "medium" | "high" | "critical"
      incident_status:
        | "open"
        | "contained"
        | "eradicated"
        | "recovered"
        | "closed"
      incident_type: "security" | "privacy" | "availability" | "other"
      risk_method: "qualitative" | "semi_quantitative" | "quantitative"
      risk_status: "open" | "in_progress" | "accepted" | "closed"
      risk_treatment: "accept" | "mitigate" | "transfer" | "avoid"
      task_status: "todo" | "in_progress" | "blocked" | "done"
      test_result: "pass" | "fail" | "partial" | "not_tested"
      vendor_status: "active" | "inactive" | "pending"
      vendor_tier: "low" | "medium" | "high"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["owner", "admin", "manager", "analyst", "auditor", "vendor"],
      assessment_status: ["issued", "in_review", "completed", "closed"],
      asset_type: [
        "application",
        "infrastructure",
        "dataset",
        "device",
        "vendor",
        "other",
      ],
      audit_status: ["planned", "fieldwork", "reporting", "closed"],
      control_status: [
        "not_applicable",
        "planned",
        "in_progress",
        "effective",
        "ineffective",
      ],
      criticality: ["low", "medium", "high", "critical"],
      dsr_status: [
        "received",
        "verifying",
        "in_progress",
        "fulfilled",
        "rejected",
      ],
      dsr_type: [
        "access",
        "erasure",
        "rectification",
        "portability",
        "restriction",
        "objection",
      ],
      finding_severity: ["low", "medium", "high", "critical"],
      incident_severity: ["low", "medium", "high", "critical"],
      incident_status: [
        "open",
        "contained",
        "eradicated",
        "recovered",
        "closed",
      ],
      incident_type: ["security", "privacy", "availability", "other"],
      risk_method: ["qualitative", "semi_quantitative", "quantitative"],
      risk_status: ["open", "in_progress", "accepted", "closed"],
      risk_treatment: ["accept", "mitigate", "transfer", "avoid"],
      task_status: ["todo", "in_progress", "blocked", "done"],
      test_result: ["pass", "fail", "partial", "not_tested"],
      vendor_status: ["active", "inactive", "pending"],
      vendor_tier: ["low", "medium", "high"],
    },
  },
} as const
