import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gtsyibttohslpwtjvjjw.supabase.co";
console.log(import.meta.env.VITE_SUPABASE_ANON_KEY);
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
