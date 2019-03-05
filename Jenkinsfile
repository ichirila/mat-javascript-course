pipeline {
  agent any
  triggers { pollSCM('* * * * *') } // poll the source code repo every minute.
  stages {
  stage('Install Dependencies') {
  steps {
  sh "/home/student/.nvm/versions/node/v11.9.0/bin/npm install"
  }
  }
  stage('Start Selenium Server and Run Acceptance Tests') {
  steps {
  sh "START /B /home/student/.nvm/versions/node/v11.9.0/bin/npx webdriver-manager start && /home/student/.nvm/versions/node/v11.9.0/bin/npm test"
  }
  post {
  always {
  publishHTML([
  allowMissing : false,
  alwaysLinkToLastBuild: false,
  keepAll : false,
  reportDir : '.tmp/report',
  reportFiles : 'index.html',
  reportName : 'BDD Report',
  reportTitles : ''])
  }
  }
  }
  }
}