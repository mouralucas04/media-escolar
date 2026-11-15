pipeline {
    agent any

    tools {
        nodejs 'node-26'
    }

    options {
        timestamps()
    }

    stages {
        stage('Build') {
            steps {
                sh 'node --version && npm --version'
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh script: 'npm test', returnStatus: true
            }
            post {
                always {
                    junit 'reports/junit.xml'
                }
            }
        }
    }
}