# cloudflare-ip-example

To deploy the Cloudflare Worker that returns the visitor's IP address in JSON format with CORS support using the Cloudflare dashboard (UI), follow these steps. This approach is handy if you prefer a graphical interface over command-line operations.

### Step 1: Log In to Cloudflare Dashboard

1. **Navigate to Cloudflare:** Go to [Cloudflare's website](https://dash.cloudflare.com/) and log in with your account credentials.
2. **Select Your Domain:** From the list of domains in your Cloudflare account, click on the domain you want to deploy the Worker under.

### Step 2: Access Workers

1. **Open the Workers Section:** In your domain's dashboard, look for the "Workers" option. This can typically be found in the sidebar menu. Click on it to go to the Workers dashboard.

### Step 3: Create a Worker

1. **Create a Worker:** Click on the "Create a Worker" button. This action opens a new page where you can write or paste your Worker's code.
2. **Name Your Worker:** You'll be given an option to name your Worker. Choose a meaningful name that reflects its functionality, such as `return-ip-with-cors`.

### Step 4: Paste the Worker Code
**Copy the Worker Code:** Copy the JavaScript code provided in the `index.js` 


### Step 5: Save and Deploy

1. **Save and Deploy:** After pasting and reviewing your code, click the "Save and Deploy" button to deploy your Worker immediately. Cloudflare will provide a unique URL to access your Worker.

### Step 6: Testing

1. **Test Your Worker:** Use the provided URL to test your Worker. You can visit the URL in your browser or use a tool like `curl` to make a request. You should receive a JSON response containing your IP address.

   Example `curl` command:
   ```sh
   curl -i https://your-worker.your-subdomain.workers.dev
   ```
   Replace `https://your-worker.your-subdomain.workers.dev` with the URL provided by Cloudflare for your Worker. The `-i` option includes the HTTP response headers in the output, which can be useful for checking the CORS headers.

### Step 7: Configure Route (Optional)

If you want your Worker to respond to requests at a specific path on your site, you can configure a route:

1. **Go to the Workers Section:** Return to the Workers section of the Cloudflare dashboard.
2. **Select Your Worker:** Find your Worker in the list and click on it.
3. **Add Route:** Click on "Add route" and specify the pattern that matches the requests you want to handle with your Worker, e.g., `example.com/api/ip`. Set the route to match the domain and path where you want your Worker to be accessible.

Congratulations! You've successfully deployed a Cloudflare Worker through the Cloudflare UI that returns the visitor's IP address in JSON format with CORS support.
