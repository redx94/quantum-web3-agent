import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### mygpt

| name       | type                     | format  | required |
|------------|--------------------------|---------|----------|
| id         | int8                     | number  | true     |
| created_at | timestamp with time zone | string  | true     |

*/

export const useMyGPT = () => useQuery({
    queryKey: ['mygpt'],
    queryFn: () => fromSupabase(supabase.from('mygpt').select('*')),
});

export const useMyGPTById = (id) => useQuery({
    queryKey: ['mygpt', id],
    queryFn: () => fromSupabase(supabase.from('mygpt').select('*').eq('id', id).single()),
});

export const useAddMyGPT = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newMyGPT) => fromSupabase(supabase.from('mygpt').insert([newMyGPT])),
        onSuccess: () => {
            queryClient.invalidateQueries('mygpt');
        },
    });
};

export const useUpdateMyGPT = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('mygpt').update(updateData).eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('mygpt');
        },
    });
};

export const useDeleteMyGPT = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('mygpt').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('mygpt');
        },
    });
};