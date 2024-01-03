pipeline {
    agent any
    tools {
      nodejs '18.14.0'
    }
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Andrew2304/jenkins-nodejs.git'
            }
        }
    }
}
