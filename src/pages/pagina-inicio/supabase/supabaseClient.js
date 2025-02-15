import { createClient } from '@supabase/supabase-js';

// Accede a las variables de entorno con Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY; // Corrección aquí

// Verificación de que las variables existan
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las variables de entorno de Supabase');
}

// Creando el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
