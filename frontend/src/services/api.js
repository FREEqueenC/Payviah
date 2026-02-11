// MOCK DATA FOR GITHUB PAGES DEMO
// Since we are hosting on GitHub Pages without a backend, we return simulated data.

const MOCK_USER = {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    phone: '555-0123'
};

const MOCK_TRUST_SCORE = {
    user_id: 1,
    community_trust_score: 85,
    reliability_index: 1250.50, // Total spent on essentials
    proactive_score: 92
};

const MOCK_TRANSACTIONS = [
    {
        id: 101,
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        merchant_name: 'City Market',
        category: 'Groceries',
        amount: 85.50,
        stability_rating: 95
    },
    {
        id: 102,
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
        merchant_name: 'Metro Transit',
        category: 'Transport',
        amount: 45.00,
        stability_rating: 90
    },
    {
        id: 103,
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
        merchant_name: 'Community Childcare',
        category: 'Service',
        amount: 250.00,
        stability_rating: 98
    }
];

// Helper to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
    fetchUser: async (userId) => {
        await delay(600); // Simulate network
        console.log('Mock API: Fetched User', userId);
        return MOCK_USER;
    },

    fetchTrustScore: async (userId) => {
        await delay(700);
        return MOCK_TRUST_SCORE;
    },

    fetchTransactions: async (userId) => {
        await delay(800);
        return MOCK_TRANSACTIONS;
    },

    createTransaction: async (data) => {
        await delay(1000);
        console.log('Mock API: Created Transaction', data);
        const newTx = {
            id: Math.floor(Math.random() * 10000),
            created_at: new Date().toISOString(),
            merchant_name: data.merchant_name || 'New Merchant',
            category: data.category || 'General',
            amount: parseFloat(data.amount),
            stability_rating: 88 // Default for new legacy transactions
        };
        MOCK_TRANSACTIONS.unshift(newTx); // Add to local mock list
        return newTx;
    },

    requestGrace: async (data) => {
        await delay(1200);
        console.log('Mock API: Grace Requested', data);
        return { success: true, message: 'Grace period requested successfully.' };
    }
};
