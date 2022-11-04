pipeline {
  // This pipeline requires the following plugins:
  // * Git: https://plugins.jenkins.io/git/
  // * Workflow Aggregator: https://plugins.jenkins.io/workflow-aggregator/
  // * JUnit: https://plugins.jenkins.io/junit/
  agent 'any'
  stages {
    stage('Checkout') {
      steps {
        script {
            checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'https://github.com/OctopusSamples/junit-cypress-test.git']]])
        }
      }
    }
    stage('Dependencies') {
      steps {
        sh(script: 'npm install')        
      }
    }
    stage('Test') {
      steps {
        sh(script: 'NO_COLOR=1 node_modules/.bin/cypress run || true')          
      }
    }
  }
  post {
    always {
      junit(testResults: 'cypress/results/results.xml', allowEmptyResults : true)
      archiveArtifacts(artifacts: 'cypress/videos/sample_spec.js.mp4', fingerprint: true) 
    }
  }
}