// @GENERATOR:play-routes-compiler
// @SOURCE:C:/Users/ramic/Desktop/FreeLancer/SintoniaPet/back/conf/routes
// @DATE:Sat Jun 15 14:41:38 BRT 2019


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
