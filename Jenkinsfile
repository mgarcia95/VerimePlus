pipeline {
  agent any

  tools {nodejs "Node19"}

  stages {
    stage('build and test'){
      steps {
        sh 'npm i'
        sh 'npx cypress run --browser chrome --spec */spec.cy.js '
      }
    }
  }
}