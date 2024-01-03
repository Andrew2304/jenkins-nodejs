pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                // Checkout the source code from the GitHub repository
                git 'https://github.com/Andrew2304/jenkins-nodejs.git'
            }
        }

        // stage('Build') {
        //     steps {
        //         // Install dependencies and build the project
        //         sh 'npm install'
        //         sh 'npm run build'
        //     }
        // }

        // stage('Test') {
        //     steps {
        //         // Run tests
        //         sh 'npm test'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         // Deploy your application (example: push to a server)
        //         // Add deployment steps as needed
        //     }
        // }
    }

    // post {
    //     success {
    //         // Notify when the build is successful
    //         slackSend(color: '#00FF00', message: "Build successful! :thumbsup:")
    //     }
    //     failure {
    //         // Notify when the build fails
    //         slackSend(color: '#FF0000', message: "Build failed! :cry:")
    //     }
    // }
}
