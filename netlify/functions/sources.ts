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

    const path = event.path.replace('/.netlify/functions/sources', '');

    try {
        // GET /api/sources/concepts
        if (path === '/concepts' && event.httpMethod === 'GET') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify([
                    {
                        icon: 'shield',
                        title: 'Source Verification',
                        description: 'Learn how to verify the authenticity and credibility of sources',
                    },
                    {
                        icon: 'check',
                        title: 'Credibility Assessment',
                        description: 'Understand the factors that determine source reliability',
                    },
                    {
                        icon: 'file',
                        title: 'Document Analysis',
                        description: 'Techniques for analyzing and verifying documents and records',
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
