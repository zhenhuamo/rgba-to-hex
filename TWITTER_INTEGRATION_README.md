# Twitter API Integration for Tweet Screenshot Generator

## Overview

The Tweet Screenshot Generator now supports automatic import of real tweet data using the X API v2. This allows users to simply paste a tweet URL and automatically populate all tweet information including user details, content, and engagement metrics.

## ⚠️ X API Limitations

**The X API free tier supports up to 100 tweet reads per month and 500 writes.**

To handle potential API limitations or network issues, we have also implemented a **fallback mock API system** that provides realistic tweet data when the real API is unavailable.

## Features

### ✅ Implemented Features

1. **Real Tweet Import**: Paste any Twitter/X URL to import actual tweet data (with fallback to mock data)
2. **User Information**: Automatically fetches user name, username, profile image, and verification status
3. **Tweet Content**: Imports the actual tweet text and timestamp
4. **Engagement Metrics**: Fetches real likes, retweets, replies, and view counts
5. **Media Support**: Detects and includes media attachments (images, videos)
6. **Fallback System**: Gracefully falls back to mock data when API limits are reached or network issues occur
7. **Error Handling**: Comprehensive error handling and user feedback
8. **API Information**: Detailed information page about API limitations and usage

### 🔧 Technical Implementation

- **Mock API Route**: `/api/twitter/mock` - Server-side mock data implementation
- **Real API Route**: `/api/twitter` - Ready for real API when subscription is available
- **Data Structure**: Uses the same data format as the real Twitter API
- **Error Handling**: Clear user feedback about API limitations
- **Educational Content**: Includes API information page explaining limitations

## X API Pricing Information

### Access Levels

| Plan | Read Tweets | Monthly Read Limit | Cost |
|------|-------------|-------------------|------|
| Free | ❌ No | 0 | Free |
| Basic | ✅ Yes | 10,000 | $200/month |
| Pro | ✅ Yes | 1,000,000 | $5,000/month |

### API Information Page

The tool includes a detailed API information page at `/tools/tweet-screenshot/api-info` that explains:

- Current X API limitations
- Pricing tiers and features
- Our mock data implementation
- Upgrade options

## Setup for Real API (Requires Paid Subscription)

If you have a paid X API subscription, you can enable real API integration:

1. Create a `.env.local` file in your project root:

```env
# Twitter API Configuration
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_BEARER_TOKEN=your_bearer_token_here
```

2. Update the TweetEditor component to use the real API endpoint:
   - Change `/api/twitter/mock` to `/api/twitter`

3. Test the integration:
   - Visit `/api/twitter/test` to test the API integration
   - Try importing a tweet in the main tool

## Usage

### For Users

1. **Copy Tweet URL**: Copy any Twitter or X.com URL
2. **Paste in Tool**: Paste the URL in the "Import from Tweet URL" field
3. **Click Import**: The tool will automatically fetch and populate all data
4. **Customize**: Adjust styling and generate your screenshot

### Supported URL Formats

- `https://twitter.com/username/status/1234567890`
- `https://x.com/username/status/1234567890`
- URLs with additional parameters are automatically cleaned

## API Endpoints

### GET /api/twitter

Fetches tweet data from Twitter API v2.

**Parameters:**
- `url` (required): The tweet URL to fetch

**Response:**
```json
{
  "id": "1234567890",
  "text": "Tweet content...",
  "createdAt": "2025-01-15T12:00:00.000Z",
  "formattedDate": "1/15/2025, 12:00:00 PM",
  "user": {
    "id": "123456789",
    "name": "Display Name",
    "username": "username",
    "profileImageUrl": "https://...",
    "verified": false
  },
  "metrics": {
    "replies": 10,
    "retweets": 25,
    "likes": 100,
    "views": 1000
  },
  "media": [
    {
      "type": "photo",
      "url": "https://...",
      "width": 1200,
      "height": 800
    }
  ]
}
```

## Rate Limits & Caching

### Twitter API Limits
- **Bearer Token**: 300 requests per 15-minute window
- **Per-user**: Varies by endpoint

### Caching Strategy
- **Duration**: 1 hour per tweet
- **Storage**: In-memory (resets on server restart)
- **Benefits**: Reduces API calls, improves performance

## Error Handling

### Common Errors

1. **API Not Configured**
   - Error: "Twitter API credentials not configured"
   - Solution: Add environment variables and restart server

2. **Invalid URL**
   - Error: "Invalid tweet URL format"
   - Solution: Ensure URL is in correct format

3. **Tweet Not Found**
   - Error: "Twitter API error: 404"
   - Solution: Check if tweet exists and is public

4. **Rate Limited**
   - Error: "Twitter API error: 429"
   - Solution: Wait and try again, or use cached data

5. **Private Tweet**
   - Error: "Twitter API error: 401"
   - Solution: Only public tweets can be imported

### Fallback Behavior

When API fails:
1. Error message is displayed to user
2. Manual input remains available
3. Previously imported data is preserved
4. User can retry or input manually

## Security Considerations

### API Key Security
- ✅ Keys stored in environment variables
- ✅ Server-side API calls only
- ✅ No client-side exposure
- ✅ No keys in version control

### Data Privacy
- ✅ Only public tweet data is accessed
- ✅ No user authentication required
- ✅ No personal data stored
- ✅ Caching respects public nature of data

## Development

### Testing
- Use `/api/twitter/test` page for API testing
- Test with various tweet URLs
- Verify error handling scenarios

### Debugging
- Check browser console for client errors
- Check server logs for API errors
- Verify environment variables are loaded

### Future Enhancements
- [ ] Support for tweet threads
- [ ] Batch import multiple tweets
- [ ] Export tweet data as JSON
- [ ] Integration with other social platforms

## Troubleshooting

See `TWITTER_API_SETUP.md` for detailed setup instructions and troubleshooting guide.

## Dependencies

No additional dependencies required - uses built-in Next.js fetch and Node.js APIs.
