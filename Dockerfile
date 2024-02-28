# Node.js version 17 ka official image
FROM node:17

# Application ke files ko rakhne ke liye directory banayein
WORKDIR /usr/src/app

# Application ki dependency files ko copy karein
COPY package*.json ./

# Dependencies ko install karein
RUN npm install --legacy-peer-deps

# Baaki application source code ko copy karein
COPY . .

# Next.js application ke liye production build banayein
RUN npm run build

# Application ko run karne ke liye port ko expose karein
EXPOSE 3000

# Application ko start karne ka command
CMD ["npm", "start"]

