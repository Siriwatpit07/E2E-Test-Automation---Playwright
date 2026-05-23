pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }
    
    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Test') {
            steps {
                bat 'npx playwright test'
            }
        }

    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**'
        }
    }
}