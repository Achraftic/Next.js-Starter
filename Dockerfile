# Use an official Node.js runtime as a base image
FROM node:22.8.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Start Next.js in development mode for live reload
CMD ["npm", "run", "dev"]
