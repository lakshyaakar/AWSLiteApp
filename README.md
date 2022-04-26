# AWSLite
Configure your AWS Services in more easier and faster way!!!
## Github Link

Link: [Code](https://github.com/lakshyaakar/AWSLiteApp)

## Docker Image Link

Link: [Docker Image(Server)](https://hub.docker.com/repository/docker/lakshyaakar7/awsliteserver)

Link: [Docker Image(Client)](https://hub.docker.com/repository/docker/lakshyaakar7/awsliteclient)

### Built With

Following are the frameworks/libraries that you need to install in your local machine to run the project: 

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [ReactJS](https://reactjs.org/)
* [AWS SDKs](https://aws.amazon.com/tools/)

<!-- GETTING STARTED -->
## Getting Started

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
   

### Services Added in AWSLite

* S3 Services: 
  
  * Create S3 Bucket (/buckets/create)
  * Show S3 Buckets (/buckets/get)
  * Delete S3 Bucket (/buckets/delete)

* EC2 Services:

  * Create EC2 Instance (/instance/create)
  * Show EC2 Instance List (/instance/get)
  * Start EC2 Instance (/instance/start)
  * Stop EC2 Instance (/instance/stop)
  * Terminate EC2 Instance (/instance/terminate)

* IAM Services:

  * Create IAM User (/users/create) 
  * Show IAM Users  (/users/get)


### Running the application

1. Run the server (Node.js) --> Running on 5000 port
   ```
   npm start
   ```

2. Run the Frontend (React) --> Running in 3000 port
   ```
   npm start
   ```
