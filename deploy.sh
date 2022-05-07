#!/bin/bash
rm -r "/c/Program Files/Apache Software Foundation/Tomcat 8.5/webapps/devops_project/"
mkdir "/c/Program Files/Apache Software Foundation/Tomcat 8.5/webapps/devops_project/"
cp -r ./build/* "/c/Program Files/Apache Software Foundation/Tomcat 8.5/webapps/devops_project/"