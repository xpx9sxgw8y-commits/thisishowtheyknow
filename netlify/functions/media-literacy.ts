import { Handler, HandlerEvent } from '@netlify/functions';

export const handler: Handler = async (event: HandlerEvent) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json',
    };

    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    const path = event.path.replace('/.netlify/functions/media-literacy', '');

    try {
        // GET /api/media-literacy/learning-path
        if (path === '/learning-path' && event.httpMethod === 'GET') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify([
                    {
                        step: 1,
                        title: 'Learn the Basics',
                        description: 'Understand fundamental concepts of media literacy',
                        icon: 'book',
                    },
                    {
                        step: 2,
                        title: 'Practice Analysis',
                        description: 'Apply your skills to real-world examples',
                        icon: 'eye',
                    },
                    {
                        step: 3,
                        title: 'Master Critical Thinking',
                        description: 'Develop advanced analytical skills',
                        icon: 'brain',
                    },
                ]),
            };
        }

        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error' }),
        };
    }
};
