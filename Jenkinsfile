pipeline {
  agent any

  tools {nodejs "Node19"}

  stages {
    stage('build and test'){
      steps {
        sh 'npx cypress open'
      }
    }
  }
}