pipeline {
  agent any

  tools {nodejs "Node19"}

  stages {
    stage('build and test'){
      steps {
        sh 'npm cypress open --browser chrome --spec **/spec.cy.js '
      }
    }
  }
}