import * as dotenv from "dotenv";

export class EnvServiceConfig {
  private config: Record<string, string | undefined>;

  private constructor() {
    dotenv.config();
    this.config = process.env;
  }

  public get(key: string): string | undefined {
    return this.config[key];
  }

  public get SupabaseUrl(): string {
    return this.config.SUPABASE_URL || "";
  }

  public get SupabaseKey(): string {
    return this.config.SUPABASE_ANON_KEY || "";
  }
}
