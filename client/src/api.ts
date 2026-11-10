let accessToken: string | null = null;
let refreshPromise: Promise<string> | null = null;

const BASE_URL = 'http://localhost:5000/api/v1';

export const setAccessToken = (token: string | null) => {
        accessToken = token;
};

export const getAccessToken = () => accessToken;

export const apiFetch = async (path: string, options: RequestInit = {}): Promise<any> => {
    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
    } as Record<string, string>;

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }

    const fetchOptions: RequestInit = {
        ...options,
        headers,
        credentials:'include',
    };

    let response = await fetch(`${BASE_URL}${path}`, fetchOptions);

    if (
        response.status === 401 && 
        path !== '/auth/login' && 
        path !== '/auth/register' &&
        path !== '/auth/refresh'
    ) {
        try {
            const newAccessToken = await refreshAccessToken();
            headers['Authorization'] = `Bearer ${newAccessToken}`;

            response = await fetch(`${BASE_URL}${path}`, {
                ...fetchOptions,
                headers,
            });
        } catch (refreshError) {
            setAccessToken(null);
            throw refreshError;
        }
    }

    if (!response.ok) {
        let errorData: any = {};
        try {
            errorData = await response.json();
        } catch (e) {}
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }

    try {
        return await response.json();
    } catch (e) {
        return null;
    }
};

 

export const refreshAccessToken = async (): Promise<string> => {
    if (refreshPromise) {
        return refreshPromise;
    }

    refreshPromise = (async () => {
        try {
            const response = await fetch(`${BASE_URL}/auth/refresh`, {
                method: 'POST',
                headers: {'content-Type': 'application/json' },
                credentials: 'include',
            });

            if(!response.ok) {
                throw new Error('Session expired');
            }

            const result = await response.json();
            const token = result.data.accessToken;
            setAccessToken(token);
            return token;
        } catch (error) {
            setAccessToken(null);
            throw error;
        } finally {
            refreshPromise = null;
        }
    }) ();
    return refreshPromise;
};