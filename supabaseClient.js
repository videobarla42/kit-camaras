// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lkwdiodhcjapfqxnbuxy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrd2Rpb2RoY2phcGZxeG5idXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzM5ODcsImV4cCI6MjA0MjI0OTk4N30.F-XZ9jVs5DckvgJzVXWTRB4HTEoleIr7Gk2mL_Ez-4g';

export const supabase = createClient(supabaseUrl, supabaseKey);