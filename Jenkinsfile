pipeline {

  agent any

  parameters {
    string(name: 'SPEC', defaultValue: "cypress/integration/**/**", description:"Enter the script path that you want to execute")
    choice(name: "BROWSER", choices: ['chrome','edge', 'firefox'], description:"Choice the browser where you want to execute your script")
  }

  options{
    ansiColor('xtermn')
  }

  stages {
    stage('Building') {
      steps {
        echo "Building the application"
      }

      stage('Testing') {
      steps {
        bat "npn i"
        bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }

      stage('Deploying') {
        steps{
          echo "Deploy the application"
        }
        
      }
    }

    post{
      always{
        publishHTML([allowMissing: false, alwaysLinkToLastBuild:false, keepAll: true,reportDir: 'cypress/report', reportFiles:'index.html', reportName:'HTML Report', reportTitles: ''])
      }
    }

  }
}