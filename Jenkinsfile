pipeline {
  agent any

  tools {nodejs "Node19"}

  parameters{
    choice(name:"BROWSER", choices:['chrome','edge'],description:"Select the browser where to run")
  }

  stages {
    stage('build and test'){
      steps {
        sh 'npm i'
        sh 'npx cypress run --browser ${BROWSER} --spec **/spec.cy.js '
      }
    }
  }
}