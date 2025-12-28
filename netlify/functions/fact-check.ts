import { Handler, HandlerEvent } from '@netlify/functions';

export const handler: Handler = async (event: HandlerEvent) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
    };

    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    const path = event.path.replace('/.netlify/functions/fact-check', '');

    try {
        // GET /api/fact-check/stats
        if (path === '/stats' && event.httpMethod === 'GET') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    verified: 12345,
                    misleading: 3456,
                    false: 1234,
                }),
            };
        }

        // POST /api/fact-check/verify
        if (path === '/verify' && event.httpMethod === 'POST') {
            const body = JSON.parse(event.body || '{}');
            const { claim } = body;

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    claim,
                    status: 'pending',
                    message: 'Claim verification is in progress',
                }),
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
