pipeline {
  agent any

  tools {nodejs "Node19"}

  stages {
    stage('build and test'){
      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}