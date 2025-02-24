import { createClient } from "@supabase/supabase-js";

import { EnvServiceConfig } from "@/config/envService.config";

const env = EnvServiceConfig.getInstance(); // インスタンスを作成

export const supabase = createClient(env.SupabaseUrl, env.SupabaseKey);
