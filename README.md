# Electron-Angular
This project is intended as a frame for Electron applications, with a UI build on Angular.
The only thing that needs to be done to get this up and running is setting your own values for the application like name, description, ..

## Prerequisite
1. Npm must be installed
2. Angular CLI must be installed

## Setup project

1. Setup the "package.json" file. Replace all content between "{{ }}" including "{{}}" with your own values:
    * {{ApplicationName}} = Name of your application
    * {{ApplicationDescription}} = Some description for your application
    * {{AuthorName}} = Name of the publisher/maintainer/author/..
    * {{AuthorEmail}} = Email, some support mail
    * {{AppicationDomain}} = Unique identifier like "com.google.android" for example
    * {{Copyright}} = Copyright for your application
    * {{macApplicationCategory}} = Category for the application when on a Mac, [documentation about all the possible values](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8)
    * {{SomeKeyWords}} = Comma-separated list of keywords referring to your application
    
2. Run "npm install" in root-directory of the application, this to install all required packages.

## Run the application
Just run "npm run electron"
