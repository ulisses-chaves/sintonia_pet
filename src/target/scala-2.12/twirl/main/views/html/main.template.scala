
package views.html

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import java.lang._
import java.util._
import scala.collection.JavaConverters._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import play.data._
import play.core.j.PlayFormsMagicForJava._

object main extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*2.1*/("""<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sintonia Pet</title>
        <link rel="stylesheet" href="public/css/normalize.css">
        <link rel="stylesheet" href="public/css/bootstrap.min.css">
        <link rel="stylesheet" href="public/css/bootstrap.min.css.map">
        <link rel="stylesheet" href="public/css/main.css">
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+HK:300,400,500,700,900&display=swap" rel="stylesheet"> 
        <link rel="shortcut icon" href="""),_display_(/*14.41*/routes/*14.47*/.Assets.versioned("public/img/logo.png")),format.raw/*14.87*/(""" """),format.raw/*14.88*/(""">
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
		
        <script type="module" src="public/js/vue.js"></script>
        <script src="public/js/vue-router.js"></script>
        <script src="public/js/jquery.min.js"></script>
        <script src="public/js/bootstrap.min.js"></script>
        <script type="module" src="main.js"></script>
        <script src="public/js/axios.min.js"></script>
    </body>
</html>"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Sat Jun 15 14:41:39 BRT 2019
                  SOURCE: C:/Users/ramic/Desktop/FreeLancer/SintoniaPet/back/app/views/main.scala.html
                  HASH: b342a4cc4b19c6a181719a1930b7022351ee5de6
                  MATRIX: 1029->2|1752->698|1767->704|1828->744|1857->745
                  LINES: 33->2|45->14|45->14|45->14|45->14
                  -- GENERATED --
              */
          