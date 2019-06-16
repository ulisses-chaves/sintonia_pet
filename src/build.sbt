name := """src"""
organization := "com.sintoniapet"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.8"

libraryDependencies += jdbc
libraryDependencies += guice
libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.41"