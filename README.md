# AWSLite
Configure your AWS Services in more easier and faster way!!!

![alt text](https://user-images.githubusercontent.com/50449265/165279294-4ba5a147-e7a0-4e15-8d6c-fea740df298f.png)   

## Github Link

Link: [Code](https://github.com/lakshyaakar/AWSLiteApp)

## Docker Image Link

Link: [Docker Image(Server)](https://hub.docker.com/repository/docker/lakshyaakar7/awsliteserver)

Link: [Docker Image(Client)](https://hub.docker.com/repository/docker/lakshyaakar7/awsliteclient)


<!-- GETTING STARTED -->
## Getting Started!

Follow the below instructions to set up your project locally:

### Installation

1. Clone the repository
   ```
   git clone https://github.com/lakshyaakar/AWSLiteApp.git
   ```
2. Install the npm packages
   ```
   npm install
   ```
### Running the application

1. Run the server (Node.js) --> Running on 5000 port
   ```
   npm start
   ```

2. Run the Frontend (React) --> Running in 3000 port
   ```
   npm start
   ```


### Services Added in AWSLite!

* S3 Services: 
  
  * Create S3 Bucket (Route -> /buckets/create)
 
      ![alt text](https://user-images.githubusercontent.com/50449265/165299571-945147c1-baca-4d4b-a382-89db9139e216.png)
      
  * Show S3 Buckets (Route -> /buckets/get)
 
      ![alt text](https://user-images.githubusercontent.com/50449265/165299388-2e6ad143-e0ef-4116-a38b-b4c645f8f891.png)

  * Delete S3 Bucket

* EC2 Services:

  * Create EC2 Instance (Route -> /instance/creat)
 
      ![alt text](https://user-images.githubusercontent.com/50449265/165299226-3bc07afd-716f-4290-9818-ed404f564dc9.png)   
 
  * Show EC2 Instance List (Route -> /instance/get)
  
      ![alt text](https://user-images.githubusercontent.com/50449265/165299019-36bebe53-e81a-48d8-9f68-78d987b98c21.png)

  * Start EC2 Instance!
  * Stop EC2 Instance 
  * Terminate EC2 Instance

* IAM Services:

  * Create IAM User (Route -> /users/create) 
  
      ![alt text](https://user-images.githubusercontent.com/50449265/165299692-82b79662-1df9-496c-b016-7e171cecff30.png)

  * Show IAM Users  (Route -> /users/get)
  
      ![alt text](https://user-images.githubusercontent.com/50449265/165299741-93adb9e5-6a97-4864-8cfe-967aa7e1f048.png)
    
### Libraries/Frameworks Used

1.  [Node.js](https://nodejs.org/en/)

2.  [Express.js](https://expressjs.com/)

3.  [ReactJS](https://reactjs.org/)

4.  [AWS SDKs](https://aws.amazon.com/tools/)

