// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/ramic/Desktop/FreeLancer/SintoniaPet/src/conf/routes
// @DATE:Sat Jun 15 20:05:09 BRT 2019


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
