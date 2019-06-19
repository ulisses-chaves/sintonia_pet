// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/ramic/Desktop/FreeLancer/SintoniaPet/src/conf/routes
// @DATE:Sat Jun 15 20:05:09 BRT 2019

import play.api.mvc.Call


import _root_.controllers.Assets.Asset
import _root_.play.libs.F

// @LINE:7
package controllers {

  // @LINE:11
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:11
    def versioned(file:Asset): Call = {
      implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public"))); _rrc
      Call("GET", _prefix + { _defaultPrefix } + implicitly[play.api.mvc.PathBindable[Asset]].unbind("file", file))
    }
  
  }

  // @LINE:7
  class ReverseUsuarioController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:8
    def getAll(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "usuario")
    }
  
    // @LINE:7
    def login(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "usuario/login")
    }
  
  }


}
