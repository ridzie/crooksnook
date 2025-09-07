FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build Astro SSR
RUN npm run build

# Expose port
EXPOSE 4321

# Run in SSR mode
CMD ["npm", "run", "start"]
#CMD ["node", "./dist/server/entry.mjs"]