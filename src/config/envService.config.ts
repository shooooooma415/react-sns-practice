export class EnvServiceConfig {
  private static instance: EnvServiceConfig;

  private constructor() {}

  public static getInstance(): EnvServiceConfig {
    if (!this.instance) {
      this.instance = new EnvServiceConfig();
    }

    return this.instance;
  }

  public get SupabaseUrl(): string {
    return import.meta.env.VITE_SUPABASE_URL || "";
  }

  public get SupabaseKey(): string {
    return import.meta.env.VITE_SUPABASE_ANON_KEY || "";
  }
}
