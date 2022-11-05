pipeline {
  agent any

  tools {nodejs "Node19"}

  options { ansiColor('xterm') }

  parameters{
    choice(name:"BROWSER", choices:['chrome','chromium'],description:"Select the browser where to run")
  }

  stages {
    stage('build and test'){
      //steps {
        //sh 'npm i'
        //sh 'npx cypress run --browser ${BROWSER} --spec **/spec.cy.js '
      //}
      echo 'Building the test'
    }
  }

   post { 
        always { 
            sh 'npm run cleanup && npm run cy_dashboard && npm run merge_reports && npm run mochawesome_report'
        }
    }
}