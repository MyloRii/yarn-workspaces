pipeline {
    agent none
    stages {
        stage('Build Image') {
            steps {
                script {
                	app = docker.build("mylorii/yarn-workspaces:${env.BUILD_ID}", "--no-cache .")
                }
            }
        }
        stage('Push Image') {
            steps {
                script {
                  docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                    app.push()
                    app.push("latest")
                  }
                }
            }
        }
    }
}