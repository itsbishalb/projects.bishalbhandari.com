# Stage 1: Build the grade-calculator project
FROM node:lts AS grade-calculator-build

RUN git clone https://github.com/itsbishalb/grade-calculator grade-calculator
WORKDIR /grade-calculator
RUN npm install
RUN npm run build





# Stage 2: Build the projects.bishalbhandari.com project
FROM node:lts AS projects-bishalbhandari-com-build
WORKDIR /app
RUN git clone https://github.com/itsbishalb/Reversi-Javascript reversi
RUN git clone https://github.com/itsbishalb/dead-pixels-test dead-pixels-test
RUN git clone https://github.com/itsbishalb/Password-Generator password-generator
COPY . .
# If you have additional build steps for this project, add them here

# Stage 3: Create the final NGINX image
FROM nginx:alpine
EXPOSE 80
COPY --from=projects-bishalbhandari-com-build /app/ /usr/share/nginx/html/
COPY --from=grade-calculator-build /grade-calculator/build/ /usr/share/nginx/html/grade-calculator
