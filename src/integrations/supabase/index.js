// Import all the relevant exports from other files in the supabase directory
import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';
import {
    useMyGPT,
    useMyGPTById,
    useAddMyGPT,
    useUpdateMyGPT,
    useDeleteMyGPT,
} from './hooks/mygpt.js';

// Export all the imported functions and objects
export {
    supabase,
    SupabaseAuthProvider,
    useSupabaseAuth,
    SupabaseAuthUI,
    useMyGPT,
    useMyGPTById,
    useAddMyGPT,
    useUpdateMyGPT,
    useDeleteMyGPT,
};