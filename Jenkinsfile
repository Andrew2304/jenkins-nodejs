pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Andrew2304/jenkins-nodejs.git'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the project
                sh 'npm install'
            }
        }
    }
}
