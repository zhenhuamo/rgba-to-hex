# Twitter API Setup Guide

This guide will help you set up Twitter API access for the Tweet Screenshot Generator tool.

## Prerequisites

- A Twitter/X account
- Access to the Twitter Developer Portal

## Step 1: Create a Twitter Developer Account

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Sign in with your Twitter account
3. Apply for a developer account if you don't have one
4. Complete the application process (this may take some time for approval)

## Step 2: Create a New App

1. Once approved, go to the [Developer Portal Dashboard](https://developer.twitter.com/en/portal/dashboard)
2. Click "Create App" or "New Project"
3. Fill in the required information:
   - **App Name**: Choose a name for your app (e.g., "Tweet Screenshot Tool")
   - **Description**: Brief description of your app's purpose
   - **Website URL**: Your website URL (can be localhost for development)
   - **Use Case**: Select appropriate use case (e.g., "Making a bot")

## Step 3: Get Your API Keys

After creating your app, you'll need to get the following credentials:

### Required Credentials:
- **API Key** (Consumer Key)
- **API Secret Key** (Consumer Secret)
- **Bearer Token**

### How to Find Them:
1. Go to your app's dashboard
2. Click on the "Keys and Tokens" tab
3. You'll see:
   - **API Key and Secret**: Under "Consumer Keys"
   - **Bearer Token**: Under "Authentication Tokens"

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your Twitter API credentials:

```env
# Twitter API Configuration
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_BEARER_TOKEN=your_bearer_token_here
```

**Important**: Never commit your `.env.local` file to version control. It should be in your `.gitignore`.

## Step 5: Set API Permissions

1. In your app dashboard, go to "Settings" tab
2. Under "App Permissions", ensure you have at least "Read" permissions
3. For this tool, "Read" permission is sufficient

## Step 6: Test the Setup

1. Restart your development server
2. Try importing a tweet URL in the tool
3. If successful, you should see the tweet content populated automatically

## Troubleshooting

### Common Issues:

1. **"Twitter API credentials not configured"**
   - Check that your environment variables are set correctly
   - Restart your development server after adding environment variables

2. **"Twitter API error: 401"**
   - Your API keys might be incorrect
   - Check that you've copied the keys correctly
   - Ensure your app has the correct permissions

3. **"Twitter API error: 429"**
   - You've hit the rate limit
   - Wait a few minutes before trying again
   - Consider implementing caching (already included in the API route)

4. **"Invalid tweet URL format"**
   - Ensure the URL is in the correct format
   - Supported formats:
     - `https://twitter.com/username/status/1234567890`
     - `https://x.com/username/status/1234567890`

### Rate Limits

The Twitter API has rate limits:
- **Bearer Token**: 300 requests per 15-minute window
- Our implementation includes caching to reduce API calls

## Security Best Practices

1. **Never expose API keys in client-side code**
2. **Use environment variables for all sensitive data**
3. **Regularly rotate your API keys**
4. **Monitor your API usage in the Twitter Developer Portal**

## API Endpoints Used

This tool uses the following Twitter API v2 endpoints:
- `GET /2/tweets/:id` - To fetch tweet data
- Includes expansions for user data and media

## Development vs Production

### Development:
- Use `.env.local` for local development
- Test with various tweet URLs

### Production:
- Set environment variables in your hosting platform
- Ensure all API keys are properly configured
- Monitor API usage and costs

## Support

If you encounter issues:
1. Check the Twitter Developer Documentation
2. Verify your API keys and permissions
3. Check the browser console for error messages
4. Ensure your development server is running

## Additional Resources

- [Twitter API v2 Documentation](https://developer.twitter.com/en/docs/twitter-api)
- [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
- [Rate Limits Guide](https://developer.twitter.com/en/docs/twitter-api/rate-limits)



